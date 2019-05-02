/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Cross } from '@ndla/icons/action';
import { colors, fonts, spacing, misc } from '@ndla/core';

const StyledPill = styled.div`
  padding: ${spacing.spacingUnit / 8}px 0 ${spacing.spacingUnit / 8}px
    ${spacing.spacingUnit / 4}px;
  button {
    padding: ${spacing.xsmall} ${spacing.small};
    margin: 0;
    border-radius: ${misc.borderRadius};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.brand.primary};
    background: ${colors.brand.light};
    border: 0;
    transition: background 200ms ease;
    display: flex;
    flex-direction: row-reverse;
    .c-icon {
      width: 16.9px;
      height: 16.9px;
      margin-left: ${spacing.xsmall};
    }
    span {
      white-space: nowrap;
      ${fonts.sizes(16, 1.1)}
    }
    &:focus,
    &:hover {
      background: ${colors.brand.tertiary};
    }
  }
`;

const StyledPillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  margin: ${spacing.normal} 0 ${spacing.normal} -${spacing.xsmall};
`;

export const FormPill = ({ label, id, onClick }) => (
  <StyledPill>
    <button type="button" onClick={() => onClick(id)}>
      <Cross />
      <span>{label}</span>
    </button>
  </StyledPill>
);

FormPill.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export const FormPills = ({ labels, onClick }) => (
  <StyledPillsWrapper>
    {labels.map(labelItem => (
      <FormPill
        label={labelItem.label}
        key={labelItem.id}
        onClick={onClick}
        id={labelItem.id}
      />
    ))}
  </StyledPillsWrapper>
);

FormPills.propTypes = {
  onClick: PropTypes.func,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
