// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class FechaCompletaElement extends LitElement {
  constructor() {
    super();
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
      <!-- template content -->
      <p>Se muestra la fecha completa</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('fecha-completa-element', FechaCompletaElement);
