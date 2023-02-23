/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { useTranslation } from 'react-i18next';
import { FigureCaption, FigureLicenseDialog } from '@ndla/ui';
import { ButtonV2 } from '@ndla/button';

function FigureCaptionExample({
  id,
  figureId,
  caption,
  messages: providedMessages,
  authors,
  licenseAbbreviation,
  hasHiddenCaption,
  link,
}) {
  const { t } = useTranslation();
  const license = getLicenseByAbbreviation(licenseAbbreviation, 'nb');
  const messages = {
    title: t('title'),
    close: t('close'),
    learnAboutLicenses: license ? license.linkText : t('license.learnMore'),
    source: t('source'),
    rulesForUse: t('license.images.rules'),
    reuse: t('image.reuse'),
    download: t('image.download'),
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
        <ButtonV2 variant="outline">{t('license.copyTitle')}</ButtonV2>
        {messages.download && <ButtonV2 variant="outline">{messages.download}</ButtonV2>}
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
  caption: '',
  hasHiddenCaption: false,
};

export default FigureCaptionExample;
