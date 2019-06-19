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
import MenuPortal from './MenuPortal';
import FrontpageSubjectsInPortal from './FrontpageSubjectsInPortal';
import { category } from './types';

const StyledSubjectLink = styled('div')`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: ${spacing.small} 0;
  position: relative;

  ${mq.range({ from: breakpoints.tablet })} {
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
  bottom: ${spacing.spacingUnit * 1.75}px;
  color: ${colors.subject.dark};

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('22px', '32px')};
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
  width: 200px;
  height: 200px;
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
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: ${colors.brand.light};
    transition: transform 200ms ease, background 200ms ease;
  }
  &:hover, &:focus {
    &:before {
      transform: scale(1.1);
      background: ${colors.brand.tertiary};
    }
  }
`;

const StyledIllustrationContainer = styled.div`
  width: 100%;

  ${mq.range({ from: breakpoints.desktop })} {
    left: ${spacing.normal};
    right: ${spacing.normal};
  }
`;

const StyledNavContainer = styled.nav`
  width: 100%;
  position: relative;
  display: none;

  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    padding: 0 ${spacing.spacingUnit * 2.5}px;
  }
`;

const UPDATE_MENU_ANIMATION_DIRECTION = 'UPDATE_MENU_ANIMATION_DIRECTION';
const UPDATE_MENU = 'UPDATE_MENU';
const UPDATE_MENU_OPENSTATE = 'UPDATE_MENU_OPENSTATE';
const UPDATE_MENU_CLOSESTATE = 'UPDATE_MENU_CLOSESTATE';

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
    case UPDATE_MENU_ANIMATION_DIRECTION:
      return {
        ...state,
        animationDirection: action.data,
      };
    case UPDATE_MENU_OPENSTATE:
      return {
        ...state,
        menuIsOpen: action.data,
      };
    case UPDATE_MENU_CLOSESTATE:
      return {
        ...state,
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
  const [currentState, dispatch] = useReducer(menuReducer, {});
  const {
    openedModalFromElement,
    menuIsOpen,
    animationDirection,
    categoryIndex,
  } = currentState;

  useEffect(() => {
    const onKeyUpEvent = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch({ type: UPDATE_MENU_ANIMATION_DIRECTION, data: 'out' });
      }
    };
    window.addEventListener('keyup', onKeyUpEvent);
    return () => {
      window.removeEventListener('keyup', onKeyUpEvent);
    };
  }, []);

  const closeMenu = () => {
    dispatch({ type: UPDATE_MENU_CLOSESTATE });
    noScroll(false, 'frontpagePortal');
  };

  const openMenu = ({ event, index }) => {
    dispatch({
      type: UPDATE_MENU,
      data: {
        categoryIndex: index,
        menuIsOpen: true,
        animationDirection: 'in',
        openedModalFromElement: event.target,
      },
    });
    noScroll(true, 'frontpagePortal');
  };

  console.log(categories);

  return (
    <>
      <MenuPortal
        isOpen={menuIsOpen}
        onClose={closeMenu}
        animationDirection={animationDirection}
        onChangeAnimationDirection={() =>
          dispatch({ type: UPDATE_MENU_ANIMATION_DIRECTION, data: 'out' })
        }
        fromInitalElement={openedModalFromElement}>
        {categoryIndex !== undefined && (
          <FrontpageSubjectsInPortal
            illustration={categoryIllustrationsInModal[categories[categoryIndex].name]}
            title={t(`welcomePage.category.${categories[categoryIndex].name}`)}
            subjects={categories[categoryIndex].subjects}
          />
        )}
      </MenuPortal>
      {categories.map((category: categoryProp, index: number) => (
        <StyledSubjectLink key={category.name}>
          <FrontpageCircularSubject
            onClick={event => openMenu({ event, index })}
            textValue={t(`welcomePage.category.${category.name}`)}
            illustrationUrl={categoryIllustrations[category.name]}
          />
        </StyledSubjectLink>
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
