/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { createUniversalPortal } from '@ndla/util';
import { spacing, fonts, colors } from '@ndla/core';
import { Download } from '@ndla/icons/common';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // Get position from props.forwardedRef.
    if (this.props.usePortal) {
      const rect = this.props.forwardedRef.current.childNodes[
        this.props.childIndex
      ].firstChild.getBoundingClientRect();
      this.inputRef.current.style.top = `${rect.top + window.scrollY - 15}px`;
      this.inputRef.current.style.left = `${rect.left +
        spacing.spacingUnit * 0.75}px`;
      this.inputRef.current.style.width = `${rect.width -
        spacing.spacingUnit}px`;
    }
    this.inputRef.current.focus();
    this.inputRef.current.select();
  }

  render() {
    const { forwardedRef, usePortal, ...rest } = this.props;

    if (!usePortal) {
      return <StyledInput ref={this.inputRef} {...rest} />;
    }
    return createUniversalPortal(
      <StyledInput ref={this.inputRef} {...rest} />,
      'body',
    );
  }
}

const FileNameInput = ({ editMode, useRef, file, ...rest }) => {
  if (editMode)
    return (
      <div>
        <InputComponent {...rest} forwardedRef={useRef} />
      </div>
    );
  return (
    <div>
      <Download />
      <LinkButton type="button" onClick={() => window.open(file.url)}>
        {file.title === '' ? '[Mangler filnavn]' : file.title}
        {` `}
        <span>({file.type})</span>
      </LinkButton>
    </div>
  );
};

const StyledInput = styled.input`
  height: ${spacing.medium};
  position: absolute;
  z-index: 9999;
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.normal};
  font-family: ${fonts.sans};
`;

const LinkButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: inherit;
  margin: 0 0 0 ${spacing.xsmall};
  padding: 0;
  color: ${colors.brand.primary};
  box-shadow: inset 0 -1px;
  border: 0;
  background: none;
  cursor: pointer;
  transform: translateY(-2px);
  span {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export default FileNameInput;
