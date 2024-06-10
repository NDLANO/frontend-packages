/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export const animations = defineTokens.animations({
  spin: {
    value: "spin 700ms infinite linear",
  },
  "collapse-in": {
    value: "collapse-in 250ms {easings.emphasized-in}",
  },
  "collapse-out": {
    value: "collapse-out 200ms {easings.emphasized-out}",
  },
  "fade-shift-in": {
    value: "fade-shift-in 200ms {easings.emphasized-in}",
  },
  "fade-shift-out": {
    value: "fade-shift-in 200ms {easings.emphasized-in}",
  },
});

export const easings = defineTokens.easings({
  default: { value: "cubic-bezier(0.17, 0.04, 0.03, 0.94)" },
  "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)" },
  "emphasized-out": { value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)" },
});

export const durations = defineTokens.durations({
  superFast: { value: "100ms" },
  fast: { value: "200ms" },
  normal: { value: "400ms" },
  slow: { value: "600ms" },
  infinite: { value: "infinite" },
});

export const keyframes = {
  spin: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  "fade-shift-in": {
    "0%": { opacity: "0", transform: "translateY(-4px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-shift-out": {
    "0%": { opacity: "1", transform: "translateY(0)" },
    "100%": { opacity: "0", transform: "translateY(-4px)" },
  },
  "collapse-in": {
    "0%": { height: "0" },
    "100%": { height: "var(--height)" },
  },
  "collapse-out": {
    "0%": { height: "var(--height)" },
    "100%": { height: "0" },
  },
};
