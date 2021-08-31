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
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button, { CopyButton } from '@ndla/button';
import { colors, fonts, spacing } from '@ndla/core';
import { copyTextToClipboard, printPage } from '@ndla/util';
import { Print } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

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
    margin-right: 16px;
  }
`;

type AuthorProps = {
  name: string;
};

type SupplierProps = {
  name: string;
};

type Props = {
  authors?: AuthorProps[];
  suppliers?: SupplierProps[];
  published: string;
  license: string;
  licenseBox?: React.ReactNode;
  copyPageUrlLink?: string;
  printUrl?: string;
};

const ArticleByline = ({ authors, suppliers, license, licenseBox, published, copyPageUrlLink, printUrl }: Props) => {
  const { t } = useTranslation();
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };

  const renderContributors = (contributors: SupplierProps[] | AuthorProps[]) => (
    <>
      {contributors.map((contributor, index) => {
        let separator = ' ';
        if (index > 0) {
          if (index === contributors.length - 1) {
            separator = ` ${t('article.conjunction')} `;
          } else {
            separator = ', ';
          }
        }
        return (
          <span key={contributor.name}>
            {separator}
            {contributor.name}
          </span>
        );
      })}
    </>
  );

  return (
    <Wrapper>
      <div>
        {t('article.lastUpdated')} {published}
      </div>
      {authors && (
        <TextWrapper>
          {authors.length > 1 ? t('article.multipleAuthorsLabel') : t('article.singleAuthorsLabel')}
          {renderContributors(authors)}
          <span>{` (${license})`}</span>
        </TextWrapper>
      )}
      {suppliers && (
        <TextWrapper>
          {suppliers.length > 1 ? t('article.multipleSuppliersLabel') : t('article.supplierLabel')}
          {renderContributors(suppliers)}
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
            data-copy-string={copyPageUrlLink}
            copyNode={t('article.copyPageLinkCopied')}>
            {t('article.copyPageLink')}
          </CopyButton>
        )}
        {printUrl && (
          <Button stripped onClick={() => printPage(printUrl)}>
            <Print />
          </Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ArticleByline;
