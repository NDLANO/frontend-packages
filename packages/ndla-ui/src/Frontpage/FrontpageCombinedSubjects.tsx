import React, { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { noScroll } from '@ndla/util';
import { breakpoints, mq, spacing, colors, fonts } from '@ndla/core';
import { SafeLink } from '../index';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import FrontpageSubjectIllustration from './FrontpageSubjectIllustration';
// @ts-ignore
import FrontpageCircularSubject from './FrontpageCircularSubject';
import FrontpageMenuPortal from './FrontpageMenuPortal';
import FrontpageSubjectsInPortal from './FrontpageSubjectsInPortal';
import { category } from './types';

const StyledMobileSubjectLink = styled('div')`
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

const LinkContainer = styled('div')`
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

const StyledLinkedText = styled('span')`
  ${fonts.sizes('20px', '32px')};
  font-weight: ${fonts.weight.bold};
  position: absolute;
  bottom: ${spacing.normal};
  color: ${colors.subject.dark};

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('24px', '32px')};
  }
`;

interface StyledButtonProps {
  isActive: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
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

const CLOSE_MENU = 'CLOSE_MENU';
const UPDATE_MENU = 'UPDATE_MENU';
const CLOSED_MENU = 'CLOSED_MENU';

interface State {
  category: category;
};

const menuReducer = (state: State, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return {
        ...state,
        ...action.data,
      };
    case CLOSE_MENU:
      return {
        ...state,
        animationDirection: action.data,
      };
    case CLOSED_MENU:
      return {
        ...state,
        ...action.data,
        menuIsOpen: false,
        categoryIndex: undefined,
      }
    default:
      throw new Error();
  }
};

interface Props {
  categories: category[];
  illustrationUrl: any;
  categoryIllustrations: any;
  categoryIllustrationsInModal: any;
  t: any;
};

const FrontpageCombinedSubjects: React.FunctionComponent<Props> = ({
  categories,
  illustrationUrl,
  categoryIllustrations,
  categoryIllustrationsInModal,
  t,
}) => {
  const [currentState, dispatch] = useReducer(menuReducer, { menuOpenedCounter: 0 });
  const {
    elementRect,
    fromInitalElement,
    menuIsOpen,
    animationDirection,
    categoryIndex,
    menuOpenedCounter,
  } = currentState;

  useEffect(() => {
    const onKeyUpEvent = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch({ type: CLOSE_MENU, data: 'out' });
      }
    };
    window.addEventListener('keyup', onKeyUpEvent);
    return () => {
      window.removeEventListener('keyup', onKeyUpEvent);
    };
  }, []);

  const calculateScaling = (element) => {
    const { innerWidth } = window;
    const elementClientRect:DOMRect = element.getBoundingClientRect();
    return {
      fromX: elementClientRect.x + elementClientRect.width / 2,
      fromY: elementClientRect.y + elementClientRect.height / 2,
      fromScale: elementClientRect.width / innerWidth,
    }
  };

  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU, data: 'out' })
  }

  const closedMenu = () => {
    dispatch({
      type: CLOSED_MENU,
      data: {
        elementRect: calculateScaling(fromInitalElement),
      },
    });
    noScroll(false, 'frontpagePortal');
  };

  const openMenu = ({ event, index }) => {
    dispatch({
      type: UPDATE_MENU,
      data: {
        categoryIndex: index,
        menuIsOpen: true,
        animationDirection: 'in',
        elementRect: calculateScaling(event.target),
        fromInitalElement: event.target,
        menuOpenedCounter: menuOpenedCounter + 1,
      },
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
            onClick={event => openMenu({ event, index })}
            textValue={t(`welcomePage.category.${category.name}`)}
            illustrationUrl={categoryIllustrations[category.name]}
          />
        </StyledMobileSubjectLink>
      ))}
      <StyledNavContainer illustrationUrl={illustrationUrl}>
        <LinkContainer>
          {categories.map((category: categoryProp, index: number) => (
            <StyledButton
              key={category.name}
              onClick={event => openMenu({ event, index })}>
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

FrontpageCombinedSubjects.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryIllustrationsInModal: PropTypes.arrayOf(PropTypes.string).isRequired,
  illustrationUrl: PropTypes.string.isRequired,
};

export default injectT(FrontpageCombinedSubjects);
