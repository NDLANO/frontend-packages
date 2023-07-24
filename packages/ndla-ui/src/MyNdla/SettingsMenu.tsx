/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { isMobile, isTablet } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { IconButtonV2, MenuItemProps, MenuButton, ButtonV2 } from '@ndla/button';
import { Drawer, Modal, ModalBody, ModalCloseButton, ModalHeader, ModalTrigger } from '@ndla/modal';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';

interface Props {
  menuItems?: MenuItemProps[];
  children?: ReactNode;
}

const StyledDrawer = styled(Drawer)`
  max-height: 100%;
  border-top-left-radius: ${misc.borderRadius};
  border-top-right-radius: ${misc.borderRadius};
  ${mq.range({ until: breakpoints.tablet })} {
    min-height: 20%;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 0 0 ${spacing.large} 0px;
`;

const StyledLi = styled.li`
  border-bottom: 1px solid ${colors.brand.neutral7};
`;

const SettingsMenu = ({ menuItems, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  if (isMobile || isTablet) {
    return (
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <ModalTrigger>
          <IconButtonV2 aria-label={t('myNdla.more')} colorTheme="light" variant="ghost">
            <HorizontalMenu />
          </IconButtonV2>
        </ModalTrigger>
        <StyledDrawer expands position="bottom" size="small">
          <ModalHeader>
            <h1>{t('myNdla.settings')}</h1>
            <ModalCloseButton />
          </ModalHeader>
          <StyledModalBody>
            {children}
            {!!menuItems?.length && (
              <StyledUl>
                {menuItems.map((item, i) => (
                  <StyledLi key={i}>
                    <ButtonV2
                      fontWeight="normal"
                      variant="ghost"
                      colorTheme={item.type}
                      onClick={(e) => {
                        setIsOpen(false);
                        item.onClick(e);
                      }}
                    >
                      {item.icon}
                      {item.text}
                    </ButtonV2>
                  </StyledLi>
                ))}
              </StyledUl>
            )}
          </StyledModalBody>
        </StyledDrawer>
      </Modal>
    );
  }
  return <MenuButton align="end" size="small" menuItems={menuItems} />;
};

export default SettingsMenu;
