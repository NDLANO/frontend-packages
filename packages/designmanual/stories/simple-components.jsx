import React, { createElement } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as Icons from 'ndla-ui/icons';
import { BY, NC, ND } from 'ndla-licenses';
import {
  Aside,
  Button,
  Logo,
  LayoutItem,
  ClickableLicenseByline,
} from 'ndla-ui';
import article from '../dummydata/index';
import { Center, InlineContainer } from './helpers';
import LicenseExample from './article/LicenseExample';
import FigureWithLicense from './article/FigureWithLicense';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article4.content[0].content;

storiesOf('Enkle komponenter', module)
  .add('Bilde under ingress', () =>
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Bilde under ingress</h1>
            <p>
              Under ingressen bruker vi et bilde for å illustrere tematikken.
              Bruk helst bilder av mennesker, relevante og naturlige bilder.
              Bildet må være i landskapsformat, slik at det ikke blir så høyt at
              det skyver brødteksten for langt ned på siden.
            </p>
            <p>
              Bildet bør ha proporsjoner mellom 1:1 og 1:2. <br />Anbefalt
              bildestørrelse: 1000px (bredde) x 500px (høyde).
            </p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <FigureWithLicense authors="" caption="">
            <img
              alt=""
              src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg?width=1000"
            />
          </FigureWithLicense>
        </LayoutItem>
      </article>
    </Center>,
  )
  .add('Boks i tekst', () =>
    <Center>
      <section className="c-factbox">
        <LayoutItem layout="center">
          <h1 className="u-heading">Boks i tekst</h1>
          <p>
            En boks i teksten kan brukes for å fremheve noe av særlig interesse,
            annet enn sitat (som det allerede fins sitatstil til).
          </p>
          <p>
            Boks i tekst bør ikke ha mer enn omtrent 100 ord eller 500 tegn.
          </p>
        </LayoutItem>
      </section>
      <article className="c-article c-article--clean">
        <LayoutItem layout="center">
          <h1 className="c-article__title">Eksempelartikkel</h1>
          <p className="article_introduction">
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </p>
          <div className="c-article-byline">
            <span className="c-article-byline__authors">
              <Icons.User /> [Opphavsperson]. [lisens]
            </span>{' '}
            <span className="c-article-byline__date">
              <Icons.Time /> Publisert [dato]
            </span>
            <LicenseExample />
          </div>
        </LayoutItem>
        <LayoutItem layout="extend">
          <p>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
            din og bestemmer seg for å bruke ressurser på nettopp dette
            prosjektet.
          </p>
          <LayoutItem layout="center">
            <div className="c-bodybox">En tekstboks i midten av teksten.</div>
          </LayoutItem>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <LayoutItem layout="full">
            <div className="c-bodybox c-bodybox--extended">
              <p>En tekstboks som fyller spaltebredden.</p>
              <p>
                En tekstboks med eksternt innhold kan også ha lisensiering av
                innholdet.
              </p>
              <div className="c-source-list">
                <ClickableLicenseByline
                  className="c-source-list__item"
                  noText
                  license={[BY, NC, ND]}
                />
                <span className="c-source-list__item">Gary Waters</span>
                <span className="c-source-list__item">Kilde: SNL.no</span>
              </div>
            </div>
          </LayoutItem>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <LayoutItem layout="center">
            <div className="c-bodybox">
              <h3>
                En boks i tekst fungerer <em>dårlig</em> med mye tekst.
              </h3>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
              <p>
                Pitching er også en god måte å bevisstgjøre seg selv på. Når du
                pitcher, blir idéen og historien i den filmen du planlegger å
                lage, tydeligere for både deg selv og dem du eventuelt jobber
                sammen med i klassen.
              </p>
            </div>
          </LayoutItem>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
        </LayoutItem>
      </article>
    </Center>,
  )
  .add('Faktaboks og høyrespalte', () =>
    <Center>
      <section className="c-factbox">
        <LayoutItem layout="center">
          <h1 className="u-heading">Faktaboks og høyrespalte</h1>
          <p>
            For alt nytt innhold på ndla.no skal ikke flytende høyrespalte
            benyttes, i stedet benytter man faktabokser innenfor
            innholdsspalten. Høyrespalten fases ut, men vil for en tid eksistere
            på gamle artikler.
          </p>
          <p>Artikkelen nedenfor illustrerer både faktaboks og høyrespalte.</p>
        </LayoutItem>
      </section>
      <article className="c-article c-article--clean">
        <LayoutItem layout="center">
          <h1 className="c-article__title">Eksempelartikkel</h1>
          <p className="article_introduction">
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen.
          </p>
          <div className="c-article-byline">
            <span className="c-article-byline__authors">
              <Icons.User /> [Opphavsperson]. [lisens]
            </span>{' '}
            <span className="c-article-byline__date">
              <Icons.Time /> Publisert [dato]
            </span>
            <LicenseExample />
          </div>
        </LayoutItem>
        <LayoutItem layout="center">
          <Aside float>
            <div>
              <div className="c-aside__title">Høyrespalte</div>
              <p>Høyrespalten skal fases ut.</p>
              <p>
                I en midlertidig fase under flytting av innhold fra gammelt til
                nytt nettsted, kan den likevel brukes. Innholdet skal etter
                hvert flyttes til hovedspalten. Fakta kan legges i en faktaboks,
                annet innhold kan bakes inn i artikkelteksten, eller slettes.
              </p>
              <p>
                Om artikkelen har et bilde under ingressen, må høyrespalten
                plasseres under denne.
              </p>
            </div>
          </Aside>
          <p>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger
            å produsere filmen. Derfor er du avhengig av at noen tenner på idéen
            din og bestemmer seg for å bruke ressurser på nettopp dette
            prosjektet.
          </p>
          <ul>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <Aside>
            <div>
              <div className="c-aside__title">Faktaboks</div>
              <p>
                En faktaboks kan inneholde punktlister eller korte fakta som er
                relevant til artikkelens innhold.
              </p>
              <p>
                Det anbefales å ikke ha for mye innhold i en faktaboks, for å i
                størst mulig grad beholde lese-konteksten.
              </p>
              <p>
                Faktaboksen kan også brukes til å oppsummere innhold i slutten
                av en artikkel. Og den kan inneholde lisensiering om eksternt
                innhold er brukt.
              </p>
              <div className="c-source-list">
                <ClickableLicenseByline
                  className="c-source-list__item"
                  noText
                  license={[BY, NC, ND]}
                />
                <span className="c-source-list__item">Gary Waters</span>
                <span className="c-source-list__item">Kilde: SNL.no</span>
              </div>
            </div>
          </Aside>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
        </LayoutItem>
      </article>
    </Center>,
  )
  .add('Ikoner', () =>
    <Center>
      <section className="c-factbox">
        <LayoutItem layout="center">
          <h1 className="u-heading">Ikoner</h1>
        </LayoutItem>
      </section>
      <LayoutItem layout="center">
        <table className="c-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>JSX</th>
            </tr>
          </thead>
          <tbody>
            {[
              'Additional',
              'AlignCenter',
              'AlignJustify',
              'AlignLeft',
              'AlignRight',
              'Audio',
              'Bold',
              'Book',
              'Camera',
              'Copy',
              'Crop',
              'Cross',
              'Document',
              'Download',
              'Embed',
              'FactBox',
              'Grid',
              'Heading1',
              'Heading2',
              'Heading3',
              'Home',
              'H5P',
              'Ingress',
              'InsertTemplate',
              'Italic',
              'LicenseBy',
              'LicenseCc',
              'LicenseNc',
              'LicenseNd',
              'LicenseSa',
              'LicenseCc0',
              'LicensePd',
              'LicenseCopy',
              'Link',
              'ListCircle',
              'ListNumbered',
              'ListSquare',
              'OpenWindow',
              'Paragraph',
              'Path',
              'Pencil',
              'Pilcrow',
              'Plus',
              'Quote',
              'Sad',
              'Search',
              'Section',
              'Strikethrough',
              'Table',
              'TextInBox',
              'Time',
              'Underline',
              'User',
              'Video',
            ].map(key =>
              <tr key={key}>
                <td>
                  {createElement(Icons[key], { className: 'c-icon--medium' })}
                </td>
                <td>
                  {key}
                </td>
                <td>
                  <code>
                    &lt;Icons.{key} /&gt;
                  </code>
                </td>
              </tr>,
            )}
            {['up', 'down', 'left', 'right'].map(key =>
              <tr key={key}>
                <td>
                  <Icons.Arrow direction={key} />
                </td>
                <td>
                  Arrow {key}
                </td>
                <td>
                  <code>
                    &lt;Icons.Arrow direction=&quot;{key}&quot; /&gt;
                  </code>
                </td>
              </tr>,
            )}
          </tbody>
        </table>
      </LayoutItem>
    </Center>,
  )
  .add('Knapper', () =>
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Knapper</h1>
            <p>
              Knapper er til å klikke på, ikke for å lenke til, og skal brukes
              til interaktivitet på samme side, ikke for å sende brukeren til en
              ny side (da brukes vanlig lenke).
            </p>
            <p>
              Knapp med ramme brukes for de fleste knapper, men er det behov for
              ekstra oppmerksomhet kan fylt knapp benyttes.
            </p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <h2 className="u-heading">Eksempel</h2>
          <InlineContainer>
            <Button outline onClick={action('clicked')}>
              Knapp med ramme
            </Button>{' '}
            <Button outline disabled onClick={action('clicked')}>
              Deaktivert knapp med ramme
            </Button>
          </InlineContainer>
          <InlineContainer>
            <Button onClick={action('clicked')}>Fylt knapp</Button>
          </InlineContainer>
          <Button disabled onClick={action('clicked')}>
            Knapp deaktivert
          </Button>
        </LayoutItem>
      </article>
    </Center>,
  )
  .add('Logo', () =>
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Logo</h1>
            <p>
              Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy for
              kommunikasjon. Den skal inspirere målgruppen elever og lærere i
              videregående opplæring og gjøre dem nysgjerrige på NDLA.
            </p>
            <p>
              Logoen består av navnet NDLA i en spesiell typografi og bør
              hovedsakelig benyttes sammen med underteksten. Logo uten
              undertekst kan benyttes i tilfeller der det kommer godt fram andre
              steder hvem NDLA er, eksempelvis på ndla.no.
            </p>
            <p>
              Logo uten undertekst kan kompletteres med en beskrivende tekst til
              høyre. Logoen kan benyttes i blått, eller i svart eller hvitt
              avhengig av bakgrunn. Den skal plasseres i det øverste eller
              nederste hjørnet av en ytterkant. Logoen skal ikke sentreres.
            </p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <Logo
            cssModifier="large"
            name
            to="#"
            altText="Nasjonal digital læringsarena"
          />
        </LayoutItem>
      </article>
    </Center>,
  );
