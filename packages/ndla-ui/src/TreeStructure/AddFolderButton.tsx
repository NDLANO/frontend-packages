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
import { Plus } from "@ndla/icons/action";
import { Tooltip } from "@ndla/tooltip";
import { IFolder } from "@ndla/types-backend/learningpath-api";

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

const StyledPlus = styled(Plus)`
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
    <Tooltip tooltip={tooltip}>
      <StyledAddFolderButton
        ref={ref}
        variant="outline"
        shape="pill"
        disabled={loading || !canAddFolder}
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
    </Tooltip>
  );
};

export default AddFolderButton;
