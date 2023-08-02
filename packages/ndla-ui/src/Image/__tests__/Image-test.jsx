/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image, { makeSrcQueryString } from '../Image';

test('Image renderers correctly', () => {
  const { container } = render(<Image alt="example" src="https://example.com/image.png" />, { container: null });

  expect(container.firstChild).toMatchSnapshot();
});

test('Lazyloaded image renderers correctly', () => {
  const { container } = render(
    <Image lazyLoad lazyLoadSrc="https://example.com/blurry.png" alt="example" src="https://example.com/image.png" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Image with crop and focalpoint props renderers correctly', () => {
  const { container } = render(
    <Image
      crop={{
        startX: 14.59,
        endX: 79.63,
        startY: 20,
        endY: 100,
      }}
      focalPoint={{
        x: 65.08,
        y: 45.28,
      }}
      alt="example"
      src="https://example.com/image.png"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('makeSrcQueryString renders correctly', () => {
  const crop = {
    startX: 14.59,
    endX: 79.63,
    startY: 20,
    endY: 100,
  };
  const focalPoint = {
    x: 65.08,
    y: 45.28,
  };
  expect(makeSrcQueryString(undefined, undefined, undefined)).toMatch('');
  expect(makeSrcQueryString(1024, undefined, undefined)).toMatch('width=1024');
  expect(makeSrcQueryString(undefined, crop, undefined)).toMatchSnapshot();
  expect(makeSrcQueryString(undefined, undefined, focalPoint)).toMatchSnapshot();
  expect(makeSrcQueryString(1024, crop, focalPoint)).toMatchSnapshot();
});
