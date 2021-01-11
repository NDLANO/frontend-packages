/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { injectT } from '@ndla/i18n';
import { FigureCaption, FigureLicenseDialog } from '@ndla/ui';
import Button from '@ndla/button';

function FigureCaptionExample({
  id,
  figureId,
  caption,
  messages: providedMessages,
  authors,
  licenseAbbreviation,
  hasHiddenCaption,
  link,
  t,
}) {
  const license = getLicenseByAbbreviation(licenseAbbreviation, 'nb');
  const messages = {
    title: t('title'),
    close: t('close'),
    learnAboutLicenses: license ? license.linkText : t('license.learnMore'),
    source: t('source'),
    ...providedMessages,
  };

  return (
    <FigureCaption
      hideFigcaption={hasHiddenCaption}
      figureId={figureId}
      id={id}
      locale="nb"
      caption={caption}
      reuseLabel={messages.reuse}
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
        <Button outline>{t('license.copyTitle')}</Button>
        <Button outline>{messages.download}</Button>
      </FigureLicenseDialog>
    </FigureCaption>
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
  authors: [{ type: 'Opphaver', name: 'Gary Waters' }],
  licenseAbbreviation: 'CC-BY-ND-4.0',
  messages: {
    rulesForUse: 'Regler for bruk av bildet',
    modelPremission:
      'Personen(e) på bildet har godkjent at det kan brukes videre.',
    reuse: 'Bruk bildet',
    download: 'Last ned bildet',
  },
  caption: '',
  hasHiddenCaption: false,
};

export default injectT(FigureCaptionExample);
