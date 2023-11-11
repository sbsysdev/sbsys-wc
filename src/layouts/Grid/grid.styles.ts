import { css } from 'lit';

export const gridStyles = css`
    :host {
        --sb-auto-sizing: auto-fill;

        --sb-gap: 0.5em;
        --sb-row-gap: var(--sb-gap);
        --sb-col-gap: var(--sb-gap);

        --sb-item-width: 4em;
        --sb-item-min-width: 100%;
        --sb-item-max-width: 1fr;
    }

    :host {
        --sb-grid-template: repeat(
            var(--sb-auto-sizing),
            minmax(min(var(--sb-item-min-width), var(--sb-item-width)), var(--sb-item-max-width))
        );

        display: grid;
        gap: var(--sb-row-gap) var(--sb-col-gap);
    }

    :host([direction='row']) {
        grid-template-rows: var(--sb-grid-template);
    }
    :host([direction='col']) {
        grid-template-columns: var(--sb-grid-template);
    }
`;
