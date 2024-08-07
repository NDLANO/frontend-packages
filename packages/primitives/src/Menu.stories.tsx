/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Portal } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { FileCopyLine, CloseLine, PencilFill, DeleteBinLine } from "@ndla/icons/action";
import { ArrowRightShortLine, ShareFill } from "@ndla/icons/common";
import { SettingsLine } from "@ndla/icons/editor";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { Button } from "./Button";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "./Menu";

export default {
  title: "Primitives/Menu",
  tags: ["autodocs"],
  component: MenuRoot,
  parameters: {
    inlineStories: true,
  },
  args: {
    positioning: { placement: "bottom" },
  },
} as Meta<typeof MenuRoot>;

export const Default: StoryFn<typeof MenuRoot> = (args) => (
  <MenuRoot {...args}>
    <MenuTrigger asChild>
      <Button>Open me!</Button>
    </MenuTrigger>
    <Portal>
      <MenuPositioner>
        <MenuContent>
          <MenuItem value="edit">
            <PencilFill />
            Rediger
          </MenuItem>
          <MenuItem value="share">
            <ShareFill />
            Del
          </MenuItem>
          <MenuItem value="goToShared" asChild>
            <styled.a href="https://ndla.no">
              <ShareFill />
              Gå til delt mappe
            </styled.a>
          </MenuItem>
          <MenuItem value="copyLink" disabled>
            <FileCopyLine />
            Kopier lenke til mappen
          </MenuItem>
          <MenuItem value="stopSharing">
            <CloseLine />
            Avslutt deling
          </MenuItem>
          <MenuItem value="delete" variant="destructive">
            <DeleteBinLine />
            Slett
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </Portal>
  </MenuRoot>
);

export const Grouped: StoryFn<typeof MenuRoot> = (args) => (
  <MenuRoot {...args}>
    <MenuTrigger asChild>
      <Button>Open me!</Button>
    </MenuTrigger>
    <Portal>
      <MenuPositioner>
        <MenuContent>
          <MenuItemGroup>
            <MenuItemGroupLabel>Mappehandlinger</MenuItemGroupLabel>
            <MenuItem value="edit">
              <PencilFill />
              Rediger
            </MenuItem>
            <MenuItem value="share">
              <ShareFill />
              Del
            </MenuItem>
            <MenuItem value="delete" variant="destructive">
              <DeleteBinLine />
              Slett
            </MenuItem>
            <MenuItem value="stopSharing">
              <CloseLine />
              Avslutt deling
            </MenuItem>
          </MenuItemGroup>
          <MenuItemGroup>
            <MenuItemGroupLabel>Handlinger</MenuItemGroupLabel>
            <MenuItem value="goToShared">
              <ShareFill />
              Gå til delt mappe
            </MenuItem>
            <MenuItem value="copyLink">
              <FileCopyLine />
              Kopier lenke til mappen
            </MenuItem>
          </MenuItemGroup>
        </MenuContent>
      </MenuPositioner>
    </Portal>
  </MenuRoot>
);

export const Nested: StoryFn<typeof MenuRoot> = (args) => (
  <MenuRoot {...args}>
    <MenuTrigger asChild>
      <Button>Open me!</Button>
    </MenuTrigger>
    <Portal>
      <MenuPositioner>
        <MenuContent>
          <MenuItemGroup>
            <MenuItemGroupLabel>Handlinger</MenuItemGroupLabel>
            <MenuItem value="goToShared">
              <ShareFill />
              Gå til delt mappe
            </MenuItem>
            <MenuItem value="copyLink">
              <FileCopyLine />
              Kopier lenke til mappen
            </MenuItem>
          </MenuItemGroup>
          <MenuRoot>
            <MenuTriggerItem css={{ justifyContent: "space-between" }}>
              <HStack gap="3xsmall">
                <SettingsLine />
                Mappehandlinger
              </HStack>
              <ArrowRightShortLine />
            </MenuTriggerItem>
            <Portal>
              <MenuPositioner>
                <MenuContent>
                  <MenuItemGroup>
                    <MenuItemGroupLabel>Mappehandlinger</MenuItemGroupLabel>
                    <MenuItem value="edit">
                      <PencilFill />
                      Rediger
                    </MenuItem>
                    <MenuItem value="share">
                      <ShareFill />
                      Del
                    </MenuItem>
                    <MenuItem value="delete" variant="destructive">
                      <DeleteBinLine />
                      Slett
                    </MenuItem>
                    <MenuItem value="stopSharing">
                      <CloseLine />
                      Avslutt deling
                    </MenuItem>
                  </MenuItemGroup>
                </MenuContent>
              </MenuPositioner>
            </Portal>
          </MenuRoot>
        </MenuContent>
      </MenuPositioner>
    </Portal>
  </MenuRoot>
);
