import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "NDLA Designmanual",
  brandUrl: "https://designmanual.ndla.sh",
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
