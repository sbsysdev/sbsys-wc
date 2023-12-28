// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { Direction } from '@/types';
// styles
import { scrollStyles } from './scroll.styles';

@customElement('sb-scroll')
export class SBScroll extends LitElement {
    static styles = [scrollStyles];

    @property({ reflect: true }) direction: Direction;
    @property({ type: Boolean, reflect: true }) grown: boolean;

    constructor() {
        super();

        this.direction = 'top-bottom';
        this.grown = false;
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
