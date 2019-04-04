import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import "../film-app/film-description.js";
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
                observer: '_getImage' 
            },
            year:String,
            url: {
                type:String,
                computed: 'computedUrl(title)'
            }

        }
    }

    static get template() {
        return html`
        <style include="style-element">
        :host {
          display: block;
          color:var(--color-text-secondary, #000000);
          
        }

        a{
         text-decoration:none;
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

        article {
            height: 100%;
             width: 100%; 
             transition: all .2s ease-in-out; 
        }

        article header {
            height: 90px;
        }

        article .portada {
            height: 360px;
            
        }
        

        article:hover{
            cursor:pointer;
            transform: scale(1.1);
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
        }
        

        img { 
             height:100%;
             width:100%;
         }

        </style>
                
               
        
                
                <a href="/movie" on-click="customEventDescription">
                    <article>
                        <header> 
                            <h5>[[title]]</h5>
                        <div><iron-icon icon="date-range"></iron-icon><span>[[year]]</span></div>
                        </header>
                            <div class="portada">
                                <img src$="{{portada}}" alt="portada">
                            </div>
                    </article>
                </a>
                
        `;
    }

    _getImage(valueNew){
        if(valueNew == "N/A" ){
            let url = window.location.href+'src/assets/default.jpg'
            this.portada = url
        }
    }

  computedUrl(title){
        let url = title.toString().toLowerCase().replace(/\s+/g, '-')
        return url
    } 

    customEventDescription(){
        this.dispatchEvent(new CustomEvent('load-description',{
                detail: {
                    data: {
                        title: this.title,
                        portada: this.portada,
                        year: this.year
                    },
                    bubbles:true,
                    composed:true
                }
        }));
    }

    

 
}

customElements.define('film-list', filmList);