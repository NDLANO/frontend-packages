import React, { ReactNode } from 'react';
import { CopyButton, ButtonV2 } from '@ndla/button';
import styled from '@emotion/styled';
import { ModalHeader, ModalBody, ModalCloseButton, Modal } from '@ndla/modal';
import { copyTextToClipboard } from '@ndla/util';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  width: 160px;
  margin: 6px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

interface Props {
  copyPageUrlLink?: string;
  licenseBox?: ReactNode;
}

const ArticleSideBar = ({ copyPageUrlLink, licenseBox }: Props) => {
  const { t } = useTranslation();
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };

  return (
    <Wrapper>
      {copyPageUrlLink && (
        <ButtonWrapper>
          <CopyButton
            onClick={copyLinkHandler}
            size="small"
            variant="outline"
            aria-live="assertive"
            copyNode={t('article.copyPageLinkCopied')}
            data-copy-string={copyPageUrlLink}
          >
            {t('article.copyPageLink')}
          </CopyButton>
        </ButtonWrapper>
      )}
      {licenseBox && (
        <Modal
          activateButton={
            <ButtonV2 size="small" variant="outline">
              {t('article.useContent')}
            </ButtonV2>
          }
          size="normal"
        >
          {(onClose: () => void) => (
            <>
              <ModalHeader>
                <ModalCloseButton onClick={onClose} title={t('article.closeLabel')} />
              </ModalHeader>
              <ModalBody>{licenseBox}</ModalBody>
            </>
          )}
        </Modal>
      )}
    </Wrapper>
  );
};

export default ArticleSideBar;
