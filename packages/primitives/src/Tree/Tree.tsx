/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { TreeView, treeViewAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "../createStyleContext";
import { Text, TextProps } from "../Text";

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

export type TreeRootProps = TreeView.RootProps & JsxStyleProps;

export const TreeRoot = withProvider<HTMLDivElement, TreeRootProps>(TreeView.Root, "root", {
  baseComponent: true,
});

export const TreeRootProvider = withProvider<HTMLDivElement, TreeView.RootProviderProps & JsxStyleProps>(
  TreeView.RootProvider,
  "root",
);

export const TreeBranchContent = withContext<HTMLDivElement, TreeView.BranchContentProps & JsxStyleProps>(
  TreeView.BranchContent,
  "branchContent",
  { baseComponent: true },
);

export const TreeBranchControl = withContext<HTMLDivElement, TreeView.BranchControlProps & JsxStyleProps>(
  TreeView.BranchControl,
  "branchControl",
  { baseComponent: true },
);

export const TreeBranchIndicator = withContext<HTMLDivElement, TreeView.BranchIndicatorProps & JsxStyleProps>(
  TreeView.BranchIndicator,
  "branchIndicator",
  { baseComponent: true },
);

export const TreeBranch = withContext<HTMLDivElement, TreeView.BranchProps & JsxStyleProps>(TreeView.Branch, "branch", {
  baseComponent: true,
});

const InternalTreeBranchText = withContext<HTMLDivElement, TreeView.BranchTextProps & JsxStyleProps>(
  TreeView.BranchText,
  "branchText",
  { baseComponent: true },
);

export const TreeBranchText = forwardRef<HTMLDivElement, TreeView.BranchTextProps & TextProps & JsxStyleProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", children, ...props }, ref) => (
    <InternalTreeBranchText asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeBranchText>
  ),
);

export const TreeBranchTrigger = withContext<HTMLDivElement, TreeView.BranchTriggerProps & JsxStyleProps>(
  TreeView.BranchTrigger,
  "branchTrigger",
  { baseComponent: true },
);

export const TreeItemIndicator = withContext<HTMLDivElement, TreeView.ItemIndicatorProps & JsxStyleProps>(
  TreeView.ItemIndicator,
  "itemIndicator",
  { baseComponent: true },
);

export const TreeItem = withContext<HTMLDivElement, TreeView.ItemProps & JsxStyleProps>(TreeView.Item, "item", {
  baseComponent: true,
});

const InternalTreeItemText = withContext<HTMLDivElement, TreeView.ItemTextProps & JsxStyleProps>(
  TreeView.ItemText,
  "itemText",
  { baseComponent: true },
);

export const TreeItemText = forwardRef<HTMLDivElement, TreeView.ItemTextProps & TextProps & JsxStyleProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", children, ...props }, ref) => (
    <InternalTreeItemText asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeItemText>
  ),
);

const InternalTreeLabel = withContext<HTMLDivElement, TreeView.LabelProps & JsxStyleProps>(TreeView.Label, "label", {
  baseComponent: true,
});

export const TreeLabel = forwardRef<HTMLDivElement, TreeView.LabelProps & TextProps & JsxStyleProps>(
  ({ children, textStyle = "label.medium", fontWeight = "bold", ...props }, ref) => (
    <InternalTreeLabel asChild {...props} ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
        <div>{children}</div>
      </Text>
    </InternalTreeLabel>
  ),
);

export const Tree = withContext<HTMLDivElement, TreeView.TreeProps & JsxStyleProps>(TreeView.Tree, "tree", {
  baseComponent: true,
});
