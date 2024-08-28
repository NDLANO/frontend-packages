/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { ArrowRightShortLine } from "@ndla/icons/common";
import { CheckLine, FolderLine } from "@ndla/icons/editor";
import { HStack } from "@ndla/styled-system/jsx";
import {
  Tree,
  TreeBranch,
  TreeBranchContent,
  TreeBranchControl,
  TreeBranchIndicator,
  TreeBranchText,
  TreeBranchTrigger,
  TreeItem,
  TreeItemIndicator,
  TreeItemText,
  TreeRoot,
} from "./Tree";
import { IconButton } from "../Button";

export default {
  title: "Primitives/Tree",
  component: TreeRoot,
  tags: ["autodocs"],
  args: {
    expandOnClick: false,
  },
  parameters: {
    inlineStories: true,
  },
} satisfies Meta<typeof TreeRoot>;

export const Default: StoryFn<typeof TreeRoot> = (args) => (
  <TreeRoot {...args}>
    <Tree>
      <TreeItem value="1">
        <HStack gap="xsmall" justify="center">
          <FolderLine />
          <TreeItemText>Item 1</TreeItemText>
        </HStack>
        <TreeItemIndicator asChild>
          <CheckLine />
        </TreeItemIndicator>
      </TreeItem>
      <TreeBranch value="2.0">
        <TreeBranchControl>
          <IconButton variant="clear" asChild>
            <TreeBranchTrigger>
              <TreeBranchIndicator asChild>
                <ArrowRightShortLine />
              </TreeBranchIndicator>
            </TreeBranchTrigger>
          </IconButton>
          <HStack gap="xsmall" justify="center">
            <FolderLine />
            <TreeBranchText>Item 2.0</TreeBranchText>
          </HStack>
        </TreeBranchControl>
        <TreeBranchContent>
          <TreeItem value="2.1">
            <HStack gap="xsmall" justify="center">
              <FolderLine />
              <TreeItemText>Item 2.1</TreeItemText>
            </HStack>
            <TreeItemIndicator asChild>
              <CheckLine />
            </TreeItemIndicator>
          </TreeItem>
          <TreeItem value="2.2">
            <HStack gap="xsmall" justify="center">
              <FolderLine />
              <TreeItemText>Item 2.2</TreeItemText>
            </HStack>
            <TreeItemIndicator asChild>
              <CheckLine />
            </TreeItemIndicator>
          </TreeItem>
        </TreeBranchContent>
      </TreeBranch>
    </Tree>
  </TreeRoot>
);
