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
      grid-template-columns: repeat(7, 50px );
      grid-template-rows: repeat(6, 50px );


    }`;
  }

  constructor() {
    super();
    this.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
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
      ${ this.days.map(i => html`<dia-element day="${i}"></dia-element>`) }
    `;
  }
}
// Register the new element with the browser.
customElements.define('mes-element', MesElement);
