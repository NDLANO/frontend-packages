import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { Center, DottedContainer } from './helpers';
import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo } from '../src';

storiesOf('Molecules', module)
  .addWithInfo('Logo', () => (
    <Center>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </Center>
  ))
  .addWithInfo('SiteNav', () => (
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
  .addWithInfo('Masthead', () => (
    <Center>
      <Masthead>
        <MastheadItem left>Left</MastheadItem>
        <MastheadItem right>Right</MastheadItem>
      </Masthead>
    </Center>
  ))
  .addWithInfo('Masthead with logo and site nav', () => (
    <Center>
      <Masthead>
        <MastheadItem left>
          <Logo />
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
  ;
