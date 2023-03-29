import * as chroma from 'chroma-js';
export declare class Color {
    private color;
    private bg;
    static blend: boolean;
    constructor(color: chroma.Color, bg: chroma.Color);
    rgb(): [number, number, number];
    rgba(): [number, number, number, number];
    hex(): string;
    hex(type: 'rgb' | 'rgba' | 'blend'): string;
    preserveAlpha(value: number): Color;
    alpha(value: number): Color;
    fade(value: number): Color;
    darken(value: number): Color;
    brighten(value: number): Color;
}
declare const _default: (bg: string) => (hex: string) => Color;
export default _default;
export declare const alphaBlend: (blend: boolean) => boolean;
