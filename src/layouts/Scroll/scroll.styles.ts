import { css } from 'lit';

export const scrollStyles = css`
    :host {
        --sb-gap: 1rem;
        --sb-grow: 1;
    }

    :host {
        display: flex;
        gap: var(--sb-gap);
        overflow: hidden;
    }

    :host([grow]) {
        flex-grow: var(--sb-grow);
    }

    :host([to='top']) {
        flex-direction: column-reverse;
        overflow-y: auto;
    }
    :host([to='bottom']) {
        flex-direction: column;
        overflow-y: auto;
    }
    :host([to='left']) {
        flex-direction: row-reverse;
        overflow-x: auto;
    }
    :host([to='right']) {
        flex-direction: row;
        overflow-x: auto;
    }
`;
