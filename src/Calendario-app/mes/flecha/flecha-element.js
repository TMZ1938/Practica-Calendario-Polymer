// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { mesSiguiente, mesPrevio } from '../../redux/actions/actions'

// Extend the LitElement base class
class FlechaElement extends LitElement {

  mesSiguiente() {
    store.dispatch(incrementarContador());
  }
  mesPrevio() {
    store.dispatch(decrementarContador());
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
    <hr>
    <button @click="${this.mesSiguiente}">Subir Mes</button>
    <button @click="${this.mesPrevio}">Bajar Mes</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('flecha-element', FlechaElement);