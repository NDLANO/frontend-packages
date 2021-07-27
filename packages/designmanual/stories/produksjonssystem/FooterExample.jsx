import React from 'react';

import { Footer, FooterQualityInsurance, FooterStatus, FooterLinkButton } from '@ndla/editor';
import Button from '@ndla/button';

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

const optionsFooterStatus = [
  {
    name: 'Kladd',
    id: '#1',
  },
  {
    name: 'Utkast',
    id: '#2',
    active: true,
  },
  {
    name: 'Tilbrukertest',
    id: '#3',
  },
  {
    name: 'Til kvalitetssikring',
    id: '#4',
  },
  {
    name: 'Kvalitetssikret',
    id: '#5',
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
        {optionsQualityInsurance.map(option => (
          <FooterLinkButton
            key={option.name}
            bold
            onClick={e => {
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
      <FooterStatus
        onSave={(comment, statusId) => console.log(comment, statusId)} // eslint-disable-line no-console
        options={optionsFooterStatus}
        messages={{
          label: '',
          changeStatus: 'Endre status',
          back: 'Gå tilbake',
          inputHeader: 'Din merknad',
          inputHelperText: 'Kort merknad påkrevd ved statusendring',
          cancelLabel: 'Avbryt',
          saveLabel: 'Endre status og large utkast',
          warningSavedWithoutComment: 'Merknad mangler',
          newStatusPrefix: 'Ny status:',
          statusLabel: 'Status:',
          commentPlaceholder: 'Skriv inn merknad',
        }}
      />
      <Button
        large
        onClick={() => {
          console.log('save resource'); // eslint-disable-line no-console
        }}>
        Lagre
      </Button>
    </div>
  </Footer>
);

export default FooterExample;
