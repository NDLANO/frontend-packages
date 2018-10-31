/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { colors, spacing, fonts } from 'ndla-core';

const selectStyle = css`
  ${fonts.sizes(16, 1.625)} font-weight: ${fonts.weight.bold};
  font-family: ${fonts.sans};
  color: ${colors.brand.primary};
  border: 0;
  height: auto;
  width: 100%;
  padding: 4px ${spacing.small};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  color: $brand-color;
  border: 2px solid ${colors.brand.primary};
  box-shadow: none;
  &:hover,
  &:focus {
    color: white;
    background-color: ${colors.brand.primary};
    border: 2px solid transparent;
    transform: translateY(0) translateX(0);
  }
`;

class FormDropdownButton extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.tmpRef = React.createRef();
  }

  componentDidUpdate() {
    // Only way to make select width equal to text width?
    this.tmpRef.current.style.display = 'inline';
    this.tmpRef.current.innerHTML = this.selectRef.current.selectedOptions[0].text;
    this.selectRef.current.style.width = `${this.tmpRef.current.offsetWidth}px`;
    this.tmpRef.current.style.display = 'none';
  }

  render() {
    const { children, value, ...rest } = this.props;
    return (
      <Fragment>
        <span
          className={selectStyle}
          style={{ display: 'none' }}
          ref={this.tmpRef}
        />
        <select
          className={selectStyle}
          value={value}
          ref={this.selectRef}
          {...rest}>
          {children}
        </select>
      </Fragment>
    );
  }
}

FormDropdownButton.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

export default FormDropdownButton;
