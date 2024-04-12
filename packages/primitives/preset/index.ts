/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { definePreset } from "@pandacss/dev";
import { animations, durations, easings } from "./animations";
import boxShadows from "./boxShadows";
import { breakpoints } from "./breakpoints";
import colors from "./colors";
import { conditions } from "./conditions";
import radii from "./radii";
import { button } from "./recipes/button.recipe";
import { iconButton } from "./recipes/iconButton.recipe";
import { semanticTokens } from "./semanticTokens";
import spacing from "./spacing";
import { fontWeights, textStyles, fonts, fontSizes, lineHeights } from "./typography";

export const preset = definePreset({
  conditions: conditions,
  theme: {
    breakpoints: breakpoints,
    textStyles: textStyles,
    tokens: {
      colors: colors,
      easings: easings,
      durations: durations,
      radii: radii,
      spacing: spacing,
      sizes: spacing,
      lineHeights: lineHeights,
      fontWeights: fontWeights,
      fontSizes: fontSizes,
      fonts: fonts,
      animations: animations,
      shadows: boxShadows,
    },
    semanticTokens: semanticTokens,
    recipes: {
      button: button,
      iconButton: iconButton,
    },
  },
});
