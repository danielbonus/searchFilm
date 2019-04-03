import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import  '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-spinner/paper-spinner.js';

import "./style-element.js";
import '@polymer/iron-ajax/iron-ajax.js';
import "../film-app/film-search.js";
import '../film-app/film-list.js';
/**
 * @customElement
 * @polymer
 */
class FilmApp extends PolymerElement {
    static get template() {
        return html `
      <style include="style-element">
        :host {
          display: block;
          
        }
        h2 {
            background-color: var(--color-primary);
            margin:0;
            padding: 1rem;
          }

        section {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
          grid-auto-rows:repeat(auto-fit, minmax(444));
          grid-gap:.5rem;
          padding: 2rem;
          margin: 0 auto;
          width: 80%;
        }

        film-list {
          box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
          height: 100%;
        }

        paper-spinner {
          position: relative;
          left: 50%;
        } 
       
       
      </style>
      <h2>Buscador de peliculas</h2>  
      <iron-ajax
          id="ironAjax"
          url=""
          handle-as="json"
          debounce-duration="300"
          loading="{{load}}"
          >
      </iron-ajax>
      <film-search on-load-film="loadFilm"></film-search>
      <paper-spinner active="{{load}}"></paper-spinner>
      <section>
      
        <template is="dom-if" if="[[response]]">
            <template is="dom-repeat" items="{{data}}" as="movie" >
              <film-list title="[[movie.Title]]" id$="[[index]]" portada="[[movie.Poster]]" year="[[movie.Year]]"></film-list>
            </template>
        </template>
      </section>
    
    `;
    }

    static get properties() {
        return {
           valueSearch:String,
           data:Object,
           response:{
             type:Boolean,
             value: false
           },
           totalResults:String,
           error: String,
           load:{
             type:false,
             value:false
           }
        }
    }

  

    loadFilm(e){
      this.valueSearch = e.detail.value
      const url = `http://www.omdbapi.com/?s=${this.valueSearch}&apikey=e477ed6a`
      const ironAjax = this.$.ironAjax
      ironAjax.url= url
      ironAjax.generateRequest().completes
        .then(request =>{
              console.log(request.response)
              this.response = (request.response.Response == "True")
              if(this.response){
                this.data = request.response.Search
                console.log(this.data);
                this.totalResults = request.response.totalResults
              }else{
                  this.error = request.response.Error
              }
        })
    }
   
}

window.customElements.define('film-app', FilmApp);