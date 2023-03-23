import React from 'react';
import { Footer, FooterQualityInsurance, FooterLinkButton } from '@ndla/editor';
import { ButtonV2 } from '@ndla/button';

const optionsQualityInsurance = [
  {
    name: 'Forhåndsvis',
    onClick: () => {},
  },
  {
    name: 'Sammenlign utkast og artikkel',
    onClick: () => {},
  },
  {
    name: 'Sammenlign forskjellige språkversjoner',
    onClick: () => {},
  },
  {
    name: 'Valider',
    onClick: () => {},
  },
];

const FooterExample = () => (
  <Footer>
    <div>
      <FooterQualityInsurance
        options={optionsQualityInsurance}
        messages={{
          buttonLabel: 'Kvalitetssikring',
          heading: 'Kvalitetssikring:',
        }}>
        {optionsQualityInsurance.map((option) => (
          <FooterLinkButton
            key={option.name}
            bold
            onClick={(e) => {
              option.onClick(e);
            }}>
            {option.name}
          </FooterLinkButton>
        ))}
      </FooterQualityInsurance>
      <hr />
      <FooterLinkButton
        onClick={() => {
          console.log('clicked..'); // eslint-disable-line no-console
        }}>
        Tilbakestill endringer
      </FooterLinkButton>
    </div>
    <div>
      <ButtonV2
        large
        onClick={() => {
          console.log('save resource'); // eslint-disable-line no-console
        }}>
        Lagre
      </ButtonV2>
    </div>
  </Footer>
);

export default FooterExample;
