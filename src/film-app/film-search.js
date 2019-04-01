import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-input/iron-input.js';
/**
 * `film-search` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class filmSearch extends PolymerElement {
    static get properties() {
        return {
            value:{
                type:String,
                value:""
            }
        }
    }

    static get template() {
        return html`
            <iron-input>
                <input value="{{value::input}}" placeholder="buscador">
                <paper-button>Flat button</paper-button>
            </iron-input>
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

customElements.define('film-search', filmSearch);