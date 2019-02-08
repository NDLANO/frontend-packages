/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors, spacing, fonts } from '@ndla/core';

const StyledFormFieldHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colors.brand.light};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  margin-top: ${spacing.normal};
  margin-bottom: ${spacing.small};
  ${props =>
    css`
      width: ${props.wrapperWidth}%;
    `};
  > div {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
  }
`;

const StyledTitle = styled.h2`
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  padding-right: ${spacing.small};
  margin: 0;
  ${fonts.sizes(20, 1.1)};
  span {
    ${fonts.sizes(16, 1.1)};
    font-weight: ${fonts.weight.normal};
    text-transform: none;
    padding-left: ${spacing.small};
    color: ${colors.text.light};
  }
`;

const FormFieldHeader = ({ title, subTitle, width, children }) => (
  <StyledFormFieldHeaderWrapper wrapperWidth={width * 100}>
    <StyledTitle>
      {title}
      {subTitle && <span>{subTitle}</span>}
    </StyledTitle>
    <div>{children}</div>
  </StyledFormFieldHeaderWrapper>
);

FormFieldHeader.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};

FormFieldHeader.defaultProps = {
  width: 1,
};

export default FormFieldHeader;
