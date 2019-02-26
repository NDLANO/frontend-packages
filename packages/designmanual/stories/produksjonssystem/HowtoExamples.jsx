/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { FormHeader, FormHeaderIconClass } from '@ndla/forms';
import { InformationOutline } from '@ndla/icons/common';
import { ArticleInModal } from '@ndla/howto';
import SlateBlockMenuExample from './SlateBlockMenuExample';

const renderArticleInModal = ({ pageId, tooltip }) => (
  <ArticleInModal
    pageId={pageId}
    tooltip={tooltip}
    activateButton={<InformationOutline className={FormHeaderIconClass} />}
  />
);

const HowToExamples = () => (
  <div>
    <h1>Innholdstyper:</h1>
    <SlateBlockMenuExample height={100} />
    <br />
    <br />
    <h1>Lisens og bruker:</h1>
    <FormHeader title="Koble til avtale">
      {renderArticleInModal({
        pageId: 'userAgreements',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <FormHeader title="Lisens">
      {renderArticleInModal({
        pageId: 'userLicense',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <br />
    <br />
    <h1>Taksonomi:</h1>
    <FormHeader title="Innholdstyper">
      {renderArticleInModal({
        pageId: 'TaxonomyContentTypes',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <FormHeader title="Emnetilknytninger">
      {renderArticleInModal({
        pageId: 'TaxonomySubjectConnections',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <FormHeader title="Fagfilter">
      {renderArticleInModal({
        pageId: 'TaxonomySubjectFilters',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <br />
    <br />
    <h1>Metadata:</h1>
    <FormHeader title="Nøkkelord">
      {renderArticleInModal({
        pageId: 'MetaKeyword',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <FormHeader title="Metabeskrivelse">
      {renderArticleInModal({
        pageId: 'MetaDescription',
        tooltip: 'Hva er dette?',
      })}
    </FormHeader>
    <FormHeader title="Metabilde">
      {renderArticleInModal({ pageId: 'MetaImage', tooltip: 'Hva er dette?' })}
    </FormHeader>
  </div>
);

export default HowToExamples;
