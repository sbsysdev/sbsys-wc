import { css } from 'lit';

export const gridStyles = css`
    :host {
        --sb-gap: 1rem;

        --sb-item-width: 8rem;
        --sb-item-min-width: 100%;
        --sb-item-max-width: 1fr;
    }

    :host {
        --sb-grid-template: repeat(
            var(--sb-auto-sizing),
            minmax(min(var(--sb-item-min-width), var(--sb-item-width)), var(--sb-item-max-width))
        );

        display: grid;
        gap: var(--sb-gap);
    }

    :host([autosizing='fill']) {
        --sb-auto-sizing: auto-fill;
    }
    :host([autosizing='fit']) {
        --sb-auto-sizing: auto-fit;
    }

    :host([direction='row']) {
        grid-template-rows: var(--sb-grid-template);
    }
    :host([direction='col']) {
        grid-template-columns: var(--sb-grid-template);
    }
`;
