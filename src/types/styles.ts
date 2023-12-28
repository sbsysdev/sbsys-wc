export const themes = ['light', 'dark'] as const;
export type Theme = (typeof themes)[number];

export const colors = ['default', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger'] as const;
export type Color = (typeof colors)[number];

export const intensities = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95] as const;
export type Intensity = (typeof intensities)[number];

export const variants = ['fill', 'outline', 'underline', 'text'] as const;
export type Variant = (typeof variants)[number];

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Size = (typeof sizes)[number];

export const upSizes = ['2xl', '3xl', '4xl', '5xl', '6xl'] as const;
export type UpSize = (typeof upSizes)[number];

export const downSizes = ['6xs', '5xs', '4xs', '3xs', '2xs'] as const;
export type DownSize = (typeof downSizes)[number];

export const weights = [
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
] as const;
export type Weight = (typeof weights)[number];

export const fontFamilies = ['main', 'number'] as const;
export type FontFamily = (typeof fontFamilies)[number];

export const alignments = ['start', 'center', 'end'] as const;
export type Alignment = (typeof alignments)[number];

export const sizing = ['fill', 'fit'] as const;
export type Sizing = (typeof sizing)[number];

export const directions = ['left-right', 'right-left', 'top-bottom', 'bottom-top'] as const;
export type Direction = (typeof directions)[number];

export const positions = ['top', 'bottom', 'left', 'right'] as const;
export type Position = (typeof positions)[number];
