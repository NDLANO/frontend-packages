/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-env jest */

import { updateIFrameDimensions } from '../figureScripts';

const byId = (id) => document.getElementById(id);

const iframe1Html = `
    <figure id="figure1" class="c-figure--resize">
      <iframe id="iframe1" width="600" height="300"></iframe>
    <figure>
  `;

test('figureScripts/updateIFrameDimensions updates iframe height and width according to ratio 1', () => {
  document.body.innerHTML = iframe1Html;
  window.getComputedStyle = () => ({ paddingLeft: 0, paddingRight: 0 });
  Object.defineProperty(byId('figure1'), 'clientWidth', {
    writable: true,
    value: 800,
  });

  updateIFrameDimensions();

  expect(byId('iframe1').getAttribute('data-ratio')).toBe('0.5');
  expect(byId('iframe1').getAttribute('height')).toBe('400');
  expect(byId('iframe1').getAttribute('width')).toBe('800');

  byId('figure1').clientWidth = 600;
  updateIFrameDimensions(true);

  expect(byId('iframe1').getAttribute('height')).toBe('300');
  expect(byId('iframe1').getAttribute('width')).toBe('600');
});

const iframe2Html = `
    <figure id="figure2" class="c-figure--resize">
      <iframe id="iframe2" width="1024" height="768"></iframe>
    <figure>
  `;

test('figureScripts/updateIFrameDimensions updates iframe height and width according to ratio 2', () => {
  document.body.innerHTML = iframe2Html;
  window.getComputedStyle = () => ({
    paddingLeft: '25px',
    paddingRight: '25px',
  });
  Object.defineProperty(byId('figure2'), 'clientWidth', { value: 800 });

  updateIFrameDimensions();

  expect(byId('iframe2').getAttribute('data-ratio')).toBe('0.75');
  expect(byId('iframe2').getAttribute('height')).toBe('562.5');
  expect(byId('iframe2').getAttribute('width')).toBe('750');
});

const iframeHtmlWithNoDimensions = `
    <figure id="figureNoDimensions" class="c-figure--resize">
      <iframe id="iframeNodimensions"></iframe>
    <figure>
  `;

test('figureScripts/updateIFrameDimensions when no dimensions should default to default ratio', () => {
  document.body.innerHTML = iframeHtmlWithNoDimensions;
  Object.defineProperty(byId('figureNoDimensions'), 'clientWidth', {
    value: 800,
  });

  updateIFrameDimensions();

  const ratio =
    parseFloat(byId('iframeNodimensions').getAttribute('height')) /
    parseFloat(byId('iframeNodimensions').getAttribute('width'));

  expect(ratio).toBe(0.5625);
});
