/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { OneColumn, LayoutItem } from '@ndla/ui';
import Notion, { NotionDialogContent, NotionDialogText, NotionDialogImage, NotionDialogLicenses } from '@ndla/notion';
import Tabs from '@ndla/tabs';
import { addShowConceptDefinitionClickListeners } from '@ndla/article-scripts';

import ArticleBylineExample from '../molecules/ArticleBylineExample';
import FigureImage from '../article/FigureImage';

class NotionExample extends Component {
  componentDidMount() {
    addShowConceptDefinitionClickListeners();
  }

  render() {
    return (
      <OneColumn cssModifier="narrow">
        <article className="c-article c-article--clean">
          <LayoutItem layout="center">
            <h1 className="c-article__title">Sosialisering</h1>
            <p className="article_introduction">
              Vi blir født inn i et samfunn. På den ene siden kommer vi til en familie bestående av nære relasjoner. På
              den andre siden blir de fleste av oss født på en institusjon, et sykehus.
            </p>
            <ArticleBylineExample useRealText />
          </LayoutItem>
          <LayoutItem layout="center">
            <section>
              <div>
                <p>
                  <i>
                    Gjennom{' '}
                    <Notion
                      id="NotionId_1"
                      ariaLabel="Vis begrep beskrivelse"
                      title="Sosialisering"
                      subTitle="forklaring"
                      content={
                        <Fragment>
                          <NotionDialogContent>
                            <NotionDialogText>
                              Sosialisering, betegnelse for de sosiale prosessene som fører til at individer tar opp i
                              seg, eller internaliserer, samfunnets normer og atferdsmønstre med andre ord at de blir
                              som de andre i samfunnet.
                            </NotionDialogText>
                          </NotionDialogContent>
                          <NotionDialogLicenses
                            license="CC-BY-ND-4.0"
                            source="https://snl.no"
                            authors={['Gary Waters']}
                          />
                        </Fragment>
                      }
                    >
                      sosialisering
                    </Notion>{' '}
                    lærer menneskene å fungere i et samfunn og får kjennskap til de regler og verdier som det forventes
                    at man skal følge. Sosialisering er dermed den prosessen som gjør at vi tar til oss dette, fra vi
                    blir født til vi dør.
                  </i>
                </p>
                <p>
                  Barn møtes med forventninger til hvordan de skal oppføre seg. Disse forventningene gjentar seg, og
                  slik lærer barnet hvilke regler eller normer som gjelder. Hovedmålet med sosialiseringen er at de
                  enkelte menneskene skal kunne skille mellom godt og ondt, og rett og galt.
                </p>
                <FigureImage
                  alt="liten jente holder sine foreldres hender. foto."
                  src="https://api.ndla.no/image-api/raw/sx21c7f8.jpg"
                  type="right"
                />
                <h2>Normer og normsendere</h2>
                <p>
                  Normer er regler som forteller hvordan man skal oppføre seg og handle i en gitt situasjon. normer kan
                  være formelle eller uformelle. Lover er formaliserte eller formelle normer. de uformelle normene er
                  uskrevne regler for skikk og bruk, som hvordan man skal oppføre seg i ulike situasjoner. det kan være
                  forventninger om at du skal håndhilse når du kommer inn til et jobbintervju, eller at det er uhøflig å
                  svare på telefonsamtaler mens intervjuet pågår.
                </p>
                <p>
                  For å forsterke innlæringen av normer følges de opp av reaksjoner eller sanksjoner.{' '}
                  <Notion
                    id="NotionId_2"
                    ariaLabel="Vis begrep beskrivelse"
                    title="Sanksjon"
                    subTitle="forklaring"
                    content={
                      <Fragment>
                        <NotionDialogContent>
                          <NotionDialogText>
                            Sanksjon, en negativ eller positiv reaksjon på noens atferd. I dagligtalen er det vanlig å
                            oppfatte sanksjoner først og fremst som negative reaksjoner rettet mot uønsket atferd eller
                            avvik. Et eksempel er foreldrene som nekter ungen lørdagsgodteri (sanksjon) fordi han eller
                            hun ikke spiser opp grønnsakene sine (uønsket atferd).
                          </NotionDialogText>
                        </NotionDialogContent>
                        <NotionDialogLicenses
                          license="CC-BY-ND-4.0"
                          source="https://snl.no"
                          authors={['Gary Waters']}
                        />
                      </Fragment>
                    }
                  >
                    sanksjon
                  </Notion>{' '}
                  kan både være positive og negative. Ønsket adferd belønnes, men uønsket adferd straffes. Når en person
                  har gjort{' '}
                  <Notion
                    id="NotionId_3"
                    ariaLabel="Vis begrep beskrivelse"
                    title="Norm"
                    subTitle="forklaring"
                    content={
                      <Fragment>
                        <NotionDialogContent>
                          <Tabs
                            singleLine
                            tabs={[
                              {
                                title: 'Forklaring',
                                content: (
                                  <Fragment>
                                    <NotionDialogImage
                                      src="https://api.ndla.no/image-api/raw/futrue%20padawan.jpg?width=800"
                                      alt="Normer i samfunnet"
                                    />
                                    <NotionDialogText>
                                      Norm, særskilt sosiale normer, er en sosiologisk betegnelse for intersubjektive,
                                      allment delte og ofte underforståtte regler og forventninger på oppførsel som
                                      gjelder for et mindre sosialt fellesskap og for samfunnet i sin helhet.
                                    </NotionDialogText>
                                    <NotionDialogLicenses license="CC-BY-ND-4.0" source="https://snl.no" />
                                  </Fragment>
                                ),
                              },
                              {
                                title: 'Ordbok',
                                content: (
                                  <Fragment>
                                    <NotionDialogText>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                    </NotionDialogText>
                                    <NotionDialogLicenses license="CC-BY-4.0" source="lipsum.com" />
                                  </Fragment>
                                ),
                              },
                            ]}
                          />
                        </NotionDialogContent>
                      </Fragment>
                    }
                  >
                    norm
                  </Notion>{' '}
                  til sine egne og følger dem, sier man at normene er internalisert.
                </p>
                <p>
                  Alle man møter, er normsendere. I første omgang er det foreldre, søsken og nær familie. Også venner og
                  lekekamerater er normsendere. Dette kalles primærsosialisering. Barn har også normsendere utenfor de
                  nære relasjonene. I barnehagen møter de voksne som er tydelige rollemodeller, og som har en klar
                  oppgave i forhold til mer formell sosialisering. Det kalles sekundærsosialisering og blir fulgt opp av
                  andre formelle utdanningsinstitusjoner, som skolen. Barn møter uformell sosialisering når de ser på TV
                  eller spiller dataspill.
                </p>
                <h2>Normforvirring</h2>
                <p>
                  De signalene andre mennesker sender ut, kan for et individ oppleves som forvirrende og i mange
                  tilfeller også motstridende. Det kalles normforvirring. Denne normforvirringen er en naturlig del av
                  sosialiseringsprosessen, og noe vi må lære oss å forholde oss til. En vanlig konflikt er at venner
                  ønsker at du skal spille internettspill eller bli med på kino, mens foreldrene ber deg skru av PC-en
                  for å gjøre husarbeid og lekser.
                </p>
                <p>
                  Selv om informasjonen om narkotika er entydig, fordi det er forbudt gjennom norsk lov, kan
                  enkeltpersoner bli utfordret også på disse normene. I noen miljøer er det akseptert å bruke narkotika,
                  og de skadelige sidene av bruken bagatelliseres. I slike situasjoner kan internaliserte normer hjelpe
                  oss til å føle oss trygge fordi vi har tatt stilling til spørsmålet på forhånd. Det bidrar til at
                  mange føler at de vet hva som er riktige valg, og de føler seg trygge når de blir utfordret.
                </p>
                <p>
                  Motstridende signaler fra normsendere, som følges opp av sanksjoner som enten er vilkårlige, eller som
                  føles urettferdige, skaper utrygghet. I verste fall kan utydelige normer og uregelmessig belønning
                  medføre psykiske lidelser fordi de gjør personen utrygg og{' '}
                  <Notion
                    id="NotionId_4"
                    ariaLabel="Vis begrep beskrivelse"
                    title="Usikker"
                    subTitle="forklaring"
                    content={
                      <Fragment>
                        <NotionDialogContent>
                          <NotionDialogText>
                            De signalene andre mennesker sender ut, kan for et individ oppleves som forvirrende og i
                            mange tilfeller også motstridende. Det kalles normforvirring. Denne normforvirringen er en
                            naturlig del av sosialiseringsprosessen, og noe vi må lære oss å forholde oss til. En vanlig
                            konflikt er at venner ønsker at du skal spille internettspill eller bli med på kino, mens
                            foreldrene ber deg skru av PC-en for å gjøre husarbeid og lekser.
                          </NotionDialogText>
                        </NotionDialogContent>
                        <NotionDialogLicenses
                          license="CC-BY-ND-4.0"
                          source="https://snl.no"
                          authors={['Gary Waters']}
                        />
                      </Fragment>
                    }
                  >
                    usikker
                  </Notion>
                  .
                </p>
              </div>
            </section>
          </LayoutItem>
        </article>
      </OneColumn>
    );
  }
}

export default NotionExample;
