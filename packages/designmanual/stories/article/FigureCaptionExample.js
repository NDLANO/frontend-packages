/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { Trans } from '@ndla/i18n';
import { FigureCaption, FigureLicenseDialog } from '@ndla/ui';
import Button from '@ndla/button';

const defaultMessages = {
  close: 'Lukk',
  rulesForUse: 'Regler for bruk av bildet',
  modelPremission:
    'Personen(e) på bildet har godkjent at det kan brukes videre.',
  source: 'Kilde',
  mediaType: 'bilde',
  title: 'Tittel',
};

export function FigureCaptionExample({
  id,
  figureId,
  caption,
  messages: providedMessages,
  authors,
  licenseAbbreviation,
  hasHiddenCaption,
  link,
}) {
  const license = getLicenseByAbbreviation(licenseAbbreviation, 'nb');
  const messages = {
    ...defaultMessages,
    learnAboutLicenses: license.linkText,
    ...providedMessages,
  };

  return (
    <Trans>
      {({ t }) => (
        <FigureCaption
          hideFigcaption={hasHiddenCaption}
          figureId={figureId}
          id={id}
          locale="nb"
          caption={caption}
          reuseLabel={`Bruk ${messages.mediaType}`}
          licenseRights={license.rights}
          authors={authors}
          link={link}>
          <FigureLicenseDialog
            id={id}
            authors={authors}
            license={license}
            origin="https://www.wikimedia.com"
            title="Mann med lupe"
            locale="nb"
            messages={messages}>
            <Button outline>Kopier referanse</Button>
            <Button outline>Last ned {messages.mediaType}</Button>
          </FigureLicenseDialog>
        </FigureCaption>
      )}
    </Trans>
  );
}

FigureCaptionExample.propTypes = {
  id: PropTypes.string.isRequired,
  figureId: PropTypes.string.isRequired,
  caption: PropTypes.string,
  licenseAbbreviation: PropTypes.string,
  messages: PropTypes.object,
  hasHiddenCaption: PropTypes.bool,
};

FigureCaptionExample.defaultProps = {
  authors: [{ type: 'Opphavsmann', name: 'Gary Waters' }],
  licenseAbbreviation: 'CC-BY-ND-4.0',
  messages: {
    close: 'Lukk',
    rulesForUse: 'Regler for bruk av bildet',
    modelPremission:
      'Personen(e) på bildet har godkjent at det kan brukes videre.',
    source: 'Kilde',
    mediaType: 'bilde',
    title: 'Tittel',
  },
  caption: '',
  hasHiddenCaption: false,
};
