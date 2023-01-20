export const spacingUnit = 26;

export type SpacingNames = 'xxsmall' | 'xsmall' | 'small' | 'nsmall' | 'normal' | 'medium' | 'mediumlarge' | 'large';

const spacing: Record<SpacingNames, string> = {
  xxsmall: `${spacingUnit / 6}px`,
  xsmall: `${spacingUnit / 4}px`,
  small: `${spacingUnit / 2}px`,
  nsmall: `${spacingUnit / 1.5}px`,
  normal: `${spacingUnit}px`,
  medium: `${spacingUnit * 1.25}px`,
  mediumlarge: `${spacingUnit * 1.5}px`,
  large: `${spacingUnit * 2}px`,
};
export default spacing;
