import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './dia-element.js';
/**
 * @customElement
 * @polymer
 */
class PracticaCalendarioApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <dia-element></dia-element>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'calendario-app'
      }
    };
  }
}

window.customElements.define('calendario-app', PracticaCalendarioApp);
