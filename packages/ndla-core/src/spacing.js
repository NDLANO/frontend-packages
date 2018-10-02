const spacingUnit = 26;
const spacingUnits = {
  xsmall: spacingUnit / 4,
  small: spacingUnit / 2,
  normal: spacingUnit,
  medium: spacingUnit * 1.25,
  large: spacingUnit * 2,
};

export default {
  xsmall: `${spacingUnit / 4}px`,
  small: `${spacingUnit / 2}px`,
  normal: `${spacingUnit}px`,
  medium: `${spacingUnit * 1.25}px`,
  large: `${spacingUnit * 2}px`,
  units: spacingUnits,
};
