/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FieldHeader, FieldHeaderIconStyle } from '@ndla/forms';
import { InformationOutline } from '@ndla/icons/common';
import { ArticleInModal } from '@ndla/howto';

const renderArticleInModal = ({ pageId, tooltip }) => (
  <ArticleInModal
    pageId={pageId}
    activateButton={<InformationOutline aria-label={tooltip} title={tooltip} css={FieldHeaderIconStyle} />}
  />
);

const HowToExamples = () => (
  <div>
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
    <br />
    <br />
    <h1>Status:</h1>
    <FieldHeader title="Statusforklaringer">
      {renderArticleInModal({ pageId: 'status', tooltip: 'Hva er dette?' })}
    </FieldHeader>
  </div>
);

export default HowToExamples;
