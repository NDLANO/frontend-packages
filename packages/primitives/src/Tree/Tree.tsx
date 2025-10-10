/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type ElementType, type RefAttributes } from "react";
import {
  TreeView,
  treeViewAnatomy,
  type TreeNode,
  createTreeCollection as _createTreeCollection,
  useTreeView as _useTreeView,
} from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Text, type TextProps } from "../Text";

const treeRecipe = sva({
  slots: treeViewAnatomy.keys(),
  base: {
    root: {
      width: "100%",
    },
    branch: {
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
    branchContent: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
    branchControl: {
      display: "flex",
      alignItems: "center",
      gap: "3xsmall",
      borderRadius: "xsmall",
      height: "xxlarge",
      cursor: "pointer",
      paddingInlineStart: "calc((var(--depth) - 1) * token(spacing.medium))",
      paddingInlineEnd: "xsmall",
      paddingBlock: "xsmall",
      transitionDuration: "normal",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      _hover: {
        background: "surface.hover",
      },
      _selected: {
        background: "surface.selected",
      },
    },
    branchIndicator: {
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(90deg)",
      },
    },
    item: {
      display: "flex",
      cursor: "pointer",
      position: "relative",
      borderRadius: "xsmall",
      justifyContent: "space-between",
      paddingBlock: "xsmall",
      paddingInlineEnd: "xsmall",
      paddingInlineStart:
        "calc(((var(--depth) - 1) * token(spacing.medium)) + token(spacing.xxlarge) + token(spacing.3xsmall))",
      transitionDuration: "normal",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      height: "xxlarge",
      alignItems: "center",

      _hover: {
        background: "surface.hover",
      },
      _selected: {
        background: "surface.selected",
        _hover: {
          background: "surface.hover",
        },
      },
    },
    itemIndicator: {
      color: "icon.strong",
    },
    itemText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    branchText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
  },
});

const { withProvider, withContext } = createStyleContext(treeRecipe);

export interface TreeRootProps<T extends TreeNode = TreeNode>
  extends TreeView.RootProps<T>,
    StyledProps,
    RefAttributes<HTMLDivElement> {}

const InternalTreeRoot = withProvider<ElementType<TreeRootProps>>(TreeView.Root, "root", { baseComponent: true });

export const TreeRoot = <T extends TreeNode = TreeNode>(props: TreeRootProps<T>) => <InternalTreeRoot {...props} />;

export interface TreeRootProviderProps<T extends TreeNode = TreeNode>
  extends TreeView.RootProviderProps<T>,
    StyledProps {}

const InternalTreeRootProvider = withProvider<ElementType<TreeRootProviderProps>>(TreeView.RootProvider, "root", {
  baseComponent: true,
});

export const TreeRootProvider = <T extends TreeNode = TreeNode>(props: TreeRootProviderProps<T>) => (
  <InternalTreeRootProvider {...props} />
);

export const TreeBranchContent = withContext(TreeView.BranchContent, "branchContent", { baseComponent: true });

export const TreeBranchControl = withContext(TreeView.BranchControl, "branchControl", { baseComponent: true });

export const TreeBranchIndicator = withContext(TreeView.BranchIndicator, "branchIndicator", { baseComponent: true });

export const TreeBranch = withContext(TreeView.Branch, "branch", {
  baseComponent: true,
});

const InternalTreeBranchText = withContext(TreeView.BranchText, "branchText", { baseComponent: true });

interface TreeBranchTextProps
  extends Omit<TreeView.BranchTextProps, "color">,
    TextProps,
    StyledProps,
    RefAttributes<HTMLDivElement> {}

export const TreeBranchText = forwardRef<HTMLDivElement, TreeBranchTextProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", children, ...props }, ref) => (
    <InternalTreeBranchText asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeBranchText>
  ),
);

export const TreeBranchTrigger = withContext(TreeView.BranchTrigger, "branchTrigger", { baseComponent: true });

export const TreeItemIndicator = withContext(TreeView.ItemIndicator, "itemIndicator", { baseComponent: true });

export const TreeItem = withContext(TreeView.Item, "item", { baseComponent: true });

const InternalTreeItemText = withContext(TreeView.ItemText, "itemText", { baseComponent: true });

interface TreeItemTextProps
  extends Omit<TreeView.ItemTextProps, "color">,
    TextProps,
    StyledProps,
    RefAttributes<HTMLDivElement> {}

export const TreeItemText = forwardRef<HTMLDivElement, TreeItemTextProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", children, ...props }, ref) => (
    <InternalTreeItemText asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeItemText>
  ),
);

const InternalTreeLabel = withContext(TreeView.Label, "label", { baseComponent: true });

interface TreeLabelProps
  extends Omit<TreeView.LabelProps, "color">,
    TextProps,
    StyledProps,
    RefAttributes<HTMLDivElement> {}

export const TreeLabel = forwardRef<HTMLDivElement, TreeLabelProps>(
  ({ children, textStyle = "label.medium", fontWeight = "bold", ...props }, ref) => (
    <InternalTreeLabel asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeLabel>
  ),
);

export const Tree = withContext(TreeView.Tree, "tree", { baseComponent: true });

export const createTreeCollection = _createTreeCollection;

export const TreeNodeProvider = TreeView.NodeProvider;
export const TreeNodeContext = TreeView.NodeContext;
export const useTreeView = _useTreeView;
