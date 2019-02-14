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
import { FieldHeader } from '@ndla/forms';
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

const renderArticleInModal = ({ pageId, tooltip }) => (
  <ArticleInModal
    pageId={pageId}
    tooltip={tooltip}
    activateButton={<InformationOutline className={iconClass} />}
  />
);

const HowToExamples = () => (
  <div>
    <h1>Innholdstyper:</h1>
    <SlateBlockMenuExample height={100} />
    <br />
    <br />
    <h1>Lisens og bruker:</h1>
    <FieldHeader title="Koble til avtale">
      {renderArticleInModal({
        pageId: 'userAgreements',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <FieldHeader title="Lisens">
      {renderArticleInModal({
        pageId: 'userLicense',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <br />
    <br />
    <h1>Taksonomi:</h1>
    <FieldHeader title="Innholdstyper">
      {renderArticleInModal({
        pageId: 'TaxonomyContentTypes',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <FieldHeader title="Emnetilknytninger">
      {renderArticleInModal({
        pageId: 'TaxonomySubjectConnections',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <FieldHeader title="Fagfilter">
      {renderArticleInModal({
        pageId: 'TaxonomySubjectFilters',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <br />
    <br />
    <h1>Metadata:</h1>
    <FieldHeader title="Nøkkelord">
      {renderArticleInModal({
        pageId: 'MetaKeyword',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <FieldHeader title="Metabeskrivelse">
      {renderArticleInModal({
        pageId: 'MetaDescription',
        tooltip: 'Hva er dette?',
      })}
    </FieldHeader>
    <FieldHeader title="Metabilde">
      {renderArticleInModal({ pageId: 'MetaImage', tooltip: 'Hva er dette?' })}
    </FieldHeader>
  </div>
);

export default HowToExamples;
