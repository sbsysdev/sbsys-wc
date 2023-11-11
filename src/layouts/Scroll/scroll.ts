// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { Position } from 'src/types';
// styles
import { scrollStyles } from './scroll.styles';

@customElement('sb-scroll')
export class SBScroll extends LitElement {
    static styles = scrollStyles;

    @property({ reflect: true }) to: Position;
    @property({ type: Boolean, reflect: true }) grow: boolean;

    constructor() {
        super();
        this.to = 'bottom';
        this.grow = false;
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
