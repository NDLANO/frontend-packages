import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { Center, DottedContainer } from './helpers';
import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo, Pager, Footer } from '../src';

storiesOf('Sammensatte moduler', module)
  .add('Logo', () => (
    <Center>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </Center>
  ))
  .add('Sammensatte noder', () => (
    <Center>
      <section className="c-factbox">
        <h1 className="u-heading">Sammensatte fagressurser</h1>
        <p>test</p>
      </section>
      <section className="c-collate" data-origin="a">
        <div className="c-collate__info">Info</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ex perferendis quo nobis dolores architecto esse obcaecati vero quia atque dolor assumenda laudantium repellat consequatur id, incidunt
          consequuntur commodi accusamus molestias quibusdam vel
          quam labore expedita magni eos, quod? Excepturi deleniti
          velit, illum numquam sequi. Asperiores, suscipit nihil
          corporis, officiis, libero consectetur facilis laboriosam
          voluptatibus ratione harum voluptatum illum laudantium
          atque et doloribus totam at nemo deleniti distinctio incidunt
          non sequi dicta quas! Eius autem architecto aperiam quam,
          officia minima nobis voluptates vel inventore doloremque
          aliquam nulla ratione a, quae, ducimus alias. Autem
          cumque sunt ducimus laborum placeat, vitae illo. Alias?
        </p>
      </section>
      <section className="c-collate" data-origin="b">
        <div className="c-collate__info">Info</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ex perferendis quo nobis dolores architecto esse obcaecati vero quia atque dolor assumenda laudantium repellat consequatur id, incidunt
          consequuntur commodi accusamus molestias quibusdam vel
          quam labore expedita magni eos, quod? Excepturi deleniti
          velit, illum numquam sequi. Asperiores, suscipit nihil
          corporis, officiis, libero consectetur facilis laboriosam
          voluptatibus ratione harum voluptatum illum laudantium
          atque et doloribus totam at nemo deleniti distinctio incidunt
          non sequi dicta quas! Eius autem architecto aperiam quam,
          officia minima nobis voluptates vel inventore doloremque
          aliquam nulla ratione a, quae, ducimus alias. Autem
          cumque sunt ducimus laborum placeat, vitae illo. Alias?
        </p>
      </section>
    </Center>
  ))
  .add('Sidenavigasjon', () => (
    <Center>
      <DottedContainer>
        <SiteNav>
          <SiteNavItem to="#">Velg fag</SiteNavItem>
          <SiteNavItem to="#">Søk</SiteNavItem>
          <SiteNavItem to="#">Kontakt</SiteNavItem>
          <SiteNavItem to="#">Hjelp</SiteNavItem>
        </SiteNav>
      </DottedContainer>
    </Center>
  ))
  .add('Hovedhode', () => (
    <Center>
      <Masthead>
        <MastheadItem left>Left</MastheadItem>
        <MastheadItem right>Right</MastheadItem>
      </Masthead>
    </Center>
  ))
  .add('Hovedhode med logo og Sidenavigasjon', () => (
    <Center>
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
    </Center>
  ))
  .add('Paginering', () => (
    <Center>
      <Pager page={3} lastPage={10} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={4} lastPage={4} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={3} lastPage={3} query={{ query: 'Medier' }} pathname="#" />
      <Pager page={1} lastPage={1} query={{ query: 'Medier' }} pathname="#" />
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
