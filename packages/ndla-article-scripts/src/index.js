/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


 import { updateIFrameDimensions, addEventListenerForResize, removeEventListenerForResize } from './iframeScripts';

 import { addAsideClickListener, removeAsideClickListener } from './asideScripts';

 import { addShowFigureDetailsClickListners, addCloseFigureDetailsClickListners, makeFigureLicenseIconsClickable } from './figureScripts';


 export const initArticleScripts = () => {
   addEventListenerForResize();
   updateIFrameDimensions();
   addAsideClickListener();
   addShowFigureDetailsClickListners();
   addCloseFigureDetailsClickListners();
   makeFigureLicenseIconsClickable();
 };

 export {
   updateIFrameDimensions,

   addAsideClickListener,
   removeAsideClickListener,

   addEventListenerForResize,
   removeEventListenerForResize,

   addCloseFigureDetailsClickListners,
   addShowFigureDetailsClickListners,
   makeFigureLicenseIconsClickable,
 };
