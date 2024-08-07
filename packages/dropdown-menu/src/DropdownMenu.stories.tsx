/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonV2, IconButtonV2 } from "@ndla/button";
import { DeleteBinLine } from "@ndla/icons/action";
import { MoreLine } from "@ndla/icons/contentType";
import { FolderFill } from "@ndla/icons/editor";
import { DropdownMenu, DropdownTrigger, DropdownItem, DropdownContent } from ".";

export default {
  title: "Components/DropdownMenu",
  component: DropdownContent,
  tags: ["autodocs"],
} as Meta<typeof DropdownContent>;

const StyledButton = styled(ButtonV2)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const DropdownStory: StoryFn<typeof DropdownMenu> = (args) => {
  return (
    <DropdownMenu>
      <DropdownTrigger>
        <IconButtonV2 aria-label="Show more" title="Show more" variant="ghost" colorTheme="light">
          <MoreLine />
        </IconButtonV2>
      </DropdownTrigger>
      <DropdownContent {...args}>
        <DropdownItem>
          <StyledButton variant="ghost" colorTheme="light" shape="sharp" size="small" fontWeight="normal">
            <FolderFill />
            Add item
          </StyledButton>
        </DropdownItem>
        <DropdownItem>
          <StyledButton variant="ghost" colorTheme="danger" shape="sharp" size="small" fontWeight="normal">
            <DeleteBinLine />
            Delete item
          </StyledButton>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  );
};

DropdownStory.storyName = "Dropdown";
