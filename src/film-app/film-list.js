import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `film-list` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class filmList extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`

        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('film-list', filmList);