/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { Time, User } from 'ndla-ui/icons';
import { Glossary, OneColumn, LayoutItem } from 'ndla-ui';
import { addShowGlossaryDefinitionClickListeners } from 'ndla-article-scripts';

import LicenseExample from '../article/LicenseExample';
import FigureWithLicense from '../article/FigureWithLicense';

class GlossaryExample extends Component {
  componentDidMount() {
    addShowGlossaryDefinitionClickListeners();
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
            <div className="c-article-byline">
              <span className="c-article-byline__authors">
                <User /> Gro-Anita Mortensen.
              </span>{' '}
              <span className="c-article-byline__date">
                <Time /> Sist oppdatert 03.03.2017
              </span>
              <LicenseExample />
            </div>
          </LayoutItem>
          <LayoutItem layout="center">
            <section>
              <div>
                <p>
                  Gjennom{' '}
                  <Glossary
                    content="Sosialisering, betegnelse for de sosiale prosessene som fører til at individer tar opp i seg, eller internaliserer, samfunnets normer og atferdsmønstre med andre ord at de blir som de andre i samfunnet."
                    authors={['Gary Waters']}
                    source="snl.no"
                    title="Sosialisering"
                    messages={{
                      ariaLabel: 'Vis begrep beskrivelse',
                      close: 'Lukk',
                    }}
                    license="by-nc-nd"
                    id={1}>
                    sosialisering
                  </Glossary>{' '}
                  lærer menneskene å fungere i et samfunn og får kjennskap til
                  de regler og verdier som det forventes at man skal følge.
                  Sosialisering er dermed den prosessen som gjør at vi tar til
                  oss dette, fra vi blir født til vi dør.
                </p>
                <p>
                  Barn møtes med forventninger til hvordan de skal oppføre seg.
                  Disse forventningene gjentar seg, og slik lærer barnet hvilke
                  regler eller normer som gjelder. Hovedmålet med
                  sosialiseringen er at de enkelte menneskene skal kunne skille
                  mellom godt og ondt, og rett og galt.
                </p>
                <FigureWithLicense caption="" classes="u-float-right">
                  <img
                    alt="liten jente holder sine foreldres hender. foto."
                    src="https://staging.api.ndla.no/image-api/raw/jente mellom foreldre_0.jpg"
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
                </p>
                <p>
                  For å forsterke innlæringen av normer følges de opp av
                  reaksjoner eller sanksjoner.{' '}
                  <Glossary
                    content="Sanksjon, en negativ eller positiv reaksjon på noens atferd. I dagligtalen er det vanlig å oppfatte sanksjoner først og fremst som negative reaksjoner rettet mot uønsket atferd eller avvik. Et eksempel er foreldrene som nekter ungen lørdagsgodteri (sanksjon) fordi han eller hun ikke spiser opp grønnsakene sine (uønsket atferd)."
                    authors={[]}
                    title={'sanksjon'}
                    messages={{
                      ariaLabel: 'Vis begrep beskrivelse',
                      close: 'Lukk',
                    }}
                    license="by-nc-nd"
                    id={2}>
                    Sanksjonene
                  </Glossary>{' '}
                  kan både være positive og negative. Ønsket adferd belønnes,
                  men uønsket adferd straffes. Når en person har gjort normene
                  til sine egne og følger dem, sier man at normene er
                  internalisert.
                </p>
              </div>
            </section>
          </LayoutItem>
        </article>
      </OneColumn>
    );
  }
}

export default GlossaryExample;
