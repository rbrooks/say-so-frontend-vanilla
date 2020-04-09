
export class CBannerComponent extends HTMLElement {
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
        this.innerHTML = `
            <div class="banner">
                <div class="container">
                    <img src="/img/logo-sayso.png" width="205" height="93">
                </div>
            </div>
        `;
    }
}
