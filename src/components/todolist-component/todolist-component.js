import { LitElement, html, css } from 'lit';
import { todolistStyle } from './todolist-component-style';

export class TodolistComponent extends LitElement {
    static styles = [
        todolistStyle,
    ];

    render() {
        return html`
            <h1>Hello world</h1>
        `;
    }
}
customElements.define('todolist-component', TodolistComponent);
