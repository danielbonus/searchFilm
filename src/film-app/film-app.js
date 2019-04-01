import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-ajax/iron-ajax.js';
import "./film-search";
/**
 * @customElement
 * @polymer
 */
class FilmApp extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          display: block;
        }
      </style>
      <header>
        <h1>Buscador de peliculas v2</h1>
      </header>
      <film-search></film-search>
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
}

window.customElements.define('film-app', FilmApp);