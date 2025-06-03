/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
  base: "light",
  brandTitle: "NDLA Designmanual",
  brandUrl: "https://designmanual.ndla.no",
  brandImage: "/ndla-logo.svg",
  colorSecondary: "#20588f",
});

addons.setConfig({
  theme: theme,
  showPanel: false,
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      "base-styles",
      "components",
      "patterns",
      "other",
      "licenses",
      "my-ndla",
      "production-system",
      "forms",
      "embeds",
    ],
  },
});
