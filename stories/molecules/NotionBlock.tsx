/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ConceptNotion, FigureType } from '@ndla/ui';
// @ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { uuid } from '@ndla/util';
import { ButtonV2 } from '@ndla/button';
//@ts-ignore
import { useRunOnlyOnce } from '../article/useRunOnlyOnce';

const conceptData = {
  image: {
    title: 'And',
    source: 'https://www.snl.no',
    text: 'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
    subjectNames: ['Naturbruk Vg1', 'Naturbruk Vg2'],
    copyright: {
      license: {
        license: 'CC-BY-NC-SA-4.0',
      },
      creators: [{ name: 'En skaper', type: 'writer' }],
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
      licenseButtons: (
        <>
          <ButtonV2 variant="outline">Kildehenvisning</ButtonV2>
          <ButtonV2 variant="outline">Last ned bildet</ButtonV2>
        </>
      ),
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
  },
  video: {
    text: 'I videoen kan du se en introduksjon til hva vi for eksempel mener når vi prater om «velferdsteknologi».',
    title: 'Velferdsteknologi',
    source: 'https://www.snl.no',
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
          type: 'writer',
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
  },
  iframe: {
    title: 'Blodtyper',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: 'https://api.test.ndla.no/image-api/raw/id/32570',
      alt: 'Blodtyper.',
    },
    copyright: {
      license: {
        license: 'CC-BY-SA-4.0',
      },
      creators: [
        {
          name: 'Fornavn Etternavn',
          type: 'writer',
        },
        {
          name: 'Annen Person',
          type: 'writer',
        },
      ],
      processors: [
        {
          name: 'Et Byrå',
          type: 'correction',
        },
      ],
      rightsholders: [
        {
          name: 'Stort Selskap',
          type: 'supplier',
        },
      ],
    },
    visualElement: {
      resource: 'iframe',
      title: 'Statistikk',
      url: 'https://public.flourish.studio/visualisation/2152346/embed',
    },
  },
  h5p: {
    title: 'Verdensrom og romskip',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      src: 'https://api.test.ndla.no/image-api/raw/id/13816',
      alt: 'Verdensrom. Foto.',
    },
    copyright: {
      license: {
        license: 'CC-BY-SA-4.0',
      },
      creators: [
        {
          name: 'Fornavn Etternavn',
          type: 'writer',
        },
      ],
      processors: [
        {
          name: 'Et Byrå',
          type: 'correction',
        },
      ],
      rightsholders: [],
    },
    visualElement: {
      resource: 'h5p',
      title: 'En H5P',
      url: 'https://h5p-test.ndla.no/resource/8ddd7f73-c570-44ab-9a8a-f5f4cc82a8aa?locale=nb-no&cssUrl=https://test.ndla.no/static/h5p-custom-css.css',
      copyright: {
        license: {
          license: 'CC-BY-NC-SA-4.0',
        },
        creators: [
          {
            name: 'Vilkårlig Person',
            type: 'writer',
          },
        ],
      },
    },
  },
  other: {
    title: '6-akset robotarm',
    source: 'https://www.snl.no',
    text: 'En 6-akset robotarm betyr at den kan bevege seg i seks retninger. I akkurat denne konfigurasjonen eller løsningen kommer den sjette bevegelsesretningen av det robotarmen står på. I en slik løsning med transportband vil robotarmen ha større fleksibilitet og kan gjøre flere operasjoner raskere, for eksempel "pick and place" (plukk og plasser), som blir simulert her. Da kan man sortere ut varer eller enkeltprodukter på et samlebånd svært effektivt.',
    image: {
      src: 'https://api.test.ndla.no/image-api/raw/id/23425',
      alt: 'Robotarmer i robotceller og på mobile enheter. Foto.',
    },
    copyright: {
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
  },
  richtext: {
    title: '6-akset robotarm',
    source: 'https://www.snl.no',
    text: 'En 6-akset **robotarm** betyr at den kan bevege seg i seks `retninger`. I akkurat _denne_ konfigurasjonen eller løsningen kommer den ^sjette^ ~bevegelsesretningen~ av det robotarmen står på.\n1. I en slik løsning med transportband vil robotarmen ha større fleksibilitet og kan gjøre flere operasjoner raskere, for eksempel "pick and place" (plukk og plasser), som blir simulert her.\n2. Da kan man sortere ut varer eller enkeltprodukter på et samlebånd svært effektivt.',
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
  },
};

const getType = (type: string) => {
  if (type === 'image' || type === 'video' || type === 'richtext' || type === 'iframe' || type === 'h5p') {
    return type;
  }
  return 'other';
};

type Props = {
  type: 'image' | 'video' | 'h5p' | 'iframe' | 'external';
  hideIconsAndAuthors?: boolean;
  data?: 'image' | 'video' | 'h5p' | 'iframe' | 'external' | 'other' | 'richtext';
  figureType?: FigureType;
};

const NotionBlock = ({ type, hideIconsAndAuthors, data, figureType }: Props) => {
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  return (
    <ConceptNotion
      disableScripts
      hideIconsAndAuthors={hideIconsAndAuthors}
      type={type}
      figureType={figureType}
      concept={{ ...conceptData[getType(data || type)], id }}
    />
  );
};

export default NotionBlock;
