/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Pager from '../Pager';

interface FnProps {
  page: number;
  lastPage: number;
}

const testFunc = (props: FnProps) => {
  test(`component/LinkPager page ${props.page}/${props.lastPage}`, () => {
    const { container } = render(
      <MemoryRouter>
        <Pager pathname="somepath" query={{}} {...props} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
};

testFunc({ page: 1, lastPage: 1 });
testFunc({ page: 3, lastPage: 5 });
testFunc({ page: 1, lastPage: 5 });
testFunc({ page: 19, lastPage: 19 });
testFunc({ page: 4, lastPage: 10 });
