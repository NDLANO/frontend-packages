/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 as Button } from "@ndla/button";
import { AddLine } from "@ndla/icons/action";
import { IFolder } from "@ndla/types-backend/myndla-api";

interface AddFolderButtonProps {
  canAddFolder: boolean;
  focusedFolder?: IFolder;
  setNewFolderParentId: (id?: string) => void;
  setShowTree: (value: boolean) => void;
  loading?: boolean;
}

const StyledAddFolderButton = styled(Button)`
  &,
  &:disabled {
    border-color: transparent;
  }
`;

const StyledPlus = styled(AddLine)`
  height: 24px;
  width: 24px;
`;

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
    <StyledAddFolderButton
      ref={ref}
      variant="outline"
      shape="pill"
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
      <StyledPlus /> {t("myNdla.newFolder")}
    </StyledAddFolderButton>
  );
};

export default AddFolderButton;
