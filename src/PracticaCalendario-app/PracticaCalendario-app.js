import { LitElement, html } from 'lit-element';
import './dia-element.js';
import './timer-element.js';
import './fecha-completa-element.js';
import './flecha-element.js';

/**
 * @customElement
 * @polymer
 */

class PracticaCalendarioApp extends LitElement {

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
      <style>
        :host {
          display: block;
          color:red;
        }
      </style>
      <timer-element></timer-element>
      <dia-element></dia-element>
      <flecha-element></flecha-element>
      <fecha-completa-element></fecha-completa-element>
    `;
  }

}

customElements.define('calendario-app', PracticaCalendarioApp);
