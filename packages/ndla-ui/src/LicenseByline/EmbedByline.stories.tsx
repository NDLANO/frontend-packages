/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn } from "@storybook/react";
import { IconButtonV2 } from "@ndla/button";
import { breakpoints, mq, spacing } from "@ndla/core";
import { HeartOutline } from "@ndla/icons/action";
import { Switch } from "@ndla/switch";
import EmbedByline from "./EmbedByline";

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  ${mq.range({ until: breakpoints.tablet })} {
    flex: 1;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;
  }
`;

export default {
  title: "Components/EmbedByline",
  component: EmbedByline,
  tags: ["autodocs"],
  args: {
    topRounded: true,
    bottomRounded: true,
    visibleAlt: "Synlig alt-tekst kan legges her, eller fjernes helt",
    type: "image",
    children: (
      <ButtonWrapper>
        <Switch checked={false} label="Bytt til synstolket video" onChange={() => {}} id="switch" />
        <IconButtonV2 variant="ghost" aria-label="Legg til i favoritter">
          <HeartOutline />
        </IconButtonV2>
      </ButtonWrapper>
    ),
    description:
      "Bildetekst som kan være ganske lang. Denne roboten er laget av DALLE2, en helt vaskeekte AI. Hvis denne teksten blir veldig lang kommer den på flere linjer.",
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      origin: "http://floradania.dk/forside/",
      creators: [],
      processors: [],
      rightsholders: [
        {
          type: "Supplier",
          name: "Floradania",
        },
      ],
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof EmbedByline>;

export const EmbedBylineStory: StoryFn<typeof EmbedByline> = (args) => {
  const { children, ...rest } = args;
  return <EmbedByline {...rest}>{children}</EmbedByline>;
};

EmbedBylineStory.storyName = "EmbedByline";
