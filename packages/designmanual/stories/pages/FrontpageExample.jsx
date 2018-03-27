import React, { Fragment } from 'react';

import {
  FrontpageHeader,
  FrontpageSubjectsWrapper,
  FrontpageSubjectsSection,
  FrontpageHighlighted,
  ContentCard,
  OneColumn,
} from 'ndla-ui';
import { breakpoints } from 'ndla-util';

import { contentCards } from '../../dummydata/index';

export default () => (
  <Fragment>
    <FrontpageHeader
      searchFieldValue=""
      onSearchFieldChange={() => {}}
      searchFieldPlaceholder="Søk etter f.eks emner, lærestoff, nøkkelord …"
      messages={{
        searchFieldTitle: 'Søk',
      }}
      links={[
        {
          url: '#1',
          text: 'Om NDLA',
        },
        {
          url: '#2',
          text: 'Åpne digitale læremidler for videregående opplæring',
        },
      ]}
    />
    <main>
      <FrontpageSubjectsWrapper>
        <FrontpageSubjectsSection
          heading="Fellesfag"
          subjects={[
            {
              url: '#1',
              text: 'Engelsk',
            },
            {
              url: '#2',
              text: 'Historie',
              yearInfo: 'Vg2 og Vg3',
            },
            {
              url: '#3',
              text: 'Kroppsøving',
            },
            {
              url: '#4',
              text: 'Matematikk',
              yearInfo: 'Vg1P',
            },
            {
              url: '#5',
              text: 'Matematikk',
              yearInfo: 'Vg2P',
            },
            {
              url: '#6',
              text: 'Medie- informasjonskunnskap 1 og 2',
            },
            {
              url: '#7',
              text: 'Naturfag',
            },
            {
              url: '#8',
              text: 'Norsk',
              yearInfo: 'Vg2 og Vg3 SF',
            },
            {
              url: '#9',
              text: 'Norsk',
              yearInfo: 'YF ogh SF',
            },
            {
              url: '#10',
              text: 'Samfunnsfag',
            },
            {
              url: '#11',
              text: 'Sørsamisk som førstespråk',
            },
          ]}
        />
        <FrontpageSubjectsSection
          heading="Yrkesfag"
          subjects={[
            {
              url: '#1',
              text: 'Barne- og undersarbeiderfag',
              yearInfo: 'Vg2',
            },
            {
              url: '#2',
              text: 'Brønnteknikk',
            },
            {
              url: '#3',
              text: 'Bygg og annleggsteknikk',
              yearInfo: 'Vg1',
            },
            {
              url: '#4',
              text: 'Design og håndverk',
              yearInfo: 'Vg1',
            },
            {
              url: '#5',
              text: 'Elektrofag',
              yearInfo: 'Vg1',
            },
            {
              url: '#6',
              text: 'Helse- og oppvekstfag',
              yearInfo: 'Vg1',
            },
            {
              url: '#7',
              text: 'Helsearbeiderfag',
              yearInfo: 'Vg2',
            },
            {
              url: '#8',
              text: 'IKT-servicefag',
              yearInfo: 'Vg2',
            },
            {
              url: '#9',
              text: 'Kokk- og servitørfag',
              yearInfo: 'Vg2',
            },
            {
              url: '#10',
              text: 'Naturbruk',
            },
            {
              url: '#11',
              text: 'Reiseliv',
              yearInfo: 'Vg2',
            },
            {
              url: '#12',
              text: 'Restaurant- og matfag',
              yearInfo: 'Vg1',
            },
            {
              url: '#13',
              text: 'Romteknologi',
              yearInfo: 'Vg3',
            },
            {
              url: '#14',
              text: 'Salg, service og samferdsel',
              yearInfo: 'Vg2',
            },
            {
              url: '#15',
              text: 'Service og smaferdsel',
              yearInfo: 'Vg1',
            },
            {
              url: '#16',
              text: 'Teknikk og industriell produksjon',
              yearInfo: 'Vg1',
            },
            {
              url: '#17',
              text: 'Transport og logistikk',
              yearInfo: 'Vg2',
            },
          ]}
        />
        <FrontpageSubjectsSection
          heading="Studiespesialiserende"
          subjects={[
            {
              url: '#1',
              text: 'Biologi 1',
            },
            {
              url: '#2',
              text: 'Engelskspråklig litteratur og kultur',
            },
            {
              url: '#3',
              text: 'Internasjonal engelsk',
            },
            {
              url: '#4',
              text: 'Kinesisk 1',
            },
            {
              url: '#5',
              text: 'Kinesisk 2',
            },
            {
              url: '#6',
              text: 'Kommunikasjon og kultur 1',
            },
            {
              url: '#7',
              text: 'Kommunikasjon og kultur 2',
            },
            {
              url: '#8',
              text: 'Kommunikasjon og kultur 3',
              yearInfo: 'Vg2',
            },
            {
              url: '#9',
              text: 'Markedsføring og ledelse 1',
              yearInfo: 'Vg2',
            },
            {
              url: '#10',
              text: 'Matematikk',
              yearInfo: 'R1',
            },
            {
              url: '#11',
              text: 'Matematikk',
              yearInfo: 'R2',
            },
            {
              url: '#12',
              text: 'Matematikk',
              yearInfo: 'S1',
            },
            {
              url: '#13',
              text: 'Matematikk',
              yearInfo: 'S2',
            },
            {
              url: '#14',
              text: 'Medie- og informasjonskunnskap 1 og 2',
            },
            {
              url: '#15',
              text: 'Medieuttrykk og mediesamfunnet',
            },
            {
              url: '#16',
              text: 'Samfunnsfaglig engelsk',
            },
            {
              url: '#17',
              text: 'Tysk 1',
            },
            {
              url: '#18',
              text: 'Tysk 2',
            },
          ]}
        />
      </FrontpageSubjectsWrapper>
      <OneColumn>
        <FrontpageHighlighted heading="Aktuelt">
          <Fragment>
            {contentCards.slice(0, 4).map(card => (
              <ContentCard
                key={`slide-${card.id}`}
                url={card.linkTo}
                heading={card.title}
                description={card.text}
                isFilm={card.isFilm}
                type={card.type}
                images={[
                  {
                    url: card.image,
                    types: Object.keys(breakpoints),
                  },
                ]}
              />
            ))}
          </Fragment>
        </FrontpageHighlighted>
      </OneColumn>
    </main>
  </Fragment>
);
