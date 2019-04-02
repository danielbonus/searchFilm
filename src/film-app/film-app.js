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
      <iron-ajax></iron-ajax>
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'film-app'
            }
        };
    }

    loadFilm(e){
      console.log(e);
    }
   
}

window.customElements.define('film-app', FilmApp);