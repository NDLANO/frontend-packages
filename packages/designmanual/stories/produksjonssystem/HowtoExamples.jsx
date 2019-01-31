/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from 'react-emotion';
import { spacing, colors } from '@ndla/core';
import { FormHeader } from '@ndla/forms';
import { InformationOutline } from '@ndla/icons/common';
import { ArticleInModal } from '@ndla/howto';
import SlateBlockMenuExample from './SlateBlockMenuExample';

const iconClass = css`
  color: ${colors.brand.tertiary};
  width: ${26 * 1.5}px;
  height: ${26 * 1.5}px;
  padding: ${spacing.xsmall};

  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

const renderArticleInModal = pageId => (
  <ArticleInModal
    pageId={pageId}
    activateButton={<InformationOutline className={iconClass} />}
  />
);

const HowToExamples = () => (
  <div>
    <h3>Innholdstyper, se informasjonsikonene i ( + )-knappen</h3>
    <SlateBlockMenuExample height={100} />
    <h3>Hjelpetekster "Lisens og bruker":</h3>
    <FormHeader title="Koble til avtale">
      {renderArticleInModal('userAgreements')}
    </FormHeader>
    <FormHeader title="Lisens">
      {renderArticleInModal('userLicense')}
    </FormHeader>
    <h3>Hjelpetekster "Meta":</h3>
    <FormHeader title="Nøkkelord">
      {renderArticleInModal('MetaKeyword')}
    </FormHeader>
    <FormHeader title="Metabeskrivelse">
      {renderArticleInModal('MetaDescription')}
    </FormHeader>
    <FormHeader title="Metabilde">
      {renderArticleInModal('MetaImage')}
    </FormHeader>
  </div>
);

export default HowToExamples;
