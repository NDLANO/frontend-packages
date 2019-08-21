/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import FocusTrapReact from 'focus-trap-react';
// @ts-ignore
import Button from '@ndla/button';

import { spacing, misc, animations, typography } from '@ndla/core';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledOptionWrapperAnimation = styled.div`
  filter: drop-shadow(0px 2px 5px rgba(0,0,0,0.4));
  position: absolute;
  bottom: ${spacing.large};
  left: 0;
  z-index: 1;
  ${animations.fadeIn(animations.durations.fast)}
`;

const StyledOptionContent = styled.div`
  opacity: 0;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
  ${animations.fadeIn()}
`;

const StyledOptionWrapper = styled.div`
  background: #fff;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal};
  display: flex;
  flex-direction: column;
  padding: ${spacing};
  animation-duration: 400ms;
  animation-name: wrapperAnimation;
  animation-timing-function: cubic-bezier(.46,.01,.19,1);;
  animation-fill-mode: forwards;
  @keyframes wrapperAnimation {
    0% {
      padding-top: ${spacing.spacingUnit + 3}px;
      padding-right: ${spacing.spacingUnit + 3}px;
      clip-path: inset(99% 99% 0 0 round 1%);
    }
    50% {
      padding-top: ${spacing.spacingUnit + 3}px;
      padding-right: ${spacing.spacingUnit + 3}px;
      clip-path: inset(0 0 0 0 round 1%);
    }
    100% {
      padding-top: ${spacing.normal};
      padding-right: ${spacing.normal};
      clip-path: inset(0 0 0 0 round 0%);
    }
  }
`;

type optionProps = {
  name: string;
  onClick: VoidFunction;
};

type Props = {
  options: Array<optionProps>;
  label: string;
};

const FooterQualityInsurance: React.FC<Props> = ({
  options,
  label,
}) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <StyledWrapper>
      <FocusTrapReact
        active={isOpen}
        focusTrapOptions={{
          onDeactivate: () => toggleIsOpen(false),
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <div>
          <Button onClick={() => toggleIsOpen(!isOpen)}>
            {label}
          </Button>
          {isOpen && (
            <StyledOptionWrapperAnimation>
              <StyledOptionWrapper>
                <StyledOptionContent>
                  <h1 css={typography.smallHeading}>{label}</h1>
                  {options.map(option => (
                    <Button link key={option.name} onClick={option.onClick}>
                      {option.name}
                    </Button>
                  ))}
                </StyledOptionContent>
              </StyledOptionWrapper>
            </StyledOptionWrapperAnimation>
          )}
        </div>
      </FocusTrapReact>
    </StyledWrapper>
  );
};

export default FooterQualityInsurance;
