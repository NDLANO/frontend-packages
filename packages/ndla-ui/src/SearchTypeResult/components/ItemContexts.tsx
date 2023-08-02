/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, Fragment } from 'react';
import SafeLink from '@ndla/safelink';
import { Additional, Core } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from '@ndla/modal';
import { useTranslation } from 'react-i18next';

const BreadcrumbPath = styled.div`
  color: ${colors.text.light};
  ${fonts.sizes('14px', '20px')};

  svg {
    margin-left: ${spacing.small};
  }
`;

const ModalButton = styled(ButtonV2)`
  z-index: 1;
  position: relative;
  ${fonts.sizes('14px', '20px')};
  box-shadow: none;
  &:hover {
    box-shadow: inset 0 -1px;
  }
`;

const Content = styled.div`
  padding: 0 ${spacing.small} ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0 ${spacing.large} ${spacing.normal};
  }
`;

const ContextList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ContextListItem = styled.li`
  margin-bottom: ${spacing.normal};
  ${fonts.sizes('16px', '28px')};
`;

type context = {
  breadcrumb: string[];
  url: string;
  isAdditional?: boolean;
};
export type ItemContextsType = {
  contexts: context[];
  id: string | number;
  title: string;
};

const iconStyle = { width: '22px', height: '22px' };

const ItemContexts = ({ contexts, id, title }: ItemContextsType) => {
  const { t } = useTranslation();
  const mainContext = contexts[0];
  const Breadcrumb = ({ breadcrumb, children }: { breadcrumb: string[]; children?: ReactNode }) => (
    <BreadcrumbPath>
      {breadcrumb.map((breadcrumbItem: string, i: number) => (
        <Fragment key={`${breadcrumbItem}-${id}`}>
          {i > 0 && <> &rsaquo; </>}
          {breadcrumbItem}
        </Fragment>
      ))}
      {children}
    </BreadcrumbPath>
  );

  return (
    <Breadcrumb breadcrumb={mainContext.breadcrumb}>
      &nbsp;
      {contexts.length > 1 && (
        <Modal>
          <ModalTrigger>
            <ModalButton variant="link">
              {t('searchPage.contextModal.button', {
                count: contexts.length - 1,
              })}
            </ModalButton>
          </ModalTrigger>
          <ModalContent animation="subtle" animationDuration={50}>
            <ModalHeader>
              <ModalTitle>{t('searchPage.contextModal.heading')}</ModalTitle>
              <ModalCloseButton />
            </ModalHeader>
            <Content>
              <ContextList>
                {contexts.map((context) => (
                  <ContextListItem key={context.url}>
                    <SafeLink to={context.url}>{title}</SafeLink>
                    <Breadcrumb breadcrumb={context.breadcrumb}>
                      {context.isAdditional ? <Additional style={iconStyle} /> : <Core style={iconStyle} />}
                    </Breadcrumb>
                  </ContextListItem>
                ))}
              </ContextList>
            </Content>
          </ModalContent>
        </Modal>
      )}
    </Breadcrumb>
  );
};

export default ItemContexts;
