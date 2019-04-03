import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import "./style-element.js";
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
            title:String,
            portada :{
                type:String,
                value:'',
                observer: 'getImage' 
            },
            year:String

        }
    }

    getImage(valueNew){
        if(valueNew == "N/A" ){
            let url = window.location.href+'src/assets/default.jpg';
            this.portada = url;
        }
       
       
        
    }
    
    static get template() {
        return html`
        <style include="style-element">
        :host {
          display: block;
          color:var(--color-text-secondary, #000000);
        }
        header {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items: center;
            background-color:var(--color-btn-primary, #D4002E);
            color: var(--color-text-primary, #ffffff);
        }

        header div{
            margin-top:-10px;
            margin-bottom:10px;
        }

        article img {
            width: 100%;
            height: 550px;
        }
       

    
        </style>
                <article>
                    <header> 
                        <h5>[[title]]</h5>
                       <div><iron-icon icon="date-range"></iron-icon><span>[[year]]</span></div>
                    </header>
                        <div class="portada">
                            <img src$="{{portada}}" alt="portada">
                        </div>
                </article>
        `;
    }

 
}

customElements.define('film-list', filmList);