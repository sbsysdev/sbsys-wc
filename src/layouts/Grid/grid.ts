// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { Direction } from '@/types';
// styles
import { gridStyles } from './grid.styles';

@customElement('sb-grid')
export class SBGrid extends LitElement {
    static styles = gridStyles;

    @property({ reflect: true }) direction: Direction;

    constructor() {
        super();

        this.direction = 'col';
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
