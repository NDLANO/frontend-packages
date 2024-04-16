/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState, useMemo, useRef } from "react";
import styled from "@emotion/styled";
import { colors, fonts, misc, utils } from "@ndla/core";
import { IFolder } from "@ndla/types-backend/learningpath-api";
import AddFolderButton from "./AddFolderButton";
import ComboboxButton from "./ComboboxButton";
import FolderItems from "./FolderItems";
import { flattenFolders, treestructureId } from "./helperFunctions";
import { CommonTreeStructureProps, NewFolderInputFunc } from "./types";

export const MAX_LEVEL_FOR_FOLDERS = 5;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const StyledTreeStructure = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TreeStructureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: ${misc.transition.default};
  &[data-type="picker"] {
    overflow: hidden;
    border: 1px solid ${colors.brand.neutral7};
    border-radius: ${misc.borderRadius};
    scroll-behavior: smooth;
  }
  &:focus-within {
    border-color: ${colors.brand.tertiary};
  }
`;

const ScrollableDiv = styled.div`
  &[data-type="picker"] {
    overflow: auto;
    overflow: overlay;
    ${utils.scrollbar}
  }
`;

export interface TreeStructureProps extends CommonTreeStructureProps {
  defaultOpenFolders?: string[];
  folders: IFolder[];
  label?: string;
  maxLevel?: number;
  newFolderInput?: NewFolderInputFunc;
  onSelectFolder?: (id: string) => void;
  ariaDescribedby?: string;
}

const TreeStructure = ({
  defaultOpenFolders,
  folders,
  label,
  loading,
  maxLevel = MAX_LEVEL_FOR_FOLDERS,
  onSelectFolder,
  targetResource,
  type,
  newFolderInput,
  ariaDescribedby,
}: TreeStructureProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const defaultSelectedFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedFolder, _setFocusedFolder] = useState<IFolder | undefined>();
  const [selectedFolder, _setSelectedFolder] = useState<IFolder | undefined>();
  const [showTree, setShowTree] = useState(type === "navigation");

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);

  useEffect(() => {
    if (defaultOpenFolders) {
      if (!defaultOpenFolders.every((element) => openFolders.includes(element))) {
        setOpenFolders((prev) => {
          return Array.from(new Set(defaultOpenFolders.concat(prev)));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (defaultSelectedFolderId !== undefined) {
      const selected = flattenFolders(folders).find((folder) => folder.id === defaultSelectedFolderId);
      if (selected) {
        _setSelectedFolder(selected);
        if (type === "picker") {
          _setFocusedFolder(selected);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelectedFolderId]);

  const onToggleTree = (open: boolean) => {
    setShowTree(open);
    if (!open) {
      setNewFolderParentId(undefined);
    }
  };

  const setSelectedFolder = (folder: IFolder) => {
    _setSelectedFolder(folder);
    onSelectFolder?.(folder.id);
  };

  const setFocusedFolder = (folder: IFolder) => {
    _setFocusedFolder(folder);
    setNewFolderParentId(undefined);

    ref.current?.focus({ preventScroll: true });
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(Array.from(new Set(openFolders.concat(id))));
  };

  const onCloseFolder = (id: string) => {
    const closedFolder = flattenedFolders.find((folder) => folder.id === id);

    if (closedFolder) {
      const subFolders = closedFolder.subfolders && flattenFolders(closedFolder.subfolders);
      if (subFolders.some((folder) => folder.id === selectedFolder?.id)) {
        setFocusedFolder(closedFolder);
      }
    }
    setOpenFolders(openFolders.filter((folderId) => folderId !== id));
  };

  const onNewFolderCreated = (newFolder: IFolder | undefined, parentId: string) => {
    if (newFolder) {
      setSelectedFolder(newFolder);
      setFocusedFolder(newFolder);
      setOpenFolders(Array.from(new Set(openFolders.concat(parentId))));
      setNewFolderParentId?.(undefined);
      ref.current?.focus({ preventScroll: true });
    }
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId?.(undefined);
    ref.current?.focus({ preventScroll: true });
  };

  const canAddFolder = selectedFolder && selectedFolder?.breadcrumbs.length < (maxLevel || 1);

  return (
    <StyledTreeStructure
      onBlur={(e) => {
        if (type === "picker" && !e.currentTarget.contains(e.relatedTarget)) {
          onToggleTree(false);
        }
      }}
    >
      <Row>
        {label && <StyledLabel id={treestructureId(type, "label")}>{label}</StyledLabel>}
        {type === "picker" && (
          <AddFolderButton
            loading={loading}
            canAddFolder={!!canAddFolder}
            focusedFolder={focusedFolder}
            setNewFolderParentId={setNewFolderParentId}
            setShowTree={setShowTree}
          />
        )}
      </Row>
      <TreeStructureWrapper aria-label={label} data-type={type}>
        {type === "picker" && (
          <ComboboxButton
            ref={ref}
            showTree={showTree}
            type={type}
            label={label}
            loading={loading}
            focusedFolder={focusedFolder}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            setFocusedFolder={setFocusedFolder}
            onToggleTree={onToggleTree}
            flattenedFolders={flattenedFolders}
            onCloseFolder={onCloseFolder}
            onOpenFolder={onOpenFolder}
            ariaDescribedby={ariaDescribedby}
          />
        )}
        {showTree && (
          <ScrollableDiv data-type={type}>
            <FolderItems
              focusedFolder={focusedFolder}
              folders={folders}
              level={0}
              loading={loading}
              selectedFolder={selectedFolder}
              maxLevel={maxLevel}
              newFolderParentId={newFolderParentId}
              onCancelNewFolder={onCancelNewFolder}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              openFolders={openFolders}
              setFocusedFolder={setFocusedFolder}
              setSelectedFolder={setSelectedFolder}
              targetResource={targetResource}
              visibleFolders={flattenedFolders}
              type={type}
              closeTree={() => onToggleTree(false)}
              newFolderInput={newFolderInput}
              onCreate={onNewFolderCreated}
            />
          </ScrollableDiv>
        )}
      </TreeStructureWrapper>
    </StyledTreeStructure>
  );
};

export default TreeStructure;
