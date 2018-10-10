/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { OneColumn, LayoutItem, Image } from 'ndla-ui';
import Notion, {
  NotionDialogContent,
  NotionDialogText,
  NotionDialogLicenses,
} from 'ndla-notion';
import { addShowConceptDefinitionClickListeners } from 'ndla-article-scripts';

import FigureWithLicense from '../article/FigureWithLicense';
import ArticleBylineExample from '../molecules/ArticleBylineExample';

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
              Vi blir født inn i et samfunn. På den ene siden kommer vi til en
              familie bestående av nære relasjoner. På den andre siden blir de
              fleste av oss født på en institusjon, et sykehus.
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
                              Sosialisering, betegnelse for de sosiale
                              prosessene som fører til at individer tar opp i
                              seg, eller internaliserer, samfunnets normer og
                              atferdsmønstre med andre ord at de blir som de
                              andre i samfunnet.
                            </NotionDialogText>
                          </NotionDialogContent>
                          <NotionDialogLicenses
                            license="CC-BY-ND-4.0"
                            source="snl.no"
                            authors={['Gary Waters']}
                          />
                        </Fragment>
                      }>
                      Sosialisering
                    </Notion>{' '}
                    lærer menneskene å fungere i et samfunn og får kjennskap til
                    de regler og verdier som det forventes at man skal følge.
                    Sosialisering er dermed den prosessen som gjør at vi tar til
                    oss dette, fra vi blir født til vi dør.
                  </i>
                </p>
                <p>
                  Barn møtes med forventninger til hvordan de skal oppføre seg.
                  Disse forventningene gjentar seg, og slik lærer barnet hvilke
                  regler eller normer som gjelder. Hovedmålet med
                  sosialiseringen er at de enkelte menneskene skal kunne skille
                  mellom godt og ondt, og rett og galt.
                </p>
                <FigureWithLicense type="right" caption="" runScripts>
                  <Image
                    alt="liten jente holder sine foreldres hender. foto."
                    src="https://staging.api.ndla.no/image-api/raw/jente%2520mellom%2520foreldre_0.jpg"
                  />
                </FigureWithLicense>
                <h2>Normer og normsendere</h2>
                <p>
                  Normer er regler som forteller hvordan man skal oppføre seg og
                  handle i en gitt situasjon. normer kan være formelle eller
                  uformelle. Lover er formaliserte eller formelle normer. de
                  uformelle normene er uskrevne regler for skikk og bruk, som
                  hvordan man skal oppføre seg i ulike situasjoner. det kan være
                  forventninger om at du skal håndhilse når du kommer inn til et
                  jobbintervju, eller at det er uhøflig å svare på
                  telefonsamtaler mens intervjuet pågår.
                  <Notion
                    id="NotionId_2"
                    ariaLabel="Vis begrep beskrivelse"
                    content={
                      <Fragment>
                        <NotionDialogContent>
                          <NotionDialogText>
                            Sosialisering, betegnelse for de sosiale prosessene
                            som fører til at individer tar opp i seg, eller
                            internaliserer, samfunnets normer og atferdsmønstre
                            med andre ord at de blir som de andre i samfunnet.
                          </NotionDialogText>
                        </NotionDialogContent>
                        <NotionDialogLicenses
                          license="CC-BY-ND-4.0"
                          source="snl.no"
                          authors={['Gary Waters']}
                        />
                      </Fragment>
                    }>
                    Sosialisering
                  </Notion>{' '}
                </p>
                <p>
                  For å forsterke innlæringen av normer følges de opp av
                  reaksjoner eller sanksjoner.
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
