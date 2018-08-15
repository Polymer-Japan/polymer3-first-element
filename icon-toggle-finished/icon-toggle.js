import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
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
class IconToggle extends GestureEventListeners(PolymerElement) {
  constructor() {
    super();
    Gestures.addListener(this, 'tap', this.toggle.bind(this));
  }
  toggle() {
    this.pressed = !this.pressed;
  }

  static get properties() {
    return {
      toggleIcon: String,
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }
  static get template() {
    return html`
      <style>
        /* local styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>

      <!-- local DOM goes here -->
      <iron-icon icon="[[toggleIcon]]">
      </iron-icon>
    `;
  }
}

window.customElements.define('icon-toggle', IconToggle);
