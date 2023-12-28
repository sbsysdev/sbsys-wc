// lit
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// types
import { Color, Direction, Intensity, Size, Variant } from '@/types';
// styles
import { panelStyles } from './panel.styles';

@customElement('sb-panel')
export class SBPanel extends LitElement {
    static styles = panelStyles;

    @property({ reflect: true }) direction: Direction;
    @property({ type: Boolean, reflect: true }) grown: boolean;

    @property({ reflect: true }) variant: Variant;
    @property({ reflect: true }) color: Color | '';
    @property({ type: Number, reflect: true }) intensity: Intensity;

    @property({ reflect: true }) size: Size | '';

    constructor() {
        super();

        this.direction = 'top-bottom';
        this.grown = false;

        this.variant = 'text';
        this.color = '';
        this.intensity = 50;

        this.size = '';
    }

    protected render() {
        return html`<slot></slot>`;
    }
}
