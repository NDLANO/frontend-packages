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

import { addFilelistTooltipListners } from './fileListScript';

import {
  addCopyToClipboardListeners,
  updateIFrameDimensions,
  addEventListenerForResize,
  removeEventListenerForResize,
  toggleLicenseInfoBox,
} from './figureScripts';

import {
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  addCloseDialogClickListeners,
} from './dialogScripts';

import { initTableScript, removeTableEventListeners } from './tableScripts';

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
  initTableScript();
  addFilelistTooltipListners();
};

export {
  initTableScript,
  removeTableEventListeners,
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
  addFilelistTooltipListners,
};
