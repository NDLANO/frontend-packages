/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import Button, { CopyButton } from '@ndla/button';
import { colors, fonts, spacing } from '@ndla/core';
import { copyTextToClipboard, printPage } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { LicenseByline, getLicenseByAbbreviation } from '@ndla/licenses';
import { TFunction } from 'i18next';

const Wrapper = styled.div`
  margin-top: ${spacing.normal};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  border-top: 1px solid ${colors.brand.greyLight};
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

const PrimaryContributorsWrapper = styled.span`
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
  licenseBox?: ReactNode;
  copyPageUrlLink?: string;
  printUrl?: string;
  locale?: string;
  embedLink?: string;
};

const renderContributors = (contributors: SupplierProps[] | AuthorProps[], t: TFunction) => {
  const contributorsArray = contributors.map((contributor, index) => {
    if (index < 1) return contributor.name;
    const sep = index === contributors.length - 1 ? ` ${t('article.conjunction')} ` : ', ';
    return `${sep}${contributor.name}`;
  });
  return contributorsArray.join('');
};

const getSuppliersText = (suppliers: SupplierProps[], t: TFunction) => {
  if (suppliers.length === 0) {
    return '';
  }
  return suppliers.length > 1
    ? t('article.multipleSuppliersLabel', { names: renderContributors(suppliers, t) })
    : t('article.supplierLabel', { name: renderContributors(suppliers, t) });
};

const ArticleByline = ({
  authors = [],
  suppliers = [],
  license,
  licenseBox,
  published,
  copyPageUrlLink,
  printUrl,
  locale,
  embedLink,
}: Props) => {
  const { t } = useTranslation();
  const copyLinkHandler = () => {
    if (copyPageUrlLink) {
      copyTextToClipboard(copyPageUrlLink);
    }
  };
  const licenseRights = getLicenseByAbbreviation(license, locale).rights;

  const copyLicense = () => {
    if (licenseRights) {
      copyTextToClipboard(licenseRights.toString());
    }
  };
  const copyEmbedLink = () => {
    if (embedLink) {
      copyTextToClipboard(embedLink);
    }
  };
  const copyTitle = t('license.copyTitle').toLowerCase();
  const embedLinkTitle = t('license.tabs.embedlink').toLowerCase();
  const showPrimaryContributors = suppliers.length > 0 || authors.length > 0;
  const showSecondaryContributors = suppliers.length > 0 && authors.length > 0;

  const buttonId = 'popupUseContent';

  return (
    <Wrapper>
      <div>
        {t('article.lastUpdated')} {published}
      </div>
      {(showPrimaryContributors || licenseRights.length > 0) && (
        <TextWrapper>
          <LicenseByline licenseRights={licenseRights}>
            {showPrimaryContributors && (
              <PrimaryContributorsWrapper>
                {authors.length > 0
                  ? t('article.authorsLabel', { names: renderContributors(authors, t) })
                  : getSuppliersText(suppliers, t)}
              </PrimaryContributorsWrapper>
            )}
          </LicenseByline>
        </TextWrapper>
      )}
      {showSecondaryContributors && <TextWrapper>{getSuppliersText(suppliers, t)}</TextWrapper>}
      <ButtonWrapper>
        {licenseBox && (
          <>
            <CopyButton
              size="small"
              borderShape="rounded"
              outline
              copyNode={t('license.hasCopiedTitle')}
              onClick={copyLicense}>
              {t('license.copy') + ' ' + copyTitle}
            </CopyButton>

            <Modal
              labelledBy={buttonId}
              activateButton={
                <Button id={buttonId} size="small" borderShape="rounded" outline>
                  {t('article.useContent')}
                </Button>
              }
              backgroundColor="white"
              position="top"
              size="medium">
              {(onClose: () => void) => (
                <>
                  <ModalHeader modifier="no-bottom-padding">
                    <ModalCloseButton onClick={onClose} title="Lukk" />
                  </ModalHeader>
                  <ModalBody>{licenseBox}</ModalBody>
                </>
              )}
            </Modal>
          </>
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
        {embedLink && (
          <CopyButton
            size="small"
            borderShape="rounded"
            outline
            copyNode={t('license.hasCopiedTitle')}
            onClick={copyEmbedLink}>
            {t('license.copy') + ' ' + embedLinkTitle}
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
