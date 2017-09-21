/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-env jest */

import convertFieldWithFallback from '../convertFieldWithFallback';

const article = {
  id: '2',
  created: '2014-12-24T10:44:06Z',
  title: { title: 'Tester', language: 'nb' },
  metaDescription: { metaDescription: 'Beskrivelse', language: 'nb' },
  visualElement: { visualElement: '<embed />', language: 'nb' },
};

test('convertFieldWithFallback convert field title to string', () => {
  const obj = convertFieldWithFallback(article, 'title', '');
  expect(obj).toMatchSnapshot();
});

test('convertFieldWithFallback convert field with fallback', () => {
  const obj = convertFieldWithFallback(article, 'unkownfield', []);
  expect(obj).toMatchSnapshot();
});

test('convertFieldWithFallback convert field visual element', () => {
  const obj = convertFieldWithFallback(article, 'visualElement', []);
  expect(obj).toMatchSnapshot();
});
