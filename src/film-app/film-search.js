import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import "./style-element.js";
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
            <style include="style-element">
               iron-input{
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top:20px;
               }

               iron-input input{
                   width:70%;   
               }

               iron-input input::placeholder{
                   font-size:1rem;
                   padding-left:5px;
               }

              
               paper-button{
                --paper-button :{
                    background-color:var(--color-btn-primary);
                
                }
               }


            </style>
            <iron-input>
                <input on-keypress="searchFilm" value="{{value::input}}" placeholder="Buscar Película...">
                <paper-button on-click="searchFilm">Buscar</paper-button>
            </iron-input>
        `;
    }


    searchFilm(e){
       
        if((e.type == 'keypress' && e.charCode == 13) || e.type == 'click'){
            let event = new CustomEvent('load-film', {
                detail:{
                    value:this.value
                },
                bubbles:true,
                composed:true
            })
    
            this.dispatchEvent(event) 
        }
      
    }
    
}

customElements.define('film-search', filmSearch);