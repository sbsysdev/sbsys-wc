// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { Direction, Size } from 'src/types';
// styles
import { panelStyles } from './panel.styles';

@customElement('sb-panel')
export class SBPanel extends LitElement {
    static styles = [panelStyles];

    @property({ reflect: true }) direction: Direction;
    @property({ type: Boolean, reflect: true }) grown: boolean;

    @property({ reflect: true }) size: Size | '';

    constructor() {
        super();

        this.direction = 'top-bottom';
        this.grown = false;

        this.size = '';
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
