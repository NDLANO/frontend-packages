import React, { Component, Fragment } from 'react';

import {
  FrontpageHeader,
  FrontpageSubjectsWrapper,
  FrontpageSubjectsSection,
  FrontpageHighlighted,
  ContentCard,
  OneColumn,
  FrontpageInfo,
  FrontpageSearchSection,
  InfoWidget,
} from 'ndla-ui';
import { breakpoints } from 'ndla-util';

import { EmailOutline, Facebook, Twitter } from 'ndla-icons/common';

import { contentCards } from '../../dummydata/index';

class FrontpageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }
  render() {
    return (
      <Fragment>
        <FrontpageHeader
          heading="Nasjonal digital læringsarena"
          searchFieldValue=""
          logoTo="#"
          onSearchFieldChange={() => {}}
          searchFieldPlaceholder="Søk etter f.eks emner, lærestoff, nøkkelord …"
          messages={{
            searchFieldTitle: 'Søk',
            menuButton: 'Meny',
          }}
          links={[
            {
              to: '#1',
              text: 'Om NDLA',
            },
            {
              to: '#2',
              text: 'Åpne digitale læremidler for videregående opplæring',
            },
            {
              to: '#3',
              text: 'Change language',
            },
          ]}
        />
        <main>
          <FrontpageSubjectsWrapper>
            <FrontpageSubjectsSection
              expanded={this.state.expanded === 'fellesfag'}
              onExpand={expanded => {
                if (expanded) {
                  this.setState({
                    expanded: 'fellesfag',
                  });
                } else {
                  this.setState({
                    expanded: null,
                  });
                }
              }}
              id="fellesfag"
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
                  yearInfo: 'YF og SF',
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
              id="yrkesfag"
              heading="Yrkesfag"
              expanded={this.state.expanded === 'yrkesfag'}
              onExpand={expanded => {
                if (expanded) {
                  this.setState({
                    expanded: 'yrkesfag',
                  });
                } else {
                  this.setState({
                    expanded: null,
                  });
                }
              }}
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
              id="studiespesialiserende"
              heading="Studiespesialiserende"
              expanded={this.state.expanded === 'studiespesialiserende'}
              onExpand={expanded => {
                if (expanded) {
                  this.setState({
                    expanded: 'studiespesialiserende',
                  });
                } else {
                  this.setState({
                    expanded: null,
                  });
                }
              }}
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
            <FrontpageSearchSection
              heading="Søk"
              searchFieldValue=""
              onSearchFieldChange={() => {}}
            />
            <FrontpageHighlighted heading="Aktuelt">
              {contentCards.slice(0, 4).map(card => (
                <div key={`slide-${card.id}`}>
                  <ContentCard
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
                </div>
              ))}
            </FrontpageHighlighted>
            <FrontpageInfo>
              <InfoWidget
                heading="Nyhetsbrev"
                description="Få tilgang til det som er nytt for undervisningen og aktuelt for tidspunktet"
                mainLink={{
                  name: 'Meld deg på',
                  url: '#1',
                }}
                iconLinks={[
                  {
                    name: 'Nyhetsbrev',
                    icon: <EmailOutline />,
                  },
                ]}
              />
              <InfoWidget
                heading="Følg oss"
                description="Ndla har mange Facebook og Twitter kontoer. Finn den som passer for deg og følg oss!"
                mainLink={{
                  name: 'Følg oss',
                  url: '#2',
                }}
                iconLinks={[
                  {
                    name: 'Facebook',
                    url: '#3',
                    icon: <Facebook />,
                  },
                  {
                    name: 'Twitter',
                    url: '#4',
                    icon: <Twitter />,
                  },
                ]}
              />
              <InfoWidget
                heading="Om NDLA"
                description="NDLAs visjon er å lage gode, åpne digitale læremidler for alle fag i videregående opplæring og støtte opp om elever og lærere i aktivt og deltakende læringsarbeid."
                mainLink={{
                  name: 'Mer om Ndla',
                  url: '#5',
                }}
              />
            </FrontpageInfo>
          </OneColumn>
        </main>
      </Fragment>
    );
  }
}

export default FrontpageExample;
