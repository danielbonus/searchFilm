import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `film-description` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class filmDescription extends PolymerElement {
    static get properties() {
        return {
            dataFilm:Object
        }
    }

    static get template() {
        return html`

                <style>
                :host {
                    display: block;
                    color: black;
                }
                h3 {
                    color:black;
                }
                </style>
            <h3>[[dataFilm.title]]</h3>
        `;
    }

}

customElements.define('film-description', filmDescription);