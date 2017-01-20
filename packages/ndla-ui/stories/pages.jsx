import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';

import { Aside, SiteNav, PageContainer, SiteNavItem, Masthead, MastheadItem, Logo, Footer, Hero, OneColumn } from '../src';

import ArticleLoader from './article/ArticleLoader';

// Using for example alternative article
import article from '../dummydata/index';

const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.article40.content[0].content;

const FooterExample = () => (
  <Footer>
    <div className="footer_form">
      <label htmlFor="language-select" className="footer_label footer--bold">Velg språk</label>
      <select id="language-select" className="footer_language-select">
        <option value="Norsk">Norsk</option>
        <option value="English">English</option>
      </select>
    </div>
    <Footer.Ruler />
    <Footer.Text>
      <Footer.Editor title="Ansvarlig redaktør:" name="Øivind Høines" />
      <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
    </Footer.Text>
    <Footer.Text>Nettstedet er utarbeidet av NDLA som åpen kildekode.</Footer.Text>
  </Footer>
);

const ResourcesTab1Content = () => (
  <div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <div className="c-article">
      <h3><button>Innføring i journalistikk</button></h3>
      <p>5 mins om the basics</p>
    </div>
    <p><button>Se alle læringsstier</button></p>
  </div>
);

const ResourcesTab1 = () => (
  <div className="c-resources_content u-margin-top-small u-margin-bottom">
    <div className="c-breadcrumbs u-margin-bottom">
      i <a to="#">Planteliv</a>{' > '}<a to="#">Cellebiologi</a>
    </div>

    <input type="text" placeholder="Søk etter" name="filter-text" value="" className="u-margin-bottom-small" />
    <Tabs
      tabs={[
          { displayName: 'Alle', content: <div><h2>Læringsstier</h2><ResourcesTab1Content /></div> },
          { displayName: 'Læringsstier', content: <p>Brukeroppgave-innhold</p> },
          { displayName: 'Fagstoff', content: <p>Brukeroppgave-innhold</p> },
          { displayName: 'Aktiviteter', content: <p>Brukeroppgave-innhold</p> },
          { displayName: 'Andre ressurser', content: <p>Brukeroppgave-innhold</p> },
      ]}
    />
  </div>
);

const ResourcesExample = () => (
  <div className="u-1/1 c-resources u-margin-top-large">
    <div className="o-wrapper">
      <Tabs
        tabs={[
            { displayName: 'Læringsressurser', content: <ResourcesTab1 /> },
        ]}
      />
    </div>
  </div>
);

const MastheadExample = () => (
  <Masthead>
    <MastheadItem left>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
    <MastheadItem right>
      <SiteNav>
        <SiteNavItem to="#">Velg fag</SiteNavItem>
        <SiteNavItem to="#">Søk</SiteNavItem>
        <SiteNavItem to="#">Kontakt</SiteNavItem>
        <SiteNavItem to="#">Hjelp</SiteNavItem>
      </SiteNav>
    </MastheadItem>
  </Masthead>
);

