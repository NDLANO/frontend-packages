import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';

import { CC, BY, NC, ND, SA, getLicenseByAbbreviation } from 'ndla-licenses';

import { SiteNav, PageContainer, SiteNavItem, Masthead, MastheadItem, Logo, Footer, Hero, OneColumn, LicenseIconList, LicenseByline, ClickableLicenseByline } from '../src';

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


const ExamplePage1 = () => (
  <article>
    <section>
    <aside>
      <p><embed data-align="" data-alt="TV-studio sidespalte" data-caption="" data-id="7" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/114" /></p><h2>Huskelappen</h2><p><strong>En pitch er en kortvarig presentasjon av en idé eller et prosjekt.</strong></p><p><strong>Hensikten med en pitch er å skaffe seg samarbeidspartnere eller kunder, slik at man kan realisere idéen.</strong></p><h2>Ressurser</h2><p><embed data-align="" data-alt="Ingressbilde oppgave (film)" data-caption="" data-id="6" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/198" /></p><p><a href="http://www.nfi.no/bransje/kurs/videointervjuer/hva-er-en-god-pitch-katrine-adair-gir-r%C3%A5d" title="">Hva er en god pitch?</a></p><p>Her får du konkrete råd av Katrine Adair (Norsk filminstitutt).</p><p>Syv intense minutter kan bestemme om idéen blir film – eller ikke. Det kalles <a href="http://www.nrk.no/video/pitching/D40D56E046FD0BBD/" title="">pitch.</a></p><p><embed data-align="" data-alt="Filmproduksjon" data-caption="" data-id="3" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/197" /></p><p>Nå er det din tur!</p><p>Lykke til med din første pitch!</p>
    </aside>
    <h1>Tittel</h1>
    <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.</p>
    <p>En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.</p>
    <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.</p>
    <figure><img src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1124&amp;q=80&amp;cs=tinysrgb&amp;crop=" alt="" /></figure>
    <figcaption className="c-figcaption">
      <div className="c-figcaption__info">I værmeldingene til NRK på 1980-tallet var symbolet for strålende solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to med en hvit og en svart halvdel. Foto: Lars Knutsen Rønvig, NTB.</div>
      <div className="c-figcaption__licenses"><ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} /></div>
    </figcaption>
    <p>En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.</p>
    <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.</p>
  </section>
  </article>
);
const ExamplePage2 = () => (
  <article>
    <section>
    <aside>
      <p><embed data-align="" data-alt="TV-studio sidespalte" data-caption="" data-id="7" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/114" /></p><h2>Huskelappen</h2><p><strong>En pitch er en kortvarig presentasjon av en idé eller et prosjekt.</strong></p><p><strong>Hensikten med en pitch er å skaffe seg samarbeidspartnere eller kunder, slik at man kan realisere idéen.</strong></p><h2>Ressurser</h2><p><embed data-align="" data-alt="Ingressbilde oppgave (film)" data-caption="" data-id="6" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/198" /></p><p><a href="http://www.nfi.no/bransje/kurs/videointervjuer/hva-er-en-god-pitch-katrine-adair-gir-r%C3%A5d" title="">Hva er en god pitch?</a></p><p>Her får du konkrete råd av Katrine Adair (Norsk filminstitutt).</p><p>Syv intense minutter kan bestemme om idéen blir film – eller ikke. Det kalles <a href="http://www.nrk.no/video/pitching/D40D56E046FD0BBD/" title="">pitch.</a></p><p><embed data-align="" data-alt="Filmproduksjon" data-caption="" data-id="3" data-resource="image" data-size="hoyrespalte" data-url="http://api.staging.ndla.no/images/197" /></p><p>Nå er det din tur!</p><p>Lykke til med din første pitch!</p>
    </aside>
    <h1>Tittel</h1>
    <p>Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig av at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.</p>
    <p>En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.</p>
    <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.</p>
    <figure class="article__oembed"><iframe width="480" height="270" src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed" frameborder="0" allowfullscreen=""></iframe></figure>
    <figcaption className="c-figcaption">
      <div className="c-figcaption__info">En video om nyheter, men ikke fake news.</div>
      <div className="c-figcaption__licenses"><ClickableLicenseByline license={getLicenseByAbbreviation('by-nc-nd')} /></div>
    </figcaption>
    <p>En pitch er en kortvarig framføring av en idé for en potensiell samarbeidspartner eller kunde. I løpet av noen få minutter skal du få andre til å tenne på idéen din og se potensialet i den.</p>
    <p>Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.</p>
  </section>
  </article>
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
  ));
storiesOf('Sidevisninger alternativ', module)
    .add('Artikkel med bilde', () => (
      <PageContainer>
        <MastheadExample />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage1 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ))
    .add('Artikkel med video', () => (
      <PageContainer>
        <MastheadExample />
        <Hero url="https://images.unsplash.com/photo-1469082993720-0b12bbd9e68b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=" />
        <OneColumn>
          <ExamplePage2 />
        </OneColumn>
        <ResourcesExample />
        <FooterExample />
      </PageContainer>
    ));
