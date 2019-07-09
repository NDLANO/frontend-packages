/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { LicenseByline } from '@ndla/licenses';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
import styled from '@emotion/styled';
import { spacing, colors, fonts, breakpoints, mq } from '@ndla/core';

const StyledArticleBylineBox = styled('section')`
  padding: ${spacing.normal};
  background-color: ${colors.brand.lightest};
  font-size: ${fonts.sizes('14px', '18px')};
  font-family: ${fonts.sans};
  color: ${colors.text.primary};

  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: ${spacing.large};
  }
`;

const StyledAuthorName = styled('span')`
  margin: 0;
  padding-right: 0.5em;
`;

const StyledAuthorRole = styled('span')`
  padding-right: 0.5em;
  margin: 0;
`;

const StyledAuthorList = styled('ul')`
  margin: 0;
  padding: 0;
`;

const StyledAuthorRow = styled('li')`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0;
`;

const StyledRow = styled('div')`
  display: block;
  margin-top: ${spacing.normal};

  ${mq.range({ from: breakpoints.mobileWide })} {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLastUpdated = styled('span')`
  display: block;
  font-weight: ${fonts.weight.semibold};
  margin-bottom: ${spacing.xsmall};
  ${mq.range({ from: breakpoints.mobileWide })} {
    margin-bottom: 0;
  }
`;

interface Author {
  name: string;
  role: string;
  licenses: string[];
}

interface ArticleBylineBoxProps {
  authors: Author[];
  licenseBox: any;
  published: string;
  t: any;
}

const ArticleBylineBox = ({
  authors,
  licenseBox,
  published,
  t,
}: ArticleBylineBoxProps) => (
  <StyledArticleBylineBox>
    {authors.length > 0 && (
      <StyledAuthorList>
        {authors.map(author => (
          <StyledAuthorRow key={author.name}>
            <StyledAuthorRole>{`${author.role}:`}</StyledAuthorRole>
            <StyledAuthorName>{author.name}</StyledAuthorName>
            <LicenseByline
              licenseRights={author.licenses}
              size={'16px'}
              removeBottomPadding
            />
          </StyledAuthorRow>
        ))}
      </StyledAuthorList>
    )}
    <StyledRow>
      <StyledLastUpdated>
        {t('article.lastUpdated')} {published}
      </StyledLastUpdated>
      {licenseBox && (
        <span>
          <Modal
            activateButton={<Button link>{t('article.useContent')}</Button>}
            size="medium">
            {(onClose: Function) => (
              <>
                <ModalHeader modifier="no-bottom-padding">
                  <ModalCloseButton onClick={onClose} title="Lukk" />
                </ModalHeader>
                <ModalBody>{licenseBox}</ModalBody>
              </>
            )}
          </Modal>
        </span>
      )}
    </StyledRow>
  </StyledArticleBylineBox>
);

ArticleBylineBox.propTypes = {
  id: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string,
      title: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      image: PropTypes.string,
      introduction: PropTypes.string,
      role: PropTypes.string,
      urlContributions: PropTypes.string,
      urlAuthor: PropTypes.string,
      licenses: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  published: PropTypes.string.isRequired,
  license: PropTypes.arrayOf(PropTypes.string).isRequired,
  licenseBox: PropTypes.node,
  additional: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

ArticleBylineBox.defaultProps = {
  authors: [],
  id: 'article-line-id',
  additional: false,
};

export default injectT(ArticleBylineBox);
