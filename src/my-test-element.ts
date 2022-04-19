import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-test-element')
export class MyTestElement extends LitElement {
  @property()
  version = 'STARTING';

  override render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-test-element': MyTestElement;
  }
}
