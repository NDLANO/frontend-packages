/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  updateIFrameDimensions,
  addEventListenerForResize,
  removeEventListenerForResize,
} from './iframeScripts';

import {
  addAsideClickListener,
  removeAsideClickListener,
} from './asideScripts';

import {
  addShowFigureDetailsClickListeners,
  addCloseFigureDetailsClickListeners,
  addCopyToClipboardListeners,
} from './figureScripts';

import {
  addDetailsEventListeners,
  removeDetailsEventListeners,
} from './detailsScript';

import { addShowGlossaryDefinitionClickListeners } from './glossaryScripts';

export const initArticleScripts = () => {
  addEventListenerForResize();
  updateIFrameDimensions();
  addAsideClickListener();
  addCopyToClipboardListeners();
  addShowFigureDetailsClickListeners();
  addCloseFigureDetailsClickListeners();
  addShowGlossaryDefinitionClickListeners();
  addDetailsEventListeners();
};

export {
  updateIFrameDimensions,
  addAsideClickListener,
  removeAsideClickListener,
  addEventListenerForResize,
  removeEventListenerForResize,
  addCloseFigureDetailsClickListeners,
  addCopyToClipboardListeners,
  addShowFigureDetailsClickListeners,
  addShowGlossaryDefinitionClickListeners,
  addDetailsEventListeners,
  removeDetailsEventListeners,
};
