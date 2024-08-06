/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDownShortLine } from "@ndla/icons/common";
import { FolderUserFill } from "@ndla/icons/contentType";
import { CheckLine, FolderLine } from "@ndla/icons/editor";
import { IconButton } from "@ndla/primitives";
import { HStack, styled } from "@ndla/styled-system/jsx";
import { IFolder } from "@ndla/types-backend/myndla-api";
import { treestructureId } from "./helperFunctions";
import { CommonFolderItemsProps } from "./types";

const StyledButton = styled("button", {
  base: {
    all: "unset",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    paddingInlineEnd: "xsmall",
    paddingInlineStart: "calc((var(--level)) * token(spacing.medium))",
    transitionProperty: "background",
    transitionDuration: "fast",
    transitionTimingFunction: "default",
    justifyContent: "space-between",
    backgroundColor: "surface.default",
    _hover: {
      backgroundColor: "surface.hover",
    },
    _highlighted: {
      backgroundColor: "surface.hover",
    },
    _selected: {
      backgroundColor: "surface.selected",
    },
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    _open: {
      "& svg": {
        transform: "rotate(0deg)",
      },
    },
    "& svg": {
      transform: "rotate(-90deg)",
      transitionDuration: "fast",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
    },
    "&[data-hide-arrow='true']": {
      visibility: "hidden",
    },
  },
});

const StyledCheck = styled(CheckLine, {
  base: {
    color: "icon.strong",
  },
});

const FolderName = styled("span", {
  base: {
    marginInlineStart: "xsmall",
    lineClamp: "1",
  },
});

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: IFolder;
  isCreatingFolder?: boolean;
  index: number;
}

const FolderItem = ({
  focusedFolder,
  folder,
  isOpen,
  level,
  loading,
  selectedFolder,
  onCloseFolder,
  onOpenFolder,
  setFocusedFolder,
  setSelectedFolder,
  targetResource,
  maxLevel,
  closeTree,
}: Props) => {
  const { t } = useTranslation();
  const { id, name } = folder;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const selected = selectedFolder ? selectedFolder.id === id : false;

  const levelVariable = useMemo(() => ({ "--level": level }) as unknown as CSSProperties, [level]);

  const handleClickFolder = () => {
    if (!selected) {
      setSelectedFolder(folder);
    }
    setFocusedFolder(folder);
    if (selected) {
      closeTree();
    }
  };

  useEffect(() => {
    if (focusedFolder?.id === id) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [focusedFolder, ref, id]);

  const containsResource =
    targetResource && folder.resources.some((resource) => resource.resourceId === targetResource.resourceId);

  const emptyFolder = folder.subfolders.length === 0;
  const isMaxDepth = level > maxLevel;
  const hideArrow = isMaxDepth || emptyFolder;

  const FolderIcon = folder.status === "shared" ? FolderUserFill : FolderLine;

  return (
    <StyledButton
      tabIndex={-1}
      role="treeitem"
      id={treestructureId(folder.id)}
      aria-expanded={isMaxDepth || emptyFolder ? undefined : isOpen}
      aria-selected={selected}
      data-highlighted={focusedFolder?.id === folder.id ? true : undefined}
      aria-describedby={containsResource ? `alreadyAdded-${folder.id}` : undefined}
      aria-label={`${name}${folder.status === "shared" ? `, ${t("myNdla.folder.sharing.shared")}` : ""}`}
      ref={ref}
      style={levelVariable}
      disabled={loading}
      onMouseEnter={() => setFocusedFolder(folder)}
      onFocus={() => setFocusedFolder(folder)}
      onClick={handleClickFolder}
    >
      <HStack gap="0">
        <StyledIconButton
          aria-hidden
          asChild
          consumeCss
          tabIndex={-1}
          data-open={isOpen ? true : undefined}
          data-hide-arrow={hideArrow}
          variant="clear"
          onClick={(e) => {
            e.stopPropagation();
            setFocusedFolder(folder);
            if (isOpen) {
              onCloseFolder(id);
            } else {
              onOpenFolder(id);
            }
          }}
        >
          <span>
            <ArrowDownShortLine />
          </span>
        </StyledIconButton>
        <FolderIcon />
        <FolderName>{folder.name}</FolderName>
      </HStack>
      {containsResource && (
        <StyledCheck
          aria-label={t("myNdla.alreadyInFolder")}
          id={`alreadyAdded-${folder.id}`}
          title={t("myNdla.alreadyInFolder")}
        />
      )}
    </StyledButton>
  );
};

export default FolderItem;
