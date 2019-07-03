// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

import { ServiceApi } from '../services/service-api';

// Extend the LitElement base class
class FechaCompletaElement extends connect(store)(LitElement) {

  static get properties() {
    return {
      literalMesActual: { type: String },
      literalAnioActual: { type: String },
    };
  }

  constructor() {
    super();    
  }

  stateChanged(state) {
    console.log('statechanged FechaCompletaElement', state);
    this.literalMesActual = ServiceApi.getLiteralMesDesdeFecha(state.fechaCompleta);
    this.literalAnioActual = ServiceApi.getLiteralAnioDesdeFecha(state.fechaCompleta);
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
      <h1>${this.literalMesActual} de ${this.literalAnioActual}</h1>      
    `;
  }
}
// Register the new element with the browser.
customElements.define('fecha-completa-element', FechaCompletaElement);
