/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import Button, { IconButton, AddButton } from '@ndla/button';
import { FolderOutlined } from '@ndla/icons/contentType';
import { FileDocumentOutline } from '@ndla/icons/common';
import { Code, Link } from '@ndla/icons/editor';
import { Cross } from '@ndla/icons/action';
import Modal from '@ndla/modal';
import { fonts, spacing, breakpoints, mq, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { useSnack } from '../SnackBar';

const Container = styled.div`
  padding: ${spacing.normal} 0px;
  position: relative;
  button {
    margin-left: auto;
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  padding: 0px ${spacing.large};
  gap: ${spacing.small};
`;

const DialogFooter = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  justify-content: flex-end;
  margin-top: ${spacing.small};
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: ${spacing.small};
  top: ${spacing.small};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: ${spacing.xxsmall};
  padding-bottom: ${spacing.small};
`;

const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.brand.greyLight};
`;
const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ResourceCount = styled.div`
  display: flex;
  gap: ${spacing.small};
`;
const Title = styled.h1`
  ${fonts.sizes(24)};
  ${fonts.weight.bold}
`;

const ModalSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spacing.xsmall};
  flex-direction: column;
  border-bottom: 1px solid ${colors.brand.greyLight};
  padding-bottom: ${spacing.normal};
`;

const Text = styled.p`
  display: flex;
  ${fonts.sizes('18')};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
`;

const LinkCode = styled.code`
  display: flex;
  padding: ${spacing.small};
  ${fonts.sizes('16')};
  border-radius: 4px;
  color: ${colors.text.primary};
  border: 1px solid ${colors.brand.neutral7};
  margin-bottom: ${spacing.small};
`;

type DialogExampleProps = {
  closeCallback?: () => void;
  isOpen: boolean;
  title: string;
  subResources: number;
  subFolders: number;
  linkToCopy: string;
  codeToCopy: string;
};

interface IconCountProps {
  type: 'resource' | 'folder';
  count?: number;
}

const IconCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  ${fonts.sizes(16)};

  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const IconCount = ({ type, count }: IconCountProps) => {
  const Icon = type === 'resource' ? FileDocumentOutline : FolderOutlined;
  const { t } = useTranslation();

  if (!count) return null;

  return (
    <IconCountWrapper>
      <Icon aria-label={t(`myNdla.${type}s`)} />
      <span>{t(`myNdla.${type}s`, { count })}</span>
    </IconCountWrapper>
  );
};

const ShareModal = ({
  title,
  subResources,
  subFolders,
  isOpen,
  closeCallback,
  linkToCopy,
  codeToCopy,
}: DialogExampleProps) => {
  const { t } = useTranslation();
  const { addSnack } = useSnack();
  return (
    <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
      {(onCloseModal: () => void) => (
        <Container>
          <StyledIconButton size="xsmall" aria-label={t('modal.closeModal')} greyLighter onClick={onCloseModal}>
            <Cross />
          </StyledIconButton>
          <Wrapper>
            <StyledModalHeader>
              <HeaderTop>
                <Title>{t('myNdla.share')}</Title>
              </HeaderTop>
              <MetaInfo>
                <ResourceCount>
                  <IconCount type={'folder'} count={subFolders} />
                  <IconCount type={'resource'} count={subResources} />
                </ResourceCount>
                <Button ghostPillOutline>{t('myNdla.preview')}</Button>
              </MetaInfo>
            </StyledModalHeader>

            <ModalSection>
              <Text>{t('myNdla.copyLink')}</Text>
              <LinkCode>{linkToCopy}</LinkCode>

              <AddButton
                text={t('license.embedlink.copyTitle')}
                aria-label=""
                onClick={() => {
                  addSnack({ id: linkToCopy, content: t('license.hasCopiedTitle') });
                  navigator.clipboard.writeText(linkToCopy);
                }}>
                <Link />
              </AddButton>
            </ModalSection>
            <ModalSection>
              <Text>{t('myNdla.copyCode')}</Text>
              <LinkCode>{codeToCopy}</LinkCode>
              <AddButton
                text={t('codeBlock.copyCode')}
                aria-label=""
                onClick={() => {
                  addSnack({ id: codeToCopy, content: t('license.hasCopiedTitle') });
                  navigator.clipboard.writeText(codeToCopy);
                }}>
                <Code />
              </AddButton>
            </ModalSection>
            <DialogFooter>
              <Button outline onClick={onCloseModal}>
                {t('codeEditor.abort')}
              </Button>
            </DialogFooter>
          </Wrapper>
        </Container>
      )}
    </Modal>
  );
};
export default ShareModal;
