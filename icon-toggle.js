import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `icon-toggle`
 * Get started creating custom elements with Polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'icon-toggle',
      },
    };
  }
}

window.customElements.define('icon-toggle', IconToggle);
