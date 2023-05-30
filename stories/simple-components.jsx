import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import * as licenseIcons from '@ndla/icons/licenses';
import * as contentTypeIcons from '@ndla/icons/contentType';
import * as commonIcons from '@ndla/icons/common';
import * as editorIcons from '@ndla/icons/editor';
import * as actionIcons from '@ndla/icons/action';
import { BY, NC, ND } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { Aside, FactBox, Logo, LayoutItem, AudioPlayer, OneColumn, CreatedBy } from '@ndla/ui';
import { colors, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { StoryIntro, IconList, StoryBody } from './wrappers';
import FigureWithLicense from './article/FigureWithLicense';
import FigureImage from './article/FigureImage';
import FootnotesExample from './article/FootnotesExample';
import ArticleBylineExample from './molecules/ArticleBylineExample';
import DrawerExample from './atoms/DrawerExample';
import SolutionTableExample from './molecules/SolutionExample';
import CodeblockExample from './codeblock/CodeblockExample';
import AudioExample from './article/AudioExample';
import UkraineBannerExample from './molecules/UkraineBannerExample';
import TreeStructureExample from './molecules/TreeStructureExample';

const SourceList = styled.div`
  display: flex;
  border-top: 1px solid ${colors.brand.tertiary};
  padding-top: ${spacing.small};
  margin-top: ${spacing.small};
  color: ${colors.brand.grey};
  align-items: center;
  ${fonts.sizes('15px')};
  span {
    margin-right: ${spacing.small};
  }
`;

const floatVideo = (left) => (
  <Fragment>
    <h2 className="u-heading">{`Eksempel ${!left ? 'høyrestilt' : 'venstrestilt'}`}</h2>
    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>

    <FigureWithLicense
      type={left ? 'left' : 'right'}
      resizeIframe
      caption="Utholdenhet - animasjon av oksygentransporten"
    >
      <iframe
        title="Video: Utholdenhet - animasjon av oksygentransporten"
        height="270"
        width="480"
        frameBorder="0"
        src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
        // eslint-disable-next-line react/no-unknown-property
        allowFullScreen
      />
    </FigureWithLicense>

    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
  </Fragment>
);

storiesOf('Enkle komponenter', module)
  .add('Bilde', () => (
    <div>
      <StoryIntro title="Bilde">
        <p>
          Bilder har tre mulige plasseringer: fullbredde midtstilt, venstrestilt og høyrestilt. Bilder kan være i
          størrelsene ekstra liten, liten, medium og stor (fullbredde). Bilder som ikke er fullbredde, kan ekspanderes
          på klikk.
        </p>
        <p>
          Under bildet vises lisensikoner, forfatter og handlingsknappen «Bruk bildet» som gjør at brukeren får opp
          lisensboksen for bildet. Små bilder kan være uten metainfo og lisensinfo.
        </p>
        <p>Ved klikk på «Last ned bilde» i lisensboksen, kan brukeren laste ned fullversjonen av bildet.</p>
      </StoryIntro>
      <StoryBody>
        <h2>Fullbredde</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FigureImage
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2>Flyt til venstre</h2>
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
          av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <FigureImage
          type="left"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>

        <h2>Flyt til høyre</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FigureImage
          type="right"
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2>Flyt til høyre, liten versjon</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FigureImage
          type="small-right"
          hasHiddenCaption
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2>Flyt til venstre, liten versjon</h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <FigureImage
          type="small-left"
          hasHiddenCaption
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2>Flyt til høyre, ekstra liten versjon</h2>
        <FigureImage
          type="xsmall-right"
          hasHiddenCaption
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt="Forstørrelsesglass"
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
      </StoryBody>
    </div>
  ))
  .add('Visuelt element under ingress', () => (
    <div>
      <StoryIntro title="Visuelt element under ingress">
        <p>
          Under ingressen bruker vi et bilde for å illustrere tematikken. Bruk helst bilder av mennesker og bilder som
          er relevante og naturlige. Bildet må være i landskapsformat, slik at det ikke blir så høyt at det skyver
          brødteksten for langt ned på siden.
        </p>
        <p>
          Bildet bør ha proporsjoner mellom 1:1 og 1:2. <br />
          Anbefalt bildestørrelse minimum: 1000px (bredde) x 500px (høyde).
        </p>
      </StoryIntro>
      <StoryBody>
        <FigureImage
          caption="Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen."
          alt=""
          src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg"
        />
      </StoryBody>
    </div>
  ))
  .add('Lydavspiller', () => (
    <div>
      <StoryIntro title="Lydavspiller" />
      <OneColumn>
        <LayoutItem layout="extend">
          <h2 className="u-heading">Podcast</h2>
          <AudioExample showSubtitle showImage showDescription showTextVersion />
          <AudioExample showSubtitle showDescription showTextVersion />
          <h2 className="u-heading">Lydavspiller med tekstversjon</h2>
          <AudioExample showTextVersion />
          <h2 className="u-heading">Lydavspiller med lisensinformasjon</h2>
          <AudioExample />
          <h2 className="u-heading">Lydavspiller for bruk ved uttale</h2>
          <div className="c-article c-article--clean">
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
                      src="https://api.staging.ndla.no/audio/files/shu3jia4.mp3"
                      speech
                      title="Oversettelse"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </LayoutItem>
      </OneColumn>
    </div>
  ))
  .add('Tekst i ramme', () => (
    <div>
      <StoryIntro title="Tekst i ramme">
        <p>
          Tekst i ramme kan brukes for å framheve noe av særlig interesse, annet enn sitat (som det fins egen sitatstil
          til).
        </p>
        <p>Tekst i ramme bør ikke ha mer enn omtrent 100 ord eller 500 tegn.</p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
        </p>
        <ArticleBylineExample />
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig
          av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <LayoutItem layout="full">
          <div className="c-bodybox c-bodybox--extended">
            <p>En tekstboks som fyller spaltebredden.</p>
          </div>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <div className="c-bodybox c-bodybox--extended">
            <p>En boks med flytelementer</p>
            <FigureImage alt="" src="https://api.staging.ndla.no/image-api/raw/42-45210905.jpg" type="right" />
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
          </div>
          <div className="c-bodybox c-bodybox--extended">
            <h2>
              Tekst i ramme fungerer <em>dårlig</em> med mye tekst.
            </h2>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
            <p>
              Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
              filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
            </p>
          </div>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
        </LayoutItem>
        <LayoutItem layout="center">
          <p className="c-componentinfo__status-label--warn">Status: Inaktiv</p>
          <div className="c-bodybox">En tekstboks i midten av teksten som ikke fyller bredden.</div>
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
          Om det er en iframe der resize script skal kjøres må resizeIframe settes til true
          <code>{`<Figure resizeIframe>\n  <iframe ... />\n</Figure>`}</code>
        </p>
        <p>
          Om det er satt høyde og bredde på iframen (som vist under) vil den beholde forholdet mellom høyde og bredde
          (så lenge resize scriptet er kjørt).
          <code>{`<iframe width="400" height="300" ... />`}</code>
        </p>
      </StoryIntro>
      <StoryBody>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2 className="u-heading">Iframe med satt høyde og bredde</h2>
        <FigureWithLicense resizeIframe hasHiddenCaption>
          <iframe
            src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed"
            title="Title"
            width="600"
            height="338"
          />
        </FigureWithLicense>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <h2 className="u-heading">Iframe uten satt høyde og bredde</h2>
        <FigureWithLicense resizeIframe hasHiddenCaption>
          <iframe src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed" title="Video without dimensions" />
        </FigureWithLicense>

        <h2 className="u-heading">Embedded innhold (brightcove) med lisens og caption</h2>
        <FigureWithLicense resizeIframe caption="Utholdenhet - animasjon av oksygentransporten">
          <iframe
            title="Video: Utholdenhet - animasjon av oksygentransporten"
            height="270"
            width="480"
            frameBorder="0"
            src="https://players.brightcove.net/4806596774001/default_default/index.html?videoId=ref:19011"
            // eslint-disable-next-line react/no-unknown-property
            allowFullScreen
          />
        </FigureWithLicense>
        {floatVideo(true)}
        {floatVideo(false)}
        <h2 className="u-heading">Embedded innhold med høyrekolonne</h2>
        <Aside>
          <h1>Høyrespalte</h1>
          <p>Høyrespalten skal fases ut.</p>
          <p>
            I en midlertidig fase under flytting av innhold fra gammelt til nytt nettsted kan høyrespalten likevel
            brukes. Innholdet skal etter hvert flyttes til hovedspalten. Fakta kan legges i en faktaboks, annet innhold
            kan bakes inn i artikkelteksten, eller slettes.
          </p>
          <p>Om artikkelen har et bilde under ingressen, må høyrespalten plasseres under denne.</p>
          <p>På mobil skal høyrespalten alltid havne på slutten av artikkelen.</p>
        </Aside>
        <p>
          Dette er måte å vise embedded innhold sidestilt med høyrekolonne. Denne varianten skal kun brukes om det er
          nødvendig. Visningen fases bort når høyrespalte fases bort.
        </p>
        <FigureWithLicense resizeIframe noCaption>
          <iframe src="https://www.youtube.com/embed/wOgIkxAfJsk?feature=oembed" title="Video without dimensions" />
        </FigureWithLicense>
      </StoryBody>
    </div>
  ))
  .add('Bruk av lenker', () => (
    <div>
      <StoryIntro title="Bruk av lenker">
        <p>
          Lenker på <a href="//ndla.no">ndla.no</a> bruker den vanlige konvensjonen med underlinje. Lenker skal i
          hovedsak åpne seg i samme vindu (det vil si at vi bruker <code>target=&quot;_self&quot;</code> eller ingen
          target-attributt). Unntaket er hvis lenken inngår i et skjema eller læringssammenhengen gjør det er nødvendig
          at brukerne beholder vinduet eller fanen de står i. Når lenker går til et annet nettsted (eksterne lenker)
          skal disse alltid åpnes i ny fane
        </p>
        <p>
          Når det finnes flere kontekster til en lenke/node skal den ta konteksten/fag til det en stod i før en klikket
          seg videre, hvis ikke den finnes i samme, skal den ta primærkoblingen til noden. Dette gjelder både for
          relaterte artikler og interne lenker.
        </p>
        <p>
          Interne lenker blir styrt av html innstilling i nettleser (samme vindu eller ny fane) avhengig av koden som
          ligger der, brukerens/browserens preferanser skal styre
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Lenke som åpnes i nytt vindu</h2>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            https://api.ndla.no/
          </SafeLink>
        </p>
        <p>
          <SafeLink showNewWindowIcon to="https://api.ndla.no/" target="_blank">
            NDLA API
          </SafeLink>
        </p>
      </StoryBody>
    </div>
  ))
  .add('Faktaboks', () => (
    <div>
      <StoryIntro title="Faktaboks">
        <p>
          For alt nytt innhold på ndla.no skal ikke flytende høyrespalte benyttes. I stedet benytter vi faktabokser
          innenfor innholdsspalten.
        </p>
      </StoryIntro>
      <StoryBody>
        <h1 className="c-article__title">Eksempelartikkel</h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen.
        </p>
        <section>
          <p>
            Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du
            avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <Aside narrowScreen>
            <h1>Høyrespalte</h1>
            <p>Høyrespalten skal fases ut.</p>
            <p>
              I en midlertidig fase under flytting av innhold fra gammelt til nytt nettsted kan høyrespalten likevel
              brukes. Innholdet skal etter hvert flyttes til hovedspalten. Fakta kan legges i en faktaboks, annet
              innhold kan bakes inn i artikkelteksten, eller slettes.
            </p>
            <p>Om artikkelen har et bilde under ingressen, må høyrespalten plasseres under denne.</p>
            <p>På mobil skal høyrespalten alltid havne på slutten av artikkelen.</p>
          </Aside>
        </section>
        <FactBox>
          <h2>Faktaboks</h2>
          <p>En faktaboks kan inneholde punktlister eller korte fakta som er relevant for artikkelens innhold.</p>
          <p>
            Det anbefales å ikke ha for mye innhold i faktaboks, slik at lese-konteksten i størst mulig grad beholdes.
          </p>
          <h2>Enkel tittel</h2>
          <p>
            Faktaboksen kan også brukes til å oppsummere innhold i slutten av en artikkel, og den kan inneholde
            lisensiering om eksternt innhold er brukt.
          </p>
          <SourceList>
            <LicenseByline locale="nb" marginRight color={colors.brand.grey} licenseRights={[BY, NC, ND]} />
            <span>Gary Waters</span>
            <span>Kilde: SNL.no</span>
          </SourceList>
        </FactBox>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <ArticleBylineExample />
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
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
          <p>
            Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den
            filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
          </p>
        </details>
      </StoryBody>
    </div>
  ))
  .add('Fasitboks', () => (
    <div>
      <StoryIntro title="Fasitboks" />
      <StoryBody>
        <details className="c-details--solution-box ">
          <summary>Vis fasit (ekspanderende på desktop)</summary>
          <div className="c-details__content">
            <SolutionTableExample />
          </div>
        </details>

        <details className="c-details--solution-box ">
          <summary>Vis fasit</summary>
          <div className="c-details__content">
            f(x) = x<sup>2</sup> + 10x - 20
            <FigureImage
              caption="Eksempel på graf"
              alt="Matematisk graf"
              src="https://api.ndla.no/image-api/raw/oppg_2_2_a_vekstfart_spraknoytral.png"
            />
          </div>
        </details>
      </StoryBody>
    </div>
  ))
  .add('Kildehenvisninger', () => (
    <div>
      <StoryIntro title="Kildehenvisninger">
        <p>
          Kildehenvisninger benytter{' '}
          <a href="https://sokogskriv.no/kildebruk-og-referanser/referansestiler/apa-6th/">APA-stilen</a> for utlisting
          nederst på siden.
        </p>
        <p>
          I teksten brukes en enkel nummerering for å henvise til referanse. Tallet lenkes til den aktuelle referansen.
        </p>
        <p>I referanselisten nederst lenkes hver referanse igjen til hvor de opptrer i teksten.</p>
      </StoryIntro>
      <StoryBody>
        <FootnotesExample />
      </StoryBody>
    </div>
  ))
  .add('Ikoner', () => (
    <div>
      <StoryIntro title="Ikoner" />
      <OneColumn>
        <LayoutItem layout="center">
          <h2>Systemikoner</h2>
          <p>
            Systemikonene identifiserer handlinger en bruker kan ta på en gitt skjerm, de kan også representere objekter
            og områder.
          </p>
          <p>
            Systemikonene er hentet fra Google sitt Material Design som er open source og tilgjengelig med Apache
            License Version 2.0. Hvis det er behov for flere eller nye systemikoner skal disse hentes her:{' '}
            <a href="https://material.io/icons/">https://material.io/icons/</a> og hvis det ikke finnes et passende ikon
            i denne pakken kan man lage nye ikoner ved å bruke disse retningslinjene:{' '}
            <a href="https://material.io/guidelines/">https://material.io/guidelines/</a>. Ikoner kan i nød også hentes
            fra: <a href="https://materialdesignicons.com">https://materialdesignicons.com</a>, som også er Apache
            License Version 2.0.
          </p>
        </LayoutItem>

        <IconList icons={commonIcons} folder="common" />
        <LayoutItem layout="center">
          <h2>Innholdstypeikoner</h2>
          <p>
            Hver innholdstype i NDLA systemet har et ikon knyttet til seg. Ikonene er visuelle representasjoner av
            innholdstypen og skal sammen med innholdstypefargen skape en gjenkjennelseseffekt for brukerne.
          </p>
          <p>
            Hvis det skal lages nye innholdstypeikoner er det viktig at de kommuniserer innholdstypens kjernefunksjon og
            hensikt. De må også ha lik visuell utførelse og fremtoning som de eksisterende. Alle innholdstypeikonene er
            bygget ut fra Material Design sine ikoner;
            <a href="https://material.io/icons/">https://material.io/icons/</a>
          </p>
        </LayoutItem>
        <IconList icons={contentTypeIcons} folder="contentType" />
        <h2>Lisens</h2>
        <IconList icons={licenseIcons} folder="license" />
        <h2>Handling</h2>
        <IconList icons={actionIcons} folder="editor" />
        <h2>Editor</h2>
        <IconList icons={editorIcons} folder="editor" />
      </OneColumn>
    </div>
  ))
  .add('Skuff', () => <DrawerExample />)

  .add('Logo', () => (
    <div>
      <StoryIntro title="Logo">
        <p>
          Logoen er vårt tydeligste kjennetegn og vårt viktigste verktøy for kommunikasjon. Den skal inspirere
          målgruppen elever og lærere i videregående opplæring og gjøre dem nysgjerrige på NDLA.
        </p>
        <p>
          Logoen består av navnet NDLA i en spesiell typografi og bør hovedsakelig benyttes sammen med underteksten.
          Logo uten undertekst kan benyttes i tilfeller der det kommer godt fram andre steder hva NDLA er, eksempelvis
          på ndla.no.
        </p>
        <p>
          Logo uten undertekst kan kompletteres med en beskrivende tekst til høyre. Logoen kan benyttes i blått, eller i
          svart eller hvitt avhengig av bakgrunn. Den skal plasseres i det øverste eller nederste hjørnet av en
          ytterkant. Logoen skal ikke sentreres.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Logo uten url</h2>
        <Logo cssModifier="large" name label="Nasjonal digital læringsarena" />

        <h2>Logo med url</h2>
        <Logo cssModifier="large" name to="/" label="Nasjonal digital læringsarena" />
        <h2>Engelsk logo</h2>
        <Logo cssModifier="large" locale="en" name label="Norwegian digital learning arena" />
      </StoryBody>
    </div>
  ))
  .add('Utarbeidet av', () => (
    <div>
      <StoryIntro title="Utarbeidet av">
        <p>
          LTI-versjoner av innhold fra NDLA skal vise denne teksten og logo i bunnen. "NDLA" og logoen lenker til
          ndla.no. "Artikkel" kan være en lenke til artikkelen på ndla.no om den fins. Begge lenker åpner som standard i
          ny fane men det kan overstyres med target-parameter.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2>Uten artikkellenke</h2>
        <CreatedBy name={'Artikkelen'} description={'er utarbeidet av'} />
        <h2>Med artikkellenke</h2>
        <CreatedBy
          name={'Artikkelen'}
          description={'er utarbeidet av'}
          url="https://ndla.no/subject:26/topic:1:191103/topic:1:4352/resource:1:2052"
        />
      </StoryBody>
    </div>
  ))
  .add('Kodeblokk', () => (
    <div>
      <StoryIntro title="Kodeblokk">
        <p>Lær deg HTML, CSS og Javascript.</p>
      </StoryIntro>
      <OneColumn>
        <LayoutItem layout="extend">
          <CodeblockExample />
        </LayoutItem>
      </OneColumn>
    </div>
  ))

  .add('Ukraina Banner', () => (
    <div>
      <StoryIntro title="Ukraina Banner">
        <p>Banner for læringsressurser på Ukrainsk.</p>
      </StoryIntro>
      <OneColumn>
        <UkraineBannerExample />
      </OneColumn>
    </div>
  ))

  .add('Treestruktur komponent', () => (
    <div>
      <StoryIntro title="Trestruktur komponent">
        <p>Tree struktur</p>
      </StoryIntro>
      <OneColumn>
        <TreeStructureExample />
      </OneColumn>
    </div>
  ));
