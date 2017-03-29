/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import { createElement, findAncestorByClass, removeModifiers, removeElementById, wrapElement } from './domHelpers';

 export const addCloseFigureDetailsClickListners = () => {
   document.querySelectorAll('.c-figure .c-figure__close').forEach((el) => {
     const target = el;
     target.onclick = () => {
       removeElementById('c-license-icon-description');
       target.parentNode.classList.remove('c-figure--active');
       target.parentNode.querySelector('figcaption').classList.remove('u-hidden');
     };
   });
 };

 export const addShowFigureDetailsClickListners = () => {
   document.querySelectorAll('.c-figure .c-figure__captionbtn').forEach((el) => {
     const target = el;
     target.onclick = () => {
       removeElementById('c-license-icon-description');
       const figure = findAncestorByClass(target, 'c-figure');
       figure.classList.add('c-figure--active');

       const figcaption = findAncestorByClass(target, 'c-figure__caption');
       figcaption.classList.add('u-hidden');
     };
   });
 };

 export const makeFigureLicenseIconsClickable = () => {
   document.querySelectorAll('.c-figure .c-license-icons__item').forEach((el) => {
     const iconEl = el.querySelector('.c-license-icons__icon');

     const button = document.createElement('button');
     button.className = 'c-button c-button--stripped';

     button.onclick = () => {
       const isActive = el.classList.contains('c-license-icons__item--active');

       // cleanup
       removeElementById('c-license-icon-description');
       removeModifiers('c-license-icons__item', 'active', '.c-figure'); // remove existing modifier classes

       if (isActive) { // Only do cleanup if already active
         button.blur();
         return;
       }

       // Add active modifier and append description element
       el.classList.add('c-license-icons__item--active');
       const description = iconEl.getAttribute('aria-label');
       const byline = findAncestorByClass(el, 'license-byline');
       const descriptionEl = createElement('div', 'c-license-icon-description', 'license-byline__body license-byline__body--black', `<span>${description}</span>`);
       byline.appendChild(descriptionEl);
     };
     wrapElement(iconEl, button);
   });
 };