storiesOf('Sidevisninger', module)
  .add('Empty page', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        Empty Page
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article>
          <ArticleLoader articleId="44" />
        </article>
      </OneColumn>
      <FooterExample />

    </PageContainer>
  ))
  .add('ArticlePage with licensebox', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article>
          <ArticleLoader articleId="44" withLicenseExample />
        </article>
      </OneColumn>
      <FooterExample />

    </PageContainer>
  ))
  .add('ArticlePage loader', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('ArticlePage Preloaded', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader articleId="34" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;

storiesOf('Brukertest', module)
  .add('Virkelighet eller speilbilde?', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article className="c-article">
          <h1>Virkelighet eller speilbilde?</h1>
          <section className="c-article__byline">
            <span className="c-article__authors">Thomas Nupen, Ragna Marie Tørdal</span>
              –&nbsp;
            <span className="c-article__date">Sist oppdatert: 08/08/2012</span>
          </section>{/* react-empty: 56 */}
          <div>
            <section>
              <Aside>
                <div>
                  <div>
                    <h2>Huskelappen</h2>
                    <figure className="article_figure"><img
                      className="article_image"
                      src="http://test.api.ndla.no/image-api/v1/images/full/v2_medieuttrykk.gif"/></figure>
                    <p>
                      Begrepet <em>representasjon</em> brukes om ulike måter å gjengi virkeligheten på.
                    </p>
                    <p>
                      Begrepet <em>tegn</em> brukes om meningsbærende enheter.
                    </p>
                  </div>
                </div>
              </Aside>
              <figure className="article_figure"><img
                className="article_image"
                src="http://test.api.ndla.no/image-api/v1/images/full/sx6989ca_0.jpg"/>
                <figcaption className="article_caption">Representasjon /Knut Snare /Aftenposten /Scanpix</figcaption>
              </figure>
              <h2>Hva er bilde, og hva er virkelighet?</h2>
            </section>
            <section>
              <Aside>
                <div>
                  <div>
                    <h2>Unge stemmer</h2>
                    <p>
                      <a
                        href="http://mediastudenten.wordpress.com/2009/11/13/charles-saunders-peirce/"
                        title>Mediestudenten</a> forklarer mer om tegn og ulike tegntyper på bloggen sin. Merk deg hva bloggeren
                      selv sier: <em>Denne websiden er drevet av undertegnede &laquo;mediastudenten&raquo;. Det er viktig at
                        du som leser, forstår at denne websiden på ingen måte er noe annet enn en blogg.
                        Du må selv ta stilling til hvor vidt det som står her er riktig, til dels riktig
                        eller feil</em>.</p>
                    <p>På YouTube finnes en presentasjon av temaet som er morsommere, men ikke like
                      grundig: <a href="http://www.youtube.com/watch?v=25egdLeqebY&feature=related" title>Signs</a>
                    </p>
                  </div>
                </div>
              </Aside>
              <p>Studer bildet ovenfor. Hva er virkelig, og hva er kun et bilde av
                virkeligheten? Maleriet er selvfølgelig et bilde av et vinterlandskap. Men hva
                med fuglen? Den er vel virkelig, eller hva ...?</p>
              <p>Svaret er at alt du ser i denne medieteksten, er et bilde av virkeligheten.
                Hvis en kunstner maler en fugl, forstår vi at det representerer en fugl, selv om
                det i virkeligheten bare er et maleri. En skriftlig tekst representerer
                virkeligheten ved hjelp av ord og setninger. Hvert ord har en bestemt betydning
                som vi lærer oss i samspill med andre mennesker i den kulturen vi vokser opp i.</p>
              <h2>Tegn</h2>
              <p>Et tegn er en
                <em>meningsbærende enhet</em>. Med det mener vi at tegnet betyr noe ut over seg selv.</p>
              <p>Noen tegn er direkte knyttet til det fenomenet de representer. På dodøra
                finner du bilde av en dame eller en mann. Slike tegn forstår alle, siden
                kjønnsforskjeller er noe folk i alle kulturer har et forhold til. Noen forskere
                mener også at det finnes ord som gjengir det de beskriver, for eksempel ord som
                <em>risle</em>
                eller
                <em>raute</em>. Tegn som har en direkte tilknytning til det de representerer, kalles for
                <em>motiverte tegn</em>.</p>
              <p>De fleste tegnene vi omgir oss med, er
                <em>arbitrære</em>, eller
                <em>tilfeldige</em>. Det vi si at det ikke finnes noen direkte sammenheng mellom
                tegnet og det tegnet står for. Derfor trenger heller ikke alle tegn bety det
                samme i alle kulturer.</p>
            </section>
            <section>
              <Aside>
                <div>
                  <div>
                    <h2>
                      Kombinerte tegn
                    </h2>
                    <figure className="article_figure">
                      <img
                        className="article_image"
                        src="http://test.api.ndla.no/image-api/v1/images/full/Sykkelskiltet.jpg"
                      /></figure>
                    <p>Dette trafikkskiltet inneholder både et ikon (sykkelen) og et symbol (rød
                      sirkel med strek = forbud).</p>
                    <p>
                      Religiøse symboler
                    </p>
                    <p>Symboler spiller en viktig rolle i de fleste religioner.</p>
                    <p>Klikk på bildet. Kjenner du igjen noen av disse symbolene?</p>
                    <figure className="article_figure"><img
                      className="article_image"
                      src="http://test.api.ndla.no/image-api/v1/images/full/Religious_Symbols-ani.gif"/></figure>
                  </div>
                </div>
              </Aside>
              <p>Tegn kan deles inn i tre grupper:</p>
              <table>
                <tbody>
                  <tr>
                    <td valign="top">
                      <figure className="article_figure"><img
                        className="article_image"
                        alt="Svensk handicapskilt. Bilde."
                        src="http://test.api.ndla.no/image-api/v1/images/full/handicapskilt.jpg"/></figure>
                    </td>
                    <td valign="top">Et <em>ikon</em> ligner på det tegnet representerer. Hva representerer ikonet til venstre?</td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <figure className="article_figure"><img
                        className="article_image"
                        src="http://test.api.ndla.no/image-api/v1/images/full/fotavtrykk.jpg"/></figure>
                    </td>
                    <td valign="top"><em>Indekser</em> er tegn som indirekte representerer noe annet. Studer tegnet til venstre. Hva
                      har skjedd før fotavtrykket oppsto? Hva representerer dette tegnet?</td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="article_figure"><img
                        className="article_image"
                        alt="Svensk severdighet-skilt. Bilde."
                        src="http://test.api.ndla.no/image-api/v1/images/full/severdighetssymbol.jpg"/></figure>
                    </td>
                    <td valign="top">Et <em>symbol</em> trenger ikke å ha noen likhet med det tegnet representerer. Men det er et tegn
                      som alle i samme kultur har lært seg betydningen av. Hva betyr symbolet til
                      venstre? Vil det ha samme betydning overalt i verden?</td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <figure className="article_figure">
                        <img
                          className="article_image"
                          src="http://test.api.ndla.no/image-api/v1/images/full/haandtegn.jpg"
                        />
                      </figure>
                    </td>
                    <td valign="top">
                      <h3>
                        NB!
                      </h3>
                      Arbitrære tegn har ikke nødvendigvis samme betydning i alle kulturer.
                      <ul>
                        <li>I Norge betyr dette tegnet OK.</li>
                        <li>I USA er betydningen perfekt.</li>
                        <li>I Kina betyr tegnet tallet tre.</li>
                        <li>I Japan er det et tegn for penger.</li>
                        <li>I Frankrike er betydningen null eller noe som er verdiløst.</li>
                        <li>I Argentina er det et tegn for kvinnens kjønnsorgan!</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Journalistikk', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader articleId="7" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Nyhetskriterier?', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader articleId="238" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tegnlære', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader articleId="5" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Oversikt over journalistiske sjangre', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <ArticleLoader articleId="14" />
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  ;

storiesOf('Sidevisninger alternativ', module)
    .add('ArticlePage', () => (
      <PageContainer>
        <MastheadExample />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <article>
            <div dangerouslySetInnerHTML={{ __html: articleHTML.outerHTML }} />
          </article>
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    ;
