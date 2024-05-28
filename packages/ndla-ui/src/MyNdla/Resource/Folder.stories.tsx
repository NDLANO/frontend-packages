/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ButtonV2, IconButtonV2 } from "@ndla/button";
import { spacing } from "@ndla/core";
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownItem } from "@ndla/dropdown-menu";
import { Pencil } from "@ndla/icons/action";
import { HorizontalMenu } from "@ndla/icons/contentType";
import { DeleteForever } from "@ndla/icons/editor";
import Folder from "./Folder";

export default {
  title: "My NDLA/Folder",
  component: Folder,
  tags: ["autodocs"],
  argTypes: {
    menu: {
      control: false,
    },
  },
  args: {
    id: "3d88300c-1186-47f5-a99a-8ea93fa20981",
    title: "Dette er min tittel",
    subFolders: 3,
    subResources: 3,
    description: "",
    link: "",
    type: "list",
    menu: (
      <DropdownMenu>
        <DropdownTrigger>
          <IconButtonV2 aria-label="Show more" title="Show more" variant="ghost" colorTheme="light">
            <HorizontalMenu />
          </IconButtonV2>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>
            <ButtonV2 variant="ghost" colorTheme="light" shape="sharp" size="small" fontWeight="normal">
              <Pencil />
              Rediger
            </ButtonV2>
          </DropdownItem>
          <DropdownItem>
            <ButtonV2 variant="ghost" colorTheme="danger" shape="sharp" size="small" fontWeight="normal">
              <DeleteForever />
              Slett
            </ButtonV2>
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    ),
    isShared: true,
    sharedByOthers: false,
  },
} as Meta<typeof Folder>;

export const FolderStory: StoryObj<typeof Folder> = {};

export const WithoutMenu: StoryObj<typeof Folder> = {
  args: { menu: undefined },
};

export const SharedByOthers: StoryObj<typeof Folder> = {
  args: { author: "Lise Lærer", sharedByOthers: true },
};

const BlockWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

export const BlockFolder: StoryFn<typeof Folder> = (args) => {
  return (
    <BlockWrapper>
      <Folder {...args} type="block" />
      <Folder {...args} type="block" />
      <Folder {...args} type="block" />
    </BlockWrapper>
  );
};
