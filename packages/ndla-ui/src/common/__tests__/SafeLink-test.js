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
import StaticRouter from 'react-router/StaticRouter';
import Safelink from '../SafeLink';

test('SafeLink renderers normal link correctly when router context is not present', () => {
  const component = renderer.create(
    <Safelink to="/my/path">No router context</Safelink>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('SafeLink renderers Link correctly if router context is present', () => {
  const component = renderer.create(
    <StaticRouter location="foo" context={{}}>
      <div>
        <Safelink to="/my/path">Snapshot should contain onClick</Safelink>,
      </div>
    </StaticRouter>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('SafeLink defaults to normal link if to prop is an external link', () => {
  const component = renderer.create(
    <StaticRouter location="foo" context={{}}>
      <div>
        <Safelink to="https://example.com">
          Snapshot should not contain onClick
        </Safelink>,
      </div>
    </StaticRouter>,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
