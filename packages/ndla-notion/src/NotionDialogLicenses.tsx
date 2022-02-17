import React, { Fragment, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fonts, spacing, colors } from '@ndla/core';
import { LicenseByline, getLicenseByAbbreviation } from '@ndla/licenses';

const NotionDialogLicensesWrapper = styled.div`
  border-top: 1px solid ${colors.brand.tertiary};
  padding-top: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > span {
    margin-right: ${spacing.xsmall};
    color: ${colors.text.light};
    ${fonts.sizes('14px', 1.1)};
    padding-bottom: ${spacing.xsmall};
    font-family: ${fonts.serif};
    padding-bottom: 3px;
    padding-top: 3px;
    margin-top: -4px;
    &:not(:last-child) {
      padding-right: ${spacing.xsmall};
      border-right: 1px solid ${colors.brand.greyLight};
    }
    p {
      margin: 0;
    }
  }
`;

interface Props {
  license?: string;
  authors?: string[];
  source?: ReactNode;
  licenseBox?: ReactNode;
  locale?: string;
}

const NotionDialogLicenses = ({ license, authors = [], source, locale, licenseBox }: Props) => {
  const licenseRights = license ? getLicenseByAbbreviation(license, locale).rights : [];
  const authorsLength = authors.length;
  const wrapLink = (source?: ReactNode) => {
    if (source?.toString().startsWith('http')) {
      return <a href={source.toString()}>{source}</a>;
    }
    return source;
  };
  const sourceElem = React.isValidElement(source) ? source : <span>{wrapLink(source)}</span>;
  return (
    <NotionDialogLicensesWrapper>
      {licenseRights.length > 0 && (
        <LicenseByline locale={locale} marginRight color={colors.brand.grey} licenseRights={licenseRights} />
      )}
      {authorsLength > 0 && (
        <span>
          {authors.map((author, index) => (
            <Fragment key={author}>
              {author}
              {index < authorsLength - 3 && ', '}
              {index === authorsLength - 2 && ' og '}
            </Fragment>
          ))}
        </span>
      )}
      {source && sourceElem}
      {licenseBox && <span>{licenseBox}</span>}
    </NotionDialogLicensesWrapper>
  );
};

export { NotionDialogLicenses as default };
