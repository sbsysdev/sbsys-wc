// lit
import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sb-calendar')
export class SBCalendar extends LitElement {
    protected render(): TemplateResult {
        return html`<div>Calendar</div>`;
    }
}
