/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
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
  margin-top: ${spacing.large};
  padding: ${spacing.normal};
  background-color: ${colors.brand.lightest};
  ${fonts.sizes('14px', '18px')};
  font-family: ${fonts.sans};
  color: ${colors.text.primary};

  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: ${spacing.large};
  }
`;

const StyledAuthorName = styled('span')`
  margin: 0;
  padding-right: ${spacing.xsmall};
`;

const StyledAuthorRole = styled('span')`
  padding-right: ${spacing.xsmall};
  margin: 0;
  font-weight: ${fonts.weight.semibold};

  ${mq.range({ until: breakpoints.mobileWide })} {
    width: 100%;
    margin-top: ${spacing.small};
  }
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

  ${mq.range({ until: breakpoints.mobileWide })} {
    ${fonts.sizes('14px', '1.3')};

    &:first-of-type ${StyledAuthorRole} {
      margin: 0;
    }
  }
`;

const StyledRow = styled('div')`
  display: block;
  margin-top: ${spacing.large};

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

type Author = {
  name: string;
  role?: string;
  type?: string;
  licenses: string;
};

type ArticleBylineBoxProps = {
  authors: Author[];
  licenseBox: React.FunctionComponent;
  published: string;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const ArticleBylineBox = ({
  authors,
  licenseBox,
  published,
  t,
}: ArticleBylineBoxProps) => {
  return (
    <StyledArticleBylineBox>
      {authors.length > 0 && (
        <StyledAuthorList>
          {authors.map(author => (
            <StyledAuthorRow key={author.name}>
              <StyledAuthorRole>
                {author.role
                  ? `${author.role}`
                  : t(
                      `license.creditType.${author.type &&
                        author.type.toLowerCase()}`,
                    )}
                :
              </StyledAuthorRole>
              <StyledAuthorName>{author.name}</StyledAuthorName>
              <LicenseByline
                licenseRights={author.licenses.split(' ')}
                size={`${spacing.spacingUnit / 1.625}px`}
                removeBottomPadding
              />
            </StyledAuthorRow>
          ))}
        </StyledAuthorList>
      )}
      <StyledRow>
        <StyledLastUpdated>
          {`${t('article.lastUpdated')} ${published}`}
        </StyledLastUpdated>
        {licenseBox && (
          <span>
            <Modal
              activateButton={<Button link>{t('article.useContent')}</Button>}
              size="medium">
              {(onClose: Function) => (
                <>
                  <ModalHeader modifier="no-bottom-padding">
                    <ModalCloseButton
                      onClick={onClose}
                      title={t('article.closeLabel')}
                    />
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
};

export default injectT(ArticleBylineBox);
