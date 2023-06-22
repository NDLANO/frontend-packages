/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../defaults';
import { StoryBody, StoryIntro } from '../wrappers';
import { AnchorNavigation } from '../helpers';
import Table from '../molecules/TableExample';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: HeadingLevel;
}

const Heading = ({ level }: HeadingProps) => {
  const headingNumber = level[1];
  const Component = level;
  return <Component>{`Overskrift ${headingNumber}`}</Component>;
};

const meta: Meta = {
  title: 'Base styles/Typografi',
  parameters: defaultParameters,
};

export default meta;

export const Typografi: StoryFn = () => {
  return (
    <div>
      <StoryIntro title="Typografi">
        <AnchorNavigation
          links={[
            <a key="fonts" href="#fonter" target="_self">
              Fonter
            </a>,
            <a key="sizes" href="#storrelser" target="_self">
              Skriftstørrelser
            </a>,
            <a key="headings" href="#overskrifter" target="_self">
              Overskrifter
            </a>,
            <a key="ingress" href="#ingress" target="_self">
              Ingress
            </a>,
            <a key="sections" href="#avsnitt" target="_self">
              Avsnitt
            </a>,
            <a key="links" href="#lenker" target="_self">
              Lenker
            </a>,
            <a key="centeredText" href="#midtstilttekst" target="_self">
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
          NDLA bruker fontene <a href="https://fonts.google.com/specimen/Source+Serif+Pro">Source Serif Pro</a>,{' '}
          <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro</a> og{' '}
          <a href="https://fonts.google.com/specimen/Source+Code+Pro">Source Code Pro</a>.
        </p>
        <Table runScripts>
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
        </Table>
        <p>
          Tilbakefallsfonter er <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og{' '}
          <span style={{ fontFamily: 'Arial' }}>Arial</span>
        </p>
        <h2 id="storrelser" className="u-heading">
          Skriftstørrelser
        </h2>
        <Table>
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
                38 px <span style={{ color: 'rgb(144, 144, 144)' }}>(2.1rem)</span>
              </td>
              <td>
                30 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.67rem)</span>
              </td>
            </tr>
            <tr>
              <td>Mellomoverskrifter</td>
              <td>
                22 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span>
              </td>
              <td>
                22 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span>
              </td>
            </tr>
            <tr>
              <td>Små overskrifter</td>
              <td>
                18 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
              <td>
                18 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
            </tr>
            <tr>
              <td>Ingress</td>
              <td>
                26 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.44rem)</span>
              </td>
              <td>
                20 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.1rem)</span>
              </td>
            </tr>
            <tr>
              <td>Brødtekst</td>
              <td>
                18 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
              <td>
                16 px <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
            </tr>
            <tr>
              <td>Metatekst</td>
              <td>
                16 px <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
              <td>
                16 px <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span>
              </td>
            </tr>
          </tbody>
        </Table>

        <p>Grunnlaget for REM-kalkulerte størrelser er 18px skriftstørrelse på html-elementet.</p>
        <h2 id="overskrifter" className="u-heading">
          Overskrifter
        </h2>
        <p>Overskrifter skal markeres semantisk med riktige HTML-tagger. For eksempel:</p>
        <code>{'<h1>Overskrift</h1>'}</code>

        <p>
          Det er tre nivåer av overskrifter. Bruker man likevel overskrifts-tag for nivå 4, 5 osv, vil de få samme stil
          som nivå 3 nedenfor:
        </p>
        <div className="c-bodybox">
          <Heading level="h1" />
          <Heading level="h2" />
          <Heading level="h3" />
        </div>
        <h2 id="ingress" className="u-heading">
          Ingress
        </h2>
        <p>Ingresser skal være 1-3 setninger, og gi en oppsummering.</p>
        <div className="c-bodybox">
          <section className="article_introduction">
            <p className="article_introduction">
              Idéutvikling er en viktig del av alt profesjonelt arbeid med medieuttrykk. I verktøykassa si har
              medieprodusenten et knippe fortelleteknikker og virkemidler innen design, tekst, lyd og bilde.
            </p>
          </section>
        </div>
        <h2 id="avsnitt" className="u-heading">
          Avsnitt
        </h2>
        <p>
          Tekstavsnitt på <a href="//ndla.no">ndla.no</a> skal være lette å lese. Dette betyr at linjene ikke skal være
          for lange, og at vi bruker stor nok skriftsstørrelse. Mange tar utgangspunkt i 16 punkter som en standard
          størrelse, men siden NDLA har mange teksttunge sider, bruker vi 18 punkter.
        </p>
        <p>
          En tekstlinje i full bredde skal utgjøre omtrent 50–75 tegn. Om <span className="u-mark">*</span>-tegnene i
          setningen under kommer på samme linje, er den for lang:
        </p>
        <div className="c-bodybox">
          <p className="u-serif">
            Lorem ipsum dolor sit amet, consectetur adip
            <span className="u-mark">*</span>isicing elit, sed do eiusmod <span className="u-mark">*</span>tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <h2 className="u-heading">Kinesisk</h2>
        <p>Kinesisk har behov for egen skriftstørrelsedefinisjoner for at fonten skal være lesbar.</p>
        <table>
          <thead>
            <tr>
              <th>Teksttype</th>
              <th>Størrelse på stor skjerm</th>
              <th>Størrelse på liten skjerm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Overskrifter</td>
              <td>
                40 px <span style={{ color: 'rgb(144, 144, 144)' }}>(2.22rem)</span>
              </td>
              <td>
                32 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.77rem)</span>
              </td>
            </tr>
            <tr>
              <td>Mellomoverskrifter</td>
              <td>
                24 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.33rem)</span>
              </td>
              <td>
                24 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.33rem)</span>
              </td>
            </tr>
            <tr>
              <td>Små overskrifter</td>
              <td>
                20 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.11rem)</span>
              </td>
              <td>
                20 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.11rem)</span>
              </td>
            </tr>
            <tr>
              <td>Ingress</td>
              <td>
                28 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.55rem)</span>
              </td>
              <td>
                22 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span>
              </td>
            </tr>
            <tr>
              <td>Brødtekst</td>
              <td>
                20 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.11rem)</span>
              </td>
              <td>
                18 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Overskrifter</h3>
        <div lang="zh-Hans">
          <h1>人人生而自由</h1>
        </div>
        <h3>Mellomoverskrifter</h3>
        <div lang="zh-Hans">
          <h2>人人生而自由</h2>
        </div>
        <h3>Små overskrifter</h3>
        <div lang="zh-Hans">
          <h3>人人生而自由</h3>
        </div>
        <h3>Ingress</h3>
        <p className="article_introduction" lang="zh-Hans">
          人人生而自由,在尊严和权利上一律平等。
        </p>
        <h3>Brødtekst</h3>
        <p lang="zh-Hans">人人生而自由,在尊严和权利上一律平等。他们赋有理性和良心,并应以兄弟关系的精神互相对待。</p>
        <h2 id="lenker" className="u-heading">
          Lenker
        </h2>
        <p>
          Lenker på <a href="http://www.ndla.no">ndla.no</a> bruker den vanlige konvensjonen med med linje under
          teksten, og ndla-blå farge. Dette er et lett gjenkjennelig mønster for brukerne.
        </p>
        <p>
          Lenker kan enten være eksterne, interne eller vise til innhold på samme side ved hjelp av en <code>id</code>
          -attributt på for eksempel en overskrift.
        </p>
        <p>Det skal vurderes i framtiden om det er behov for markering av eksterne lenker.</p>
        <div className="c-bodybox">
          <p>
            Dette er en{' '}
            <a href="http://ndla.no" target="blank">
              ekstern lenke
            </a>{' '}
            som åpnes i nytt vindu. Dette er en <a href="/">intern lenke</a>, og dette er en{' '}
            <a href="#overskrift">lenke som viser til innhold på samme side</a>.
          </p>
        </div>

        <p>Se også «Bruk av lenker» under «Components».</p>

        <h2 id="midtstilttekst" className="u-heading">
          Midtstilt tekst
        </h2>
        <p>
          Noen informasjonstyper kan stå for seg selv og være midtstilt. Matematiske formler er ett eksempel på
          midtstilt tekst.
        </p>
        <p
          className="u-text-center"
          dangerouslySetInnerHTML={{
            __html: `
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
`,
          }}
        ></p>
      </StoryBody>
    </div>
  );
};
