/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent, forwardRef } from "react";
import styled from "@emotion/styled";
import { ButtonV2 as Button, IconButtonV2 as IconButton } from "@ndla/button";
import { breakpoints, colors, mq, spacing } from "@ndla/core";
import { ArrowUpShortLine, ArrowDownShortLine } from "@ndla/icons/common";
import { IFolder } from "@ndla/types-backend/myndla-api";
import { useForwardedRef } from "@ndla/util";
import { arrowNavigation } from "./arrowNavigation";
import { treestructureId } from "./helperFunctions";
import { TreeStructureType } from "./types";
import ContentLoader from "../ContentLoader";

const StyledRow = styled.div`
  display: flex;
  padding: ${spacing.xxsmall};
  align-items: center;
  &[data-open="true"] {
    border-bottom: 1px solid ${colors.brand.tertiary};
  }
`;
const StyledSelectedFolder = styled(Button)`
  flex: 1;
  justify-content: flex-start;
  color: ${colors.black};
  border: none;
  :hover,
  :focus {
    background: none;
    box-shadow: none;
    border-color: transparent;
  }
  :focus-visible {
    outline: none;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    min-height: 4rem;
    max-height: 4rem;
    text-align: start;
  }
`;

interface Props {
  showTree: boolean;
  type: TreeStructureType;
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
      type,
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
        onToggleTree(!showTree);
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
      <StyledRow
        data-open={showTree}
        onMouseDown={(e) => {
          if (!e.defaultPrevented) {
            e.preventDefault();
            e.stopPropagation();
            onToggleTree(!showTree);
            innerRef.current?.focus();
          }
        }}
      >
        {loading && (
          <ContentLoader width={1000} height={40}>
            <rect x="15" y="0" width="1000" rx="3" ry="3" r="15" height="40" />
          </ContentLoader>
        )}
        {!loading && (
          <StyledSelectedFolder
            ref={innerRef}
            tabIndex={0}
            id={treestructureId(type, "combobox")}
            role="combobox"
            aria-controls={treestructureId(type, "popup")}
            aria-haspopup="tree"
            aria-expanded={showTree}
            aria-labelledby={label ? treestructureId(type, "label") : undefined}
            aria-activedescendant={focusedFolder ? treestructureId(type, focusedFolder.id) : undefined}
            aria-describedby={ariaDescribedby}
            variant="ghost"
            colorTheme="light"
            fontWeight="normal"
            shape="sharp"
            onKeyDown={onKeyDown}
            onClick={() => {
              innerRef.current?.focus();
              onToggleTree(showTree);
            }}
          >
            {selectedFolder?.name}
          </StyledSelectedFolder>
        )}
        <IconButton
          disabled={loading}
          aria-busy={loading}
          aria-hidden
          aria-label=""
          tabIndex={-1}
          variant="ghost"
          colorTheme="greyLighter"
          size="small"
          onClick={() => {
            innerRef.current?.focus();
            onToggleTree(!showTree);
          }}
        >
          {showTree ? <ArrowUpShortLine /> : <ArrowDownShortLine />}
        </IconButton>
      </StyledRow>
    );
  },
);

export default ComboboxButton;
