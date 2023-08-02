import { ReactNode, useCallback, useState } from 'react';
import { Drawer, Modal, ModalTrigger } from '@ndla/modal';
import { IconButtonV2 as IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import ToggleSearchButton from '../Search/ToggleSearchButton';

interface Props {
  onClose: VoidFunction;
  children: (arg: () => void) => ReactNode;
  hideOnNarrowScreen?: boolean;
  ndlaFilm?: boolean;
}

const StyledDrawer = styled(Drawer)`
  background-color: ${colors.brand.greyLightest};
`;

const StyledHeader = styled.div`
  display: flex;
  gap: ${spacing.small};
  align-items: flex-start;
  ${mq.range({ from: breakpoints.tablet })} {
    width: 1024px;
    max-width: calc(100vw - 100px);
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 1024px;
    max-width: calc(100vw - 156px);
  }
  padding: 0;
  margin: 0 auto;

  display: flex;
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding-top: ${spacing.normal};
    padding-bottom: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding-top: calc(${spacing.normal} + ${spacing.small});
    padding-bottom: calc(${spacing.normal} + ${spacing.small});
  }
  > input {
    width: 100%;
    margin-right: -${spacing.large};
    ${mq.range({ until: breakpoints.tablet })} {
      .c-search-field__button--close {
        right: ${spacing.large} + ${spacing.normal};
        top: 16px;
      }
      .c-search-field__button--searchIcon {
        right: ${spacing.large};
        top: ${spacing.small};
      }
    }
  }
`;

const MastheadSearchModal = ({ onClose: onSearchClose, children, hideOnNarrowScreen, ndlaFilm }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    onSearchClose();
    setIsOpen(false);
  }, [onSearchClose]);

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>
        <ToggleSearchButton hideOnNarrowScreen={hideOnNarrowScreen} onClick={() => setIsOpen(true)} ndlaFilm={ndlaFilm}>
          {t('masthead.menu.search')}
        </ToggleSearchButton>
      </ModalTrigger>
      <StyledDrawer
        aria-label={t('searchPage.searchFieldPlaceholder')}
        position="top"
        expands
        size="small"
        animationDuration={200}
      >
        <StyledHeader>
          {children(closeModal)}
          <IconButton aria-label={t('welcomePage.closeSearch')} variant="ghost" colorTheme="light" onClick={closeModal}>
            <Cross className="c-icon--medium" />
          </IconButton>
        </StyledHeader>
      </StyledDrawer>
    </Modal>
  );
};

export default MastheadSearchModal;
