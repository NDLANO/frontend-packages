/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, fonts, typography } from '@ndla/core';

const StyledFieldHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colors.brand.light};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  margin-top: ${spacing.normal};
  margin-bottom: ${spacing.small};
  ${(props) =>
    css`
      width: ${props.wrapperWidth}%;
    `};
  > div {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    margin: 0;
    padding: 0;
    background: 0;
    border: 0;
  }
`;

const StyledTitle = styled.h2`
  ${typography.mediumHeaderUppercase};
  span {
    ${fonts.sizes(16, 1.1)};
    font-weight: ${fonts.weight.normal};
    text-transform: none;
    padding-left: ${spacing.small};
    color: ${colors.text.light};
  }
`;

const FieldHeader = ({ title, subTitle, width, children, ...rest }) => (
  <StyledFieldHeaderWrapper wrapperWidth={width * 100} {...rest}>
    <StyledTitle>
      {title}
      {subTitle && <span>{subTitle}</span>}
    </StyledTitle>
    <div>{children}</div>
  </StyledFieldHeaderWrapper>
);

FieldHeader.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};

FieldHeader.defaultProps = {
  width: 1,
};

export default FieldHeader;
