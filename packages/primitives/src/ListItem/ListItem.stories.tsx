/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { PencilFill, DeleteBinLine, ShareLine, MoreLine } from "@ndla/icons";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import { Badge } from "../Badge";
import { IconButton } from "../Button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../Menu";
import { Text } from "../Text";
import { ListItemContent, ListItemHeading, ListItemImage, ListItemRoot, type ListItemProps } from "./ListItem";

export default {
  title: "Primitives/ListItem",
  component: ListItemRoot,
  tags: ["autodocs"],
  args: { nonInteractive: false },
  parameters: {
    inlineStories: true,
  },
  render: (args) => (
    <ListItemRoot {...args}>
      <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" />
      <ListItemContent>
        <ListItemHeading asChild consumeCss>
          <h2>
            <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
              Tittel
            </SafeLink>
          </h2>
        </ListItemHeading>
        <Badge colorTheme="brand1">Fagstoff</Badge>
      </ListItemContent>
    </ListItemRoot>
  ),
} satisfies Meta<typeof ListItemRoot>;

export const Standalone: StoryObj<typeof ListItemRoot> = {};

export const NonInteractive: StoryFn<typeof ListItemRoot> = () => (
  <ListItemRoot nonInteractive>
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" />
    <ListItemContent>
      <ListItemHeading>Tittel</ListItemHeading>
      <Badge colorTheme="brand1">Fagstoff</Badge>
    </ListItemContent>
  </ListItemRoot>
);

export const WithDescription: StoryFn<typeof ListItemRoot> = (args) => (
  <ListItemRoot {...args}>
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" />
    <ListItemContent>
      <styled.div css={{ display: "flex", flexDirection: "column", gap: "4xsmall" }}>
        <ListItemHeading asChild consumeCss>
          <h2>
            <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
              Tittel
            </SafeLink>
          </h2>
        </ListItemHeading>
        <Text>
          En metabeskrivelse forteller litt om innholdet til kortet. Dette kortet handler for eksempel om absolutt
          ingenting.
        </Text>
      </styled.div>
      <Badge colorTheme="brand1">Fagstoff</Badge>
    </ListItemContent>
  </ListItemRoot>
);

const ListComponent = (props: ListItemProps) => (
  <ListItemRoot {...props}>
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" />
    <ListItemContent>
      <ListItemHeading asChild consumeCss>
        <h2>
          <SafeLink to="#example" unstyled css={linkOverlay.raw()}>
            Tittel
          </SafeLink>
        </h2>
      </ListItemHeading>
      <styled.div css={{ display: "flex", gap: "xsmall", alignItems: "center" }}>
        <Badge colorTheme="brand1">Fagstoff</Badge>
        <MenuRoot>
          <MenuTrigger css={{ position: "relative" }} asChild>
            <IconButton variant="tertiary">
              <MoreLine />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="edit">
              <PencilFill />
              Rediger
            </MenuItem>
            <MenuItem value="delete" variant="destructive">
              <DeleteBinLine />
              Slett
            </MenuItem>
            <MenuItem value="share">
              <ShareLine />
              Del
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </styled.div>
    </ListItemContent>
  </ListItemRoot>
);

const StyledList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

export const List: StoryFn<typeof ListComponent> = () => (
  <StyledList>
    <li>
      <ListComponent />
    </li>
    <li>
      <ListComponent />
    </li>
    <li>
      <ListComponent />
    </li>
  </StyledList>
);
