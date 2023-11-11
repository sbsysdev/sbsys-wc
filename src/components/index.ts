import { SBCalendar } from './calendar';

declare global {
    interface HTMLElementTagNameMap {
        'sb-calendar': SBCalendar;
    }
}

export { SBCalendar };
