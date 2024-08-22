/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { IFolder } from "@ndla/types-backend/myndla-api";

export type OnCreatedFunc = (folder: IFolder | undefined) => void;

export type NewFolderInputFunc = ({
  onCancel,
  parentId,
  onCreate,
}: {
  onCancel: () => void;
  parentId: string;
  onCreate: OnCreatedFunc;
}) => ReactNode;
