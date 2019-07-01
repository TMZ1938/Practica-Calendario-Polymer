// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import './flecha/flecha-element.js';
import './dia/dia-element.js';

// Extend the LitElement base class
class MesElement extends LitElement {

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
      <p>Se muestra el mes</p>
      <flecha-element></flecha-element>
      <dia-element></dia-element>
    `;
  }
}
// Register the new element with the browser.
customElements.define('mes-element', MesElement);