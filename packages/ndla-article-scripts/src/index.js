/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  addFactBoxClickListener,
  removeFactBoxClickListener,
} from './factBoxScripts';

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

import { toggleRelatedArticles } from './relatedArticlesToggle';

export {
  forEachElement,
  findAncestorByClass,
  getElementOffset,
} from './domHelpers';

export const initArticleScripts = () => {
  addEventListenerForResize();
  updateIFrameDimensions();
  addFactBoxClickListener();
  addCopyToClipboardListeners();
  addShowDialogClickListeners();
  addCloseDialogClickListeners();
  addShowConceptDefinitionClickListeners();
  toggleLicenseInfoBox();
  addDetailsEventListeners();
  initAudioPlayers();
  addFootnoteClickListeners();
  toggleRelatedArticles();
};

export {
  updateIFrameDimensions,
  addFactBoxClickListener,
  removeFactBoxClickListener,
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
  toggleRelatedArticles,
};
