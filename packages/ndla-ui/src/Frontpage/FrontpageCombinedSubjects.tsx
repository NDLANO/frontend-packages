import React, { useState } from 'react';
import { isIE, browserVersion } from 'react-device-detect';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { breakpoints, mq, spacing, colors, fonts } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import FrontpageSubjectIllustration from './illustrations/FrontpageSubjectIllustration';
// @ts-ignore
import FrontpageCircularSubject from './FrontpageCircularSubject';
import FrontpageMenuPortal from './FrontpageMenuPortal';
import FrontpageSubjectsInPortal from './FrontpageSubjectsInPortal';
import { category as categoryProp, elementRectType } from '../types';
import { calculateScaling } from './util';

const StyledMobileSubjectLink = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: ${spacing.small} 0;
  position: relative;
  width: 40%;
  &:last-of-type {
    margin-top: -${spacing.small};
  }
  ${mq.range({ from: breakpoints.mobileWide })} {
    width: calc(30vw + ${spacing.spacingUnit * 2}px);
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: none;
  }
`;

const StyledLinkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mq.range({ from: breakpoints.desktop })} {
    right: ${spacing.large};
    left: ${spacing.large};
  }
`;

const StyledLinkedText = styled.span`
  ${fonts.sizes('20px', '32px')};
  font-weight: ${fonts.weight.bold};
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: ${spacing.medium};
  color: ${colors.subject.dark};

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('24px', '32px')};
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  box-shadow: none;
  border: 0;
  background: none;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  &:before {
    content: '';
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background: ${colors.brand.lighter};
    transition: transform 200ms ease, background 200ms ease;
  }
  &:hover,
  &:focus {
    &:before {
      transform: scale(1.1);
      background: ${colors.brand.light};
    }
  }
  &:active {
    &:before {
      transform: scale(0.9);
    }
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 200px;
    height: 200px;
    &:before {
      width: 200px;
      height: 200px;
    }
  }
`;

type StyledIllustrationContainerProps = {
  isIE11: boolean;
};

//prettier-ignore
const StyledIllustrationContainer = styled.div<StyledIllustrationContainerProps>`
  width: 100%;
  pointer-events: none;
  ${props =>
    props.isIE11 &&
    css`
      transform: scale(1.2);
    `}
  ${mq.range({ from: breakpoints.tabletWide, until: breakpoints.desktop })} {
    width: calc(100vw - ${spacing.spacingUnit * 6}px);
  }
`;

const StyledNavContainer = styled.nav`
  position: relative;
  width: 100%;
  display: none;

  ${mq.range({ from: breakpoints.tabletWide })} {
    width: calc(100vw - ${spacing.spacingUnit * 6}px);
    display: flex;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    width: 100%;
    padding: 0 ${spacing.spacingUnit * 2.5}px;
  }
`;

interface StateObject {
  animationDirection?: 'in' | 'out';
  menuIsOpen: boolean;
  categoryIndex?: number;
  menuOpenedCounter: number;
  elementRect?: elementRectType;
}

type Props = {
  categories: categoryProp[];
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const initialState: StateObject = {
  menuOpenedCounter: 1,
  menuIsOpen: false,
};

const FrontpageCombinedSubjects: React.FunctionComponent<Props> = ({
  categories,
  t,
}) => {
  const [currentState, setState] = useState(initialState);
  const {
    elementRect,
    menuIsOpen,
    animationDirection,
    categoryIndex,
    menuOpenedCounter,
  } = currentState;

  const closeMenu = () => {
    if (isIE) {
      closedMenu();
    } else {
      setState(prevState => {
        return { ...prevState, animationDirection: 'out' };
      });
    }
  };

  const closedMenu = () => {
    setState(prevState => {
      return { ...prevState, menuIsOpen: false, categoryIndex: undefined };
    });
  };

  const openMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    categoryIndex: number,
  ) => {
    const elementRect = calculateScaling(event.currentTarget);
    setState(prevState => {
      return {
        ...prevState,
        categoryIndex,
        menuIsOpen: true,
        animationDirection: 'in',
        elementRect,
        menuOpenedCounter: menuOpenedCounter + 1,
      };
    });
  };

  const isIE11 = isIE && parseInt(browserVersion) < 12;
  return (
    <>
      <FrontpageMenuPortal
        menuOpenedCounter={menuOpenedCounter}
        menuIsOpen={menuIsOpen}
        onClosed={closedMenu}
        onClose={closeMenu}
        animationDirection={animationDirection}
        elementRect={elementRect}>
        {categoryIndex !== undefined && (
          <FrontpageSubjectsInPortal category={categories[categoryIndex]} />
        )}
      </FrontpageMenuPortal>
      {categories.map((category: categoryProp, index: number) => (
        <StyledMobileSubjectLink key={category.name}>
          <FrontpageCircularSubject
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              openMenu(event, index)
            }
            category={category}
          />
        </StyledMobileSubjectLink>
      ))}
      <StyledNavContainer>
        <StyledLinkContainer>
          {categories.map((category: categoryProp, index: number) => (
            <StyledButton
              key={category.name}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                openMenu(event, index)
              }>
              <StyledLinkedText>
                {t(`welcomePage.category.${category.name}`)}
              </StyledLinkedText>
            </StyledButton>
          ))}
        </StyledLinkContainer>
        <StyledIllustrationContainer isIE11={isIE11}>
          <FrontpageSubjectIllustration />
        </StyledIllustrationContainer>
      </StyledNavContainer>
    </>
  );
};

export default injectT(FrontpageCombinedSubjects);
