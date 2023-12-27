// lit
import { css } from 'lit';

export const panelStyles = css`
    :host {
        display: flex;
    }

    :host([grown]) {
        flex-grow: var(--sb-grown, 1);
    }

    :host([direction='top-bottom']) {
        flex-direction: column;
    }
    :host([direction='bottom-top']) {
        flex-direction: column-reverse;
    }
    :host([direction='left-right']) {
        flex-direction: row;
    }
    :host([direction='right-left']) {
        flex-direction: row-reverse;
    }

    :host([size='xs']) {
        padding: var(--sb-xs-padding, 0.25rem);
    }
    :host([size='sm']) {
        padding: var(--sb-sm-padding, 0.5rem);
    }
    :host([size='md']) {
        padding: var(--sb-md-padding, 0.75rem);
    }
    :host([size='lg']) {
        padding: var(--sb-lg-padding, 1rem);
    }
    :host([size='xl']) {
        padding: var(--sb-xl-padding, 1.5rem);
    }
    :host([size='2xl']) {
        padding: var(--sb-xl-padding, 2rem);
    }
`;
