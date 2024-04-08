/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTokens } from "@pandacss/dev";

export default defineTokens.colors({
  brand: {
    primary: { value: "#20588f" },
    secondary: { value: "#507aa4" },
    tertiary: { value: "#a5bcd3" },
    light: { value: "#ceddea" },
    lighter: { value: "#deebf6" },
    lightest: { value: "#F0F6FB" },
    dark: { value: "#184673" },
    accent: { value: "#fde74c" },
    grey: { value: "#777777" },
    greyMedium: { value: "#9b9b9b" },
    greyLight: { value: "#e8e3e3" },
    greyLighter: { value: "#eff0f2" },
    greyLightest: { value: "#f8f8f8" },
    greyDark: { value: "#4d4d4d" },
    neutral7: { value: "#D1D6DB" },
  },
  ndlaFilm: {
    filmColor: { value: "#091a2a" },
    filmColorDark: { value: "#03172B" },
    filmColorBright: { value: "#20588f" },
    filmColorLight: { value: "#0f263b" },
  },
  ndlaToolBox: {
    boxColor: { value: "#e8e3c3" },
  },
  subject: {
    light: { value: "#ceddea" },
    dark: { value: "#184673" },
  },
  subjectMaterial: {
    light: { value: "#dde9d0" },
    dark: { value: "5c6a4f" },
    additional: { value: "rgba(221, 233, 208, 0.4)" },
  },
  sourceMaterial: {
    light: { value: "#dce5e0" },
    dark: { value: "#636e68" },
    additional: { value: "rgba(220,229,224,0.4)" },
  },
  tasksAndActivities: {
    background: { value: "#f8e0c4" },
    light: { value: "#fbeddc" },
    dark: { value: "#c77632" },
    additional: { value: "rgba(251,237,220,0.4)" },
  },
  assessmentResource: {
    background: { value: "#efd5d5" },
    light: { value: "#f5e7e5" },
    dark: { value: "#c0676f" },
    additional: { value: "rgba(245,231,229,0.4)" },
  },
  learningPath: {
    background: { value: "#f2efef" },
    light: { value: "#e8e3e3" },
    dark: { value: "#797979" },
    backgroundAdditional: { value: "rgba(232,227,227,0.4)" },
  },
  concept: {
    light: { value: "#def1ed" },
    dark: { value: "#638b98" },
    text: { value: "#3e5860" },
  },
  external: {
    light: { value: "#e6f3ed" },
    dark: { value: "#4f7d76" },
  },
  text: {
    primary: { value: "#444" },
    light: { value: "#595959" },
  },
  white: { value: "#fff" },
  black: { value: "#272728" },
  markColor: { value: "#da788d" },
  support: {
    red: { value: "#d1372e" },
    redLight: { value: "#f1c3c0" },
    redLightest: { value: "#f8e1df" },
    green: { value: "#5cbc80" },
    greenLight: { value: "#ceead8" },
    greenLightest: { value: "#e6f4eb" },
    yellow: { value: "#ead854" },
    yellowLight: { value: "#f8f3cb" },
    yellowLightest: { value: "#fbf9e5" },
  },

  // These are weird. Not sure if we want to keep them here.
  // link: "inset 0 -1px",
  // linkHover: "none",
  linkVisited: { value: "#444" },
  background: {
    default: { value: "#ffffff" } /* old: EFF0F2 (gray) */,
    dark: { value: "#e6e6e6" },
    darker: { value: "#ccc" },
    backgroundGray: { value: "#f8f8f8" },
    grayDark: { value: "#e4e4e4" },
    lightBlue: { value: "#f7fafd" },
  },
  icon: {
    iconBlue: { value: "#4e51f2" },
  },
});
