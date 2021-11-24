/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import SafeLink from '@ndla/safelink';
import { Additional, Core } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';

// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import Modal, { ModalCloseButton } from '@ndla/modal';
import { useTranslation } from 'react-i18next';

const BreadcrumbPath = styled.div`
  color: ${colors.text.light};
  ${fonts.sizes('14px', '20px')};
`;

const ModalButton = styled(Button)`
  ${fonts.sizes('14px', '20px')};
  box-shadow: none;
  &:hover {
    box-shadow: inset 0 -1px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.normal} ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.large};
  }
`;

const ModalHeading = styled.h2`
  margin: 0;
  ${fonts.sizes('16px', '20px')};
  font-weight: 600;
`;

const ModalContent = styled.div`
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

const IconWrapper = styled.div`
  margin-left: ${spacing.small};
  display: flex;
  align-items: center;
`;

type context = {
  breadcrumb: string[];
  url: string;
  isAdditional?: boolean;
};
export type ItemContextsType = {
  contexts: context[];
  id: string;
  title: string;
};

const ItemContexts = ({ contexts, id, title }: ItemContextsType) => {
  const { t } = useTranslation();
  const mainContext = contexts[0];
  const Breadcrumb = ({ breadcrumb, children }: { breadcrumb: string[]; children?: React.ReactNode }) => (
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
        <Modal
          activateButton={
            <ModalButton link>
              {t('searchPage.contextModal.button', {
                count: contexts.length - 1,
              })}
            </ModalButton>
          }
          animation="subtle"
          animationDuration={50}
          backgroundColor="white"
          size="medium">
          {(onClose: () => void) => (
            <>
              <ModalHeader>
                <ModalHeading>{t('searchPage.contextModal.heading')}</ModalHeading>
                <ModalCloseButton onClick={onClose} title={t('searchPage.close')} />
              </ModalHeader>
              <ModalContent>
                <ContextList>
                  {contexts.map((context) => (
                    <ContextListItem key={context.url}>
                      <SafeLink to={context.url}>{title}</SafeLink>
                      <Breadcrumb breadcrumb={context.breadcrumb}>
                        <IconWrapper>
                          {context.isAdditional ? (
                            <Additional style={{ width: '22px', height: '22px' }} />
                          ) : (
                            <Core style={{ width: '22px', height: '22px' }} />
                          )}
                        </IconWrapper>
                      </Breadcrumb>
                    </ContextListItem>
                  ))}
                </ContextList>
              </ModalContent>
            </>
          )}
        </Modal>
      )}
    </Breadcrumb>
  );
};

export default ItemContexts;
