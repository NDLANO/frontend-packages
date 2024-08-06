/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, fonts, spacing, spacingUnit, misc } from "@ndla/core";
import { CloseLine } from "@ndla/icons/action";

const StyledPill = styled.div`
  padding: ${spacingUnit / 8}px 0 ${spacingUnit / 8}px ${spacingUnit / 4}px;
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
    [data-icon] {
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

interface FormPillProps {
  label: string;
  id: string;
  onClick?: (id: string) => void;
}
export const FormPill = ({ label, id, onClick }: FormPillProps) => (
  <StyledPill>
    <button type="button">
      <CloseLine size="small" onClick={() => onClick?.(id)} />
      <span>{label}</span>
    </button>
  </StyledPill>
);

interface FormPillsProps {
  labels: string[];
  onClick?: (id: string) => void;
}

export const FormPills = ({ labels, onClick }: FormPillsProps) => (
  <StyledPillsWrapper>
    {labels.map((label) => (
      <FormPill label={label} key={label} onClick={onClick} id={label} />
    ))}
  </StyledPillsWrapper>
);
