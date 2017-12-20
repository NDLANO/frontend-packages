import React, { createElement } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as Icons from 'ndla-ui/icons';
import * as licenseIcons from 'ndla-icons/license';
import * as commonIcons from 'ndla-icons/common';
import * as editorIcons from 'ndla-icons/editor';
import * as actionIcons from 'ndla-icons/action';
import { BY, NC, ND } from 'ndla-licenses';
import {
  Aside,
  Button,
  Logo,
  LayoutItem,
  LicenseByline,
  Image,
  AudioPlayer,
  Translation,
  TranslationLine,
} from 'ndla-ui';
import { StoryIntro, IconList, StoryBody } from './wrappers';
import { InlineContainer } from './helpers';
import LicenseExample from './article/LicenseExample';
import FigureWithLicense from './article/FigureWithLicense';
import AudioExample from './article/AudioExample';
import { OneColumn } from '../../ndla-ui/lib/Layout/index';

storiesOf('Enkle komponenter', module)
  .add('Bilde', () => (
    <div>
      <StoryIntro title="Bilde">
        <p>
          Bilder har tre mulige plasseringer: fullbredde midtstilt, venstrestilt
          og høyrestilt. Bilder kan være i størrelsene liten, medium og stor
          (fullbredde). Bilder som ikke er fullbredde, kan ekspanderes på klikk.
        </p>
        <p>
          Under bildet vises lisensikoner, forfatter og handlingsknappen «Bruk
          bildet» som gjør at brukeren får opp lisensboksen for bildet. Små
          bilder kan være uten metainfo og lisensinfo.
        </p>
        <p>
          Ved klikk på «Last ned bilde» i lisensboksen, kan brukeren laste ned
          fullversjonen av bildet.
        </p>
      </StoryIntro>

      <StoryBody>
        <h2>Fullbredde</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <FigureWithLicense
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          runScripts>
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2>Flyt til venstre</h2>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <FigureWithLicense
          type="left"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.">
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>

        <h2>Flyt til høyre</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>

        <FigureWithLicense
          type="right"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.">
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2>Flyt til høyre, liten versjon</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <FigureWithLicense
          type="small-right"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.">
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2>Flyt til venstre, liten versjon</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <FigureWithLicense
          noFigcaption
          type="small-left"
          hideFigcaption
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.">
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2>Flyt til høyre, ekstra liten versjon</h2>
        <FigureWithLicense
          noFigcaption
          type="xsmall-right"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.">
          <Image
            alt="Forstørrelsesglass"
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
      </StoryBody>
    </div>
  ))
  .add('Bilde under ingress', () => (
    <div>
      <StoryIntro title="Bilde under ingress">
        <p>
          Under ingressen bruker vi et bilde for å illustrere tematikken. Bruk
          helst bilder av mennesker og bilder som er relevante og naturlige.
          Bildet må være i landskapsformat, slik at det ikke blir så høyt at det
          skyver brødteksten for langt ned på siden.
        </p>
        <p>
          Bildet bør ha proporsjoner mellom 1:1 og 1:2. <br />Anbefalt
          bildestørrelse minimum: 1000px (bredde) x 500px (høyde).
        </p>
      </StoryIntro>
      <StoryBody>
        <FigureWithLicense
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          runScripts>
          <Image
            alt=""
            src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
          />
        </FigureWithLicense>
      </StoryBody>
    </div>
  ))
  .add('Lydavspiller', () => (
    <div>
      <StoryIntro title="Lydavspiller" />
      <StoryBody>
        <h2 className="u-heading">Lydavspiller med lisensinformasjon</h2>
        <AudioExample runScripts />
        <h2 className="u-heading">Lydavspiller for bruk ved uttale</h2>
        <table>
          <thead>
            <tr>
              <th>Forenklet</th>
              <th>Trad.</th>
              <th>Pinyin</th>
              <th>Ordkl.</th>
              <th>Oversettelse</th>
              <th>Uttale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>旅游</td>
              <td>旅遊</td>
              <td>lǚyóu</td>
              <td>v/n</td>
              <td>å reise (rundt); å dra på tur; reise(liv)</td>
              <td>
                <AudioPlayer
                  src="https://staging.api.ndla.no/audio/files/shu3jia4.mp3"
                  type="audio/mpeg"
                  speach
                  title="Oversettelse"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </StoryBody>
    </div>
  ))
  .add('Boks i tekst', () => (
    <div>
      <StoryIntro title="Boks i tekst">
        <p>
          En boks i teksten kan brukes for å framheve noe av særlig interesse,
          annet enn sitat (som det fins egen sitatstil til).
        </p>
        <p>Boks i tekst bør ikke ha mer enn omtrent 100 ord eller 500 tegn.</p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__authors">
            <commonIcons.User /> [Opphavsperson]. [lisens]
          </span>{' '}
          <span className="c-article-byline__date">
            <commonIcons.Time /> Publisert [dato]
          </span>
          <LicenseExample />
        </div>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
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
              <LicenseByline
                className="c-source-list__item"
                licenseRights={[BY, NC, ND]}
              />
              <span className="c-source-list__item">Gary Waters</span>
              <span className="c-source-list__item">Kilde: SNL.no</span>
            </div>
          </div>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <div className="c-bodybox c-bodybox--extended">
            <p>En boks med flytelementer</p>
            <FigureWithLicense type="right" authors="" caption="" runScripts>
              <Image
                alt=""
                src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
              />
            </FigureWithLicense>
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
      </StoryBody>
    </div>
  ))
  .add('Embedded innhold', () => (
    <div>
      <StoryIntro title="Embedded innhold (Youtube, brightcove, HP5 osv.)">
        <p>
          Embedded innhold skal bruke Figure komponenten (må ikke være iframe):
          <code>{`<Figure>\n  <iframe ... />\n</Figure>`}</code>
        </p>
        <p>
          Om det er en iframe der resize script skal kjøres må resizeIframe
          settes til true
          <code>{`<Figure resizeIframe>\n  <iframe ... />\n</Figure>`}</code>
        </p>
        <p>
          Om det er satt høyde og bredde på iframen (som vist under) vil den
          beholde forholdet mellom høyde og bredde (så lenge resize scriptet er
          kjørt).
          <code>{`<iframe width="400" height="300" ... />`}</code>
        </p>
      </StoryIntro>
      <StoryBody>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2 className="u-heading">Iframe med satt høyde og bredde</h2>
        <FigureWithLicense resizeIframe runScripts noCaption>
          <iframe
            src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed"
            title="Title"
            width="600"
            height="338"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <h2 className="u-heading">Iframe uten satt høyde og bredde</h2>
        <FigureWithLicense resizeIframe noCaption>
          <iframe
            src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed"
            title="Video without dimensions"
          />
        </FigureWithLicense>

        <h2 className="u-heading">
          Embedded innhold (brightcove) med lisens og caption
        </h2>
        <FigureWithLicense
          resizeIframe
          caption="Utholdenhet - animasjon av oksygentransporten"
          reuseLabel="videoen">
          <iframe
            title="Video: Utholdenhet - animasjon av oksygentransporten"
            height="270"
            width="480"
            frameBorder="0"
            src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
            allowFullScreen
          />
        </FigureWithLicense>

        <h2 className="u-heading">Embedded innhold med høyrekolonne</h2>
        <Aside float>
          <div>
            <h2>Høyrespalte</h2>
            <p>Høyrespalten skal fases ut.</p>
            <p>
              I en midlertidig fase under flytting av innhold fra gammelt til
              nytt nettsted kan høyrespalten likevel brukes. Innholdet skal
              etter hvert flyttes til hovedspalten. Fakta kan legges i en
              faktaboks, annet innhold kan bakes inn i artikkelteksten, eller
              slettes.
            </p>
            <p>
              Om artikkelen har et bilde under ingressen, må høyrespalten
              plasseres under denne.
            </p>
            <p>
              På mobil skal høyrespalten alltid havne på slutten av artikkelen.
            </p>
          </div>
        </Aside>
        <p>
          Dette er måte å vise embedded innhold sidestilt med høyrekolonne.
          Denne varianten skal kun brukes om det er nødvendig. Visningen fases
          bort når høyrespalte fases bort.
        </p>
        <FigureWithLicense resizeIframe noCaption type="full-column">
          <iframe
            src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed"
            title="Video without dimensions"
          />
        </FigureWithLicense>
      </StoryBody>
    </div>
  ))
  .add('Bruk av lenker', () => (
    <div>
      <StoryIntro title="Bruk av lenker">
        <p>
          Lenker på <a href="//ndla.no">ndla.no</a> bruker den vanlige
          konvensjonen med underlinje. Lenker skal i hovedsak åpne seg i samme
          vindu (det vil si at vi bruker <code>target=&quot;_self&quot;</code>{' '}
          eller ingen target-attributt). Unntaket er hvis lenken inngår i et
          skjema eller læringssammenhengen gjør det er nødvendig at brukerne
          beholder vinduet eller fanen de står i.
        </p>
      </StoryIntro>
    </div>
  ))
  .add('Faktaboks og høyrespalte', () => (
    <div>
      <StoryIntro title="Faktaboks og høyrespalte">
        <p>
          For alt nytt innhold på ndla.no skal ikke flytende høyrespalte
          benyttes. I stedet benytter vi faktabokser innenfor innholdsspalten.
          Høyrespalten fases ut, men vil for en tid eksistere på gamle artikler.
        </p>
        <p>Artikkelen nedenfor illustrerer både faktaboks og høyrespalte.</p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__authors">
            <commonIcons.User /> [Opphavsperson]. [lisens]
          </span>{' '}
          <span className="c-article-byline__date">
            <commonIcons.Time /> Publisert [dato]
          </span>
          <LicenseExample />
        </div>
        <Aside float>
          <div>
            <h2>Høyrespalte</h2>
            <p>Høyrespalten skal fases ut.</p>
            <p>
              I en midlertidig fase under flytting av innhold fra gammelt til
              nytt nettsted kan høyrespalten likevel brukes. Innholdet skal
              etter hvert flyttes til hovedspalten. Fakta kan legges i en
              faktaboks, annet innhold kan bakes inn i artikkelteksten, eller
              slettes.
            </p>
            <p>
              Om artikkelen har et bilde under ingressen, må høyrespalten
              plasseres under denne.
            </p>
            <p>
              På mobil skal høyrespalten alltid havne på slutten av artikkelen.
            </p>
          </div>
        </Aside>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
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
            <h2>Faktaboks</h2>
            <p>
              En faktaboks kan inneholde punktlister eller korte fakta som er
              relevant for artikkelens innhold.
            </p>
            <p>
              Det anbefales å ikke ha for mye innhold i faktaboks, slik at
              lese-konteksten i størst mulig grad beholdes.
            </p>
            <h2>Enkel tittel</h2>
            <p>
              Faktaboksen kan også brukes til å oppsummere innhold i slutten av
              en artikkel, og den kan inneholde lisensiering om eksternt innhold
              er brukt.
            </p>
            <div className="c-source-list">
              <LicenseByline
                className="c-source-list__item"
                licenseRights={[BY, NC, ND]}
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
      </StoryBody>
    </div>
  ))
  .add('Ekspanderbar boks', () => (
    <div>
      <StoryIntro title="Ekspanderbar boks" />
      <StoryBody>
        <details>
          <summary>Oppsummering av innhold</summary>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du
            pitcher, blir idéen og historien i den filmen du planlegger å lage,
            tydeligere for både deg selv og dem du eventuelt jobber sammen med i
            klassen.
          </p>
        </details>
      </StoryBody>
    </div>
  ))
  .add('Kildehenvisninger', () => (
    <div>
      <StoryIntro title="Kildehenvisninger">
        <p>
          Kildehenvisninger benytter{' '}
          <a href="http://sokogskriv.no/kildebruk-og-referanser/referansestiler/chicago-fotnoter/">
            Chicago 16-stilen
          </a>.
        </p>
        <p>
          I teksten brukes en enkel nummerering for å henvise til referanse.
          Tallet lenkes til den aktuelle referansen.
        </p>
        <p>
          I referanselisten nederst lenkes hver referanse igjen til hvor de
          opptrer i teksten.
        </p>
      </StoryIntro>
      <StoryBody>
        <p>
          Målgruppen for Hansaspillet er både fastboende og turister.<sup id="ref1">
            [<a href="#1">1</a>]
          </sup>
        </p>
        <p>
          Forfatteren, komponisten og musikeren foreslo flere
          samarbeidsprosjekter for å løfte frem Munchs ukjente tekstarv.<sup id="ref2">
            [<a href="#2">2</a>]
          </sup>
        </p>
        <ol className="c-footnotes">
          <li className="c-footnotes__item">
            <cite className="c-footnotes__cite" id="1">
              <sup>
                <a href="#ref1">1</a>
              </sup>{' '}
              Røyrane, «Hanseatene kommer tilbake». Røyrane, Eva. «Hanseatene
              kommer tilbake.» Bergens Tidende. 11.05.2003.{' '}
              <a href="http://www.bt.no/nyheter/lokalt/Hanseatene-kommer-tilbake-2419472.html">
                http://www.bt.no/nyheter/lokalt/Hanseatene-kommer-tilbake-2419472.html
              </a>.
            </cite>
          </li>
          <li className="c-footnotes__item">
            <cite className="c-footnotes__cite" id="2">
              <sup>
                <a href="#ref2">2</a>
              </sup>{' '}
              Nærø, «Ketil Bjørnstad.» Nærø, Sturle Scholz. «Ingen tok Ketil
              Bjørnstad på alvor.» Aftenposten. 25.01.2013.
            </cite>
          </li>
        </ol>
      </StoryBody>
    </div>
  ))
  .add('Ikoner', () => (
    <div>
      <StoryIntro title="Ikoner" />
      <OneColumn>
        <h2>Felles</h2>
        <IconList icons={commonIcons} folder="common" />
        <h2>Lisens</h2>
        <IconList icons={licenseIcons} folder="license" />
        <h2>Handling</h2>
        <IconList icons={actionIcons} folder="editor" />
        <h2>Editor</h2>
        <IconList icons={editorIcons} folder="editor" />
      </OneColumn>
      <StoryBody>
        <h2>Ikoner som ikke er i bruk</h2>
        <table className="c-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Name</th>
              <th>JSX</th>
            </tr>
          </thead>
          <tbody>
            {['Book', 'Download', 'Embed', 'InsertTemplate', 'OpenWindow'].map(
              key => (
                <tr key={key}>
                  <td>
                    {createElement(Icons[key], { className: 'c-icon--medium' })}
                  </td>
                  <td>{key}</td>
                  <td>
                    <code>&lt;Icons.{key} /&gt;</code>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </StoryBody>
    </div>
  ))
  .add('Knapper', () => (
    <div>
      <StoryIntro title="Knapper">
        <p>
          Knapper er til å klikke på for å navigere på samme side, ikke for å
          lenke til en annen. De skal altså brukes til interaktivitet på samme
          side. For å sende brukeren til en annen side brukes vanlig lenke.
        </p>
        <p>
          Knapp med ramme brukes for de fleste knapper, men er det behov for
          ekstra oppmerksomhet, kan fylt knapp benyttes.
        </p>
      </StoryIntro>
      <StoryBody>
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
          <Button onClick={action('clicked')}>Fylt knapp</Button>{' '}
          <Button disabled onClick={action('clicked')}>
            Knapp deaktivert
          </Button>
        </InlineContainer>
        {process.env.NODE_ENV === 'development' && [
          <h2 className="u-heading">Alternativer når UU krever en knapp</h2>,
          <InlineContainer>
            <Button link onClick={action('clicked')}>
              Knapp stylet som link
            </Button>{' '}
            <p>
              Ser{' '}
              <Button stripped onClick={action('clicked')}>
                dette
              </Button>{' '}
              ut som en knapp
            </p>
          </InlineContainer>,
        ]}
      </StoryBody>
    </div>
  ))
  .add('Logo', () => (
    <div>
      <StoryIntro title="Logo">
        <p>
          Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy for
          kommunikasjon. Den skal inspirere målgruppen elever og lærere i
          videregående opplæring og gjøre dem nysgjerrige på NDLA.
        </p>
        <p>
          Logoen består av navnet NDLA i en spesiell typografi og bør
          hovedsakelig benyttes sammen med underteksten. Logo uten undertekst
          kan benyttes i tilfeller der det kommer godt fram andre steder hva
          NDLA er, eksempelvis på ndla.no.
        </p>
        <p>
          Logo uten undertekst kan kompletteres med en beskrivende tekst til
          høyre. Logoen kan benyttes i blått, eller i svart eller hvitt avhengig
          av bakgrunn. Den skal plasseres i det øverste eller nederste hjørnet
          av en ytterkant. Logoen skal ikke sentreres.
        </p>
      </StoryIntro>
      <StoryBody>
        <h3>Logo uten url</h3>
        <Logo
          cssModifier="large"
          name
          altText="Nasjonal digital læringsarena"
        />

        <h3>Logo med url</h3>
        <Logo
          cssModifier="large"
          name
          to="/"
          altText="Nasjonal digital læringsarena"
        />
      </StoryBody>
    </div>
  ))
  .add('Oversettelse', () => (
    <div>
      <StoryIntro title="Oversettelse">
        <p>
          Ved oversettelser kan det bli lite oversiktlig å bruke tabeller,
          derfor kan man i disse tilfellene heller bruke en oversettelse-liste.
        </p>
      </StoryIntro>
      <StoryBody>
        <Translation index={1}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你叫什么名字？//你叫什麼名字？
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pingyu">
            Nǐ jiào shénme míngzi?
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Hva heter du?
          </TranslationLine>
        </Translation>
        <Translation index={2}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你是学生。//你是學生。
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pingyu">
            Nǐ shì xuésheng.
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Du er student.
          </TranslationLine>
        </Translation>
      </StoryBody>
    </div>
  ));
