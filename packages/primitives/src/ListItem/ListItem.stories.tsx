/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { Pencil, TrashCanOutline } from "@ndla/icons/action";
import { Share } from "@ndla/icons/common";
import { HorizontalMenu } from "@ndla/icons/contentType";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import { ListItemContent, ListItemHeading, ListItemImage, ListItemRoot } from "./ListItem";
import { Badge } from "../Badge";
import { IconButton } from "../Button";
import { MenuContent, MenuItem, MenuPositioner, MenuRoot, MenuTrigger } from "../Menu";
import { Text } from "../Text";

export default {
  title: "Primitives/ListItem",
  component: ListItemRoot,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
} satisfies Meta<typeof ListItemRoot>;

export const Standalone: StoryFn<typeof ListItemRoot> = (args) => (
  <ListItemRoot {...args}>
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" height={40} />
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
);

export const WithDescription: StoryFn<typeof ListItemRoot> = (args) => (
  <ListItemRoot {...args}>
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" height={40} />
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

const ListComponent = () => (
  <ListItemRoot variant="list">
    <ListItemImage src="https://api.staging.ndla.no/image-api/raw/Ide.jpg" alt="En lyspære" height={40} />
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
              <HorizontalMenu />
            </IconButton>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value="edit">
                <Pencil />
                Rediger
              </MenuItem>
              <MenuItem value="delete" variant="destructive">
                <TrashCanOutline />
                Slett
              </MenuItem>
              <MenuItem value="share">
                <Share />
                Del
              </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      </styled.div>
    </ListItemContent>
  </ListItemRoot>
);

export const List: StoryFn<typeof ListComponent> = () => (
  <ul>
    <li>
      <ListComponent />
    </li>
    <li>
      <ListComponent />
    </li>
    <li>
      <ListComponent />
    </li>
  </ul>
);
