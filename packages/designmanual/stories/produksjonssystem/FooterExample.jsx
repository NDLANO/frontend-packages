import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Footer, FooterQualityInsurance, FooterStatus } from '@ndla/editor';
import Button from '@ndla/button';
import { colors, spacing, fonts } from '@ndla/core';

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
        }}
      />
      <hr />
      <Button
        smallLink
        onClick={() => {
          console.log('clicked..');
        }}>
        Tilbakestill endringer
      </Button>
    </div>
    <div>
      <FooterStatus
        onSave={(comment, statusId) => console.log(comment, statusId)}
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
          console.log('save resource');
        }}>
        Lagre
      </Button>
    </div>
  </Footer>
);

export default FooterExample;
