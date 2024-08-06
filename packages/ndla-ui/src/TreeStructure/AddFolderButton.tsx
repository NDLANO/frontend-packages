/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AddLine } from "@ndla/icons/action";
import { Button } from "@ndla/primitives";
import { IFolder } from "@ndla/types-backend/myndla-api";

interface AddFolderButtonProps {
  canAddFolder: boolean;
  focusedFolder?: IFolder;
  setNewFolderParentId: (id?: string) => void;
  setShowTree: (value: boolean) => void;
  loading?: boolean;
}

const AddFolderButton = ({
  canAddFolder,
  loading,
  setNewFolderParentId,
  focusedFolder,
  setShowTree,
}: AddFolderButtonProps) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);
  const tooltip = loading
    ? t("loading")
    : canAddFolder
      ? t("myNdla.newFolderUnder", { folderName: focusedFolder?.name })
      : t("treeStructure.maxFoldersAlreadyAdded");
  return (
    <Button
      ref={ref}
      variant="tertiary"
      disabled={loading || !canAddFolder}
      title={tooltip}
      aria-label={tooltip}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current?.focus();
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        e.stopPropagation();
        ref.current?.focus();
      }}
      onClick={(e) => {
        e.currentTarget.focus();
        setNewFolderParentId(focusedFolder?.id);
        setShowTree(true);
      }}
    >
      <AddLine /> {t("myNdla.newFolder")}
    </Button>
  );
};

export default AddFolderButton;
