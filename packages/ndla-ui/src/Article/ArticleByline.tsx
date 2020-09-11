/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button, { CopyButton } from '@ndla/button';
import { colors, fonts, spacing } from '@ndla/core';
import { copyTextToClipboard } from '@ndla/util';

const Wrapper = styled.div`
  margin-top: ${spacing.normal};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  border-top: 2px solid ${colors.brand.greyLighter};
  ${fonts.sizes('14px', '18px')};
  font-family: ${fonts.sans};
  color: ${colors.brand.greyDark};
`;

const TextWrapper = styled.div`
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
  button {
    margin-bottom: 10px;
  }
  button:first-of-type {
    margin-right: 16px;
  }
`;

type AuthorProps = {
  name: string;
};

type Props = {
  authors?: AuthorProps[];
  published: string;
  license: string;
  licenseBox?: React.ReactNode;
  copyPageUrlLink?: string;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const ArticleByline = ({
  authors,
  license,
  licenseBox,
  published,
  copyPageUrlLink,
  t,
}: Props) => {
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };

  return (
    <Wrapper>
      <div>
        {t('article.lastUpdated')} {published}
      </div>
      {authors && (
        <TextWrapper>
          {authors.length > 1
            ? t('article.multipleAuthorsLabel')
            : t('article.singleAuthorsLabel')}
          {authors.map((author, index) => {
            let separator = ' ';
            if (index > 0) {
              if (index === authors.length - 1) {
                separator = ` ${t('article.authorsConjunction')} `;
              } else {
                separator = ', ';
              }
            }
            return (
              <span key={author.name}>
                {separator}
                {author.name}
              </span>
            );
          })}
          <span>{` (${license})`}</span>
        </TextWrapper>
      )}
      <ButtonWrapper>
        {licenseBox && (
          <Modal
            activateButton={
              <Button size="small" borderShape="rounded" outline>
                {t('article.useContent')}
              </Button>
            }
            size="medium">
            {(onClose: void) => (
              <>
                <ModalHeader modifier="no-bottom-padding">
                  <ModalCloseButton onClick={onClose} title="Lukk" />
                </ModalHeader>
                <ModalBody>{licenseBox}</ModalBody>
              </>
            )}
          </Modal>
        )}
        {copyPageUrlLink && (
          <CopyButton
            onClick={copyLinkHandler}
            size="small"
            borderShape="rounded"
            outline
            copyNode={t('article.copyPageLinkCopied')}>
            {t('article.copyPageLink')}
          </CopyButton>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default injectT(ArticleByline);
