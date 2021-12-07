/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router';
import Safelink, { isOldNdlaLink } from '../SafeLink';
import MissingRouterContext from '../MissingRouterContext';

// test('SafeLink renderers Link correctly if router context is present', () => {
//   const { container } = render(
//     <StaticRouter location="foo" context={{}}>
//       <div>
//         <Safelink to="/my/path">Snapshot should contain onClick</Safelink>,
//       </div>
//     </StaticRouter>,
//   );

//   expect(container).toMatchSnapshot();
//   // // @ts-ignore
//   // expect(component.toJSON()!.children![0].props.onClick).toBeInstanceOf(Function);
// });

// test('SafeLink defaults to normal link if to prop is an external link', () => {
//   const { container } = render(
//     <StaticRouter location="foo" context={{}}>
//       <div>
//         <Safelink to="https://example.com">Snapshot should not contain onClick</Safelink>,
//       </div>
//     </StaticRouter>,
//   );

//   expect(container).toMatchSnapshot();
//   // @ts-ignore
//   // expect(component.toJSON()!.children![0].props.onClick).toBeUndefined();
// });

test('SafeLink defaults to normal link if to prop is an old ndla link', () => {
  const { container } = render(
    <StaticRouter location="foo" context={{}}>
      <div>
        <Safelink to="/nb/node/54">Snapshot should not contain onClick</Safelink>,
      </div>
    </StaticRouter>,
  );
  expect(container).toMatchSnapshot();

  // @ts-ignore
  // expect(component.toJSON()!.children![0].props.onClick).toBeUndefined();
});

test('SafeLink renderers normal link correctly when router context is not present', () => {
  const { container } = render(
    <MissingRouterContext.Provider value={true}>
      <Safelink to="/my/path">No router context</Safelink>
    </MissingRouterContext.Provider>,
  );

  expect(container).toMatchSnapshot();
});

test('isOldNdlaLink checks', () => {
  expect(isOldNdlaLink('/nb/node/12')).toBe(true);
  expect(isOldNdlaLink('/nn/node/12?fag=12')).toBe(true);
  expect(isOldNdlaLink('/en/node/12ssjkdlf')).toBe(true);
  expect(isOldNdlaLink('/nb/nde/12')).toBe(false);
  expect(isOldNdlaLink('/subjects')).toBe(false);
  expect(isOldNdlaLink('/sanodesd43/')).toBe(false);
  expect(isOldNdlaLink({ pathname: '/sanodesd43/' })).toBe(false);
});
