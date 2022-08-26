import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { ButtonV2 as Button, MultiButton, StyledButton, IconButtonV2 as IconButton } from '@ndla/button';
import { action } from '@storybook/addon-actions';
import { ChevronDown, Wrench } from '@ndla/icons/common';
import { Heart, Pencil, Print } from '@ndla/icons/action';
import { Folder, Star, Link } from '@ndla/icons/editor';

import { CloseButton, MenuButton } from '@ndla/button';
import { StoryIntro, StoryBody } from '../wrappers';
const AnchorButton = StyledButton.withComponent('a');

const menuButtonSizes = ['xsmall', 'small', 'normal', 'medium', 'large'];
const menuItems = [
  { icon: <Folder />, text: 'Legg til mappe/tag', onClick: () => {} },
  { icon: <Link />, text: 'Kopier lenke til siden', onClick: () => {} },
  { icon: <Folder />, text: 'Fjern', onClick: () => {} },
];

const MultiButtonData = {
  mainButton: {
    label: 'Lagre',
    value: 'lagre',
  },
  secondaryButtons: [
    {
      label: 'Lagre og ny versjon',
      value: 'lagreogny',
    },
    {
      label: 'Lagre og avslutt',
      value: 'lagreogavslutt',
    },
  ],
  secondaryButtonsWithOverride: [
    {
      label: 'Lagre og ny versjon',
      value: 'lagreogny',
      enable: true,
    },
    {
      label: 'Lagre og avslutt',
      value: 'lagreogavslutt',
    },
  ],
};

const StyledButtonRow = styled.div`
  display: flex;
  margin: ${spacing.xsmall} 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spacing.xsmall};
`;

const sizeNameMap = {
  xsmall: 'Minst knapp',
  small: 'Liten knapp',
  normal: 'Normal knapp',
  medium: 'Medium knapp',
  large: 'Stor knapp',
};

const ButtonRow = (buttonProps) => {
  return (
    <StyledButtonRow>
      {menuButtonSizes.map((size, i) => (
        <Button size={size} key={i} onClick={action('clicked')} {...buttonProps}>
          {sizeNameMap[size]}
        </Button>
      ))}
    </StyledButtonRow>
  );
};

const IconButtonRow = ({ component: Component, ...buttonProps }) => {
  return (
    <StyledButtonRow>
      {menuButtonSizes.map((size, i) => (
        <IconButton key={i} size={size} onClick={() => action('clicked')} {...buttonProps}>
          <Component />
        </IconButton>
      ))}
    </StyledButtonRow>
  );
};

const MultiButtonHelper = ({ ...props }) => (
  <MultiButton
    onClick={() => action('clicked')}
    mainButton={MultiButtonData.mainButton}
    secondaryButtons={MultiButtonData.secondaryButtons}
    {...props}
  />
);

