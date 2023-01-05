import { colors } from '@ndla/core';
import { ButtonColor, ButtonTheme } from './types';

export const themes: Record<ButtonColor, ButtonTheme> = {
  primary: {
    foreground: colors.white,
    background: colors.brand.primary,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.dark,
  },
  light: {
    foreground: colors.brand.primary,
    background: colors.brand.light,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.dark,
  },
  lighter: {
    foreground: colors.brand.primary,
    background: colors.brand.lighter,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  greyLighter: {
    foreground: colors.brand.primary,
    background: colors.brand.greyLighter,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  greyLightest: {
    foreground: colors.brand.primary,
    background: colors.brand.greyLightest,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  danger: {
    foreground: colors.white,
    background: colors.support.red,
    hoverForeground: colors.white,
    hoverBackground: colors.support.red,
  },
  darker: {
    foreground: colors.white,
    background: colors.brand.dark,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.dark,
  },
};
