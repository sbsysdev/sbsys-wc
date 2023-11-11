// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { AutoSizing, Direction } from '@/types';
// styles
import { gridStyles } from './grid.styles';

@customElement('sb-grid')
export class SBGrid extends LitElement {
    static styles = gridStyles;

    @property({ reflect: true }) direction: Direction;
    @property({ reflect: true }) autoSizing: AutoSizing;

    constructor() {
        super();

        this.direction = 'col';
        this.autoSizing = 'fit';
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
