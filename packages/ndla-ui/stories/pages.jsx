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
              <figure className="article_figure">
                <img
                  alt="test"
                  className="article_image"
                  src="http://test.api.ndla.no/image-api/v1/images/full/sx6989ca_0.jpg"
                />
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
                        alt="test"
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
                    <figure className="article_figure">
                      <img
                        alt="test"
                        className="article_image"
                        src="http://test.api.ndla.no/image-api/v1/images/full/Religious_Symbols-ani.gif"
                      />
                    </figure>
                  </div>
                </div>
              </Aside>
              <p>Tegn kan deles inn i tre grupper:</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <figure className="article_figure">
                        <img
                          alt="test"
                          className="article_image"
                          alt="Svensk handicapskilt. Bilde."
                          src="http://test.api.ndla.no/image-api/v1/images/full/handicapskilt.jpg"
                        /></figure>
                    </td>
                    <td>Et <em>ikon</em> ligner på det tegnet representerer. Hva representerer ikonet til venstre?</td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="article_figure">
                        <img
                          alt="test"
                          className="article_image"
                          src="http://test.api.ndla.no/image-api/v1/images/full/fotavtrykk.jpg"
                        /></figure>
                      </td>
                    <td><em>Indekser</em> er tegn som indirekte representerer noe annet. Studer tegnet til venstre. Hva
                      har skjedd før fotavtrykket oppsto? Hva representerer dette tegnet?</td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="article_figure">
                        <img
                          alt="test"
                          className="article_image"
                          alt="Svensk severdighet-skilt. Bilde."
                          src="http://test.api.ndla.no/image-api/v1/images/full/severdighetssymbol.jpg"
                        /></figure>
                    </td>
                    <td>Et <em>symbol</em> trenger ikke å ha noen likhet med det tegnet representerer. Men det er et tegn
                      som alle i samme kultur har lært seg betydningen av. Hva betyr symbolet til
                      venstre? Vil det ha samme betydning overalt i verden?</td>
                  </tr>
                  <tr>
                    <td>
                      <figure className="article_figure">
                        <img
                          alt="test"
                          className="article_image"
                          src="http://test.api.ndla.no/image-api/v1/images/full/haandtegn.jpg"
                        />
                      </figure>
                    </td>
                    <td>
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
        <article className="c-article">{/* react-text: 47 */} {/* /react-text */}<h1>Journalistikk</h1><section className="c-article__byline"><span className="c-article__authors">Ragnhild Risholt Kleppe, Ragna Marie Tørdal</span>{/* react-text: 51 */} –&nbsp;{/* /react-text */}<span className="c-article__date">{/* react-text: 53 */}Sist oppdatert: {/* /react-text */}{/* react-text: 54 */}09/03/2016{/* /react-text */}</span></section><section className="article_introduction"><p className="article_introduction">Journalistikk er informasjon om noe som faktisk finnes eller har hendt, og som formidles på en upartisk måte i en uavhengig nyhetskanal. Det er også en profesjon, det vil si et yrke som utøves av journalister.</p></section><div><section>
            <figure className="article_figure"><img className="article_image" src="http://staging.api.ndla.no/image-api/v1/images/full/reporteren_header.jpg" /></figure><p>Journalisten har et viktig samfunnsoppdrag. Han eller hun skal samle mest mulig informasjon om det som skjer i samfunnet, bearbeide informasjonen og formidle den til oss via aviser, blader, radio, fjernsyn eller Internett. I et demokrati er vi helt avhengige av journalistenes arbeid.</p><p>Journalistikken er dessuten viktig for å avsløre maktmisbruk, kritikkverdige forhold hos myndighetene og overgrep mot enkeltpersoner. Det er ikke for ingenting at pressen kalles «den fjerde statsmakt».</p><p>Ikke alle beretninger som publiseres, er journalistikk. En blogger som deltar i en miljøvernaksjon, kan fortelle nøyaktig om det som skjer. Men det er slik han eller hun opplever det. Journalistikk er det først når nyheten formidles av en journalist i en fri og uavhengig nyhetskanal.</p><p>Det er imidlertid viktig at ikke pressen selv misbruker sin makt, sprer feilinformasjon og tråkker på enkeltmennesker. I Norge er reglene for god journalistikk nedfelt i <em>Vær Varsom-plakaten</em>.</p></section><section>
            <h2>Fri og uavhengig informasjon</h2><p>Frie og uavhengig mediekanaler er opptatt av at journalistikk skal være balansert informasjon. Det betyr at journalistene, redaktørene og fotografene som jobber for mediekanalen, skal belyse saker fra flere sider. Det gjør de ved å la folk som har ulike synspunkter, komme til orde. En fri og uavhengig mediekanal sjekker også at sakene de publiserer, kommer fra pålitelige og troverdige kilder.</p><p>Hensikten er at journalistikken skal være pålitelig for publikum. De som leser avisa eller ser på nyhetene, skal kunne stole på at det som kommer fram, er sant, og at det er nøytralt framstilt. Det betyr blant annet at journalistene ikke bør skrive om saker som de har en personlig tilknytning til. Profesjonelle journalister intervjuer for eksempel ikke sine egne venner eller familie.</p><p>Selv om journalistene forsøker å være frie og uavhengige, er det ikke alltid at sakene blir helt nøytralt framstilt likevel. Det kan skyldes flere forhold:</p><ul><li>journalistenes valg av hvem som intervjues</li><li>journalistenes forhold til kildene </li><li>hvordan saken vinkles, altså hva det fokuseres på </li><li>hvordan saken bildelegges</li><li>hvilken og hvor stor plass saken får i nyhetskanalen </li><li>hvordan kanalen finansieres, altså hvordan den tjener penger</li></ul></section><section>
            <h2>Subjektiv og objektiv journalistikk</h2><p>De fleste mediekanalene skiller tydelig mellom stoff som er basert på fakta, og stoff som er basert på meninger eller fortolkninger. For eksempel inneholder en nyhetsartikkel kun fakta, så langt journalisten kjenner materialet. I en mediekommentar et det journalistens egen vurdering av saken som kommer til uttrykk.</p><p>Kommentarer og ledere er eksempler på det som kalles <em>subjektiv journalistikk</em>, mens stoff som er rent faktabasert, kalles <em>objektiv journalistikk</em>.</p></section><section>
            <h2>Publisering i flere formater og kanaler</h2><p>De fleste journalister jobber i en nyhetsredaksjon. Tendensen de siste 20 årene har vært at nyhetsredaksjoner er organisert i mediehus. Det betyr at de journalistene som jobber der, lager saker i flere formater, for eksempel både skriftlige tekster og videoinnslag. Sakene publiseres gjerne på mediehusets nettsider samtidig som de publiseres i tradisjonelle medier som aviser, fjernsynskanaler og radio.</p></section></div><button className="c-button c-button--small c-factbox-toggler u-margin-top-small" data-target="aside">Toggle boxes</button>{/* react-text: 59 */} {/* /react-text */}</article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Nyhetskriterier', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article className="c-article"><h1>Nyhetskriterier</h1><section className="c-article__byline"><span className="c-article__authors">Jan-Arve Overland, Ragna Marie Tørdal</span> –&nbsp;<span className="c-article__date">Sist oppdatert: 12/02/2014</span></section><div><section>
              <Aside>
                <div>
                  <h2>Huskelappen</h2><p><strong>Nyhetskriteriene sier noe om hvilken nyhetsverdi en hendelse har.</strong></p><p><strong>Nyhetskriterier</strong></p><ul><li><strong>aktualitet</strong></li><li><strong>vesentlighet</strong></li><li><strong>nærhet</strong></li><li><strong>identifikasjon</strong></li><li><strong>sensasjon</strong></li><li><strong>konflikt</strong></li><li><strong>eliteperson/kjendis</strong></li></ul><p><strong>Jo flere nyhetskriterier en hending dekker, jo større sannsynlighet er det for at den blir en nyhet.</strong></p><p><strong>Noen dager er terskelen for å få en nyhet med i avisa eller sendingen høyere enn andre dager.<br /></strong></p><figure className="article_figure"><img className="article_image" src="http://staging.api.ndla.no/image-api/v1/images/full/sxb8ada2_vgredaktoer_1.jpg" /><figcaption className="article_caption">Sjefredaktør Bernt Olufsen i VG med dagens VG i hendene</figcaption></figure><figure className="article_figure"><img className="article_image" src="http://staging.api.ndla.no/image-api/v1/images/full/sp6bb069_redigert_1.jpg" /><figcaption className="article_caption">Avisoppslag i The Sun. Hvilke nyhetskriterier har avisen lagt til grunn her?</figcaption></figure><h2>Til fordypning</h2><p> <a href="http://www.ub.uit.no/munin/bitstream/handle/10037/137/thesis.pdf" title>All makt hos journalisten?</a> </p><p>Masteroppgave av Astrid Lund Engen (UIT 2006)</p>      </div>
              </Aside>
              <p /><figure className="article__oembed"><iframe width={480} height={270} src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed" frameBorder={0} allowFullScreen /></figure><br /><em>Denne videoproduksjonen er laget av Sara Skaar Næss, MIK-elev ved Kongsberg videregående skole.</em><p /><h2>Hva er en nyhet?</h2><p>En <em>nyhet</em> er noe som nettopp har skjedd, eller noe vi nettopp har fått vite om. Avisredaksjonene oversvømmes hver dag av informasjon om ulike hendelser. Deskens jobb er derfor å velge ut hva som skal presenteres som nyheter på nett og papir. I dette arbeidet legger de vekt på flere <em>nyhetskriterier</em>.</p><h3>Aktuell</h3><p>En nyhet må være aktuell. En hendelse kan godt være mange tusen år gammel, men dersom den skal presenteres som en nyhet, må ingen ha hørt om den før. Det kan ta opptil ett døgn før papiravisen er hjemme i abonnentenes postkasse. Derfor har papiravisene i dag en ekstra utfordring når det gjelder å presentere aktuelle nyheter.</p><h3>Vesentlig</h3><p>En nyhet må være vesentlig og ha informasjonsverdi. 22. juli 2011 satt alle i Norge klistret foran PC-en eller fjernsynsskjermen for å få med seg siste nytt. Informasjon som er viktig for liv og helse, er vesentlig for alle norske borgere. Men ellers er det slik at det som er vesentlig for en person, ikke nødvendigvis er vesentlig for alle andre. <br /><br />Synet på hva som er viktig, påvirkes av samfunnsendringer eller motebølger. Nyheter er derfor en god målestokk på hva som blir sett på som viktig i samfunnet. I kommunikasjonsteorien blir dette kalt <em>statusoverføringsfunksjonen</em> – massemediene gir status til dem eller de som får oppmerksomhet. Dersom du virkelig er noe, vil du få medienes oppmerksomhet, og dersom du får oppmerksomhet, da må du virkelig være noe.</p><h3>Nærhet</h3><p>En nyhet må oppleves som nær. Vi leser gjerne en halv side om en ulv som er blitt observert i nabolaget, men hopper over en artikkel om isbjørnenes skjebne i polarhavet. Psykisk nærheten er vel så viktig som geografisk nærhet. Det vi blir følelsesmessig berørt av, er en god nyhet.</p><h3>Identifisering og personifisering</h3><p>Det er bare én ting som interesserer alle mennesker, og det er mennesket selv. En ulykke, en naturkatastrofe eller en krig blir en bedre historie hvis vi får møte et av ofrene. Journalister er derfor ofte opptatt av å finne et ”case” – et ansikt som kan fronte historien.</p><h3>Sensasjonell</h3><p>Sensasjoner handler om det merkverdige, det kuriøse, eller det vi aldri hadde ventet skulle skje. Det klassiske eksempelet i journalistikken er at nyheten ”Hund biter mann” har lav nyhetsverdi, mens derimot overskriften "Mann biter hund” får oss til å sperre øynene opp.</p><h3>Tydelige konflikter</h3><p>Konflikter skaper oppmerksomhet og interesse. Tydelige konflikter er viktig i all mediedramaturgi, også i nyhetstekster. Journalister er derfor alltid på leting etter motsetninger og klare fronter når de velger sine kilder. Noen hevder at konfliktstoff på denne måten fortrenger alle ”gladsakene” fra avisspaltene.</p><h3>Elite</h3><p>Personer er lettere å få øye på enn strukturer og prosesser. Ekspertkilder gir tyngde til nyhetsfortellingen. Derfor velger journalister ofte å intervjue ledere og politikere. Mediene prioriterer også ofte stoff som angår supermakter, som for eksempel USA. Det er kanskje ikke så rart, når vi vet at vi får det meste av nyhetsstoffet fra amerikanske telegrambyrå. Stoff fra den tredje verden blir sjelden prioritert.</p><h3>Nyhetsterskel</h3><p>Selv om en nyhet tilfredsstiller alle disse nyhetskriteriene, er det ikke sikkert at den kommer på trykk i avisa. Den dagen prinsesse Diana døde, ble alle andre nyhetssaker slettet på avisenes forside. Men i ”agurktida” i fellesferien opplever vi ofte oppslag om hendinger som normalt ellers ikke ville fått plass, fordi redaksjonen trenger stoff. De som ønsker å få ut en pressemelding i nettavisene, har for lengst oppdaget at søndag morgen er en dag da journalister lett tyr til informasjon som er for hånden der og da.<br /><br /></p></section></div><button className="c-button c-button--small c-factbox-toggler u-margin-top-small" data-target="aside">Toggle boxes</button>{/* react-text: 58 */} {/* /react-text */}</article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Tegnlære', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article className="c-article" data-reactid={26}><h1 data-reactid={30}>Tegnlære</h1><section className="article_introduction" data-reactid={31}><p className="article_introduction" data-reactid={32}>Tegnlære handler om hvordan vi bruker og forstår tegn. Tegn kan være så mye, en bokstav, et ord, et visuelt symbol, farge eller lyd. Når man jobber profesjonelt med kommunikasjon, er det spesielt viktig å være oppmerksom på hvilken betydning ulike tegn har, og hvilken betydning de får når de settes sammen.</p></section><div data-reactid={33}><section>
            <figure className="article_figure"><img className="article_image" src="http://staging.api.ndla.no/image-api/v1/images/full/sx873733_1.jpg" /><figcaption className="article_caption">I værmeldingene til NRK på 1980-tallet var symbolet for strålende solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to med en hvit og en svart halvdel.</figcaption></figure><h2>Tegnlære og den semiotiske trekanten</h2><p>Ser du et bilde av kongefamilien som vinker fra slottsbalkongen, tenker du sikkert på 17. mai. Hører du en opphisset kommentatorstemme fra TV-en, forstår du at det må dreie seg om en sportssending. Gule kyllinger forbinder de fleste nordmenn med påske. Men det er ikke sikkert en kineser oppfatter det på samme måte. Tegn kan nemlig ha ulik betydning i ulike kulturer. De kan også endres eller få ny mening innenfor samme kultur.</p><p>Kunnskap om sammenhengen mellom tegn og mening blir kalt for<em> tegnlære</em> eller <em>semiotikk. </em>Tegnlæren tar utgangspunkt i et syn på kommunikasjon som et meningsfellesskap.</p><h3>Den semiotiske trekanten</h3><p>Den semiotiske trekanten er en modell som forklarer hvordan vi danner oss en mening med utgangspunkt i at et tegn har en betydning.</p><p>For eksempel kan modellen forklare at du tenker på sola fordi du ser et tegn som ligner på en sol i værvarselet på fjernsynet. Dersom tegnet er fremmed, vil du gjøre en direkte kobling mellom tegnet og virkeligheten og prøve å gjette deg til en mening.</p><ul><li>TEGN: tegnet som lest, hørt eller sett</li><li>FORESTILLING: det som blir forstått</li><li>REFERENT: det som tegnet står, det som fins i virkeligheten</li></ul><p>Den semiotiske trekanten blir også kalt for Ogden og Richards trekant etter de to forskerne som utviklet modellen.</p></section><section>
            <h3>Bilder og visuelle symboler</h3><p>Et trafikkskilt er et godt eksempel på hvordan et tegn kan skape en svært presis forståelse. Skiltet nedenfor betyr sykling forbudt. Det forstår du i -<em>tanken</em>- fordi du seren rød sirkel med horisontal linje over en person på sykkel, -<em>tegnet/symbolet</em>-. <em>Referenten, </em>altså virkeligheten, er at det er forbudt å sykle. Dette skiltet og andre trafikkskilt er laget og innlært i vår kultur for å regulere trafikk. I trafikken er det viktig at kommunikasjonen er presis og ikke til å misforstå.</p><figure className="article_figure"><img className="article_image" src="http://staging.api.ndla.no/image-api/v1/images/full/Sykkelskiltet.jpg" /><figcaption className="article_caption">Forbudsskilt – sykling forbudt</figcaption></figure><p>Fotografier gir ofte mindre presise forestillinger og kan ofte tolkes på flere måter. Selv om bildet nedenfor er av en border collie, kan vi fort danne oss ulike historier om den. For mange vil hunderasen gi en utvidet forestilling av hund som handler om sauer, gjeting og beitemark. Er hunden på tur med eierne sine, kanskje? Har den nettopp løpt, eller er det kanksje varmt, siden tunga henger ut?</p><figure className="article_figure"><img className="article_image" alt="En hund med tykk pels peser med tunga langt ute." src="http://staging.api.ndla.no/image-api/v1/images/full/pese-42-26820018-klipt.jpg" /><figcaption className="article_caption">En border collie knytter man gjerne til sauer og gjeting.</figcaption></figure><p>Når vi velger bilder som medieuttrykk, eller som element i medieuttrykk, er det viktig å kunne være åpen og se at bilder kan tolkes på mange ulike måter. Da må bilder velges med omhu. Kunnskap om den semiotiske trekanten kan hjelpe deg å bli mer bevisst.</p></section><section>
            <h3>Tale- og skriftspråk</h3><p>I talespråket er ordene og rekkefølgen de opptrer i, meningsbærende tegn. Vi forstår hverandre først og fremst fordi vi snakker samme språk. Men hva skjer når vi møter mennesker som snakker et annet språk enn norsk? Bare hør her:</p><p /><figure className="article_audio"><audio controls type="audio/mpeg" src="https://staging.api.ndla.no/audio/files/4_kong3pa4_bu4_xing2.mp3" /><figcaption>kǒngpà bù xíng</figcaption></figure><p /><p /><figure className="article_audio"><audio controls type="audio/mpeg" src="https://staging.api.ndla.no/audio/files/lektion_2_text_21.mp3" /><figcaption>Ich höre gern Musik</figcaption></figure><p /><p>Det første lydeksempelet er på kinesisk, og det andre er på tysk. Det kinesiske eksempelet gir deg trolig lite å henge forståelsen på – med mindre du kan kinesisk, vel å merke. Tysk språk og kultur er mye nærmere vår enn kinesisk. Dermed er det kanskje mulig å kjenne igjen noen ord og kanskje til og med ha referanser til det det blir snakket om.Stemmer ikke det, syns du?</p><div><p>Lytt til eksemplene en gang til:<br />I det tyske eksempelet hører vi om Eminem. Den tyske ordlyden Eminem er <em>symbolet</em>. Du får opp<em>forestillingen av </em>eller<em> tanken på</em>Eminem. Den virkelige Eminem er <em>referent.<br /></em>Selv om du i utgangspunktet ikke tenker du kan tysk, kan du likevel oppfatte noe og få noen mentale forestillinger.</p></div><p>Det samme gjelder for skriftspråk. Ser du bokstavene H – U – N – D, vil du lese det og forstå det som en virkelig hund, ordet vil vekke tanken om et dyr av et særskilt slag, på fire bein med hale. Det samme skjer om du leser det på engelsk, D – O – G. Bokstaver og ord må læres for å forståes. Slik er det ikke nødvendigvis med bilder eller visuelle tegn.</p></section><section>
            <p>Vil du vite mer om tegn, kan du lese om at de kan kategoriseres som symbol, ikon og indeks, i følgende artikkel:</p><p> <a href="http://ndla-frontend.test.api.ndla.no/nb/article/3">Virkelighet eller speilbilde?</a></p></section></div><div className="license" data-reactid={34}><div className="license-byline" data-reactid={36}><ul className="c-license-icons__list" data-reactid={37}><li className="c-license-icons__item" data-reactid={38}><svg version={1} xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="5.5 -3.5 64 64" className="icon c-license-icons__icon" data-reactid={39}><circle fill="none" cx="37.785" cy="28.501" r="28.836" data-reactid={40} /><path d="M37.441-3.5c8.951 0 16.572 3.125 22.857 9.372 3.008 3.009 5.295 6.448 6.857 10.314 1.561 3.867 2.344 7.971 2.344 12.314 0 4.381-.773 8.486-2.314 12.313-1.543 3.828-3.82 7.21-6.828 10.143-3.123 3.085-6.666 5.448-10.629 7.086-3.961 1.638-8.057 2.457-12.285 2.457s-8.276-.808-12.143-2.429c-3.866-1.618-7.333-3.961-10.4-7.027-3.067-3.066-5.4-6.524-7-10.372S5.5 32.767 5.5 28.5c0-4.229.809-8.295 2.428-12.2 1.619-3.905 3.972-7.4 7.057-10.486C21.08-.394 28.565-3.5 37.441-3.5zm.116 5.772c-7.314 0-13.467 2.553-18.458 7.657-2.515 2.553-4.448 5.419-5.8 8.6a25.204 25.204 0 0 0-2.029 9.972c0 3.429.675 6.734 2.029 9.913 1.353 3.183 3.285 6.021 5.8 8.516 2.514 2.496 5.351 4.399 8.515 5.715a25.652 25.652 0 0 0 9.943 1.971c3.428 0 6.75-.665 9.973-1.999 3.219-1.335 6.121-3.257 8.713-5.771 4.99-4.876 7.484-10.99 7.484-18.344 0-3.543-.648-6.895-1.943-10.057-1.293-3.162-3.18-5.98-5.654-8.458-5.146-5.143-11.335-7.715-18.573-7.715zm-.401 20.915l-4.287 2.229c-.458-.951-1.019-1.619-1.685-2-.667-.38-1.286-.571-1.858-.571-2.856 0-4.286 1.885-4.286 5.657 0 1.714.362 3.084 1.085 4.113.724 1.029 1.791 1.544 3.201 1.544 1.867 0 3.181-.915 3.944-2.743l3.942 2c-.838 1.563-2 2.791-3.486 3.686-1.484.896-3.123 1.343-4.914 1.343-2.857 0-5.163-.875-6.915-2.629-1.752-1.752-2.628-4.19-2.628-7.313 0-3.048.886-5.466 2.657-7.257 1.771-1.79 4.009-2.686 6.715-2.686 3.963-.002 6.8 1.541 8.515 4.627zm18.457 0l-4.229 2.229c-.457-.951-1.02-1.619-1.686-2-.668-.38-1.307-.571-1.914-.571-2.857 0-4.287 1.885-4.287 5.657 0 1.714.363 3.084 1.086 4.113.723 1.029 1.789 1.544 3.201 1.544 1.865 0 3.18-.915 3.941-2.743l4 2c-.875 1.563-2.057 2.791-3.541 3.686a9.233 9.233 0 0 1-4.857 1.343c-2.896 0-5.209-.875-6.941-2.629-1.736-1.752-2.602-4.19-2.602-7.313 0-3.048.885-5.466 2.658-7.257 1.77-1.79 4.008-2.686 6.713-2.686 3.962-.002 6.783 1.541 8.458 4.627z" data-reactid={41} /></svg></li><li className="c-license-icons__item" data-reactid={42}><svg version={1} xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="5.5 -3.5 64 64" className="icon c-license-icons__icon" data-reactid={43}><circle fill="none" cx="37.637" cy="28.806" r="28.276" data-reactid={44} /><path d="M37.443-3.5c8.988 0 16.57 3.085 22.742 9.257C66.393 11.967 69.5 19.548 69.5 28.5c0 8.991-3.049 16.476-9.145 22.456-6.476 6.363-14.113 9.544-22.912 9.544-8.649 0-16.153-3.144-22.514-9.43C8.644 44.784 5.5 37.262 5.5 28.5c0-8.761 3.144-16.342 9.429-22.742C21.101-.415 28.604-3.5 37.443-3.5zm.114 5.772c-7.276 0-13.428 2.553-18.457 7.657-5.22 5.334-7.829 11.525-7.829 18.572 0 7.086 2.59 13.22 7.77 18.398 5.181 5.182 11.352 7.771 18.514 7.771 7.123 0 13.334-2.607 18.629-7.828 5.029-4.838 7.543-10.952 7.543-18.343 0-7.276-2.553-13.465-7.656-18.571-5.104-5.104-11.276-7.656-18.514-7.656zm8.572 18.285v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557c0-.572.2-1.057.599-1.457.401-.399.887-.6 1.457-.6h13.144c.533 0 1.01.2 1.428.6.417.4.628.886.628 1.457zm-13.087-8.228c0-3.008 1.485-4.514 4.458-4.514s4.457 1.504 4.457 4.514c0 2.971-1.486 4.457-4.457 4.457s-4.458-1.486-4.458-4.457z" data-reactid={45} /></svg></li><li className="c-license-icons__item" data-reactid={46}><svg version={1} xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="5.5 -3.5 64 64" className="icon c-license-icons__icon" data-reactid={47}><circle fill="none" cx="36.944" cy="28.631" r="29.105" data-reactid={48} /><path d="M37.443-3.5c8.951 0 16.531 3.105 22.742 9.315C66.393 11.987 69.5 19.548 69.5 28.5c0 8.954-3.049 16.457-9.145 22.514-6.437 6.324-14.076 9.486-22.912 9.486-8.649 0-16.153-3.143-22.514-9.429C8.644 44.786 5.5 37.264 5.5 28.501c0-8.723 3.144-16.285 9.429-22.685C21.138-.395 28.643-3.5 37.443-3.5zm.114 5.772c-7.276 0-13.428 2.572-18.457 7.715-5.22 5.296-7.829 11.467-7.829 18.513 0 7.125 2.59 13.257 7.77 18.4 5.181 5.182 11.352 7.771 18.514 7.771 7.123 0 13.334-2.609 18.629-7.828 5.029-4.876 7.543-10.99 7.543-18.343 0-7.313-2.553-13.485-7.656-18.513-5.067-5.145-11.239-7.715-18.514-7.715zM23.271 23.985c.609-3.924 2.189-6.962 4.742-9.114 2.552-2.152 5.656-3.228 9.314-3.228 5.027 0 9.029 1.62 12 4.856 2.971 3.238 4.457 7.391 4.457 12.457 0 4.915-1.543 9-4.627 12.256-3.088 3.256-7.086 4.886-12.002 4.886-3.619 0-6.743-1.085-9.371-3.257-2.629-2.172-4.209-5.257-4.743-9.257H31.1c.19 3.886 2.533 5.829 7.029 5.829 2.246 0 4.057-.972 5.428-2.914 1.373-1.942 2.059-4.534 2.059-7.771 0-3.391-.629-5.971-1.885-7.743-1.258-1.771-3.066-2.657-5.43-2.657-4.268 0-6.667 1.885-7.2 5.656h2.343l-6.342 6.343-6.343-6.343 2.512.001z" data-reactid={49} /></svg></li></ul><div className="license-byline__body" data-reactid={50}><span data-reactid={51}>Fri gjenbruk</span></div><div className="license-byline__body" data-reactid={52}><span className="article_meta" data-reactid={53}>{/* react-text: 54 */}Albertine Aaberge{/* /react-text */}{/* react-text: 55 */}. Publisert: {/* /react-text */}{/* react-text: 56 */}31.03.2016{/* /react-text */}</span>{/* react-text: 57 */}.{/* /react-text */}</div></div></div>{/* react-text: 58 */} {/* /react-text */}</article>
      </OneColumn>
      <FooterExample />
    </PageContainer>
  ))
  .add('Oversikt over journalistiske sjangre', () => (
    <PageContainer>
      <MastheadExample />
      <OneColumn>
        <article className="c-article">{/* react-text: 47 */} {/* /react-text */}<h1>Oversikt over journalistiske sjangre</h1><section className="c-article__byline"><span className="c-article__authors">Ragnhild Risholt Kleppe</span>{/* react-text: 51 */} –&nbsp;{/* /react-text */}<span className="c-article__date">{/* react-text: 53 */}Sist oppdatert: {/* /react-text */}{/* react-text: 54 */}02/12/2016{/* /react-text */}</span></section><section className="article_introduction"><p className="article_introduction">Det finnes mange ulike subjektive og objektive sjangre, og det er ikke uvanlig at ulike betegnelser brukes om samme sjanger. I tillegg er sjangrene i stadig endring.</p></section><div><section>
            <figure className="article_figure"><img className="article_image" alt="Mann leser avis på ipad på trikken. Foto." src="http://staging.api.ndla.no/image-api/v1/images/full/sy3857da.jpg" /></figure><p>Noen objektive sjangre låner elementer fra subjektive sjangre.  Disse kalles <em>hybridsjangre</em>. Eksempler på slike hybrider er feature-, magasin- og portrettsjangre. Disse er bygd opp som objektive sjangre, men journalisten er mer synlig til stede, i og med at han bruker mange sanser og litterære virkemidler for å lage saken.</p></section><section>
            <table><tbody><tr><th>Hovedkategorier</th><th>Sjangre</th><th>Kjennetegn</th></tr><tr><td><strong>Subjektive sjangre</strong></td><td>Leder</td><td><ul><li>skrives ofte av en av redaktørene </li><li>er redaksjonens syn på en sak </li><li>står ofte på side 2 eller på egen meningsside</li></ul></td></tr><tr><td /><td>Anmeldelse</td><td><ul><li>en av journalistenes mening om en ny film, bok, konsert e.l. </li><li>skal være en bruksanvisning slik at målgruppen vet om produktet er noe for dem</li></ul></td></tr><tr><td /><td>Leserinnlegg og kommentarfelt</td><td><ul><li>lar den enkelte mottaker komme med sitt syn på en sak</li><li>leserinnlegg i avis, kommentarfelt på nett </li></ul></td></tr><tr><td /><td>Kommentar og kronikk</td><td><ul><li>kan skrives av en i redaksjonen, men gjerne også av en fagperson utenfor redaksjonen </li><li>skal gi dybdekunnskap om et tema </li></ul></td></tr><tr><td><strong>Objektive sjangre</strong></td><td>Nyhetsartikkel</td><td><ul><li>kort, konsis, svarer på grunnleggende spørsmål</li><li>det viktigste først </li><li>lar kildene komme til orde</li></ul></td></tr><tr><td /><td>Nyhetsreportasje</td><td><ul><li>går gjerne mer i dybden enn en nyhetsartikkel </li><li>bruker flere kilder </li><li>har fokus på bakgrunn og årsak</li></ul></td></tr><tr><td /><td>Intervju</td><td><ul><li>enkelt oppsett med spørsmål og svar </li><li>brukes gjerne som en del av en nyhetsreportasje eller artikkel</li></ul></td></tr><tr><td /><td>Notis</td><td><ul><li>kort nyhetsmelding som gir grunnleggende informasjon om en aktuell hendelse</li><li>gjerne bare 10–15 setninger</li></ul></td></tr><tr><td><strong>Hybridsjangre</strong></td><td>Feature</td><td><ul><li>hører til i objektiv-kategorien, men journalisten bruker alle sanser og litterære virkemidler </li><li>går i dybden, gir leseren en større forståelse av et tema</li></ul></td></tr><tr><td /><td>Portrettintervju</td><td><ul><li>hører til i objektiv-kategorien, men journalisten bruker alle sanser og litterære virkemidler </li><li>gir leseren dybdekunnskap om en aktuell person i nyhetsbildet</li></ul></td></tr></tbody></table></section></div><button className="c-button c-button--small c-factbox-toggler u-margin-top-small" data-target="aside">Toggle boxes</button>{/* react-text: 59 */} {/* /react-text */}</article>
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
