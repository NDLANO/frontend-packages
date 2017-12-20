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
  addCloseDialogClickListeners,
  addCopyToClipboardListeners,
  updateIFrameDimensions,
  addEventListenerForResize,
  removeEventListenerForResize,
  addEventListenersForZoom,
  removeEventListenersForZoom,
} from './figureScripts';

import {
  addDetailsEventListeners,
  removeDetailsEventListeners,
} from './detailsScript';

import { initAudioPlayers } from './audioPlayerScript';

import { addShowConceptDefinitionClickListeners } from './glossaryScripts';

export const initArticleScripts = () => {
  addEventListenerForResize();
  updateIFrameDimensions();
  addAsideClickListener();
  addCopyToClipboardListeners();
  addShowDialogClickListeners();
  addCloseDialogClickListeners();
  addShowConceptDefinitionClickListeners();
  addDetailsEventListeners();
  addEventListenersForZoom();
  initAudioPlayers();
};

export {
  updateIFrameDimensions,
  addAsideClickListener,
  removeAsideClickListener,
  addEventListenerForResize,
  removeEventListenerForResize,
  addCloseDialogClickListeners,
  addCopyToClipboardListeners,
  addShowDialogClickListeners,
  addShowConceptDefinitionClickListeners,
  addDetailsEventListeners,
  removeDetailsEventListeners,
  addEventListenersForZoom,
  removeEventListenersForZoom,
  initAudioPlayers,
};
