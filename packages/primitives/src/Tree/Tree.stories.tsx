/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { TreeViewNodeProviderProps } from "@ark-ui/react";
import type { Meta, StoryFn } from "@storybook/react";
import { ArrowRightShortLine, CheckLine, FolderLine } from "@ndla/icons";
import { HStack } from "@ndla/styled-system/jsx";
import { IconButton } from "../Button";
import {
  createTreeCollection,
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
  TreeNodeProvider,
} from "./Tree";

export default {
  title: "Primitives/Tree",
  component: TreeRoot,
  tags: ["autodocs"],
  args: {
    expandOnClick: false,
    collection: createTreeCollection<Node>({
      nodeToValue: (node) => node.id,
      nodeToString: (node) => node.name,
      rootNode: {
        id: "ROOT",
        name: "",
        children: [
          { id: "1.0", name: "Item 1" },
          {
            id: "2.0",
            name: "Item 2",
            children: [
              { id: "2.1", name: "Item 2.1" },
              {
                id: "2.2",
                name: "Item 2.2",
                children: [
                  { id: "2.2.1", name: "Item 2.2.1" },
                  { id: "2.2.2", name: "Item 2.2.2" },
                ],
              },
            ],
          },
        ],
      },
    }),
  },
  parameters: {
    inlineStories: true,
  },
} satisfies Meta<typeof TreeRoot<Node>>;

interface Node {
  id: string;
  name: string;
  children?: Node[];
}

const TreeNode = ({ node, indexPath }: TreeViewNodeProviderProps<Node>) => {
  return (
    <TreeNodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeBranch>
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
              <TreeBranchText>{node.name}</TreeBranchText>
            </HStack>
          </TreeBranchControl>
          <TreeBranchContent>
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
            ))}
          </TreeBranchContent>
        </TreeBranch>
      ) : (
        <TreeItem>
          <HStack gap="xsmall" justify="center">
            <FolderLine />
            <TreeItemText>{node.name}</TreeItemText>
          </HStack>
          <TreeItemIndicator asChild>
            <CheckLine />
          </TreeItemIndicator>
        </TreeItem>
      )}
    </TreeNodeProvider>
  );
};

export const Default: StoryFn<typeof TreeRoot<Node>> = (args) => (
  <TreeRoot {...args}>
    <Tree>
      {args.collection.rootNode.children?.map((node, index) => (
        <TreeNode key={node.id} node={node} indexPath={[index]} />
      ))}
    </Tree>
  </TreeRoot>
);
