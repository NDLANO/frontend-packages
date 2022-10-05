/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import sinon from 'sinon';
import withTracker from '../withTracker';
import * as tracker from '../tracker';

window.dataLayer = [];
const history = createMemoryHistory();
tracker.configureTracker({ listen: history.listen });

class Page extends Component {
  static getDocumentTitle(props) {
    return `Hello ${props.world}`;
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  world: PropTypes.string,
  children: PropTypes.node,
};

class ChildPage extends Component {
  static getDocumentTitle(props) {
    return `Hello ${props.world} from child page`;
  }

  render() {
    return (
      <div>
        <h1>Child Page</h1>
      </div>
    );
  }
}

ChildPage.propTypes = {
  world: PropTypes.string,
};

test('withTracker HOC renderers Page correctly', () => {
  const PageWithTracker = withTracker(Page);
  const { container } = render(<PageWithTracker />);

  expect(container.firstChild).toMatchSnapshot();
});

test('sendPageView is called on component mounth ', () => {
  const PageWithTracker = withTracker(Page);
  const spy = sinon.spy(tracker, 'sendPageView');

  history.push('/test');
  render(<PageWithTracker world="world" />);

  expect(spy.calledOnce).toBe(true);
  expect(spy.args[0]).toMatchSnapshot();
  spy.restore();
});

test('sendPageView is called on component update if url is untracked', () => {
  const PageWithTracker = withTracker(Page);
  const spy = sinon.spy(tracker, 'sendPageView');

  history.push('/test1');
  const { rerender } = render(<PageWithTracker world="world" />);
  history.push('/test2');
  rerender(<PageWithTracker world="world" />);

  expect(spy.calledTwice).toBe(true);
  expect(spy.args).toMatchSnapshot();
  spy.restore();
});

test('sendPageView is not called on component update if url is tracked', () => {
  const PageWithTracker = withTracker(Page);
  const spy = sinon.spy(tracker, 'sendPageView');

  history.push('/test1');
  const { rerender } = render(<PageWithTracker world="world" />);
  rerender(<PageWithTracker world="world" />);

  expect(spy.calledOnce).toBe(true);
  expect(spy.args[0]).toMatchSnapshot();
  spy.restore();
});

test('sendPageView is called from child component if two page tracking compontents are in the same hierarchy', () => {
  const PageWithTracker = withTracker(Page);
  const ChildPageWithTracker = withTracker(ChildPage);
  const spy = sinon.spy(tracker, 'sendPageView');

  history.push('/test');
  render(
    <PageWithTracker world="world">
      <ChildPageWithTracker world="world" />
    </PageWithTracker>,
  );

  expect(spy.calledOnce).toBe(true);
  expect(spy.args[0]).toMatchSnapshot();
  spy.restore();
});
