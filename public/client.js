class StreamRenderFragment extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        setTimeout(() => {
            const template = this.querySelector('template');
            const appElement = document.getElementById('app');
            appElement.innerHTML = template.innerHTML;
        }, 0);
    }
}
customElements.define('stream-render-fragment', StreamRenderFragment);