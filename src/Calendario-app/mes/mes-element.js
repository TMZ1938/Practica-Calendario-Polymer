// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import './flecha/flecha-element.js';
import './dia/dia-element.js';

// Extend the LitElement base class
class MesElement extends LitElement {
   static get styles() {
    return css`
    :host {
      display: grid;
    }`;
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
      <!--p>Se muestra el mes</p>
      <flecha-element></flecha-element-->
      <dia-element day="1"></dia-element>
      <dia-element day="2"></dia-element>
      <dia-element day="3"></dia-element>
      <dia-element day="4"></dia-element>
      <dia-element day="5"></dia-element>
      <dia-element day="6"></dia-element>
      <dia-element day="7"></dia-element>
      <dia-element day="8"></dia-element>
    `;
  }
}
// Register the new element with the browser.
customElements.define('mes-element', MesElement);