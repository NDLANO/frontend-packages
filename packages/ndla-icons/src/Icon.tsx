/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { ReactNode, SVGAttributes } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";

export interface Props extends SVGAttributes<SVGSVGElement> {
  title?: string;
  description?: string;
  children?: ReactNode;
  size?: keyof typeof sizes;
}

const StyledIcon = styled.svg`
  display: inline-block;
  fill: currentColor;
  vertical-align: middle;
  line-height: 1em;
  flex-shrink: 0;
`;

const sizes = {
  small: css`
    width: ${spacing.small};
    height: ${spacing.small};
  `,
  xsmall: css`
    width: ${spacing.xsmall};
    height: ${spacing.xsmall};
  `,
  nsmall: css`
    width: ${spacing.nsmall};
    height: ${spacing.nsmall};
  `,
  normal: css`
    width: ${spacing.normal};
    height: ${spacing.normal};
  `,
  large: css`
    width: ${spacing.large};
    height: ${spacing.large};
  `,
} as const;

const IconBase = ({
  children,
  size = "nsmall",
  role,
  title,
  description,
  width,
  height,
  "aria-hidden": ariaHidden = true,
  ...props
}: Props) => {
  return (
    <StyledIcon
      css={sizes[size]}
      data-icon=""
      fill="currentColor"
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
      role={role}
      {...props}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </StyledIcon>
  );
};

export default IconBase;
