export type ButtonSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'light' | 'lighter' | 'greyLighter' | 'greyLightest';
export type ButtonShape = 'normal' | 'pill' | 'sharp';
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'text';

export interface ButtonTheme {
  foreground: string;
  background: string;
  hoverForeground: string;
  hoverBackground: string;
}
