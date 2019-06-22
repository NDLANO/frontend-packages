import React, { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { noScroll } from '@ndla/util';
import { breakpoints, mq, spacing, colors, fonts } from '@ndla/core';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import FrontpageSubjectIllustration from './FrontpageSubjectIllustration';
// @ts-ignore
import FrontpageCircularSubject from './FrontpageCircularSubject';
import FrontpageMenuPortal from './FrontpageMenuPortal';
import FrontpageSubjectsInPortal from './FrontpageSubjectsInPortal';
import { category as categoryProp } from './types';

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

const LinkContainer = styled.div`
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
  bottom: ${spacing.normal};
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
  &:before {
    content: "";
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background: ${colors.brand.lighter};
    transition: transform 200ms ease, background 200ms ease;
  }
  &:hover, &:focus {
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

const StyledIllustrationContainer = styled.div`
  width: 100%;
  pointer-events: none;
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

type elementRectType = {
  fromX: number;
  fromY: number;
  fromScale: number;
};

interface StateObject {
  animationDirection?: 'in' | 'out';
  menuIsOpen?: boolean;
  categoryIndex?: number;
  menuOpenedCounter?: number;
  elementRect?: elementRectType;
  fromInitalElement?: HTMLElement;
}

const menuReducer: React.Reducer<StateObject, StateObject> = (state, data) => ({
  ...state,
  ...data,
});

type Props = {
  categories: categoryProp[];
  illustrationUrl: string;
  categoryIllustrations: {
    [key: string]: string;
  };
  categoryIllustrationsInModal: {
    [key: string]: string;
  };
  t: any;
};

const initialState: StateObject = {
  menuOpenedCounter: 1,
};

const FrontpageCombinedSubjects: React.FunctionComponent<Props> = ({
  categories,
  illustrationUrl,
  categoryIllustrations,
  categoryIllustrationsInModal,
  t,
}) => {
  const [currentState, dispatch] = useReducer<React.Reducer<StateObject, StateObject>>(menuReducer, initialState);
  const {
    elementRect,
    fromInitalElement,
    menuIsOpen,
    animationDirection,
    categoryIndex,
    menuOpenedCounter,
  } = currentState;

  const calculateScaling = (element: HTMLElement): elementRectType => {
    const { innerWidth } = window;
    const elementClientRect:ClientRect = element.getBoundingClientRect();
    return {
      fromX: elementClientRect.left + elementClientRect.width / 2,
      fromY: elementClientRect.top + elementClientRect.height / 2,
      fromScale: elementClientRect.width / innerWidth,
    }
  };

  const closeMenu = () => {
    dispatch({ animationDirection: 'out' });
  }

  const closedMenu = () => {
    dispatch({
      menuIsOpen: false,
      categoryIndex: undefined,
    });
    noScroll(false, 'frontpagePortal');
  };

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>, categoryIndex: number) => {
    dispatch({
      categoryIndex,
      menuIsOpen: true,
      animationDirection: 'in',
      elementRect: calculateScaling(event.currentTarget),
      fromInitalElement: event.currentTarget,
      menuOpenedCounter: menuOpenedCounter ? menuOpenedCounter + 1 : 1,
    });
    noScroll(true, 'frontpagePortal');
  };
  return (
    <>
      {menuIsOpen && <FrontpageMenuPortal
        menuOpenedCounter={menuOpenedCounter}
        onClosed={closedMenu}
        onClose={closeMenu}
        animationDirection={animationDirection}
        elementRect={elementRect}>
        {categoryIndex !== undefined && (
          <FrontpageSubjectsInPortal
            illustration={categoryIllustrationsInModal[categories[categoryIndex].name]}
            illustrationMobile={categoryIllustrations[categories[categoryIndex].name]}
            title={t(`welcomePage.category.${categories[categoryIndex].name}`)}
            subjects={categories[categoryIndex].subjects}
          />
        )}
      </FrontpageMenuPortal>}
      {categories.map((category: categoryProp, index: number) => (
        <StyledMobileSubjectLink key={category.name}>
          <FrontpageCircularSubject
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => openMenu(event, index)}
            textValue={t(`welcomePage.category.${category.name}`)}
            illustrationUrl={categoryIllustrations[category.name]}
          />
        </StyledMobileSubjectLink>
      ))}
      <StyledNavContainer>
        <LinkContainer>
          {categories.map((category: categoryProp, index: number) => (
            <StyledButton
              key={category.name}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => openMenu(event, index)}>
              <StyledLinkedText>{t(`welcomePage.category.${category.name}`)}</StyledLinkedText>
            </StyledButton>
          ))}
        </LinkContainer>
        <StyledIllustrationContainer>
          <FrontpageSubjectIllustration />
        </StyledIllustrationContainer>
      </StyledNavContainer>
    </>
  );
};

export default injectT(FrontpageCombinedSubjects);
