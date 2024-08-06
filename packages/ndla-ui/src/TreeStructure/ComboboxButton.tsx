/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent, forwardRef } from "react";
import { ArrowDownShortLine } from "@ndla/icons/common";
import { Button, Skeleton, Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IFolder } from "@ndla/types-backend/myndla-api";
import { useForwardedRef } from "@ndla/util";
import { arrowNavigation } from "./arrowNavigation";
import { treestructureId } from "./helperFunctions";

const StyledButton = styled(Button, {
  base: {
    justifyContent: "space-between",
    _expanded: {
      "& svg": {
        transform: "rotate(180deg)",
      },
    },
    "& svg": {
      transformOrigin: "center",
      transitionProperty: "transform",
      transitionDuration: "fast",
      transitionTimingFunction: "default",
    },
  },
});

interface Props {
  showTree: boolean;
  label?: string;
  focusedFolder?: IFolder;
  selectedFolder?: IFolder;
  setSelectedFolder: (folder: IFolder) => void;
  loading?: boolean;
  onToggleTree: (open: boolean) => void;
  flattenedFolders: IFolder[];
  onOpenFolder: (id: string) => void;
  onCloseFolder: (id: string) => void;
  setFocusedFolder: (folder: IFolder) => void;
  ariaDescribedby?: string;
}

const ComboboxButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      showTree,
      label,
      focusedFolder,
      selectedFolder,
      setSelectedFolder,
      onToggleTree,
      flattenedFolders,
      setFocusedFolder,
      onOpenFolder,
      onCloseFolder,
      loading,
      ariaDescribedby,
    },
    ref,
  ) => {
    const innerRef = useForwardedRef(ref);

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter") {
        if (showTree && focusedFolder) {
          setSelectedFolder(focusedFolder);
        }
        return;
      }
      if (e.key === "Escape") {
        onToggleTree(false);
        e.preventDefault();
        return;
      }
      if (["ArrowUp", "ArrowDown"].includes(e.key) && !showTree) {
        onToggleTree(true);
        return;
      }
      if (focusedFolder) {
        arrowNavigation(e, focusedFolder.id, flattenedFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
      }
    };

    return (
      <StyledButton
        ref={innerRef}
        id={treestructureId("combobox")}
        role="combobox"
        aria-controls={treestructureId("popup")}
        aria-haspopup="tree"
        aria-expanded={showTree}
        aria-labelledby={label ? treestructureId("label") : undefined}
        aria-activedescendant={focusedFolder ? treestructureId(focusedFolder.id) : undefined}
        aria-describedby={ariaDescribedby}
        variant="secondary"
        onKeyDown={onKeyDown}
        loading={loading}
        loadingContent={
          <Skeleton>
            <Text>&nbsp;</Text>
          </Skeleton>
        }
        replaceContent
        onClick={() => {
          innerRef.current?.focus();
          onToggleTree(!showTree);
        }}
      >
        {selectedFolder?.name}
        <ArrowDownShortLine />
      </StyledButton>
    );
  },
);

export default ComboboxButton;
