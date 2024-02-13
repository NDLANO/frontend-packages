/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconButtonV2 } from "@ndla/button";
import { breakpoints, colors, mq, spacing, stackOrder } from "@ndla/core";
import { ChevronDown, ChevronUp } from "@ndla/icons/common";

interface Props extends ComponentProps<"aside"> {
  children?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: ${stackOrder.offsetSingle};
  margin-bottom: ${spacing.large};
  overflow: hidden;
  padding-bottom: ${spacing.nsmall};

  @media print {
    overflow: visible;
  }

  h2:first-of-type {
    border-bottom: 2px solid ${colors.brand.primary};
    margin-top: 0;
    margin-bottom: ${spacing.normal};
  }

  h2,
  h3,
  h4,
  h5 {
    display: block;
    margin-top: ${spacing.normal};
    margin-bottom: ${spacing.small};
    border-bottom: 1px solid ${colors.brand.light};
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  color: ${colors.brand.greyDark};
  padding: ${spacing.normal} ${spacing.normal} ${spacing.large};
  border: 1px solid ${colors.brand.greyLight};
  max-height: 190px;
  transition: max-height 0.6s ease-in-out;
  overflow: hidden;

  &:after {
    content: "";
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 99%;
    margin: 0.5% 0.5% 0 0.5%;
    transition: opacity 0.5s cubic-bezier(0.74, -0.04, 0.96, 0.97);
    /* The 00 after our color is to set its opacity to 0 */
    background: linear-gradient(${colors.brand.light}00, ${colors.white});
    opacity: 1;
    z-index: ${stackOrder.base};
  }

  @media print {
    max-height: revert;
    &:after {
      display: none;
    }
  }

  & > ul:not([class]),
  :not(li) > ul:not([class]) {
    ${mq.range({ from: breakpoints.desktop })} {
      margin-left: ${spacing.normal};
    }
  }

  & > ol:not([class]),
  :not(li) > ol:not([class]) {
    ${mq.range({ from: breakpoints.desktop })} {
      margin-left: ${spacing.large};
    }
  }
`;

const StyledIconButton = styled(IconButtonV2)`
  margin-top: -20px;
  z-index: ${stackOrder.offsetSingle};

  @media print {
    display: none;
  }
`;

const expandedStyle = css`
  max-height: 500vh;
`;

const expandedContentStyle = css`
  max-height: 500vh;
  &:after {
    opacity: 0;
    z-index: ${stackOrder.hide};
  }
`;

const FactBox = forwardRef<HTMLElement, Props>(
  ({ children, open, onOpenChange, defaultOpen = false, ...rest }, ref) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open);
      }
    }, [open]);

    const onClick = useCallback(() => {
      const newOpen = !isOpen;
      setIsOpen(newOpen);
      onOpenChange?.(newOpen);
    }, [isOpen, onOpenChange]);

    return (
      <StyledAside {...rest} css={[isOpen ? expandedStyle : undefined]} ref={ref}>
        <StyledDiv css={isOpen ? expandedContentStyle : undefined}>{children}</StyledDiv>
        <StyledIconButton onClick={onClick} aria-label={t(`factbox.${isOpen ? "close" : "open"}`)}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </StyledIconButton>
      </StyledAside>
    );
  },
);

export default FactBox;
