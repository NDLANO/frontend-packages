/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem, Article, SubjectMaterialBadge, constants } from '@ndla/ui';

import Resources from '../molecules/resources';
import { CompetenceGoalListExample } from '../organisms/CompetenceGoalsExample';
import FigureWithLicense from '../article/FigureWithLicense';

const { contentTypes } = constants;

const ArticleAdditional = () => (
  <OneColumn>
    <Article
      article={{
        title: 'Artikkel Tilleggsstoff?',
        introduction:
          'Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.',
        published: '24.04.2018',
        content: () => (
          <>
            <p>
              Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere
              filmen. Derfor er du avhengig av at noen tenner på idéen din og bestemmer seg for å
              bruke ressurser på nettopp dette prosjektet.
            </p>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner
              eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og
              se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
              historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
              eventuelt jobber sammen med i klassen.
            </p>
            <table className="c-table o-wrapper--wide">
              <tbody>
                <tr>
                  <th>Hovedkategorier</th>
                  <th>Sjangre</th>
                  <th>Kjennetegn</th>
                </tr>
                <tr>
                  <td>
                    <strong>Subjektive sjangre</strong>
                  </td>
                  <td>Leder</td>
                  <td>
                    <ul>
                      <li>skrives ofte av en av redaktørene </li>
                      <li>er redaksjonens syn på en sak </li>
                      <li>står ofte på side 2 eller på egen meningsside</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Anmeldelse</td>
                  <td>
                    <ul>
                      <li>en av journalistenes mening om en ny film, bok, konsert e.l. </li>
                      <li>
                        skal være en bruksanvisning slik at målgruppen vet om produktet er noe for
                        dem
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Leserinnlegg og kommentarfelt</td>
                  <td>
                    <ul>
                      <li>lar den enkelte mottaker komme med sitt syn på en sak</li>
                      <li>leserinnlegg i avis, kommentarfelt på nett </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Kommentar og kronikk</td>
                  <td>
                    <ul>
                      <li>
                        kan skrives av en i redaksjonen, men gjerne også av en fagperson utenfor
                        redaksjonen{' '}
                      </li>
                      <li>skal gi dybdekunnskap om et tema </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Objektive sjangre</strong>
                  </td>
                  <td>Nyhetsartikkel</td>
                  <td>
                    <ul>
                      <li>kort, konsis, svarer på grunnleggende spørsmål</li>
                      <li>det viktigste først </li>
                      <li>lar kildene komme til orde</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Nyhetsreportasje</td>
                  <td>
                    <ul>
                      <li>går gjerne mer i dybden enn en nyhetsartikkel </li>
                      <li>bruker flere kilder </li>
                      <li>har fokus på bakgrunn og årsak</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Intervju</td>
                  <td>
                    <ul>
                      <li>enkelt oppsett med spørsmål og svar </li>
                      <li>brukes gjerne som en del av en nyhetsreportasje eller artikkel</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Notis</td>
                  <td>
                    <ul>
                      <li>
                        kort nyhetsmelding som gir grunnleggende informasjon om en aktuell hendelse
                      </li>
                      <li>gjerne bare 10–15 setninger</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Hybridsjangre</strong>
                  </td>
                  <td>Feature</td>
                  <td>
                    <ul>
                      <li>
                        hører til i objektiv-kategorien, men journalisten bruker alle sanser og
                        litterære virkemidler{' '}
                      </li>
                      <li>går i dybden, gir leseren en større forståelse av et tema</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Portrettintervju</td>
                  <td>
                    <ul>
                      <li>
                        hører til i objektiv-kategorien, men journalisten bruker alle sanser og
                        litterære virkemidler{' '}
                      </li>
                      <li>gir leseren dybdekunnskap om en aktuell person i nyhetsbildet</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner
              eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og
              se potensialet i den.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og
              historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du
              eventuelt jobber sammen med i klassen.
            </p>
          </>
        ),
        footNotes: '',
        copyright: {
          license: { license: 'CC-BY-SA-4.0' },
          creators: [
            { name: 'Cecilie Isaksen Eftedal' },
            { name: 'Siv Mundal' },
            { name: 'Pål Frønsdal' },
          ],
          rightsholders: [{ name: 'Riksarkivet' }],
        },
      }}
      competenceGoals={<CompetenceGoalListExample />}
      competenceGoalTypes={['LK20', 'LK06']}
      copyPageUrlLink={window.location.href}
      icon={<SubjectMaterialBadge background size="large" />}
      id="mainContentId"
      locale="nb"
      messages={{ label: 'Fagstoff' }}
      modifier={contentTypes.SUBJECT_MATERIAL}
      notions={{
        list: [
          {
            id: 1,
            title: 'And',
            text:
              'Ender tilhører andefamilien. I Norge har det vært vanlig å dele endene inn i tre grupper etter levevis: Gressender som spiser planter på grunt vann, dykkender som dykker etter virvelløse dyr, og fiskeender som spiser fisk. Ender ble husdyr i middelhavslandene kort tid før Kristi fødsel. Hos hannen, andriken, er de fire midtre halefjærene bøyd oppover. Som ofte ellers i fugleriket har hannen finere farger enn hunnen. Det finnes en rekke raser og krysninger. På bildet ser vi tamme ender, pekinand.',
            image: {
              url: 'https://api.ndla.no/image-api/raw/id/40164?width=660',
              alt: 'And',
            },
            labels: ['Naturbruk Vg1'],
            media: (
              <FigureWithLicense
                type="full-column"
                resizeIframe
                caption="Utholdenhet - animasjon av oksygentransporten">
                <iframe
                  title="Video: Utholdenhet - animasjon av oksygentransporten"
                  height="270"
                  width="480"
                  frameBorder="0"
                  src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
                  allowFullScreen
                />
              </FigureWithLicense>
            ),
            authors: [{ name: 'Fornavn Etternavn' }],
            license: 'CC-BY-SA-4.0',
            linkedTo: [{ label: 'Fag' }, { label: 'Fag' }],
            onReferenceClick: e => console.log(e), // eslint-disable-line no-console
          },
        ],
        related: [
          { url: '', label: 'Vis flere begreper til tema politikk' },
          { url: '', label: 'Vis flere begreper til tema politikk' },
          { url: '', label: 'Vis tilknyttede læringsressurser' },
        ],
      }}
    />
    <LayoutItem layout="extend">
      <Resources showTopicHeading />
    </LayoutItem>
  </OneColumn>
);

export default ArticleAdditional;
