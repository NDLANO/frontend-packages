/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { ConceptNotion } from '@ndla/ui';
// @ts-ignore
import { initArticleScripts } from '@ndla/article-scripts';
import { uuid } from '@ndla/util';
import { breakpoints, mq } from '@ndla/core';
//@ts-ignore
import { useRunOnlyOnce } from '../article/useRunOnlyOnce';

const ContentWrapper = styled.div<{ inSearchResults?: boolean }>`
  position: relative !important;
  right: auto !important;
  left: ${(props) => (props.inSearchResults ? '0%' : '-16.6666666667%')};
  width: ${(props) => (props.inSearchResults ? '100%' : '133.3333333333%')};
  padding-left: 24px;
  padding-right: 24px;
  & button {
    width: 100%;
  }
  & .iconify--ic {
    //Hides the underline icon when in a notionblock
    display: none;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100% !important;
    left: 0 !important;
  }
`;

type Props = {
  type: 'image' | 'video' | 'H5P' | 'iframe' | 'external';

  hideIconsAndAuthors?: boolean; //hides the licenseicons
  inSearchResults?: boolean; //adjusts the width and left alignment of the block to fit in searchresults
};

const NotionBlock = ({ type, hideIconsAndAuthors, inSearchResults }: Props) => {
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  if (type === 'image') {
    return (
      <ContentWrapper inSearchResults={inSearchResults}>
        <ConceptNotion
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
      </ContentWrapper>
    );
  } else if (type === 'video') {
    return (
      <ContentWrapper inSearchResults={inSearchResults}>
        <ConceptNotion
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
      </ContentWrapper>
    );
  } else if (type === 'external' || type === 'iframe') {
    return (
      <ConceptNotion
        concept={{
          id,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          title: 'Statistikk om matvaner',
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/45298',
            alt: 'Foto. Frokost.',
          },
          subjectNames: ['Elektro og data'],
          copyright: {
            license: {
              license: 'CC-BY-SA-4.0',
            },
            creators: [
              {
                name: 'Fornavn Etternavn',
                type: 'Writer',
              },
            ],
            processors: [],
            rightsholders: [],
          },
          visualElement: {
            title: 'Statistikk om matvaner',
            resource: 'external',
            url: 'https://public.flourish.studio/visualisation/2152346/embed',
          },
        }}
      />
    );
  } else {
    return (
      <ConceptNotion
        concept={{
          id,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          title: 'Statistikk om matvaner',
          image: {
            src: 'https://api.test.ndla.no/image-api/raw/id/45298',
            alt: 'Foto. Frokost.',
          },
          subjectNames: ['Elektro og data'],
          copyright: {
            license: {
              license: 'CC-BY-SA-4.0',
            },
            creators: [
              {
                name: 'Fornavn Etternavn',
                type: 'Writer',
              },
            ],
            processors: [],
            rightsholders: [],
          },
          visualElement: {
            title: 'Statistikk om matvaner',
            resource: 'external',
            url: 'https://public.flourish.studio/visualisation/2152346/embed',
          },
        }}
      />
    );
  }
};
export default NotionBlock;
