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
  "backdrop-in": {
    value: "fade-in 250ms {easings.emphasized-in}",
  },
  "backdrop-out": {
    value: "fade-out 200ms {easings.emphasized-out}",
  },
  "dialog-in": {
    value: "fade-in 400ms {easings.emphasized-in}",
  },
  "dialog-out": {
    value: "fade-out 200ms {easings.emphasized-out}",
  },
  "drawer-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}",
  },
  "drawer-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}",
  },
  "drawer-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}",
  },
  "drawer-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}",
  },
  "drawer-in-bottom": {
    value: "slide-in-bottom 400ms {easings.emphasized-in}",
  },
  "drawer-out-bottom": {
    value: "slide-out-bottom 200ms {easings.emphasized-out}",
  },
  "drawer-in-top": {
    value: "slide-in-top 400ms {easings.emphasized-in}",
  },
  "drawer-out-top": {
    value: "slide-out-top 200ms {easings.emphasized-out}",
  },
  "skeleton-pulse": {
    value: "skeleton-pulse 2s {easings.pulse} infinite",
  },
});

export const easings = defineTokens.easings({
  default: { value: "cubic-bezier(0.17, 0.04, 0.03, 0.94)" },
  "emphasized-in": { value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)" },
  "emphasized-out": { value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)" },
  pulse: { value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)" },
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
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  "fade-out": {
    from: { opacity: "1" },
    to: { opacity: "0" },
  },
  "slide-in-left": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-left": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "slide-in-right": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "slide-out-right": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(100%)" },
  },
  "slide-in-top": {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(0%)" },
  },
  "slide-out-top": {
    "0%": { transform: "translateY(0%)" },
    "100%": { transform: "translateY(-100%)" },
  },
  "slide-in-bottom": {
    "0%": { transform: "translateY(100%)" },
    "100%": { transform: "translateY(0%)" },
  },
  "slide-out-bottom": {
    "0%": { transform: "translateY(0%)" },
    "100%": { transform: "translateY(100%)" },
  },
  "skeleton-pulse": {
    "50%": { opacity: "0.5" },
  },
};
