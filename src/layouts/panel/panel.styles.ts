// lit
import { css, unsafeCSS } from 'lit';
// types
import { colors, intensities } from '@/types';

const colorPanelStyles = () => {
    const styles = [];

    for (const color of colors) {
        for (const intensity of intensities) {
            styles.push(
                unsafeCSS(`
                :host([color="${color}"][intensity="${intensity}"]) {
                    --sb-panel-bg-color: var(--sb-color-${color}-${intensity});
                    ${intensity > 40 && '--sb-panel-font-color: var(--sb-color-light-30);'}
                }
            `)
            );
        }
    }

    return styles;
};

export const panelStyles = [
    // base styles
    css`
        :host {
            background-color: rgb(var(--sb-panel-bg-color, transparent) / var(--sb-panel-bg-opacity, 1));
            border-color: var(--sb-panel-border-color, currentColor);
            border-radius: var(--sb-panel-border-radius, 0);
            border-style: solid;
            border-width: var(--sb-panel-border-width, 2px);
            color: rgb(var(--sb-panel-font-color, currentColor) / var(--sb-panel-font-opacity, 1));
            display: flex;
        }
        :host([grown]) {
            flex-grow: var(--sb-panel-grown, 1);
        }
    `,
    // color styles
    ...colorPanelStyles(),
];
