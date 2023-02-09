/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Notion from './Notion';
import NotionDialogWrapper from './NotionDialogWrapper';
import NotionDialogLicenses from './NotionDialogLicenses';
import { NotionHeaderWithoutExitButton } from './NotionHeader';
import { LicenseByline, LicenseDescription } from './LicenseByline';

import NotionDialog, {
  NotionDialogContent,
  NotionDialogText,
  NotionDialogImage,
  NotionDialogTags,
  NotionDialogRelatedLinks,
} from './NotionDialog';

export {
  NotionDialogContent,
  NotionDialogText,
  NotionDialogImage,
  NotionDialog,
  NotionDialogTags,
  NotionDialogWrapper,
  NotionDialogLicenses,
  NotionDialogRelatedLinks,
  NotionHeaderWithoutExitButton,
  LicenseByline,
  LicenseDescription,
};

export default Notion;
