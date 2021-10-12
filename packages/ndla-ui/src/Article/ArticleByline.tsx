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
import { useTranslation } from 'react-i18next';
import { LicenseByline } from '@ndla/licenses';
import { getLicenseByAbbreviation } from '@ndla/licenses';

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

const AuthorsWrapper = styled.span`
  margin-left: ${spacing.xxsmall};
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
  locale?: string;
};

const ArticleByline = ({
  authors,
  suppliers,
  license,
  licenseBox,
  published,
  copyPageUrlLink,
  printUrl,
  locale,
}: Props) => {
  const { t } = useTranslation();
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };

  const renderContributors = (contributors: SupplierProps[] | AuthorProps[]) => {
    const contributorsArray = contributors.map((contributor, index) => {
      let separator = '';
      if (index > 0) {
        if (index === contributors.length - 1) {
          separator = ` ${t('article.conjunction')} `;
        } else {
          separator = ', ';
        }
      }
      return `${separator}${contributor.name}`;
    });
    return contributorsArray.join('');
  };
  const licenseRights = getLicenseByAbbreviation(license, locale).rights;

  return (
    <Wrapper>
      <div>
        {t('article.lastUpdated')} {published}
      </div>
      {authors && (
        <TextWrapper>
          <LicenseByline licenseRights={licenseRights}>
            <AuthorsWrapper>{t('article.authorsLabel', { names: renderContributors(authors) })}</AuthorsWrapper>
          </LicenseByline>
        </TextWrapper>
      )}
      {suppliers && (
        <TextWrapper>
          {suppliers.length > 1
            ? t('article.multipleSuppliersLabel', { names: renderContributors(suppliers) })
            : t('article.supplierLabel', { name: renderContributors(suppliers) })}
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
            backgroundColor="white"
            position="top"
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
          <Button size="small" borderShape="rounded" outline onClick={() => printPage(printUrl)}>
            {t('article.printPage')}
          </Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ArticleByline;
