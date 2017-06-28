import React from 'react';
import { storiesOf } from '@storybook/react';
import { Center } from './helpers';
import article from '../dummydata/index';
import { Table, LayoutItem } from '../src';

const heading = (articleHTML, level) => {
  if (!articleHTML) return `<h${level}>Overskrift ${level}</h${level}>`;
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<div>Overskrift ${level}:</div><h${level}>Overskrift ${level}</h${level}>`;
  return `<div>Overskrift ${level}:</div><h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML} <h${level}>`;
};

storiesOf('Grunnstiler', module)
  .add('Farger', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Farger på NDLA</h1>
        </section>
        <section className="o-wrapper o-wrapper--nopadding">
          <div>
            <h2 className="u-heading">NDLA-fargen</h2>
            <p>Primærfargen kan supplementeres med ulike graderinger.</p>
            <ul className="o-list--colors">
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#20588F' }} />
                <div className="o-list__label">NDLA primærfarge<br />#507AA4</div></li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#507AA4' }} />
                <div className="o-list__label">NDLA sekundærfarge<br />#507AA4</div></li>
              <li className="o-list__item o-list__item--colors o-list__item ">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#A5BCD3' }} />
                <div className="o-list__label">NDLA tertiærfarge<br />#A5BCD3</div></li>
              <li className="o-list__item o-list__item--colors o-list__item">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#CEDDEA' }} />
                <div className="o-list__label">NDLA lys<br />#CEDDEA</div></li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#184673' }} />
                <div className="o-list__label">NDLA mørk<br />#184673</div></li>
            </ul>
          </div>

          <div>
            <h2 className="u-heading">Tilleggsfarger</h2>
            <p>I tillegg til primærfargen og dens graderinger kan man benytte tilleggsfarger til å tematisere innhold og skape variasjon/kontrast til NDLA-fargen.</p>
            <ul className="o-list--colors">
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#FE5F55' }} />
                <div className="o-list__label">Rød<br />#FE5F55</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#5CBC80' }} />
                <div className="o-list__label">Grønn<br />#5CBC80</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#EAD854' }} />
                <div className="o-list__label">Gul<br />#EAD854</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#444444' }} />
                <div className="o-list__label">Mørk (tekst)<br />#444444</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="u-heading">Gråtoner</h2>
            <p>Ulike gråtoner kan brukes for å skape myke farger for navigasjonselementer, skjema-elementer etc.</p>
            <ul className="o-list--colors">
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#8A8888' }} />
                <div className="o-list__label">Grå 1<br />#8A8888</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#E8E3E3' }} />
                <div className="o-list__label">Grå 2<br />#E8E3E3</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#EFF0F2' }} />
                <div className="o-list__label">Grå 3<br />#EFF0F2</div>
              </li>
              <li className="o-list__item o-list__item--colors">
                <div className="o-list__bgcolor" style={{ backgroundColor: '#F8F8F8' }} />
                <div className="o-list__label">Grå 4<br />#F8F8F8</div>
              </li>
            </ul>
          </div>

        </section>
      </article>
    </Center>
  ))
  .add('Typografi', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Typografi</h1>
            <p><a href="#fonter">Fonter</a>, <a href="#storrelser">skriftstørrelser</a>, <a href="#overskrifter">overskrifter</a>, <a href="#ingress">ingress</a>, <a href="#avsnitt">avsnitt</a>, <a href="#lenker">lenker</a>.</p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <div className="o-wrapper--inner">
            <h2 id="fonter" className="u-heading">Fonter</h2>
            <p>NDLA bruker fontene <a href="https://fonts.google.com/specimen/Source+Serif+Pro">Source Serif Pro</a> og <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro</a>.</p>
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
            <p>Tilbakefallsfonter er <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og <span style={{ fontFamily: 'Arial' }}>Arial</span></p>
          </div>
          <div className="o-wrapper--inner">
            <h2 id="storrelser" className="u-heading">Skriftstørrelser</h2>
            <table className="c-table">
              <thead>
                <tr>
                  <th>Type tekst</th>
                  <th>Størrelse på stor skjerm</th>
                  <th>Størrelse på liten skjerm</th>
                </tr>
              </thead>
              <tr>
                <td>Overskrifter</td>
                <td>38 px <span style={{ color: 'rgb(144, 144, 144)' }}>(2.1rem)</span></td>
                <td>30 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.67rem)</span></td>
              </tr>
              <tr>
                <td>Mellomoverskrifter</td>
                <td>22 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span></td>
                <td>22 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.22rem)</span></td>
              </tr>
              <tr>
                <td>Ingress</td>
                <td>26 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.44rem)</span></td>
                <td>20 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1.1rem)</span></td>
              </tr>
              <tr>
                <td>Brødtekst</td>
                <td>18 px <span style={{ color: 'rgb(144, 144, 144)' }}>(1rem)</span></td>
                <td>16 px <span style={{ color: 'rgb(144, 144, 144)' }}>(0.88rem)</span></td>
              </tr>
            </table>

            <p>Grunnlaget for REM-kalkulerte størrelser er 18px skriftstørrelse på html-elementet.</p>

          </div>
          <div className="o-wrapper--inner">
            <h2 id="overskrifter" className="u-heading">Overskrifter</h2>
            <p>Overskrifter skal markeres semantisk med riktige HTML-tagger. For eksempel:</p>
            <code>{'<h1>Overskrift<h1>'}</code>

            <p>Tre nivåer av overskrifter:</p>
            <div className="c-bodybox">
              <div dangerouslySetInnerHTML={{ __html: heading('', 1) }} />
              <div dangerouslySetInnerHTML={{ __html: heading('', 2) }} />
              <div dangerouslySetInnerHTML={{ __html: heading('', 3) }} />
            </div>

          </div>
          <div className="o-wrapper--inner">
            <h2 id="ingress" className="u-heading">Ingress</h2>
            <p>Ingresser skal være 1-2 setninger, og gi en oppsummering </p>
            <div className="c-bodybox">
              <section className="article_introduction"><p className="article_introduction">Idéutvikling er en viktig del av alt profesjonelt arbeid med medieuttrykk. I vertøykassa si har medieprodusenten et knippe fortelleteknikker og virkemidler innen design, tekst, lyd og bilde.</p></section>
            </div>
          </div>
          <div className="o-wrapper--inner">
            <h2 id="avsnitt" className="u-heading">Avsnitt</h2>
            <p>
                Tekstavsnitt på <a href="//ndla.no">ndla.no</a> skal være lette å lese.
                Dette betyr at linjelengden ikke skal være for lang, og at vi
                bruker stor nok skriftsstørrelse. Mange tar utgangspunkt i
                16 punkter som en standardstørrelse, men siden NDLA har mange
                teksttunge sider bruker vi 18 punkter.
              </p>
            <p>
                En tekstlinje i full bredde skal utgjøre omtrent 50 – 75 tegn, om <span className="u-mark">*</span>-tegnene i setningen under kommer på samme linje, er den for lang:
              </p>
            <div className="c-bodybox">
              <p className="u-serif">Lorem ipsum dolor sit amet, consectetur adip<span className="u-mark">*</span>isicing
              elit, sed do eiusmod <span className="u-mark">*</span>tempor incididunt ut labore et
              dolore magna aliqua.</p>
            </div>
          </div>
          <div className="o-wrapper--inner">
            <h2 id="lenker" className="u-heading">Lenker</h2>
            <p><a>Lenker</a> på <a href="//ndla.no">ndla.no</a> bruker den vanlige
              konvensjonen med underlinje. Ingen lenker skal åpne i et nytt vindu
              (det vil si, bruke <code>target=&quot;_blank&quot;</code>), med mindre den inngår i
              et skjema hvor det er nødvendig at brukeren beholder vinduet eller fanen med skjemaet.
            </p>
            <p>Lenker kan enten være eksterne, interne eller vise til innhold på samme side ved hjelp av en <code>id</code>-attributt på for eksempel en overskrift.</p>
            <div className="c-bodybox">
              <p>Dette er en <a href="http://ndla.no">ekstern lenke</a>. Dette er en <a href="/">intern lenke</a>, og dette er en <a href="#overskrift">lenke som viser til innhold på samme side</a></p>
            </div>
          </div>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Tabeller', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Tabeller</h1>
            <p>Tabeller skal brukes til å presentere data (tabulær data), ikke til utforming.</p>
            <p>Tekstformatering, høyrestilling av tekst etc. angis ikke i tabellens
             stilsett, men gjøres i redaktørgrensesnittet.</p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <div className="o-wrapper--inner">
            <h2 className="u-heading">Eksempel</h2>
            <Table>
              <thead>
                <tr>
                  <th>10<sup>n</sup></th>
                  <th>Prefiks</th>
                  <th>Symbol</th>
                  <th>Namn</th>
                  <th>Eksempel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10<sup>15</sup></td>
                  <td>peta</td>
                  <td>P</td>
                  <td>billiard</td>
                  <td>1000000000000000</td>
                </tr>
                <tr>
                  <td>10<sup>12</sup></td>
                  <td>tera</td>
                  <td>T</td>
                  <td>billion</td>
                  <td>1000000000000</td>
                </tr>
                <tr>
                  <td>10<sup>9</sup></td>
                  <td>giga</td>
                  <td>G</td>
                  <td>milliard</td>
                  <td>1000000000</td>
                </tr>
                <tr>
                  <td>10<sup>6</sup></td>
                  <td>mega</td>
                  <td>M</td>
                  <td>million</td>
                  <td>1000000</td>
                </tr>
                <tr>
                  <td>10<sup>3</sup></td>
                  <td>kilo</td>
                  <td>k</td>
                  <td>tusen</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>10<sup>2</sup></td>
                  <td>hekto</td>
                  <td>h</td>
                  <td>hundre</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>10<sup>1</sup></td>
                  <td>deka</td>
                  <td>da</td>
                  <td>ti</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>10<sup>-1</sup></td>
                  <td>desi</td>
                  <td>d</td>
                  <td>tidel</td>
                  <td>0,1</td>
                </tr>
                <tr>
                  <td>10<sup>-2</sup></td>
                  <td>centi</td>
                  <td>c</td>
                  <td>hundredel</td>
                  <td>0,01</td>
                </tr>
                <tr>
                  <td>10<sup>-3</sup></td>
                  <td>milli</td>
                  <td>m</td>
                  <td>tusendel</td>
                  <td>0,001</td>
                </tr>
                <tr>
                  <td>10<sup>-6</sup></td>
                  <td>mikro</td>
                  <td />
                  <td>milliondel</td>
                  <td>0,000001</td>
                </tr>
                <tr>
                  <td>10<sup>-9</sup></td>
                  <td>nano</td>
                  <td>n</td>
                  <td>milliarddel</td>
                  <td><p>0,000000001</p></td></tr>
              </tbody>
            </Table>
          </div>
          <div className="o-wrapper--inner">
            <h2 className="u-heading">Eksempel med formatering</h2>
            <Table>
              <thead>
                <tr>
                  <th>10<sup>n</sup></th>
                  <th>Prefiks</th>
                  <th>Symbol</th>
                  <th>Namn</th>
                  <th style={{ textAlign: 'right' }}>Eksempel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10<sup>15</sup></td>
                  <td>peta</td>
                  <td>P</td>
                  <td>billiard</td>
                  <td style={{ textAlign: 'right' }}>1000000000000000</td>
                </tr>
                <tr>
                  <td>10<sup>12</sup></td>
                  <td>tera</td>
                  <td>T</td>
                  <td>billion</td>
                  <td style={{ textAlign: 'right' }}>1000000000000</td>
                </tr>
                <tr>
                  <td>10<sup>9</sup></td>
                  <td>giga</td>
                  <td>G</td>
                  <td>milliard</td>
                  <td style={{ textAlign: 'right' }}>1000000000</td>
                </tr>
                <tr>
                  <td>10<sup>6</sup></td>
                  <td>mega</td>
                  <td>M</td>
                  <td>million</td>
                  <td style={{ textAlign: 'right' }}>1000000</td>
                </tr>
                <tr>
                  <td>10<sup>3</sup></td>
                  <td>kilo</td>
                  <td>k</td>
                  <td>tusen</td>
                  <td style={{ textAlign: 'right' }}>1000</td>
                </tr>
                <tr>
                  <td>10<sup>2</sup></td>
                  <td>hekto</td>
                  <td>h</td>
                  <td>hundre</td>
                  <td style={{ textAlign: 'right' }}>100</td>
                </tr>
                <tr>
                  <td>10<sup>1</sup></td>
                  <td>deka</td>
                  <td>da</td>
                  <td>ti</td>
                  <td style={{ textAlign: 'right' }}>10</td>
                </tr>
                <tr>
                  <td>10<sup>-1</sup></td>
                  <td>desi</td>
                  <td>d</td>
                  <td>tidel</td>
                  <td style={{ textAlign: 'right' }}>0,1</td>
                </tr>
                <tr>
                  <td><strong>10<sup>-2</sup></strong></td>
                  <td><strong>centi</strong></td>
                  <td><strong>c</strong></td>
                  <td><strong>hundredel</strong></td>
                  <td style={{ textAlign: 'right' }}><strong>0,01</strong></td>
                </tr>
                <tr>
                  <td>10<sup>-3</sup></td>
                  <td>milli</td>
                  <td>m</td>
                  <td>tusendel</td>
                  <td style={{ textAlign: 'right' }}>0,001</td>
                </tr>
                <tr>
                  <td>10<sup>-6</sup></td>
                  <td>mikro</td>
                  <td />
                  <td>milliondel</td>
                  <td style={{ textAlign: 'right' }}>0,000001</td>
                </tr>
                <tr>
                  <td>10<sup>-9</sup></td>
                  <td>nano</td>
                  <td>n</td>
                  <td>milliarddel</td>
                  <td style={{ textAlign: 'right' }}><p>0,000000001</p></td></tr>
              </tbody>
            </Table>
          </div>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Lister', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Lister</h1>
            <p>Lister bør ikke inneholde flere enn 10 punkter. Har du mye mer,
             bør du vurdere å organisere innholdet annerledes.</p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <h2 className="u-heading">Ren liste</h2>
          <ul className="o-list--bullets">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>Listepunkt 3</li>
            <li>Underliste:
              <ul>
                <li>Underlistepunkt 1</li>
                <li>Underlistepunkt 2</li>
                <li>Underlistepunkt 3</li>
                <li> Under-underliste:
                  <ul>
                    <li>Under-underlistepunkt 1</li>
                  </ul>
                </li>
              </ul>
            </li>

          </ul>
          <h2 className="u-heading">Lister med lenker</h2>
          <ul className="o-list--bullets">
            <li><a href="">Listepunkt 1</a></li>
            <li><a href="">Listepunkt 2</a></li>
            <li><a href="">Listepunkt 3</a></li>
          </ul>
          <h2 className="u-heading">Nummererte lister</h2>
          <ol>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Underliste:
            <ol>
              <li>Underlistepunkt</li>
              <li>Underlistepunkt</li>
              <li>Underlistepunkt</li>
            </ol></li>
          </ol>
          <h2 className="u-heading">Alfabetiserte lister</h2>
          <ol className="ol-list--roman">
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
          </ol>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Sitater', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Sitater</h1>
            <p>Sitater som strekker seg over tre linjer i vanlig linjelengde er best å ta ut som et blokksitat. Vi bruker ikke kursiv for å markere sitater, men &laquo;&raquo;</p>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <h2 className="u-heading">Eksempel</h2>
          <blockquote>
            «Vi elsker alle Noora i Skam. Vi ser opp til henne, vi vil være henne,
             og hun viser oss at det å tre ut av den typiske sildestimen alle
             absolutt skal følge, er kult.» <br />(Jente 19 år, Si;D, Aftenposten 23. mai 2016)
          </blockquote>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Spacing', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Spacing</h1>
          <div className="o-wrapper--inner">
            <p>«Spacing» er vårt designsystem for bruk av luft.</p>
            <p>Vi baserer oss hovedsaklig på tre spacing-nivåer:</p>
            <code>{`--spacing
--spacing--small
--spacing--large`}</code>
            <p>Hvor:</p>
            <div style={{ padding: '52px', background: '#eee' }}>
              <span style={{ position: 'absolute', marginTop: '-38px', fontSize: '13px' }}>Spacing large (Store avstander): 52px</span>
              <div style={{ padding: '26px', background: '#ddd' }}>
                <span style={{ position: 'absolute', marginTop: '-22px', fontSize: '13px' }}>Spacing (vanlig luft): 26px</span>
                <div style={{ padding: '13px', background: '#ccc', fontSize: '13px' }}>
                  <span>Spacing small (Små avstander): 13px</span>
                </div>
              </div>
            </div>
            <p>Luft brukes for å visuelt gruppere elementer på en flate, og rette
             fokus på de riktige elementene. Har et element mye luft rundt seg,
            kan det lettere få fokus. Har to elementer lite luft mellom seg,
           oppfattes de gjerne som beslektet.</p>
            <p>Når nye NDLA skal tas ut på nye flater, anbefales det å forholde seg
          til dette spacing-systemet, slik at det blir konsistent.</p>
          </div>
        </section>
      </article>
    </Center>
  ))
  ;
