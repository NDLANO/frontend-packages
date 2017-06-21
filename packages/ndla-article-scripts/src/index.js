/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


 import { updateIFrameDimensions, addEventListenerForResize, removeEventListenerForResize } from './iframeScripts';

 import { addAsideClickListener, removeAsideClickListener } from './asideScripts';

 import {
   addShowFigureDetailsClickListeners,
   addCloseFigureDetailsClickListeners,
   makeFigureLicenseIconsClickable,
   addCopyToClipboardListeners,
 } from './figureScripts';


 export const initArticleScripts = () => {
   addEventListenerForResize();
   updateIFrameDimensions();
   addAsideClickListener();
   addCopyToClipboardListeners();
   addShowFigureDetailsClickListeners();
   addCloseFigureDetailsClickListeners();
   makeFigureLicenseIconsClickable();
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
   makeFigureLicenseIconsClickable,
 };
