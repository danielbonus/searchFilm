import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import  '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-spinner/paper-spinner.js';
import "../film-app/film-search.js";
import '../film-app/film-list.js';
import "./style-element.js";
/**
 * `film-content` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class filmContent extends PolymerElement {
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
               type:Boolean,
               value:false
            }
        }
    }

    static get template() {
        return html`
                    <style include="style-element">
                    section {
                        display:grid;
                        grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
                        grid-template-rows: repeat(auto-fit, 450px);
                        grid-auto-rows: 450px;
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
                            <film-list title="[[movie.Title]]" id$="[[index]]" portada="[[movie.Poster]]" year="[[movie.Year]]" on-load-description="loadDescription"></film-list>
                            </template>
                        </template>
                    </section>
        `;
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

      loadDescription(e){
          console.log('padre',e.detail);
          this.dispatchEvent(new CustomEvent('load-description',{
            detail: {
                data: {
                    title: e.detail.data.title,
                    portada: e.detail.data.portada,
                    year: e.detail.data.year
                },
                bubbles:true,
                composed:true
            }
    }));
      }

      
     


}

customElements.define('film-content', filmContent);