const ButtonExample = () => {
  return (
    <>
      <StoryIntro title="Knapper">
        <p>
          Knapper er til å klikke på for å navigere på samme side, ikke for å lenke til en annen. De skal altså brukes
          til interaktivitet på samme side. For å sende brukeren til en annen side brukes vanlig lenke.
        </p>
        <p>
          Knapp med ramme brukes for de fleste knapper, men er det behov for ekstra oppmerksomhet, kan fylt knapp
          benyttes. Som regel bør det ikke brukes mer enn 1 fylt knapp på en side.
        </p>
      </StoryIntro>
      <StoryBody>
        <h2 className="u-heading">Eksempel</h2>
        <ButtonRow />
        <h3>Knapp med ramme(outline)</h3>
        <ButtonRow variant="outline" />
        <h3>Lys versjon(light)</h3>
        <ButtonRow colorTheme="light" />
        <h3>Lysere versjon(lighter)</h3>
        <ButtonRow colorTheme="lighter" />
        <h3>Lys grå versjon(greyLighter)</h3>
        <ButtonRow colorTheme="greyLighter" />
        <h3>Lysere grå versjon(greyLightest)</h3>
        <ButtonRow colorTheme="greyLightest" />
        <h3>Rundet knapp</h3>
        <ButtonRow shape="pill" />
        <ButtonRow shape="pill" variant="outline" />
        <ButtonRow shape="pill" colorTheme="light" />
        <ButtonRow shape="pill" colorTheme="lighter" />
        <ButtonRow shape="pill" colorTheme="greyLighter" />
        <ButtonRow shape="pill" colorTheme="greyLightest" />
        <h3>Firkantet knapp</h3>
        <ButtonRow shape="sharp" />
        <ButtonRow shape="sharp" variant="outline" />
        <ButtonRow shape="sharp" colorTheme="light" />
        <ButtonRow shape="sharp" colorTheme="lighter" />
        <ButtonRow shape="sharp" colorTheme="greyLighter" />
        <ButtonRow shape="sharp" colorTheme="greyLightest" />
        <h3>Deaktiverte knapper</h3>
        <ButtonRow disabled />
        <h2 className="u-heading">Multiknapper</h2>
        <p>Undermeny kan vises over eller under hovedknappen</p>
        <StyledButtonRow>
          <MultiButtonHelper outline />
          <MultiButtonHelper outline disabled />
        </StyledButtonRow>
        <StyledButtonRow>
          <MultiButtonHelper menuPosition="bottom" />
          <MultiButtonHelper disabled />
        </StyledButtonRow>
        <StyledButtonRow>
          <MultiButtonHelper menuPosition="bottom" secondaryButtons={MultiButtonData.secondaryButtonsWithOverride} />
          <MultiButtonHelper disabled secondaryButtons={MultiButtonData.secondaryButtonsWithOverride} />
        </StyledButtonRow>
        <StyledButtonRow>
          <MultiButtonHelper large />
          <MultiButtonHelper large outline />
        </StyledButtonRow>
        <h2 key="pill-heading" className="u-heading">
          Ghost pill knapp (hover)
        </h2>
        <Button
          colorTheme="light"
          fontWeight={'normal'}
          variant="ghost"
          shape="pill"
          size="medium"
          onClick={action('clicked')}>
          <span>Velg språk(language): Bokmål</span>
          <ChevronDown />
        </Button>
        <h2 className="u-heading">Lukkeknapp</h2>
        <CloseButton />
        <h2 className="u-heading">Ikon knapper</h2>
        <IconButtonRow aria-label="Eksempel knapp" component={ChevronDown}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" variant="outline" component={Heart}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" colorTheme="light" component={ChevronDown}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" colorTheme="lighter" component={Wrench}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" colorTheme="greyLighter" component={Star}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" colorTheme="greyLightest" component={Pencil}></IconButtonRow>
        <IconButtonRow aria-label="Eksempel knapp" variant="ghost" colorTheme="light" component={Print}></IconButtonRow>
        <h2 className="u-heading">Meny-knapp</h2>
        <StyledButtonRow>
          {menuButtonSizes.map((size) => (
            <MenuButton key={size} size={size} menuItems={menuItems} />
          ))}
        </StyledButtonRow>
        <h2 key="alternative-link-heading" className="u-heading">
          Alternativer når UU krever en link
        </h2>
        <StyledButtonRow key="buttons-2">
          <AnchorButton href="https://ndla.no" target="_blank" rel="noopener noreferrer">
            Link stylet som knapp
          </AnchorButton>
          <AnchorButton
            style={{ width: '250px' }}
            appearance="outline"
            href="https://ndla.no"
            target="_blank"
            rel="noopener noreferrer">
            Link stylet som knapp
          </AnchorButton>
        </StyledButtonRow>
        <h2 key="alternative-button-heading" className="u-heading">
          Alternativer når UU krever en knapp
        </h2>
        <Button variant="link" onClick={action('clicked')}>
          Knapp stylet som link
        </Button>
      </StoryBody>
    </>
  );
};

export default ButtonExample;
