/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { OneColumn } from '@ndla/ui';

import NotionBlock from '../molecules/NotionBlock';

const NotionBlockExample = () => {
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
      <NotionBlock type="image" />
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
      <NotionBlock type="video" />
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
      <NotionBlock type="H5P" />
      <p>
        Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
        av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
      </p>
      <p>
        En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen
        få minutter skal du få andre til å tenne på idéen din og se potensialet i den.
      </p>
      <p>
        Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
        planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
      </p>
    </OneColumn>
  );
};

export default NotionBlockExample;
