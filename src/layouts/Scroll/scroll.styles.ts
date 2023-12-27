// lit
import { css } from 'lit';

export const scrollStyles = css`
    :host {
        display: flex;
        overflow: hidden;
    }

    :host([grown]) {
        flex-grow: var(--sb-grown, 1);
    }

    :host([direction='top-bottom']) {
        flex-direction: column;
        overflow-y: auto;
    }
    :host([direction='bottom-top']) {
        flex-direction: column-reverse;
        overflow-y: auto;
    }
    :host([direction='left-right']) {
        flex-direction: row;
        overflow-x: auto;
    }
    :host([direction='right-left']) {
        flex-direction: row-reverse;
        overflow-x: auto;
    }
`;
