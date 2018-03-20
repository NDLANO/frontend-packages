import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, Translation, TranslationLine } from 'ndla-ui';
import { StoryIntro, StoryBody } from './wrappers';
import { AnchorNavigation } from './helpers';

const heading = (articleHTML, level) => {
  if (!articleHTML) return `<h${level}>Overskrift ${level}</h${level}>`;
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) {
    return `<div>Overskrift ${level}:</div><h${level}>Overskrift ${level}</h${level}>`;
  }
  return `<div>Overskrift ${level}:</div><h${level}>${
    articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML
  } <h${level}>`;
};

const swatchBorder = '1px solid #979797';

storiesOf('Grunnstiler', module)
  .add('Farger', () => (
    <div>
      <StoryIntro title="Farger på NDLA">
        <p>
          Fargene til NDLA er laget på grunnlag av å skape god lesbarhet og flyt
          for brukerne. Fargene skal alltid brukes på meningsfulle måter for å
          gruppere innhold, skape hierarki og tilhørighet. De kan også brukes
          for å gi oppmerksomhet til viktige elementer og støtte i de oppgavene
          brukeren utfører. Det skal alltid være nok kontrast mellom elementer
          som f.eks bakgrunn og tekst. Fargene skal til enhver tid oppfylle alle
          standarder for WCAG (Web Content Accessibility Guidelines). Verktøy
          for å kontrollere kontrast mellom tekst og bakgrunn finnes her:{' '}
          <a href="https://webaim.org/resources/contrastchecker/">
            https://webaim.org/resources/contrastchecker/
          </a>
        </p>
      </StoryIntro>
      <StoryBody>
        <div>
          <h2 className="u-heading">NDLA-fargen</h2>
          <p>
            NDLA fargen er en blå farge i forskjellige nyanser. Disse fargene er
            det mest av i systemet. De brukes på klikkbare UI elementer,
            navigasjon, bakgrunner og gruppering av innhold. I tillegg brukes de
            på fagsider, hoved- og underemne sidene. Dette for å skape identitet
            og tydelig tilhørighet til NDLA universet.{' '}
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#20588F' }}
              />
              <div className="o-list__label">
                NDLA primærfarge<br />#20588F
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#507AA4' }}
              />
              <div className="o-list__label">
                NDLA sekundærfarge<br />#507AA4
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item ">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#A5BCD3' }}
              />
              <div className="o-list__label">
                NDLA tertiærfarge<br />#A5BCD3
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#CEDDEA' }}
              />
              <div className="o-list__label">
                NDLA lys<br />#CEDDEA
              </div>
            </li>
            <li className="o-list__item o-list__item--colors o-list__item">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#DEEBF6' }}
              />
              <div className="o-list__label">
                NDLA lysest<br />#DEEBF6
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#184673' }}
              />
              <div className="o-list__label">
                NDLA mørk<br />#184673
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="u-heading">Tekst og systemikoner</h2>
          <p>
            For å skape hierarki i innholdet finnes det to farger for tekst og
            systemikoner. Vektleggingen skjer i samhandling med stilingen av
            typografien. Når teksten eller ikonet er klikkbare linker skal man
            bruke NDLA-blå farge. Hvit tekst blir brukt på f.eks knapper og
            navigasjonselememnter med mørke bakgunner. Fargen og størrelsen på
            teksten skal til enhver tid kombineres med bakgrunner med nok
            kontrast og som oppfyller krav til WCAG. Verktøy for å teste
            kontrast mellom tekst og bakgrunn finnes her:{' '}
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              rel="noopener noreferrer">
              https://webaim.org/resources/contrastchecker/
            </a>
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#444444' }}
              />
              <div className="o-list__label">
                Tekst Mørk<br />#444444
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#757575' }}
              />
              <div className="o-list__label">
                Tekst Lys<br />#757575
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#FFFFFF', border: swatchBorder }}
              />
              <div className="o-list__label">
                Tekst Hvit<br />#FFFFFF
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#20588F' }}
              />
              <div className="o-list__label">
                Tekst Link<br />#20588F
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Nøytrale farger</h2>
          <p>
            Den nøytrale paletten består av toner og nyanser som er nyttige for
            gruppering av innhold i NDLA systemet. Bruken av disse fargene
            varierer og er avhengig av berøringspunkt og omliggende innhold.
            Brukes mest til bakgrunner og rammer for å gruppere og skille
            innhold.
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#FFFFFF', border: swatchBorder }}
              />
              <div className="o-list__label">
                Nøytral Hvit<br />#FFFFFF
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#F8F8F8' }}
              />
              <div className="o-list__label">
                Nøytral 1<br />#F8F8F8
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#EFF0F2' }}
              />
              <div className="o-list__label">
                Nøytral 2<br />#EFF0F2
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#E8E3E3' }}
              />
              <div className="o-list__label">
                Nøytral 3<br />#E8E3E3
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#8A8888' }}
              />
              <div className="o-list__label">
                Nøytral 4<br />#8A8888
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="u-heading">Innholdstypefarger</h2>
          <p>
            Innholdstyper har to farger, en mørk og en lys, knyttet til seg. Den
            lyse fargen er brukt på bakgrunner og den mørke er brukt på ikonet
            tilknyttet innholdstypen. Noen av innholdstypene har en tredje
            farge. Dette da det er behov for en egen bakgrunnsfarge på ikonet og
            en annen på bakgrunnen i artikkelmalen.
          </p>
          <p>
            Fargene er lette og duse i uttrykket for å la selve innholdet få
            fokus og poppe. I tillegg skaper fargene tilhørighet og
            gjenkjennbarhet til innholdstypen.
          </p>
          <h3>Emner</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#184673' }}
              />
              <div className="o-list__label">
                Emner Mørk<br />#184673
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#CEDDEA' }}
              />
              <div className="o-list__label">
                Emner Lys<br />#CEDDEA
              </div>
            </li>
          </ul>
          <h3>Fagstoff</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#5C6A4F' }}
              />
              <div className="o-list__label">
                Fagstoff Mørk<br />#5C6A4F
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#DDE9D0' }}
              />
              <div className="o-list__label">
                Fagstoff Lys<br />#DDE9D0
              </div>
            </li>
          </ul>
          <h3>Ekstern læringressurs</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#4F7D76' }}
              />
              <div className="o-list__label">
                Ekstern læringressurs Mørk<br />#4F7D76
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#D0E8DE' }}
              />
              <div className="o-list__label">
                Ekstern læringressurs Bakgrunn<br />#D0E8DE
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#E6F3ED' }}
              />
              <div className="o-list__label">
                Ekstern læringressurs Lys<br />#E6F3ED
              </div>
            </li>
          </ul>
          <h3>Kildemateriale</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#636E68' }}
              />
              <div className="o-list__label">
                Kildemateriale Mørk<br />#636E68
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#DCE5E0' }}
              />
              <div className="o-list__label">
                Kildemateriale Lys<br />#DCE5E0
              </div>
            </li>
          </ul>
          <h3>Oppgaver og Aktiviteter</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#D98229' }}
              />
              <div className="o-list__label">
                Oppgaver og Aktiviteter Mørk<br />#D98229
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#F8E0C4' }}
              />
              <div className="o-list__label">
                Oppgaver og Aktiviteter Bakgrunn<br />#F8E0C4
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#FBEDDC' }}
              />
              <div className="o-list__label">
                Oppgaver og Aktiviteter Lys<br />#FBEDDC
              </div>
            </li>
          </ul>
          <h3>Vurderingsressurs</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#C0676F' }}
              />
              <div className="o-list__label">
                Vurderingsressurs Mørk<br />#C0676F
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#EFD5D5' }}
              />
              <div className="o-list__label">
                Vurderingsressurs Bakgrunn<br />#EFD5D5
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#F5E7E5' }}
              />
              <div className="o-list__label">
                Vurderingsressurs Lys<br />#F5E7E5
              </div>
            </li>
          </ul>
          <h3>Læringsti</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#797979' }}
              />
              <div className="o-list__label">
                Læringssti Mørk<br />#797979
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#F2EFEF' }}
              />
              <div className="o-list__label">
                Læringssti bakgrunn<br />#F2EFEF
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#E8E3E3' }}
              />
              <div className="o-list__label">
                Læringssti Lys<br />#E8E3E3
              </div>
            </li>
          </ul>
          <h3>Tilleggstoff</h3>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: 'rgba(221, 233, 208, 0.4)' }}
              />
              <div className="o-list__label">
                Tilleggstoff Fagstoff<br />#DDE9D0: 40% opacity
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: 'rgba(208, 232, 222, 0.4)' }}
              />
              <div className="o-list__label">
                Tilleggstoff ekstern Læringsressurs<br />#D0E8DE: 40% opacity
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: 'rgba(220, 229, 224, 0.4)' }}
              />
              <div className="o-list__label">
                Tilleggstoff Kildemateriale<br />#DCE5E0: 40% opacity
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: 'rgba(251, 237, 220, 0.4)' }}
              />
              <div className="o-list__label">
                Tilleggstoff Oppgaver og Aktiviteter<br />#FBEDDC: 40% opacity
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: 'rgba(245, 231, 229, 0.4)' }}
              />
              <div className="o-list__label">
                Tilleggstoff Vurderingsressurs<br />#F5E7E5: 40% opacity
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-heading">Support</h2>
          <p>
            Supportfargene er valgt fordi de er konvensjonelle i sin kontekst.
            Selv om vi anerkjenner at det er kulturelle forskjeller har enkelte
            farger iboende betydning for et stort flertall brukere. For eksempel
            bruker vi rødt til å kommunisere en feil og grønt for sukksess.
            Brukes med opacity 30 % på hvit bakgrunn.
          </p>
          <ul className="o-list--colors">
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#d1372e' }}
              />
              <div className="o-list__label">
                Support Rød<br />#D1372E
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#5CBC80' }}
              />
              <div className="o-list__label">
                Support Grønn<br />#5CBC80
              </div>
            </li>
            <li className="o-list__item o-list__item--colors">
              <div
                className="o-list__bgcolor"
                style={{ backgroundColor: '#EAD854' }}
              />
              <div className="o-list__label">
                Support Gul<br />#EAD854
              </div>
            </li>
          </ul>
        </div>
      </StoryBody>
    </div>
  ))
  .add('Typografi', () => (
    <div>
      <StoryIntro title="Typografi">
        <AnchorNavigation
          links={[
            <a href="#fonter" target="_self">
              Fonter
            </a>,
            <a href="#storrelser" target="_self">
              Skriftstørrelser
            </a>,
            <a href="#overskrifter" target="_self">
              Overskrifter
            </a>,
            <a href="#ingress" target="_self">
              Ingress
            </a>,
            <a href="#avsnitt" target="_self">
              Avsnitt
            </a>,
            <a href="#lenker" target="_self">
              Lenker
            </a>,
            <a href="#midtstilttekst" target="_self">
              Midtstilt tekst
            </a>,
          ]}
        />
      </StoryIntro>
      <StoryBody>
        <h2 id="fonter" className="u-heading">
          Fonter
        </h2>
        <p>
          NDLA bruker fontene{' '}
          <a href="https://fonts.google.com/specimen/Source+Serif+Pro">
            Source Serif Pro
          </a>{' '}
          og{' '}
          <a href="https://fonts.google.com/specimen/Source+Sans+Pro">
            Source Sans Pro
          </a>.
        </p>
        <table className="c-table">
          <thead>
            <tr>
              <th>Type tekst</th>
              <th>Font</th>
              <th>Snitt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Overskrifter</td>
              <td>Source Sans Pro</td>
              <td>600</td>
            </tr>
            <tr>
              <td>Mellomoverskrifter</td>
              <td>Source Sans Pro</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Små overskrifter</td>
              <td>Source Sans Pro</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Ingress</td>
              <td>Source Sans Pro</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Brødtekst</td>
              <td>Source Serif Pro</td>
              <td>400, inkl. kursiv</td>
            </tr>
            <tr>
              <td>Hjelpetekster</td>
              <td>Source Sans Pro</td>
              <td>400, inkl. kursiv</td>
            </tr>
          </tbody>
        </table>
        <p>
          Tilbakefallsfonter er{' '}
          <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og{' '}
          <span style={{ fontFamily: 'Arial' }}>Arial</span>
        </p>
        <h2 id="storrelser" className="u-heading">
          Skriftstørrelser
        </h2>
        <table className="c-table">
          <thead>
            <tr>
              <th>Type tekst</th>
              <th>Størrelse på stor skjerm</th>
              <th>Størrelse på liten skjerm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Overskrifter</td>
              <td>
                38 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(2.1rem)</span>
              </td>
              <td>
                30 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.67rem)</span>
              </td>
            </tr>
            <tr>
              <td>Mellomoverskrifter</td>
              <td>
                22 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span>
              </td>
              <td>
                22 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span>
              </td>
            </tr>
            <tr>
              <td>Små overskrifter</td>
              <td>
                18 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
              <td>
                18 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
            </tr>
            <tr>
              <td>Ingress</td>
              <td>
                26 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.44rem)</span>
              </td>
              <td>
                20 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.1rem)</span>
              </td>
            </tr>
            <tr>
              <td>Brødtekst</td>
              <td>
                18 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
              <td>
                16 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
            </tr>
            <tr>
              <td>Stor brødtekst</td>
              <td>
                20 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1.1rem)</span>
              </td>
              <td>
                18 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(1 rem)</span>
              </td>
            </tr>
            <tr>
              <td>Metatekst</td>
              <td>
                16 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
              <td>
                16 px{' '}
                <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Grunnlaget for REM-kalkulerte størrelser er 18px skriftstørrelse på
          html-elementet.
        </p>
        <h2 id="overskrifter" className="u-heading">
          Overskrifter
        </h2>
        <p>
          Overskrifter skal markeres semantisk med riktige HTML-tagger. For
          eksempel:
        </p>
        <code>{'<h1>Overskrift</h1>'}</code>

        <p>
          Det er tre nivåer av overskrifter. Bruker man likevel overskrifts-tag
          for nivå 4, 5 osv, vil de få samme stil som nivå 3 nedenfor:
        </p>
        <div className="c-bodybox">
          <div dangerouslySetInnerHTML={{ __html: heading('', 1) }} />
          <div dangerouslySetInnerHTML={{ __html: heading('', 2) }} />
          <div dangerouslySetInnerHTML={{ __html: heading('', 3) }} />
        </div>
        <h2 id="ingress" className="u-heading">
          Ingress
        </h2>
        <p>Ingresser skal være 1-3 setninger, og gi en oppsummering.</p>
        <div className="c-bodybox">
          <section className="article_introduction">
            <p className="article_introduction">
              Idéutvikling er en viktig del av alt profesjonelt arbeid med
              medieuttrykk. I verktøykassa si har medieprodusenten et knippe
              fortelleteknikker og virkemidler innen design, tekst, lyd og
              bilde.
            </p>
          </section>
        </div>
        <h2 id="avsnitt" className="u-heading">
          Avsnitt
        </h2>
        <p>
          Tekstavsnitt på <a href="//ndla.no">ndla.no</a> skal være lette å
          lese. Dette betyr at linjene ikke skal være for lange, og at vi bruker
          stor nok skriftsstørrelse. Mange tar utgangspunkt i 16 punkter som en
          standardstørrelse, men siden NDLA har mange teksttunge sider, bruker
          vi 18 punkter.
        </p>
        <p>
          En tekstlinje i full bredde skal utgjøre omtrent 50–75 tegn. Om{' '}
          <span className="u-mark">*</span>-tegnene i setningen under kommer på
          samme linje, er den for lang:
        </p>
        <div className="c-bodybox">
          <p className="u-serif">
            Lorem ipsum dolor sit amet, consectetur adip<span className="u-mark">
              *
            </span>isicing elit, sed do eiusmod{' '}
            <span className="u-mark">*</span>tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <h2 className="u-heading">Stor brødtekst</h2>
        <p>
          Stor brødtekst kan benyttes når det er spesielle behov for å utheve
          noe. Dette kan feks være tegn på kinesisk eller formler i matematikk.
          Stor brødtekst skal brukes på ord eller fraser som står for seg selv.
          Det kan ikke være stor brødteskt og vanlig brødtekst på samme linje.
          Eksempel fra kinesisk:
        </p>
        <p className="u-large-body-text">第一课：汉字</p>
        <h2 id="lenker" className="u-heading">
          Lenker
        </h2>
        <p>
          Lenker på <a href="http://www.ndla.no">ndla.no</a> bruker den vanlige
          konvensjonen med med linje under teksten, og ndla-blå farge. Dette er
          et lett gjenkjennelig mønster for brukerne.
        </p>
        <p>
          Lenker kan enten være eksterne, interne eller vise til innhold på
          samme side ved hjelp av en <code>id</code>-attributt på for eksempel
          en overskrift.
        </p>
        <p>
          Det skal vurderes i framtiden om det er behov for markering av
          eksterne lenker.
        </p>
        <div className="c-bodybox">
          <p>
            Dette er en <a href="http://ndla.no">ekstern lenke</a>. Dette er en{' '}
            <a href="/">intern lenke</a>, og dette er en{' '}
            <a href="#overskrift">lenke som viser til innhold på samme side</a>.
          </p>
        </div>

        <p>Se også «Bruk av lenker» under «Enkle komponenter».</p>

        <h2 id="midtstilttekst" className="u-heading">
          Midtstilt tekst
        </h2>
        <p>
          Noen informasjonstyper kan stå for seg selv og være midtstilt.
          Matematiske formler er ett eksempel på midtstilt tekst.
        </p>
        <p className="u-text-center">
          <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mn>4</mn>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mo>-</mo>
                <mn>12</mn>
              </mrow>
              <mrow>
                <mo>-</mo>
                <mn>3</mn>
              </mrow>
            </mfrac>
          </math>
        </p>
      </StoryBody>
    </div>
  ))
  .add('Tabeller', () => (
    <div>
      <StoryIntro title="Tabeller">
        <p>
          Tabeller skal brukes til å presentere data (tabulære data), ikke til
          utforming. Det anbefales å holde tabellene så enkle som mulig. Ved mer
          kompleksitet kan data heller deles opp i flere tabeller.
        </p>
        <p>
          Tekstformatering, høyrestilling av tekst osv. angis ikke i tabellens
          stilsett, men gjøres i redaktørgrensesnittet.
        </p>
        <p>
          Titler markeres med: <code>&lt;hr&gt;</code>
        </p>
        <p>
          Titlene kan kuttes ut, plasseres som en topprad (thead), eller som
          første rad i en tabell (innenfor tbody). De vil bli stilet etter
          plassering.
        </p>
        <p>
          Dersom du bruker titler både på rader og kolonner må du definere i
          koden hvilken vei tittelen peker:
        </p>
        <code>&lt;th scope=&quot;row&quot;&gt;</code>
        <p>
          Tabeller kan ha en tilknyttet tittel ved bruk av elementet:{' '}
          <code>&lt;caption&gt;</code>
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <Table>
          <caption>Tabelltittel</caption>
          <thead>
            <tr>
              <th>
                10<sup>n</sup>
              </th>
              <th>Prefiks</th>
              <th>Symbol</th>
              <th>Namn</th>
              <th>Eksempel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                10<sup>12</sup>
              </td>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td>1000000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>9</sup>
              </td>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>6</sup>
              </td>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <td>
                10<sup>3</sup>
              </td>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>
                10<sup>2</sup>
              </td>
              <td>hekto</td>
              <td>h</td>
              <td>hundre</td>
              <td>100</td>
            </tr>
            <tr>
              <td>
                10<sup>1</sup>
              </td>
              <td>deka</td>
              <td>da</td>
              <td>ti</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                10<sup>-1</sup>
              </td>
              <td>desi</td>
              <td>d</td>
              <td>tidel</td>
              <td>0,1</td>
            </tr>
            <tr>
              <td>
                10<sup>-2</sup>
              </td>
              <td>centi</td>
              <td>c</td>
              <td>hundredel</td>
              <td>0,01</td>
            </tr>
            <tr>
              <td>
                10<sup>-3</sup>
              </td>
              <td>milli</td>
              <td>m</td>
              <td>tusendel</td>
              <td>0,001</td>
            </tr>
            <tr>
              <td>
                10<sup>-6</sup>
              </td>
              <td>mikro</td>
              <td />
              <td>milliondel</td>
              <td>0,000001</td>
            </tr>
            <tr>
              <td>
                10<sup>-9</sup>
              </td>
              <td>nano</td>
              <td>n</td>
              <td>milliarddel</td>
              <td>
                <p>0,000000001</p>
              </td>
            </tr>
          </tbody>
        </Table>

        <h2 className="u-heading">Eksempel med formatering</h2>
        <Table>
          <thead>
            <tr>
              <th>
                10<sup>n</sup>
              </th>
              <th>Prefiks</th>
              <th>Symbol</th>
              <th>Namn</th>
              <th style={{ textAlign: 'right' }}>Eksempel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                10<sup>15</sup>
              </td>
              <td>peta</td>
              <td>P</td>
              <td>billiard</td>
              <td style={{ textAlign: 'right' }}>1000000000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>12</sup>
              </td>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td style={{ textAlign: 'right' }}>1000000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>9</sup>
              </td>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td style={{ textAlign: 'right' }}>1000000000</td>
            </tr>
            <tr>
              <td>
                10<sup>6</sup>
              </td>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td style={{ textAlign: 'right' }}>1000000</td>
            </tr>
            <tr>
              <td>
                10<sup>3</sup>
              </td>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td style={{ textAlign: 'right' }}>1000</td>
            </tr>
            <tr>
              <td>
                10<sup>2</sup>
              </td>
              <td>hekto</td>
              <td>h</td>
              <td>hundre</td>
              <td style={{ textAlign: 'right' }}>100</td>
            </tr>
            <tr>
              <td>
                10<sup>1</sup>
              </td>
              <td>deka</td>
              <td>da</td>
              <td>ti</td>
              <td style={{ textAlign: 'right' }}>10</td>
            </tr>
            <tr>
              <td>
                10<sup>-1</sup>
              </td>
              <td>desi</td>
              <td>d</td>
              <td>tidel</td>
              <td style={{ textAlign: 'right' }}>0,1</td>
            </tr>
            <tr>
              <td>
                <strong>
                  10<sup>-2</sup>
                </strong>
              </td>
              <td>
                <strong>centi</strong>
              </td>
              <td>
                <strong>c</strong>
              </td>
              <td>
                <strong>hundredel</strong>
              </td>
              <td style={{ textAlign: 'right' }}>
                <strong>0,01</strong>
              </td>
            </tr>
            <tr>
              <td>
                10<sup>-3</sup>
              </td>
              <td>milli</td>
              <td>m</td>
              <td>tusendel</td>
              <td style={{ textAlign: 'right' }}>0,001</td>
            </tr>
            <tr>
              <td>
                10<sup>-6</sup>
              </td>
              <td>mikro</td>
              <td />
              <td>milliondel</td>
              <td style={{ textAlign: 'right' }}>0,000001</td>
            </tr>
            <tr>
              <td>
                10<sup>-9</sup>
              </td>
              <td>nano</td>
              <td>n</td>
              <td>milliarddel</td>
              <td style={{ textAlign: 'right' }}>
                <p>0,000000001</p>
              </td>
            </tr>
          </tbody>
        </Table>

        <h2 className="u-heading">Eksempel med tittel på første kolonne</h2>
        <Table>
          <tbody>
            <tr>
              <th scope="row">Tittel</th>
              <td>peta</td>
              <td>P</td>
              <td>billiard</td>
              <td>1000000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td>1000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
          </tbody>
        </Table>

        <h2 className="u-heading">
          Eksempel med tittel på første kolonne og øverste rad{' '}
        </h2>
        <Table>
          <thead>
            <tr>
              <th scope="col">Hva?</th>
              <th scope="col">Prefiks</th>
              <th scope="col">Symbol</th>
              <th scope="col">Namn</th>
              <th scope="col">Eksempel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tittel</th>
              <td>peta</td>
              <td>P</td>
              <td>billiard</td>
              <td>1000000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>tera</td>
              <td>T</td>
              <td>billion</td>
              <td>1000000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>giga</td>
              <td>G</td>
              <td>milliard</td>
              <td>1000000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>mega</td>
              <td>M</td>
              <td>million</td>
              <td>1000000</td>
            </tr>
            <tr>
              <th scope="row">Tittel</th>
              <td>kilo</td>
              <td>k</td>
              <td>tusen</td>
              <td>1000</td>
            </tr>
          </tbody>
        </Table>
        <h2 className="u-heading">
          Eksempel med titler som går over flere kolonner (colspan)
        </h2>

        <Table>
          <thead>
            <tr>
              <th colSpan="2">Tittel over flere kolonner</th>
              <th>Tittel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
          </tbody>
        </Table>
        <h2 className="u-heading">
          Eksempel med celle som går over flere rader (rowspan)
        </h2>
        <Table>
          <tbody>
            <tr>
              <th rowSpan="2" scope="row">
                Tittel 1
              </th>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
            <tr>
              <th scope="row">Tittel 2</th>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </Table>
        <h2 className="u-heading">Eksempel med flere tittelrader</h2>
        <Table>
          <thead>
            <tr>
              <th>Tittel 1</th>
              <th colSpan="3" align="center">
                Tittel 2
              </th>
              <th>Tittel 3</th>
            </tr>
            <tr>
              <th />
              <th>Tittel 1</th>
              <th>Tittel 2</th>
              <th>Tittel 3</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map(index => (
              <tr key={index}>
                <td>Data</td>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2 className="u-heading">Eksempel med en headerkolonne</h2>
        <Table>
          <thead>
            <tr>
              <th colSpan="3" align="center">
                Tittel
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map(index => (
              <tr key={index}>
                <td>Data</td>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </StoryBody>
    </div>
  ))
  .add('Lister', () => (
    <div>
      <StoryIntro title="Lister">
        <p>
          Lister bør ikke inneholde flere enn 10 punkter. Har du mye mer, bør du
          vurdere å organisere innholdet annerledes.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Ren liste</h2>
        <ul className="o-list--bullets">
          <li>Listepunkt 1</li>
          <li>Listepunkt 2</li>
          <li>Listepunkt 3</li>
          <li>
            Underliste:
            <ul>
              <li>Underlistepunkt 1</li>
              <li>Underlistepunkt 2</li>
              <li>Underlistepunkt 3</li>
            </ul>
          </li>
        </ul>
        <h2 className="u-heading">Lister med lenker</h2>
        <ul className="o-list--bullets">
          <li>
            <a href="https://example.com">Listepunkt 1</a>
          </li>
          <li>
            <a href="https://example.com">Listepunkt 2</a>
          </li>
          <li>
            <a href="https://example.com">Listepunkt 3</a>
          </li>
        </ul>
        <h2 className="u-heading">Liste over to kolonner</h2>
        <p>Skal brukes til korte ord og utrykk.</p>
        <ul className="o-list--two-columns">
          <li>Listepunkt 1</li>
          <li>Listepunkt 2</li>
          <li>Listepunkt 3</li>
          <li>Listepunkt 4</li>
          <li>Listepunkt 5</li>
          <li>Listepunkt 6</li>
          <li>Listepunkt 7</li>
          <li>Listepunkt 8</li>
          <li>Listepunkt 9</li>
          <li>Listepunkt 10</li>
          <li>Listepunkt 11</li>
          <li>Listepunkt 12</li>
        </ul>
        <h2 className="u-heading">Nummererte lister</h2>
        <ol>
          <li>Listepunkt</li>
          <li>Listepunkt</li>
          <li>
            Underliste:
            <ol className="ol-list--roman">
              <li>Underlistepunkt</li>
              <li>Underlistepunkt</li>
              <li>Underlistepunkt</li>
            </ol>
          </li>
        </ol>
        <h2 className="u-heading">Alfabetiserte lister</h2>
        <ol className="ol-list--roman">
          <li>Listepunkt</li>
          <li>Listepunkt</li>
          <li>Listepunkt</li>
        </ol>
      </StoryBody>
    </div>
  ))
  .add('Oversettelser', () => (
    <div>
      <StoryIntro title="Oversettelser">
        <p>
          Ved oversettelser kan det bli lite oversiktlig å bruke tabeller,
          derfor kan man i disse tilfellene bruke en liste for oversettelser.
        </p>
      </StoryIntro>
      <StoryBody>
        <Translation index={1}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你叫什么名字？你叫什麼名字？
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pinyin">
            Nǐ jiào shénme míngzi?
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Hva heter du?
          </TranslationLine>
        </Translation>
        <Translation index={2}>
          <TranslationLine lang="cn" langName="Kinesisk">
            你叫什么名字？你叫什麼名字？
          </TranslationLine>
          <TranslationLine lang="pn" langName="Pinyin">
            Nǐ jiào shénme míngzi?
          </TranslationLine>
          <TranslationLine lang="nb" langName="Norsk">
            Hva heter du?
          </TranslationLine>
        </Translation>
      </StoryBody>
    </div>
  ))
  .add('Sitater', () => (
    <div>
      <StoryIntro title="Sitater">
        <p>
          Sitater som strekker seg over tre linjer i vanlig linjelengde, er det
          best å ta ut som et blokksitat. Vi bruker ikke kursiv for å markere
          sitater, men &laquo;&raquo;
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <blockquote>
          «Vi elsker alle Noora i Skam. Vi ser opp til henne, vi vil være henne,
          og hun viser oss at det å tre ut av den typiske sildestimen alle
          absolutt skal følge, er kult.» <br />(Jente 19 år, Si;D, Aftenposten
          23. mai 2016)
        </blockquote>
      </StoryBody>
    </div>
  ))
  .add('Luft og avstand', () => (
    <div>
      <StoryIntro title="Luft og avstand">
        <p>Vi baserer oss hovedsaklig på tre nivåer av luft/avstand:</p>
        <code>--spacing --spacing--small --spacing--large</code>
        <p>Hvor:</p>
        <div style={{ padding: '52px', background: '#eee' }}>
          <span
            style={{
              position: 'absolute',
              marginTop: '-38px',
              fontSize: '13px',
            }}>
            Spacing large (Store avstander): 52px
          </span>
          <div style={{ padding: '26px', background: '#ddd' }}>
            <span
              style={{
                position: 'absolute',
                marginTop: '-22px',
                fontSize: '13px',
              }}>
              Spacing (vanlig avstand): 26px
            </span>
            <div
              style={{
                padding: '13px',
                background: '#ccc',
                fontSize: '13px',
              }}>
              <span>Spacing small (Små avstander): 13px</span>
            </div>
          </div>
        </div>
        <p>
          Luft brukes for visuelt å gruppere elementer på en flate og føre
          oppmerksomheten mot de riktige elementene. Har et element mye luft
          rundt seg, får det lettere oppmerksomhet. Har to elementer lite luft
          mellom seg, oppfattes de gjerne som beslektet.
        </p>
        <p>
          Luft må også brukes for tilpassing til visning på ulike enheter. Vi
          ønsker å redusere avstandene på mindre enheter slik at innholdet der
          tar mindre plass. Er det brukt stor avstand et sted på store skjermer,
          blir det dermed reduseret til liten avstand på små skjermer.
        </p>
        <p>
          Når nye NDLA skal tas ut på nye flater, anbefales det å forholde seg
          til dette systemet, slik at det blir konsistent.
        </p>
      </StoryIntro>
    </div>
  ));
