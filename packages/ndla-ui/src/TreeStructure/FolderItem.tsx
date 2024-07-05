/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, KeyboardEvent, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 as Button } from "@ndla/button";
import { colors, spacing, animations, misc, fonts } from "@ndla/core";
import { ArrowDownLine } from "@ndla/icons/common";
import { FolderOutlined, FolderShared } from "@ndla/icons/contentType";
import { Done } from "@ndla/icons/editor";
import { SafeLink } from "@ndla/safelink";
import { IFolder } from "@ndla/types-backend/myndla-api";
import { arrowNavigation } from "./arrowNavigation";
import { treestructureId } from "./helperFunctions";
import { CommonFolderItemsProps } from "./types";

const OpenButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  color: ${colors.brand.tertiary};
  ${misc.transition.default};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.primary};
  }
  svg {
    width: 24px;
    height: 24px;
    transform: rotate(-90deg);
  }
  &[data-open="true"] {
    svg {
      transform: rotate(0deg);
    }
  }
  &[data-hide-arrow="true"] {
    visibility: hidden;
  }
`;

const StyledName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-column-start: 2;
  text-align: left;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const FolderIconWrapper = styled.div`
  svg {
    height: 24px;
    width: 24px;
  }
`;

const FolderName = styled(Button)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-left: calc(0.75 * ${spacing.normal} * var(--level));
  gap: ${spacing.xxsmall};
  border: none;
  outline: none;
  color: ${colors.text.primary};
  transition: ${animations.durations.superFast};
  word-break: break-word;

  &:hover {
    box-shadow: none;
    outline: none;
    background: ${colors.brand.lightest};
    color: ${colors.text.primary};
  }

  &[data-focused="true"] {
    background: ${colors.brand.lightest};
  }

  &[data-selected="true"] {
    background: ${colors.brand.lighter};
    &:hover {
      background: ${colors.brand.light};
    }
  }

  &[data-creating="true"][data-focused="true"] {
    color: ${colors.brand.primary};
  }

  &[data-creating="true"] {
    background: none;
  }
`;

const StyledDone = styled(Done)`
  color: ${colors.support.green};
`;

const FolderNameLink = styled(SafeLink)`
  display: grid;
  align-items: center;
  grid-template-columns: ${spacing.medium} 1fr auto;
  padding: ${spacing.small} ${spacing.xxsmall};
  padding-left: calc(0.75 * ${spacing.normal} * var(--level));
  gap: ${spacing.xxsmall};
  cursor: pointer;

  border: none;
  box-shadow: none;
  color: ${colors.text.primary};
  ${fonts.sizes("16px")};
  transition: ${animations.durations.superFast};
  word-break: break-word;
  &[data-selected="true"] {
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};
  }
  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

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
  visibleFolders,
  maxLevel,
  isCreatingFolder,
  type,
  closeTree,
  index,
}: Props) => {
  const { t } = useTranslation();
  const { id, name } = folder;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const selected = selectedFolder ? selectedFolder.id === id : false;

  const levelVariable = useMemo(() => ({ "--level": level }) as unknown as CSSProperties, [level]);

  const focused = focusedFolder?.id === id;

  const handleClickFolder = () => {
    if (!selected) {
      setSelectedFolder(folder);
    }
    setFocusedFolder(folder);
    if (type === "picker") {
      if (selected) {
        closeTree();
      }
    }
  };

  useEffect(() => {
    if (focusedFolder?.id === id && !isCreatingFolder) {
      if (type === "navigation") {
        ref.current?.focus();
      }
      if (type === "picker") {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [focusedFolder, ref, id, isCreatingFolder, type]);

  const linkPath = `/minndla/folders/${id}`;

  const containsResource =
    targetResource && folder.resources.some((resource) => resource.resourceId === targetResource.resourceId);

  const emptyFolder = folder.subfolders.length === 0;
  const isMaxDepth = level > maxLevel;
  const hideArrow = isMaxDepth || emptyFolder;

  const FolderIcon = folder.status === "shared" ? FolderShared : FolderOutlined;

  const tabable = selected || focused || (!focusedFolder && !folder.parentId && index === 0);

  return type === "navigation" ? (
    <FolderNameLink
      role="treeitem"
      aria-owns={folder.subfolders.length ? treestructureId(type, `subfolders-${folder.id}`) : undefined}
      aria-expanded={isMaxDepth || emptyFolder ? undefined : isOpen}
      aria-current={selected ? "page" : undefined}
      aria-describedby={containsResource ? `alreadyAdded-${folder.id}` : undefined}
      ref={ref}
      style={levelVariable}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
          setSelectedFolder(folder);
          return;
        }
        arrowNavigation(e, id, visibleFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
      }}
      to={loading ? "" : linkPath}
      tabIndex={tabable ? 0 : -1}
      data-selected={selected}
      onFocus={() => setFocusedFolder(folder)}
      onClick={handleClickFolder}
    >
      <OpenButton
        aria-hidden
        tabIndex={-1}
        data-open={isOpen}
        data-hide-arrow={hideArrow}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          ref.current?.focus();
          if (isOpen) {
            onCloseFolder(id);
          } else {
            onOpenFolder(id);
          }
        }}
      >
        <ArrowDownLine />
      </OpenButton>
      <StyledName>{name}</StyledName>
    </FolderNameLink>
  ) : (
    <FolderName
      tabIndex={-1}
      role="treeitem"
      id={treestructureId(type, folder.id)}
      aria-expanded={isMaxDepth || emptyFolder ? undefined : isOpen}
      aria-selected={selected}
      data-focused={focusedFolder?.id === folder.id}
      aria-describedby={containsResource ? `alreadyAdded-${folder.id}` : undefined}
      aria-label={`${name}${folder.status === "shared" ? `, ${t("myNdla.folder.sharing.shared")}` : ""}`}
      variant="ghost"
      shape="sharp"
      fontWeight="normal"
      colorTheme="light"
      ref={ref}
      style={levelVariable}
      data-selected={selected}
      disabled={loading}
      onFocus={() => setFocusedFolder(focusedFolder || folder)}
      onClick={handleClickFolder}
      data-creating={isCreatingFolder}
    >
      <IconWrapper>
        <OpenButton
          aria-hidden
          tabIndex={-1}
          data-open={isOpen}
          data-hide-arrow={hideArrow}
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
          <ArrowDownLine />
        </OpenButton>
        <FolderIconWrapper>
          <FolderIcon />
        </FolderIconWrapper>
      </IconWrapper>
      <StyledName>{name}</StyledName>
      {containsResource && (
        <StyledDone
          aria-label={t("myNdla.alreadyInFolder")}
          id={`alreadyAdded-${folder.id}`}
          title={t("myNdla.alreadyInFolder")}
        />
      )}
    </FolderName>
  );
};

export default FolderItem;
