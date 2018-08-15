import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

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
        /* local DOM styles go here */
        :host {
          display: inline-block;
        }
      </style>

      <!-- local DOM goes here -->
      <span>Not much here yet.</span>
    `;
  }
}

window.customElements.define('icon-toggle', IconToggle);
