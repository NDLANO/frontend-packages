/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState, useMemo, useRef } from "react";
import { Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IFolder } from "@ndla/types-backend/myndla-api";
import AddFolderButton from "./AddFolderButton";
import ComboboxButton from "./ComboboxButton";
import FolderItems from "./FolderItems";
import { flattenFolders, treestructureId } from "./helperFunctions";
import { CommonTreeStructureProps, NewFolderInputFunc } from "./types";

export const MAX_LEVEL_FOR_FOLDERS = 5;

const uniq = <T,>(array: T[]): T[] => Array.from(new Set(array));

const StyledTreeStructure = styled("div", {
  base: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
});

const Row = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const TreeStructureWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    overflow: "hidden",
  },
});

const ScrollableDiv = styled("div", {
  base: {
    overflow: "auto",
    scrollBehavior: "smooth",
    border: "1px solid",
    borderColor: "stroke.subtle",
    borderRadius: "xsmall",
    // scrollMarginInlineEnd: "6",
    // scrollMarginBlock: "6",
  },
});

const FolderWrapper = styled("div", {
  base: {
    padding: "xsmall",
  },
});

// const ScrollableDiv = styled.div`
//   scroll-behavior: smooth;
//   overflow: auto;
//   border: 1px solid ${colors.brand.neutral7};
//   border-radius: ${misc.borderRadius};
//   &:focus-within {
//     border-color: ${colors.brand.tertiary};
//   }
//   ${utils.scrollbar}
// `;

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
  newFolderInput,
  ariaDescribedby,
}: TreeStructureProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const defaultSelectedFolderId = defaultOpenFolders?.[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedFolder, _setFocusedFolder] = useState<IFolder | undefined>();
  const [selectedFolder, _setSelectedFolder] = useState<IFolder | undefined>();
  const [showTree, setShowTree] = useState(false);

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);

  useEffect(() => {
    if (defaultOpenFolders) {
      if (!defaultOpenFolders.every((element) => openFolders.includes(element))) {
        setOpenFolders((prev) => {
          return uniq(defaultOpenFolders.concat(prev));
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
        _setFocusedFolder(selected);
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
    setOpenFolders(uniq(openFolders.concat(id)));
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
      setOpenFolders(uniq(openFolders.concat(parentId)));
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
        if (!e.currentTarget.contains(e.relatedTarget)) {
          onToggleTree(false);
        }
      }}
    >
      <Row>
        {label && (
          <Text textStyle="label.medium" fontWeight="bold" id={treestructureId("label")}>
            {label}
          </Text>
        )}
        <AddFolderButton
          loading={loading}
          canAddFolder={!!canAddFolder}
          focusedFolder={focusedFolder}
          setNewFolderParentId={setNewFolderParentId}
          setShowTree={setShowTree}
        />
      </Row>
      <TreeStructureWrapper aria-label={label}>
        <ComboboxButton
          ref={ref}
          showTree={showTree}
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
        {showTree && (
          <ScrollableDiv tabIndex={-1}>
            {!!newFolderParentId && (
              <FolderWrapper>
                {newFolderInput?.({
                  parentId: newFolderParentId,
                  onClose: onCancelNewFolder,
                  onCreate: onNewFolderCreated,
                })}
              </FolderWrapper>
            )}

            <FolderItems
              focusedFolder={focusedFolder}
              folders={folders}
              level={0}
              loading={loading}
              selectedFolder={selectedFolder}
              maxLevel={maxLevel}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              openFolders={openFolders}
              setFocusedFolder={setFocusedFolder}
              setSelectedFolder={setSelectedFolder}
              targetResource={targetResource}
              closeTree={() => onToggleTree(false)}
            />
          </ScrollableDiv>
        )}
      </TreeStructureWrapper>
    </StyledTreeStructure>
  );
};

export default TreeStructure;
