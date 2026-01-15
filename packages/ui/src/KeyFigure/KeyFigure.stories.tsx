/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { KeyFigure, type Props } from "./KeyFigure";

const args = {
  title: "22 000+",
  subtitle: "Tilgjengelige ressurser",
};

export default {
  title: "Components/Key figures",
  component: KeyFigure,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args,
} as Meta<typeof KeyFigure>;

export const Plain = ({ ...args }: Props) => {
  return <KeyFigure {...args} />;
};

export const WithImageAndHTML: StoryObj<typeof KeyFigure> = {
  args: {
    title: "<i>500</i>",
    subtitle: `<span lang="nn">TVERRFAGLEGE</span> RESSURSER`,
    image: {
      alt: "Nøkkeltall tverrfaglig",
      src: "https://api.test.ndla.no/image-api/raw/wMowCjRg.svg",
    },
  },
};

Plain.args = args;
