import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Center, articleUrl } from './helpers';
import article from '../dummydata/index';
import { Table } from '../src/table/Table';

/*
 * Example content
 */
const articleHMTL = (id) => {
  const articleHTML = document.createElement('div');
  articleHTML.innerHTML = article[`article${id}`].content[0].content;
  const paragraphs = articleHTML.getElementsByTagName('p');
  const table = articleHTML.getElementsByTagName('table')[0];

  return {
    articleHTML,
    paragraphs,
    table,
  };
};

const heading = (articleHTML, level) => {
  if (!articleHTML) return `<h${level}>Overskrift ${level}</h${level}>`;
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<div>Overskrift ${level}:</div><h${level}>Overskrift ${level}</h${level}>`;
  return `<div>Overskrift ${level}:</div><h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML} <h${level}>`;
};

storiesOf('Typografi', module)
  .add('Farger', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Farger på NDLA</h1>
        </section>
        <section>
          <strong>Variasjoner av NDLA-fargen</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#20588F' }} className="u-text-inverted u-padding-tiny">NDLA primærfarge: #20588F</li>
            <li style={{ backgroundColor: '#507AA4' }} className="u-text-inverted u-padding-tiny">NDLA sekundærfarge: #507AA4</li>
            <li style={{ backgroundColor: '#A5BCD3' }} className="u-padding-tiny">NDLA tertiærfarge: #A5BCD3</li>
            <li style={{ backgroundColor: '#CEDDEA' }} className="u-padding-tiny">NDLA lys farge: #CEDDEA</li>
          </ul>
          <strong>Gråtoner</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#8A8888' }} className="u-text-inverted u-padding-tiny">Grå 1: #8A8888</li>
            <li style={{ backgroundColor: '#E8E3E3' }} className="u-padding-tiny">Grå 2: #E8E3E3</li>
            <li style={{ backgroundColor: '#EFF0F2' }} className="u-padding-tiny">Grå 3: #EFF0F2</li>
            <li style={{ backgroundColor: '#F8F8F8' }} className="u-padding-tiny">Grå 4: #F8F8F8</li>
          </ul>
          <strong>Tilleggsfarger</strong>
          <ul className="o-list--clean">
            <li style={{ backgroundColor: '#1C1717' }} className="u-text-inverted u-padding-tiny">Mørk: #1C1717</li>
            <li style={{ backgroundColor: '#FFFFFF' }} className="u-padding-tiny">Hvit: #FFFFFF</li>
            <li style={{ backgroundColor: '#FE5F55' }} className="u-padding-tiny">Kontrast: #FE5F55</li>
          </ul>
        </section>
      </article>
    </Center>
  ))
  .add('Fonter', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Fonter</h1>
          <p>NDLA bruker Source Sans Pro fra <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Google Fonts</a>.</p>
          <ul className="o-list--arrows o-list--arrows--invert">
            <li>Brødtekst: Source Sans Pro, 400 inkludert <em>kursiv</em></li>
            <li style={{ fontWeight: 700 }}>Overskrifter: Source Sans Pro, 700 inkludert <em>kursiv</em></li>
          </ul>
          <p>Tilbakefallsfonter er <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span> og <span style={{ fontFamily: 'Arial' }}>Arial</span></p>
        </section>
      </article>
    </Center>
  ))
  .add('Overskrifter', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Overskrifter på NDLA</h1>
          <p>Overskrifter på NDLA skal markeres semantisk med riktige HTML-tagger
            (for eksempel <code>{'<h1>Overskrift<h1>'}</code>). Vi bruker ikke <b>fet-skrift</b> (eller
            &laquo;bold&raquo;) for å markere overskrifter.
          </p>
          <p>
            Font: <a href="https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro:400,400i,900,900i&selection.subset=latin-ext">Source Sans Pro, Bold (700)</a>
          </p>
        </section>
        <section>
          <h2 className="u-heading">Eksempel</h2>
          <div dangerouslySetInnerHTML={{ __html: heading('', 1) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: heading('', 2) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <div dangerouslySetInnerHTML={{ __html: heading('', 3) }} />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
            ea sunt similique incidunt doloremque dicta quidem architecto recusandae explicabo deleniti ad
            consectetur. Nemo obcaecati assumenda explicabo blanditiis. Error quia, perferendis eaque.
            Ipsum quae, pariatur unde, nihil harum molestiae, consequuntur ea corrupti quod et impedit
            incidunt consectetur vero velit. Earum quibusdam vel dignissimos obcaecati rem, reiciendis
            ipsam, fuga, aliquam aperiam consequatur doloribus. Similique aliquid ea sit aperiam,
            laborum dolor itaque! Unde expedita itaque porro exercitationem natus accusantium
            dignissimos modi nulla, qui dolores rem sunt, odio animi illo necessitatibus hic quibusdam
            corporis in. Quaerat provident expedita veniam minus, eveniet, voluptas ipsa pariatur!
          </p>
          <div dangerouslySetInnerHTML={{ __html: heading('', 4) }} />
        </section>
      </article>
    </Center>
  ))
  .add('Avsnitt', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <h1 className="u-heading">Avsnitt på NDLA</h1>
          <p>
            Tekstavsnitt på <a href="//ndla.no">ndla.no</a> skal være lette å lese.
            Dette betyr at linjelengden ikke skal være for lang, og at vi
            bruker stor nok skriftsstørrelse. Mange tar utgangspunkt i
            16 punkter som en standardstørrelse, men siden NDLA har mange
            teksttunge sider bruker vi 18 punkter.
          </p>
          <p>
            En tekstlinje i full bredde skal utgjøre omtrent 50 – 75 tegn, om <span className="u-mark">*</span>-tegnet i setningen under kommer på samme linje, er den for lang:
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip<span className="u-mark">*</span>isicing
            elit, sed do eiusmod <span className="u-mark">*</span>tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Font: <a href="https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro:400,400i,900,900i&selection.subset=latin-ext">Source Sans Pro, Regular (400)</a>
          </p>

        </section>
        <h2 className="u-heading">Eksempel</h2>
        <p>{articleUrl(93)}</p>
        {
          Array.from(articleHMTL(93).paragraphs).slice(0, 4).map(paragraph => <div dangerouslySetInnerHTML={{ __html: paragraph.outerHTML }} />)
        }

      </article>
    </Center>
  ))
  .add('Lenker', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Lenker på NDLA</h1>
        <p><a>Lenker</a> på <a href="//ndla.no">ndla.no</a> bruker den vanlige
          konvensjonen med underlinje. Ingen lenker skal åpne i et nytt vindu
          (det vil si, bruke <code>target=&quot;_blank&quot;</code>), med mindre den inngår i
          et skjema hvor det er nødvendig at brukeren beholder vinduet eller fanen med skjemaet.
        </p>
        <p>Lenker kan enten være eksterne, interne eller vise til innhold på samme side ved hjelp av en <code>id</code>-attributt på for eksempel en overskrift.</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      <p>Dette er en <a href="http://ndla.no">ekstern lenke</a>. Dette er en <a href="/">intern lenke</a>, og dette er en <a href="#overskrift">lenke som viser til innhold på samme side</a></p>
      <h2 id="overskrift">Overskrift</h2>
    </Center>
  ))
  .add('Tabeller', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Tabeller på NDLA</h1>
        <p>Tabeller skal brukes til tabulær data, ikke for tekstutforming</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
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
    </Center>
  ))
  .add('Lister', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Lister på NDLA</h1>
      </section>

      <strong>Ren liste</strong>
      <ul className="o-list--clean">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ul>
      <strong>Lister med lenker</strong>
      <ul className="o-list--arrows">
        <li><a href="">Listepunkt 1</a></li>
        <li><a href="">Listepunkt 2</a></li>
        <li><a href="">Listepunkt 3</a></li>
        <li><a href="">Listepunkt 4</a></li>
      </ul>
      <strong>Nummererte lister</strong>
      <ol>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ol>
    </Center>
  ))
  .add('Sitater', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Sitater på NDLA</h1>
        <p>Sitater som strekker seg over tre linjer i vanlig linjelengde er best å ta ut som et blokksitat. Vi bruker ikke kursiv for å markere sitater, men &laquo;&raquo;</p>
      </section>
      <h2 className="u-heading">Eksempel</h2>
      {articleUrl(89)}
      <div dangerouslySetInnerHTML={{ __html: articleHMTL(89).articleHTML.outerHTML }} />
    </Center>
  ))
  ;
