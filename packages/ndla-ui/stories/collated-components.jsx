/* eslint-disable no-alert */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { BY, NC, ND } from 'ndla-licenses';

import { Center } from './helpers';
import {
  Button,
  FilterList,
  Pager, Footer, LicenseIconList,
  TopicArticle, TopicIntroductionList, TopicBreadcrumb,
  OneColumn, LayoutItem,
} from '../src';
import FigureWithLicense from './article/FigureWithLicense';
import articles, { topicList, subjectList } from '../dummydata/index';
import { MastheadLeftRight, MastheadWithTopicMenu } from './molecules/mastheads';
import Tabs, { TabsControlled } from './molecules/tabs';
import { ArticleResourceList, LearningPathResourceList, ResourceSubsetList } from './molecules/resources';
import LicenseExample, { LicenseBox } from './article/LicenseExample';

const toggle = () => {
  document.querySelector('.c-collate__panel').classList.toggle('c-collate__panel--expanded');
};

// document.querySelectorAll('section > em').forEach(em => em.outerHTML = '<p>' + em.outerHTML + '</p>')

storiesOf('Sammensatte moduler', module)
  .add('Brødsmulesti', () => (
    <Center>
      <h2 className="u-heading">Brødsmulesti eksempel</h2>
      <TopicBreadcrumb toSubjects={() => '#'} subjectsTitle="Fag" subject={subjectList[1]} topicPath={topicList.slice(0, -1)} toTopic={() => '#'} />
    </Center>
  ))
  .add('Emne artikkel', () => (
    <Center>
      <OneColumn cssModifier="narrow">
        <article className="c-article c-article--clean">
          <LayoutItem layout="center">
            <TopicArticle
              article={articles.topicArticle}
            />
          </LayoutItem>
        </article>
      </OneColumn>
    </Center>
  ))
  .add('Emner liste', () => (
    <Center>
      <h2 className="u-heading">Emneliste</h2>
      <div className="c-resources">
        <LayoutItem layout="center">
          <TopicIntroductionList toTopic={() => '#'} topics={topicList} />
        </LayoutItem>
      </div>
    </Center>
  ))
  .add('Faner', () => (
    <Center>
      <h2 className="u-heading">Faner</h2>
      <div className="o-wrapper--inner">
        <p>Klikk på fane-tittel for å vise innhold.</p>
        <Tabs />
      </div>
      <h2 className="u-heading">Kontrollerte faner</h2>
      <div className="o-wrapper--inner">
        <p>Disse fanene kan også kontrolleres med frittstående knapper plassert innenfor fanene.</p>
        <TabsControlled />
      </div>
    </Center>
  ))
  .add('Filter', () => (
    <Center>
      <article className="article">
        <h2 className="u-heading">Filter</h2>
        <LayoutItem layout="center">
          <div className="c-filter u-margin-top">
            <FilterList
              filterContent={[
                { title: '1T', active: false },
                { title: 'R1', active: false },
                { title: 'R2', active: false },
                { title: 'S1', active: false },
                { title: 'S1', active: false },
              ]}
            />
          </div>
        </LayoutItem>
        <h2 className="u-heading">Filter med forhåndsvalgte elementer</h2>
        <LayoutItem layout="center">
          <div className="c-filter u-margin-top">
            <FilterList
              filterContent={[
                { title: '1T', active: true },
                { title: 'R1', active: true },
                { title: 'R2', active: false },
                { title: 'S1', active: false },
                { title: 'S1', active: false },
              ]}
            />
          </div>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Hovedhode', () => (
    <div>
      <MastheadLeftRight />
    </div>
  ))
  .add('Hovedhode med innhold', () => (
    <div>
      <MastheadWithTopicMenu />
    </div>
  ))
  .add('Lisens-ikoner', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisens-ikoner med beskrivelse</h2>
        <div className="o-wrapper--inner">
          <LicenseIconList licenseRights={[BY, NC, ND]} />
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <h2 className="u-heading">Lisens-ikoner på enkelt-element</h2>
        <FigureWithLicense>
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
          />
        </FigureWithLicense>
      </LayoutItem>
    </Center>
  ))
  .add('Lisensboks', () => (
    <Center>
      <h2 className="u-heading">Lisensboks</h2>
      <article className="article">
        <LayoutItem layout="center">
          <div className="license c-licensebox c-licensebox--expanded">
            <Button stripped className="license-toggler" onClick={() => {}} >
              Lukk boks
            </Button>
            <LicenseBox />
          </div>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Lisensboks ekspanderbar', () => (
    <Center>
      <h2 className="u-heading">Ekspanderbar lisensboks</h2>
      <article className="article">
        <LayoutItem layout="center">
          <LicenseExample />
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Læringsressurser enkeltstående', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Læringsstier eksempel</h2>
        <LearningPathResourceList />
        <h2 className="u-heading">Lærestoff eksempel</h2>
        <ArticleResourceList />
      </LayoutItem>
    </Center>
  ))
  .add('Læringsressurser samlet', () => (
    <Center>
      <LayoutItem layout="center">
        <h2 className="u-heading">Læringsressurser samlet</h2>
        <ResourceSubsetList />
      </LayoutItem>
    </Center>
  ))
  .add('Paginering', () => (
    <Center>
      <Pager page={3} lastPage={10} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={4} lastPage={4} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={3} query={{ query: 'Medier' }} pageItemComponentClass="button" pathname="#" />
      <Pager page={3} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={1} query={{ query: 'Medier' }} pathname="#" />
    </Center>
  ))
  .add('Sammensatte noder', () => (
    <Center>
      <article>
        <section className="c-factbox">
          <LayoutItem layout="center">
            <h1 className="u-heading">Sammensatte moduler</h1>
          </LayoutItem>
        </section>
        <LayoutItem layout="center">
          <h2 className="u-heading">Eksempel</h2>
          <p>Plikten til forsvarlighet i helsepersonelloven innebærer at &laquo;helsepersonell
            eller virksomheter som yter helsehjelp har et helhetlig ansvar for pasienten.
            Dette inkluderer ansvar for å gi adekvate medisinske, behandlingsmessige og <strong>ernæringsmessige</strong> tiltak, samt ansvar for å gi pasienten
          god omsorg&raquo;.</p>
          <p>
            Ved internkontroll skal det sikres at tilbudet til pasientene er i samsvar
            med regelverket. Internkontroll skal bidra til faglig forsvarlige sosial- og helsetjenester,
            og er et verktøy som skal sikre at daglige arbeidsoppgaver blir utført, styrt og forbedret i henhold til lovens krav. Dette er særlig viktig på områder der svikt kan få alvorlige følger.

            Kilde: <em>Nasjonale faglige retningslinjer for forebygging og behandling av underernæring og internkontroll i helsetjenesten</em>. Helsedirektoratet
          </p>
          <div className="c-collate">
            <div className="c-collate__info">
              <svg onClick={toggle} width="25px" height="24px" viewBox="48 682 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="noun_90272_cc" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(48.500000, 682.000000)">
                  <g id="Group" fill="#000">
                    <path d="M12.1015038,0.327067669 C5.59928833,0.327067669 0.327067669,5.59854468 0.327067669,12.1015038 C0.327067669,18.6044628 5.59928833,23.8759398 12.1015038,23.8759398 C18.6037192,23.8759398 23.8759398,18.6044628 23.8759398,12.1015038 C23.8759398,5.59854468 18.6037192,0.327067669 12.1015038,0.327067669 Z M14.6864263,10.9567807 C14.5736396,11.4976611 12.9361254,14.4856412 12.4591987,15.4957638 C12.1872712,16.0740746 11.6525879,16.8759756 11.7698365,17.5499691 C11.8630404,18.085644 12.4168108,18.3761627 12.8996866,18.4929156 C13.0593231,18.5313374 13.5216247,18.5831449 13.5216247,18.81789 C13.5216247,18.9133249 13.4457725,18.9889292 13.3503376,18.991408 C13.3503376,18.9936389 9.71240871,18.9936389 9.71240871,18.9936389 C9.19334199,18.9936389 8.74194729,18.625285 8.67650621,18.1101844 C8.60164559,17.5301385 8.99379628,17.0088408 9.2307723,16.5125793 C9.73893217,15.4496576 10.3167471,14.4187128 10.8214366,13.3528165 C11.0036306,12.9681023 11.1721909,12.5779346 11.3573594,12.1954514 C11.5425279,11.8149512 11.7713238,11.3831392 11.6188758,10.951823 C11.455521,10.4920003 10.9121618,10.2612214 10.473657,10.1543839 C10.3137725,10.1164578 9.85171888,10.0641545 9.85171888,9.83064883 C9.85171888,9.73447028 9.9280668,9.65861812 10.0235017,9.65638718 C10.0235017,9.65415623 13.6609349,9.65415623 13.6609349,9.65415623 C14.1990886,9.65415623 14.6844432,10.0750613 14.7129497,10.6119756 C14.7196426,10.7262496 14.7094794,10.8412673 14.6864263,10.9567807 Z M13.8537877,8.57388271 C12.9247228,8.57388271 12.1716546,7.82007091 12.1716546,6.8915017 C12.1716546,5.96293249 12.9247228,5.20936858 13.8537877,5.20936858 C14.7816133,5.20936858 15.5359209,5.96318037 15.5359209,6.8915017 C15.5359209,7.82007091 14.7816133,8.57388271 13.8537877,8.57388271 Z" id="Shape" />
                  </g>
                </g>
              </svg></div>
            <div className="c-collate__panel">
              <LayoutItem layout="center">
                <p>Innhold her</p>
              </LayoutItem>
              <h3>Utfordringer til deg:</h3>
              <details>
                <summary>Utfordringer</summary>
                <ol>
                  <li>Beskriv hva internkontroll er.</li>
                  <li>Skriv ned noen forslag  på hvordan man kan sikre at pasienter får
                    dekket sine behov for ernæring. Ta gjerne utgangspunkt i en arbeidsplass. Diskuter deretter i klassen.</li>
                </ol>
              </details>
            </div>
          </div>
        </LayoutItem>
      </article>
    </Center>
  ))
  .add('Sidefot', () => (
    <Center>
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
          <Footer.Editor title="Ansvarlig redaktør:" name=" Øivind Høines" />
          <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
        </Footer.Text>
        <Footer.Text>Nettstedet er utarbeidet av NDLA som åpen kildekode.</Footer.Text>
      </Footer>
    </Center>
  ))
  ;
