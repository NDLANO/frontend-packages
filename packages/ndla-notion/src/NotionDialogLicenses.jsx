import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { fonts, spacing, colors, misc } from 'ndla-core';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { LicenseByline } from 'ndla-ui';

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
  }
`;

const NotionDialogLicenses = ({ license, authors, source, licenseBox }) => {
  const licenseRights = getLicenseByAbbreviation(license).rights;
  const authorsLength = authors.length;
  return (
    <NotionDialogLicensesWrapper>
      {licenseRights.length > 0 && (
        <LicenseByline
          className="c-source-list__item"
          licenseRights={licenseRights}
        />
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
      <span key={source}>{source}</span>
      {licenseBox && <span>{licenseBox}</span>}
    </NotionDialogLicensesWrapper>
  );
};

NotionDialogLicenses.propTypes = {
  license: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  licenseBox: PropTypes.node,
};

NotionDialogLicenses.defaultProps = {
  authors: [],
};

export { NotionDialogLicenses as default };
