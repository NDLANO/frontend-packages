/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import debounce from 'lodash/debounce';
import { uuid } from '@ndla/util';
import BreadcrumbItem from './BreadcrumbItem';

const classes = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

class BreadcrumbBlock extends Component {
  constructor(props) {
    super(props);
    this.breadCrumbRef = React.createRef();
    this.checkBreadcrumbSizes = this.checkBreadcrumbSizes.bind(this);
    this.checkBreadcrumbSizesDebounce = debounce(
      () => this.checkBreadcrumbSizes(),
      100,
    );
  }

  componentDidUpdate() {
    if (this.props.singlelineBreadcrumb) {
      this.checkBreadcrumbSizes();
    }
  }

  componentDidMount() {
    if (this.props.singlelineBreadcrumb) {
      window.addEventListener('resize', this.checkBreadcrumbSizesDebounce);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkBreadcrumbSizesDebounce);
  }

  shortenBreadcrumb(elements, totalWidth) {
    const elementsLength = elements
      .map(el => el.clientWidth)
      .reduce((sum, count) => sum + count);

    return totalWidth < elementsLength;
  }

  checkBreadcrumbSizes() {
    const container = this.breadCrumbRef.current;
    const elements = Array.from(
      container.querySelectorAll('li:not(:first-child)'),
    );
    container.querySelectorAll('li:not(:first-child)').forEach((el, index) => {
      const tagName = index < elements.length - 1 ? 'a' : 'span';
      const breadCrumbName = el.querySelector(tagName);
      breadCrumbName.style.maxWidth = 'none';
    });

    let counter = 0;
    while (counter < elements.length && container.offsetHeight > 70) {
      const tagName = counter < elements.length - 1 ? 'a' : 'span';
      elements[counter].querySelector(tagName).style.maxWidth = '40px';
      counter++;
    }
  }

  render() {
    const { children, singlelineBreadcrumb, items } = this.props;
    return (
      <div {...classes('')}>
        {children}
        <ol
          {...classes('list', [singlelineBreadcrumb ? 'singleline' : ''])}
          ref={this.breadCrumbRef}>
          {items.map((item, i) => (
            <BreadcrumbItem
              classes={classes}
              key={uuid()}
              isCurrent={i === items.length - 1}
              to={item.to}>
              {item.name}
            </BreadcrumbItem>
          ))}
        </ol>
      </div>
    );
  }
}

BreadcrumbBlock.propTypes = {
  children: PropTypes.node,
  singlelineBreadcrumb: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default BreadcrumbBlock;
