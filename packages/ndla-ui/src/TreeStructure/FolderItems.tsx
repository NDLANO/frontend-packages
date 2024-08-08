/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";
import { IFolder } from "@ndla/types-backend/myndla-api";
import FolderItem from "./FolderItem";
import { treestructureId } from "./helperFunctions";
import { CommonFolderItemsProps } from "./types";

const FoldersList = styled("ul", {
  base: {
    animationName: "fade-shift-in",
    animationDuration: "fast",
    animationTimingFunction: "default",
    animationFillMode: "forwards",
    listStyle: "none",
  },
});

const ListItem = styled("li", {
  base: {
    display: "flex",
    flexDirection: "column",
  },
});

export interface FolderItemsProps extends CommonFolderItemsProps {
  folders: IFolder[];
  openFolders: string[];
  parentFolder?: IFolder;
  children?: ReactNode;
}

const FolderItems = ({ folders, level, loading, openFolders, parentFolder, children, ...rest }: FolderItemsProps) => (
  <FoldersList
    id={
      level === 0
        ? treestructureId("popup")
        : parentFolder
          ? treestructureId(`subfolders-${parentFolder.id}`)
          : undefined
    }
    tabIndex={-1}
    aria-labelledby={level === 0 ? treestructureId("label") : undefined}
    role={level === 0 ? "tree" : "group"}
  >
    {children}
    {folders.map((folder, index) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);

      return (
        <ListItem key={id} tabIndex={-1} role="none">
          <FolderItem index={index} folder={folder} isOpen={isOpen} level={level} loading={loading} {...rest} />
          {subfolders && isOpen && (
            <FolderItems
              parentFolder={folder}
              folders={subfolders}
              level={level + 1}
              loading={loading}
              openFolders={openFolders}
              {...rest}
            ></FolderItems>
          )}
        </ListItem>
      );
    })}
  </FoldersList>
);

export default FolderItems;
