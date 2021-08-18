/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../Image';

test('Image renderers correctly', () => {
  const component = renderer.create(<Image alt="example" src="https://example.com/image.png" />);

  expect(component.toJSON()).toMatchSnapshot();
});

test('Lazyloaded image renderers correctly', () => {
  const component = renderer.create(
    <Image lazyLoad lazyLoadSrc="https://example.com/blurry.png" alt="example" src="https://example.com/image.png" />,
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Image with crop and focalpoint props renderers correctly', () => {
  const component = renderer.create(
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

  expect(component.toJSON()).toMatchSnapshot();
});
