"use strict";
export class CFooterComponent extends HTMLElement {
    constructor() {
        super();
        // this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        var template = `
           <footer>
                <div class="container">
                    <a href="/" class="logo-font">say so</a>
                    <span class="attribution">
                      by: Russ Brooks
                    </span>
                </div>
            </footer>
        `;
        this.innerHTML = template;
    }


}
