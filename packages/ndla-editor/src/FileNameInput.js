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
import { css } from '@emotion/core';
import { InformationOutline } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // Get position from props.forwardedRef.
    if (this.props.usePortal) {
      const rect = this.props.forwardedRef.current.childNodes[this.props.childIndex].firstChild.getBoundingClientRect();
      this.inputRef.current.style.top = `${rect.top + window.scrollY - 15}px`;
      this.inputRef.current.style.left = `${rect.left + spacing.spacingUnit * 0.75}px`;
      this.inputRef.current.style.width = `${rect.width - spacing.spacingUnit}px`;
    }
    this.inputRef.current.focus();
    this.inputRef.current.select();
  }

  render() {
    const { forwardedRef, usePortal, ...rest } = this.props;

    if (!usePortal) {
      return <StyledInput ref={this.inputRef} {...rest} />;
    }
    return createUniversalPortal(<StyledInput ref={this.inputRef} {...rest} />, 'body');
  }
}

const getButtonComponent = (file, isMissing, messages) => {
  if (isMissing) {
    return (
      <Tooltip tooltip={messages.missingFileTooltip}>
        <LinkButton
          type="button"
          css={css`
            color: red;
          `}>
          {file.title === '' ? messages.missingTitle : file.title}
          {` `}
          <span>
            ({file.type}) {<InformationOutline />}
          </span>
        </LinkButton>
      </Tooltip>
    );
  } else {
    return (
      <div
        css={css`
          max-width: 100%;
        `}>
        <Tooltip tooltip={`${file.title} (${file.type.toUpperCase()})`}>
          <LinkButton type="button" onClick={() => window.open(file.url)}>
            {file.title === '' ? messages.missingTitle : file.title}
            {` `}
            <span>({file.type})</span>
          </LinkButton>
        </Tooltip>
      </div>
    );
  }
};

const FileNameInput = ({ editMode, useRef, file, isMissing, messages, ...rest }) => {
  if (editMode)
    return (
      <div>
        <InputComponent {...rest} forwardedRef={useRef} />
      </div>
    );
  return (
    <div>
      <div>
        <Download />
      </div>
      {getButtonComponent(file, isMissing, messages)}
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
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
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
