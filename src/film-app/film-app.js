import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "./style-element.js";
import '@polymer/iron-ajax/iron-ajax.js';
import "../film-app/film-search.js";
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
        h2{
            background-color: var(--color-primary);
            margin:0;
            padding: 1rem;
          }
       
      </style>
      <h2>Buscador de peliculas</h2>  
      <film-search on-load-film="loadFilm"></film-search>
      <iron-ajax
          id="ironAjax"
          url=""
          handle-as="json"
          last-response="{{dataFilms}}"
          debounce-duration="300">
      </iron-ajax>      
    `;
    }

    static get properties() {
        return {
           valueSearch:String,
           dataFilms:Object,
           response:String,
           totalResults:String
        };
    }

    loadFilm(e){
      this.valueSearch = e.detail.value
      const url = `http://www.omdbapi.com/?s=${this.valueSearch}&apikey=e477ed6a`
      const ironAjax = this.$.ironAjax
      ironAjax.url= url
      ironAjax.generateRequest().completes
        .then(request=>{
          console.log(this.dataFilms);
          this.dataFilms = this.dataFilms.Search
          this.response = this.dataFilms.Response
          this.totalResults = this.dataFilms.totalResults
          console.log(this.dataFilms);
        })
    }
   
}

window.customElements.define('film-app', FilmApp);