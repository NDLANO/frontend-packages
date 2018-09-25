/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pager, { PageItem } from '../Pager';

Enzyme.configure({ adapter: new Adapter() });

function pagerTest({ setup, expected }) {
  test(`component/LinkPager page ${setup.page}/${setup.lastPage}`, () => {
    const steps = shallow(
      <Pager pathname="somepath" query={{}} {...setup} />,
    ).children();

    const prev = setup.page - 1;
    const next = setup.page + 1;

    expect(steps.length).toBe(expected.length);

    expected.forEach((value, i) => {
      // const n = i + 1;
      const step = steps.at(i);

      switch (value) {
        case 'current':
          expect(step.is('.c-pager__step--active')).toBeTruthy();
          expect(step.text()).toBe(setup.page.toString());
          expect(step.is(PageItem)).not.toBe('Current page not linked');
          break;
        case 'back':
          expect(step.is(PageItem)).toBeTruthy();
          expect(step.props().modifier).toBe(value);
          expect(step.props().page).toBe(prev);
          break;
        case 'forward':
          expect(step.is(PageItem)).toBeTruthy();
          expect(step.props().modifier).toBe(value);
          expect(step.props().page).toBe(next);
          break;
        default:
          expect(step.is(PageItem)).toBeTruthy();
          expect(step.props().page).toBe(value);
          expect(step.props().children).toBe(value);
      }
    });
  });
}

pagerTest({
  setup: { page: 1, lastPage: 1 },
  expected: ['current'],
});

pagerTest({
  setup: { page: 3, lastPage: 5 },
  expected: ['back', 1, 2, 'current', 4, 5, 'forward'],
});

pagerTest({
  setup: { page: 1, lastPage: 5 },
  expected: ['current', 2, 3, 4, 5, 'forward'],
});

pagerTest({
  setup: { page: 19, lastPage: 19 },
  expected: ['back', 15, 16, 17, 18, 'current'],
});

pagerTest({
  setup: { page: 4, lastPage: 10 },
  expected: ['back', 2, 3, 'current', 5, 6, 'forward'],
});
