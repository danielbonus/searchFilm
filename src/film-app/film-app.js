import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './style-element.js';
import './film-content.js';
import './film-description.js';

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
      </style>
     
     
       
      <h2>Buscador de peliculas</h2>  
      <app-location route="{{route}}"></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}"
          tail="{{subroute}}">
        </app-route>
      <iron-pages selected="{{page}}" attr-for-selected="name">
        <film-content name="home" ></film-content>
       <!--  <film-description name="movie" dataFilm="[[dataFilmDescription]]"></film-description> -->
      </iron-pages>
    `;
    }

    static get properties() {
        return {
          route:Object,
          routeData:Object,
          page:String,
          dataFilmDescription:Object
          
        }
    }

     /**
      * Array of strings describing multi-property observer methods and their
      * dependant properties
      */
    static get observers() {
      return [
        'ChangedPageData(routeData.page)'
      ];
    }
    ChangedPageData(page) {
      this.page = page || "home";
    }


  

}

window.customElements.define('film-app', FilmApp);