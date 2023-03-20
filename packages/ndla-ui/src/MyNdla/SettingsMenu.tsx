/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { isMobile, isTablet } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { IconButtonV2, MenuItemProps, MenuButton, ButtonV2 } from '@ndla/button';
import { Drawer, ModalBody, ModalCloseButton, ModalHeaderV2 } from '@ndla/modal';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';

interface Props {
  menuItems?: MenuItemProps[];
  children?: (close: () => void) => ReactNode;
}

const StyledDrawer = styled(Drawer)`
  max-height: 100%;
  border-top-left-radius: ${misc.borderRadius};
  border-top-right-radius: ${misc.borderRadius};
  ${mq.range({ until: breakpoints.tablet })} {
    min-height: 20%;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 0 0 ${spacing.large} 0px;
`;

const Li = styled.li`
  border-bottom: 1px solid ${colors.brand.neutral7};
`;

const SettingsMenu = ({ menuItems, children }: Props) => {
  const { t } = useTranslation();
  if (isMobile || isTablet) {
    return (
      <StyledDrawer
        expands
        position="bottom"
        size="small"
        activateButton={
          <IconButtonV2 aria-label={t('myNdla.more')} variant="ghost">
            <HorizontalMenu />
          </IconButtonV2>
        }
      >
        {(close) => (
          <>
            <ModalHeaderV2>
              <h1>{t('myNdla.settings')}</h1>
              <ModalCloseButton onClick={close} />
            </ModalHeaderV2>
            <StyledModalBody>
              {children?.(close)}
              {!!menuItems?.length && (
                <Ul>
                  {menuItems.map((item, i) => (
                    <Li key={i}>
                      <ButtonV2
                        fontWeight="normal"
                        variant="ghost"
                        colorTheme={item.type}
                        onClick={(e) => {
                          close();
                          item.onClick(e);
                        }}
                      >
                        {item.icon}
                        {item.text}
                      </ButtonV2>
                    </Li>
                  ))}
                </Ul>
              )}
            </StyledModalBody>
          </>
        )}
      </StyledDrawer>
    );
  }
  return <MenuButton align="end" size="small" menuItems={menuItems} />;
};

export default SettingsMenu;
