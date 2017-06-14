import React from 'react';
import { storiesOf } from '@storybook/react';
import { Center } from './helpers';
import article from '../dummydata/index';
import { Table } from '../src';

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
          <h1 className="u-heading">Typografi</h1>
          <p><a href="#fonter">Fonter</a>, <a href="#overskrifter">overskrifter</a>, <a href="#ingress">ingress</a>, <a href="#avsnitt">avsnitt</a>, <a href="#lenker">lenker</a>.</p>
        </section>
        <section>
          <div className="o-wrapper--inner">
            <h2 id="fonter" className="u-heading">Fonter</h2>
            <p>NDLA bruker fontene <a href="https://fonts.google.com/specimen/Source+Serif+Pro">Source Serif Pro</a> og <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro</a>.</p>
            <ul className="o-list--bullets o-list--bullets--invert">
              <li style={{ fontWeight: 600 }}>Overskrifter: Source Sans Pro, 600</li>
              <li style={{ fontWeight: 700 }}>Mellom-overskrifter: Source Sans Pro, 700</li>
              <li style={{ fontWeight: 300 }}>Ingress: Source Sans Pro, 300</li>
              <li className="u-serif" >Brødtekst: Source Serif Pro, 400 inkludert <em>kursiv</em></li>
              <li>Hjelpetekster: Source Sans Pro, 400 inkludert <em>kursiv</em></li>
            </ul>
            <p>Tilbakefallsfonter er <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og <span style={{ fontFamily: 'Arial' }}>Arial</span></p>
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
        </section>
      </article>
    </Center>
  ))
  .add('Tabeller', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Tabeller</h1>
          <div className="o-wrapper--inner">
            <p>Tabeller skal brukes til å presentere data (tabulær data), ikke til utforming.</p>
          </div>
        </section>
        <section>
          <h2 className="u-heading">Eksempel</h2>
          <div className="o-wrapper--inner">
            <Table>
              <tbody>
                <tr>
                  <th>Hovedkategorier</th>
                  <th>Sjangre</th>
                  <th>Kjennetegn</th>
                </tr>
                <tr>
                  <td><strong>Subjektive sjangre</strong></td>
                  <td>Leder</td>
                  <td>
                    <ul>
                      <li>skrives ofte av en av redaktørene</li>
                      <li>er redaksjonens syn på en sak</li>
                      <li>står ofte på side 2 eller på egen meningsside</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Anmeldelse</td>
                  <td>
                    <ul>
                      <li>en av journalistenes mening om en ny film, bok, konsert e.l.</li>
                      <li>skal være en bruksanvisning slik at målgruppen vet om produktet er noe for dem</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Leserinnlegg og kommentarfelt</td>
                  <td>
                    <ul>
                      <li>lar den enkelte mottaker komme med sitt syn på en sak</li>
                      <li>leserinnlegg i avis, kommentarfelt på nett</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Kommentar og kronikk</td>
                  <td>
                    <ul>
                      <li>kan skrives av en i redaksjonen, men gjerne også av en fagperson utenfor redaksjonen</li>
                      <li>skal gi dybdekunnskap om et tema</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Objektive sjangre</strong></td>
                  <td>Nyhetsartikkel</td>
                  <td>
                    <ul>
                      <li>kort, konsis, svarer på grunnleggende spørsmål</li>
                      <li>det viktigste først</li>
                      <li>lar kildene komme til orde</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Nyhetsreportasje</td>
                  <td>
                    <ul>
                      <li>går gjerne mer i dybden enn en nyhetsartikkel</li>
                      <li>bruker flere kilder</li>
                      <li>har fokus på bakgrunn og årsak</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Intervju</td>
                  <td>
                    <ul>
                      <li>enkelt oppsett med spørsmål og svar</li>
                      <li>brukes gjerne som en del av en nyhetsreportasje eller artikkel</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Notis</td>
                  <td>
                    <ul>
                      <li>kort nyhetsmelding som gir grunnleggende informasjon om en aktuell hendelse</li>
                      <li>gjerne bare 10–15 setninger</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Hybridsjangre</strong></td>
                  <td>Feature</td>
                  <td>
                    <ul>
                      <li>hører til i objektiv-kategorien, men journalisten bruker alle sanser og litterære virkemidler</li>
                      <li>går i dybden, gir leseren en større forståelse av et tema</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Portrettintervju</td>
                  <td>
                    <ul>
                      <li>hører til i objektiv-kategorien, men journalisten bruker alle sanser og litterære virkemidler</li>
                      <li>gir leseren dybdekunnskap om en aktuell person i nyhetsbildet</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>
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
                  <td><p>10<sup>-3</sup></p></td>
                  <td>milli</td>
                  <td>m</td>
                  <td>tusendel</td>
                  <td>0,001</td>
                </tr>
                <tr>
                  <td>10<sup>-6</sup></td>
                  <td>mikro</td>
                  <td>{/* <span className="Wirisformula rs_preserve"><span className="MathJax_Preview" style="color: inherit; display: none;" /><span className="MathJax" id="MathJax-Element-1-Frame" tabIndex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>&amp;#x3BC;</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span className="math" id="MathJax-Span-1" style="width:0.658em; display: inline-block;"><span style="display: inline-block; position: relative; width:0.539em; height:0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.967em 1000.48em 2.92em -999.997em); top: -2.557em; left:0em;"><span className="mrow" id="MathJax-Span-2"><span className="mi" id="MathJax-Span-3" style="font-family: STIXGeneral-Italic;">μ</span></span><span style="display: inline-block; width:0px; height: 2.562em;" /></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.282em; border-left:0px solid; width:0px; height:0.932em;" /></span></nobr><span className="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>μ</mi></math></span></span><script type="math/mml" id="MathJax-Element-1"><math><mi>μ</mi></math></script></span>*/}</td>
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
            <br />
            <Table>
              <tr>
                <th>10<sup>n</sup></th>
                <th>Prefiks</th>
                <th>Symbol</th>
                <th>Namn</th>
                <th>Eksempel</th>
              </tr>
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
                <td><p>10<sup>-3</sup></p></td>
                <td>milli</td>
                <td>m</td>
                <td>tusendel</td>
                <td>0,001</td>
              </tr>
              <tr>
                <td>10<sup>-6</sup></td>
                <td>mikro</td>
                <td>{/* <span className="Wirisformula rs_preserve"><span className="MathJax_Preview" style="color: inherit; display: none;" /><span className="MathJax" id="MathJax-Element-1-Frame" tabIndex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>&amp;#x3BC;</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span className="math" id="MathJax-Span-1" style="width:0.658em; display: inline-block;"><span style="display: inline-block; position: relative; width:0.539em; height:0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.967em 1000.48em 2.92em -999.997em); top: -2.557em; left:0em;"><span className="mrow" id="MathJax-Span-2"><span className="mi" id="MathJax-Span-3" style="font-family: STIXGeneral-Italic;">μ</span></span><span style="display: inline-block; width:0px; height: 2.562em;" /></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.282em; border-left:0px solid; width:0px; height:0.932em;" /></span></nobr><span className="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>μ</mi></math></span></span><script type="math/mml" id="MathJax-Element-1"><math><mi>μ</mi></math></script></span>*/}</td>
                <td>milliondel</td>
                <td>0,000001</td>
              </tr>
              <tr>
                <td>10<sup>-9</sup></td>
                <td>nano</td>
                <td>n</td>
                <td>milliarddel</td>
                <td><p>0,000000001</p></td>
              </tr>
            </Table>
          </div>
        </section>
      </article>
    </Center>
  ))
  .add('Lister', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Lister</h1>
        </section>
        <section className="o-wrapper--inner">
          <h2 className="u-heading">Ren liste</h2>
          <ul className="o-list--bullets">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>Listepunkt 3</li>
            <li>Listepunkt 4</li>
          </ul>
          <h2 className="u-heading">Lister med lenker</h2>
          <ul className="o-list--bullets">
            <li><a href="">Listepunkt 1</a></li>
            <li><a href="">Listepunkt 2</a></li>
            <li><a href="">Listepunkt 3</a></li>
            <li><a href="">Listepunkt 4</a></li>
          </ul>
          <h2 className="u-heading">Nummererte lister</h2>
          <ol>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
            <li>Listepunkt</li>
          </ol>
        </section>
      </article>
    </Center>
  ))
  .add('Sitater', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Sitater</h1>
          <div className="o-wrapper--inner">
            <p>Sitater som strekker seg over tre linjer i vanlig linjelengde er best å ta ut som et blokksitat. Vi bruker ikke kursiv for å markere sitater, men &laquo;&raquo;</p>
          </div>
        </section>
        <h2 className="u-heading">Eksempel</h2>
        <section className="o-wrapper--inner c-article-content u-noborder">
          <blockquote>
            «Vi elsker alle Noora i Skam. Vi ser opp til henne, vi vil være henne,
             og hun viser oss at det å tre ut av den typiske sildestimen alle
             absolutt skal følge, er kult.» <br />(Jente 19 år, Si;D, Aftenposten 23. mai 2016)
          </blockquote>
        </section>
      </article>
    </Center>
  ))
  .add('Spacing', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Spacing</h1>
          <div className="o-wrapper--inner">
            <p>Designsystemet vårt baserer seg hovedsaklig på tre spacing-nivåer:</p>
            <code>{`--spacing
--spacing--small
--spacing--large`}</code>
            <p>Hvor:</p>
            <ul>
              <li>Spacing: 26px</li>
              <li>Spacing small: 13px</li>
              <li>Spacing large: 52px</li>
            </ul>
          </div>
        </section>
      </article>
    </Center>
  ))
  ;
