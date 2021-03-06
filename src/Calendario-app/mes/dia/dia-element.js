// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class DiaElement extends LitElement {

  static get properties() {
    return {
      day: {type: String}
    };
  }

  constructor() {
    super();
    this._day = '';
  }

  static get styles() {
    return css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      text-align: center;

      width: 50px;
      padding: 15px;
    }

    :hover {
      padding: 13px ;
      border: 2px solid grey;
    }

    :active {
      border: 2px solid blue;
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
      <div>${this.day}</div>
    `;
  }


}
// Register the new element with the browser.
customElements.define('dia-element', DiaElement);
