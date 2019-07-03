import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from './redux/store';

import './timer/timer-element.js';
import './fechacompleta/fecha-completa-element.js';
import './flecha/flecha-element.js';
import './mes/mes-element.js';

/**
 * @customElement
 * @polymer
 */

class CalendarioApp extends connect(store)(LitElement) {

  static get properties() {
    return {
      fechaSeleccionada: { type: String }
    };
  }

  constructor() {
    super();
    this._fechaSeleccionada = '';
  }

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
      <style>
        :host {
          display: block;
        }
      </style>
      <timer-element></timer-element>
      <fecha-completa-element></fecha-completa-element>
      <flecha-element></flecha-element>
      <mes-element></mes-element>
    `;
  }

}

customElements.define('calendario-app', CalendarioApp);
