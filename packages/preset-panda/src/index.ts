/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { breakpoints } from "@ndla/core";
import { definePreset } from "@pandacss/dev";
import { animations, durations, easings, keyframes } from "./animations";
import { boxShadows } from "./boxShadows";
import { colors } from "./colors";
import { conditions } from "./conditions";
import { globalCss } from "./globalCss";
import { radii } from "./radii";
import { semanticTokens } from "./semanticTokens";
import { spacing } from "./spacing";
import { fontWeights, textStyles, fonts, fontSizes, lineHeights } from "./typography";
import { zIndex } from "./zIndex";

const preset = definePreset({
  name: "ndla/panda",
  globalCss: globalCss,
  conditions: conditions,
  theme: {
    breakpoints: breakpoints,
    textStyles: textStyles,
    keyframes: keyframes,
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
      zIndex: zIndex,
    },
    semanticTokens: semanticTokens,
    containerSizes: breakpoints,
  },
});

export { forwardCssPropPlugin } from "./plugins/forwardCssPropPlugin";

export default preset;
