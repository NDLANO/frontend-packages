/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { addFactBoxClickListener, removeFactBoxClickListener } from './factBoxScripts';

import { addFilelistTooltipListners } from './fileListScript';

import {
  addCopyToClipboardListeners,
  updateIFrameDimensions,
  addEventListenerForResize,
  removeEventListenerForResize,
  toggleLicenseInfoBox,
  addEventListenerForFigureZoomButton,
} from './figureScripts';

import {
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  addCloseDialogClickListeners,
} from './dialogScripts';

import { addEventListenerForNotions } from './notionScripts';

import { addToggleAlternativeVideoListener } from './alternativeVideoPlugin';

import { initTableScript, removeTableEventListeners } from './tableScripts';

import { addDetailsEventListeners, removeDetailsEventListeners } from './detailsScript';

import { addFootnoteClickListeners } from './footnoteScripts';

import { addShowConceptDefinitionClickListeners } from './conceptScripts';

import { toggleRelatedArticles } from './relatedArticlesToggle';

import { initArticleTabs } from './articleTabScripts';

export { forEachElement, findAncestorByClass, getElementOffset } from './domHelpers';

export const initArticleScripts = () => {
  addEventListenerForResize();
  updateIFrameDimensions();
  addFactBoxClickListener();
  addCopyToClipboardListeners();
  addShowDialogClickListeners();
  addToggleAlternativeVideoListener();
  addCloseDialogClickListeners();
  addShowConceptDefinitionClickListeners();
  toggleLicenseInfoBox();
  addDetailsEventListeners();
  addFootnoteClickListeners();
  toggleRelatedArticles();
  initTableScript();
  addFilelistTooltipListners();
  initArticleTabs();
  addEventListenerForFigureZoomButton();
  addEventListenerForNotions();
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
  addToggleAlternativeVideoListener,
  removeShowDialogClickListeners,
  addDetailsEventListeners,
  removeDetailsEventListeners,
  addFootnoteClickListeners,
  toggleLicenseInfoBox,
  toggleRelatedArticles,
  addFilelistTooltipListners,
  initArticleTabs,
  addEventListenerForFigureZoomButton,
  addEventListenerForNotions,
};
