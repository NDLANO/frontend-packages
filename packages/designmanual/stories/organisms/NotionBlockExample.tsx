/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { OneColumn } from '@ndla/ui';
import { Notion } from '@ndla/ui';
import { uuid } from '@ndla/util';

import NotionExample from '../molecules/NotionExample';
// @ts-ignore
import FigureImage from '../article/FigureImage';
import { H5p, Video } from '../molecules/VisualElements';

// @ts-ignore
import FigureWithLicense from '../article/FigureWithLicense';

const NotionBlockExample = () => {
  const { t } = useTranslation();
  return (
    <OneColumn cssModifier="narrow">
      <p>
        Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
        av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
      </p>
      <p>
        En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen
        få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
      </p>
      <FigureWithLicense
        messages={{
          title: t('title'),
          close: t('close'),
          learnAboutLicenses: t('license.learnMore'),
          source: t('source'),
          rulesForUse: t('license.concept.rules'),
          reuse: t('concept.reuse'),
          download: null,
        }}>
        <Notion
          {...NotionExample}
          imageElement={
            <FigureImage
              type="full-column"
              hasHiddenCaption
              caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
              alt="Forstørrelsesglass"
              src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
            />
          }
        />
      </FigureWithLicense>
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
      <FigureWithLicense
        messages={{
          title: t('title'),
          close: t('close'),
          learnAboutLicenses: t('license.learnMore'),
          source: t('source'),
          rulesForUse: t('license.concept.rules'),
          reuse: t('concept.reuse'),
          download: null,
        }}>
        <Notion
          {...NotionExample}
          visualElement={{
            metaImage: {
              url: 'https://api.staging.ndla.no/image-api/raw/42-45210905.jpg',
              alt: 'Normer i samfunnet',
            },
            type: 'other',
            element: H5p(),
          }}
          id={uuid()}
        />
      </FigureWithLicense>
      <p>
        Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
        av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
      </p>
      <p>
        En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen
        få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
      </p>
      <FigureWithLicense
        messages={{
          title: t('title'),
          close: t('close'),
          learnAboutLicenses: t('license.learnMore'),
          source: t('source'),
          rulesForUse: t('license.concept.rules'),
          reuse: t('concept.reuse'),
          download: null,
        }}>
        <Notion
          {...NotionExample}
          visualElement={{
            metaImage: {
              url: 'https://api.staging.ndla.no/image-api/raw/42-45210905.jpg',
              alt: 'Normer i samfunnet',
            },
            type: 'video',
            element: Video(),
          }}
          id={uuid()}
        />
      </FigureWithLicense>
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
    </OneColumn>
  );
};

export default NotionBlockExample;
