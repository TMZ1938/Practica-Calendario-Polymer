import { LitElement, html } from 'lit-element';
import './timer/timer-element.js';
import './fechacompleta/fecha-completa-element.js';
import './mes/mes-element.js';

/**
 * @customElement
 * @polymer
 */

class CalendarioApp extends LitElement {

  static get properties() {
    return {
      date: { type: String }
    };
  }

  constructor() {
    super();
    this._date = '';
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
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>${this.date}</h1>
      <timer-element></timer-element>
      <fecha-completa-element></fecha-completa-element>
      <mes-element></mes-element>
    `;
  }

}

customElements.define('calendario-app', CalendarioApp);
