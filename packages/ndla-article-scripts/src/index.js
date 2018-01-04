/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  addAsideClickListener,
  removeAsideClickListener,
} from './asideScripts';

import {
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  addCloseDialogClickListeners,
  addCopyToClipboardListeners,
  updateIFrameDimensions,
  addEventListenerForResize,
  removeEventListenerForResize,
  toggleLicenseInfoBox,
} from './figureScripts';

import {
  addDetailsEventListeners,
  removeDetailsEventListeners,
} from './detailsScript';

import { addFootnoteClickListeners } from './footnoteScripts';

import { initAudioPlayers } from './audioPlayerScript';

import { addShowConceptDefinitionClickListeners } from './conceptScripts';

export const initArticleScripts = () => {
  addEventListenerForResize();
  updateIFrameDimensions();
  addAsideClickListener();
  addCopyToClipboardListeners();
  addShowDialogClickListeners();
  addCloseDialogClickListeners();
  addShowConceptDefinitionClickListeners();
  addDetailsEventListeners();
  initAudioPlayers();
  addFootnoteClickListeners();
};

export {
  updateIFrameDimensions,
  addAsideClickListener,
  removeAsideClickListener,
  addEventListenerForResize,
  removeEventListenerForResize,
  addCloseDialogClickListeners,
  addCopyToClipboardListeners,
  addShowConceptDefinitionClickListeners,
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  addDetailsEventListeners,
  removeDetailsEventListeners,
  initAudioPlayers,
  addFootnoteClickListeners,
  toggleLicenseInfoBox,
};
