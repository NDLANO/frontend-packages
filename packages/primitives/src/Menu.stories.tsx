/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal } from "@ark-ui/react";
import {
  FileCopyLine,
  CloseLine,
  PencilFill,
  DeleteBinLine,
  ArrowRightShortLine,
  ShareFill,
  SettingsLine,
} from "@ndla/icons";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { Button } from "./Button";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
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
    </Portal>
  </MenuRoot>
);

export const Grouped: StoryFn<typeof MenuRoot> = (args) => (
  <MenuRoot {...args}>
    <MenuTrigger asChild>
      <Button>Open me!</Button>
    </MenuTrigger>
    <Portal>
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
    </Portal>
  </MenuRoot>
);

export const Nested: StoryFn<typeof MenuRoot> = (args) => (
  <MenuRoot {...args}>
    <MenuTrigger asChild>
      <Button>Open me!</Button>
    </MenuTrigger>
    <Portal>
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
          </Portal>
        </MenuRoot>
      </MenuContent>
    </Portal>
  </MenuRoot>
);
