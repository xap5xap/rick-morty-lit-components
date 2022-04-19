import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  name = 'Your name here';

  @query('#newitem')
  input!: HTMLInputElement;

  @property()
  listItems: {text: string; completed: boolean}[] = [
    {text: 'Start Lit tutorial', completed: true},
    {text: 'Make to-do list', completed: false},
  ];

  handleClick = () => {
    this.listItems.push({text: this.input.value, completed: false});
    this.input.value = '';
    this.requestUpdate();
  };

  changeName = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  };

  override render() {
    return html`
      <p>Hellow world</p>
      <ul>
        ${this.listItems.map((el) => html`<li>${el.text}</li>`)}
      </ul>
      <button @click=${this.handleClick}>Click me!</button>
      <input
        id="newitem"
        @input=${this.changeName}
        placeholder="Enter your name"
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
