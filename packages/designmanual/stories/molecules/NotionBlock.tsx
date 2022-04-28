/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ConceptNotion } from '@ndla/ui';
// @ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { uuid } from '@ndla/util';
//@ts-ignore
import { useRunOnlyOnce } from '../article/useRunOnlyOnce';

type Props = {
  type: 'image' | 'video' | 'H5P' | 'iframe' | 'external';

  hideIconsAndAuthors?: boolean; //hides the licenseicons
  adjustSizeToFitWiderPage?: boolean; //adjusts the width and left alignment of the block to fit in searchresults
};

const NotionBlock = ({ type, hideIconsAndAuthors, adjustSizeToFitWiderPage }: Props) => {
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  if (type === 'image') {
    return (
      <ConceptNotion
        adjustSizeToFitWiderPage={adjustSizeToFitWiderPage}
        hideIconsAndAuthors={hideIconsAndAuthors}
        type={type}
        concept={{
          id,
          title: 'And',
          text: 'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
          subjectNames: ['Naturbruk Vg1', 'Naturbruk Vg2'],
          copyright: {
            license: {
              license: 'CC-BY-NC-SA-4.0',
            },
            creators: [{ name: 'En skaper', type: 'Writer' }],
            processors: [{ name: 'Totaltekst', type: 'Correction' }],
            rightsholders: [],
          },
          visualElement: {
            copyright: {
              license: {
                license: 'CC-BY-NC-SA-4.0',
              },
              creators: [],
              processors: [],
              rightsholders: [{ name: 'NTB Scanpix', type: 'Supplier' }],
              origin: 'http://www.scanpix.no',
            },
            resource: 'image',
            image: {
              src: 'https://api.staging.ndla.no/image-api/raw/20081209-095942-ag_0.jpg',
              alt: 'Stokkand. Foto.',
            },
          },
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/40164',
            alt: 'Stokkand. Foto.',
          },
        }}
      />
    );
  } else if (type === 'video') {
    return (
      <ConceptNotion
        adjustSizeToFitWiderPage={adjustSizeToFitWiderPage}
        hideIconsAndAuthors={hideIconsAndAuthors}
        type={type}
        concept={{
          id,
          text: 'I videoen kan du se en introduksjon til hva vi for eksempel mener når vi prater om «velferdsteknologi».',
          title: 'Velferdsteknologi',
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/52535',
            alt: 'Foto. Klasseromsrobot som gjør det mulig å være på skolen uten å være fysisk til stede.',
          },
          subjectNames: ['Elektro og data'],
          copyright: {
            license: {
              license: 'CC-BY-SA-4.0',
            },
            creators: [
              {
                name: 'Bjørnar Mortensen Vik',
                type: 'Writer',
              },
            ],
            processors: [],
            rightsholders: [],
          },
          visualElement: {
            title: 'Velferdsteknologi gir frihet',
            resource: 'brightcove',
            url: 'https://players.brightcove.net/4806596774001/BkLm8fT_default/index.html?videoId=6154610667001',
            copyright: {
              license: {
                license: 'CC-BY-NC-SA-4.0',
              },
              creators: [],
              processors: [],
              rightsholders: [
                {
                  name: 'film_konsulentene',
                  type: 'supplier',
                },
              ],
            },
          },
        }}
      />
    );
  } else if (type === 'external' || type === 'iframe' || type === 'H5P') {
    return (
      <ConceptNotion
        adjustSizeToFitWiderPage={adjustSizeToFitWiderPage}
        hideIconsAndAuthors={hideIconsAndAuthors}
        type={type}
        concept={{
          id,
          title: '6-akset robotarm',
          text: 'En 6-akset robotarm betyr at den kan bevege seg i seks retninger. I akkurat denne konfigurasjonen eller løsningen kommer den sjette bevegelsesretningen av det robotarmen står på. I en slik løsning med transportband vil robotarmen ha større fleksibilitet og kan gjøre flere operasjoner raskere, for eksempel "pick and place" (plukk og plasser), som blir simulert her. Da kan man sortere ut varer eller enkeltprodukter på et samlebånd svært effektivt.',
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/23425',
            alt: 'Robotarmer i robotceller og på mobile enheter. Foto.',
          },
          copyright: {
            license: {
              license: 'CC-BY-SA-4.0',
            },
            creators: [
              {
                name: 'Haldor Hove',
                type: 'writer',
              },
            ],
            processors: [
              {
                name: 'Totaltekst',
                type: 'correction',
              },
            ],
            rightsholders: [],
          },
          visualElement: {
            title: 'Viper 6-akset robot',
            resource: 'H5P',
            url: 'https://players.brightcove.net/4806596774001/BkLm8fT_default/index.html?videoId=6268441758001',
            copyright: {
              license: {
                license: 'CC-BY-NC-SA-4.0',
              },
              creators: [],
              processors: [],
              rightsholders: [
                {
                  name: 'Omron Electronics Norway AS',
                  type: 'supplier',
                },
              ],
            },
          },
        }}
      />
    );
  } else {
    return (
      <ConceptNotion
        type="H5P"
        adjustSizeToFitWiderPage={adjustSizeToFitWiderPage}
        hideIconsAndAuthors={hideIconsAndAuthors}
        concept={{
          id,
          title: '6-akset robotarm',
          text: 'En 6-akset robotarm betyr at den kan bevege seg i seks retninger. I akkurat denne konfigurasjonen eller løsningen kommer den sjette bevegelsesretningen av det robotarmen står på. I en slik løsning med transportband vil robotarmen ha større fleksibilitet og kan gjøre flere operasjoner raskere, for eksempel "pick and place" (plukk og plasser), som blir simulert her. Da kan man sortere ut varer eller enkeltprodukter på et samlebånd svært effektivt.',
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/23425',
            alt: 'Robotarmer i robotceller og på mobile enheter. Foto.',
          },
          copyright: {
            license: {
              license: 'CC-BY-SA-4.0',
            },
            creators: [
              {
                name: 'Haldor Hove',
                type: 'writer',
              },
            ],
            processors: [
              {
                name: 'Totaltekst',
                type: 'correction',
              },
            ],
            rightsholders: [],
          },
          visualElement: {
            title: 'Viper 6-akset robot',
            resource: 'brightcove',
            url: 'https://players.brightcove.net/4806596774001/BkLm8fT_default/index.html?videoId=6268441758001',
            copyright: {
              license: {
                license: 'CC-BY-NC-SA-4.0',
              },
              creators: [],
              processors: [],
              rightsholders: [
                {
                  name: 'Omron Electronics Norway AS',
                  type: 'supplier',
                },
              ],
            },
          },
        }}
      />
    );
  }
};
export default NotionBlock;
