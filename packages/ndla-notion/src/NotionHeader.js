/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { injectT } from '@ndla/i18n';
import { spacing, colors, fonts, misc } from '@ndla/core';

const NotionHeaderWrapper = styled.div`
  margin: ${spacing.normal} ${spacing.normal} ${spacing.small};
  padding-bottom: ${spacing.small};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 2px solid ${colors.brand.tertiary};
  h1 {
    margin: 0;
    flex-grow: 1;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
    color: ${colors.text.primary};
    small {
      padding-left: ${spacing.small};
      margin-left: ${spacing.xsmall};
      border-left: 1px solid ${colors.brand.greyLight};
      ${fonts.sizes('20px', 1.2)};
      font-weight: ${fonts.weight.normal};
    }
  }
  button {
    padding: 0;
    border: none;
    background: none;
    color: ${colors.brand.primary};
    box-shadow: ${misc.textLinkBoxShadow};
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
`;

const notionTitle = (title, subTitle) => (
  <h1>
    {title} {subTitle ? <small>{subTitle}</small> : null}
  </h1>
);

export const NotionHeaderWithoutExitButton = ({ title, subTitle }) => (
  <NotionHeaderWrapper>{notionTitle(title, subTitle)}</NotionHeaderWrapper>
);

const NotionHeader = injectT(({ title, subTitle, onClose, t }) => (
  <NotionHeaderWrapper>
    {notionTitle(title, subTitle)}
    {onClose ? (
      <button type="button" onClick={onClose}>
        {t('notions.closeNotion')}
      </button>
    ) : (
      <button type="button" data-notion-close>
        {t('notions.closeNotion')}
      </button>
    )}
  </NotionHeaderWrapper>
));

NotionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onClose: PropTypes.func,
};

NotionHeaderWithoutExitButton.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export { NotionHeader as default };
