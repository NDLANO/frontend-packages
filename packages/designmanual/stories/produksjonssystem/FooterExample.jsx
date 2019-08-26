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
  }
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
  }
];

const StyledLine = styled.hr`
  width: 1px;
  height: ${spacing.medium};
  background: ${colors.brand.greyLight};
  margin: 0 ${spacing.normal} 0 ${spacing.small};
  &:before {
    content: none;
  }
`;

const buttonStyle = css`
  ${fonts.sizes(16, 1.25)};
  height: ${spacing.large};
  font-weight: ${fonts.weight.semibold};
  box-shadow: none;
  text-decoration: none:
  &:hover, &:focus {
    text-decoration: underline;
  }
`;

const largerButtonStyle = css`
  height: ${spacing.large};
  padding: 0 ${spacing.normal};
  ${fonts.sizes(18, 1.25)};
`;

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
      <StyledLine />
      <Button link css={buttonStyle} onClick={() => { console.log('clicked..'); }}>
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
        }}
      />
      <Button css={largerButtonStyle} onClick={() => { console.log('save resource'); }}>
        Lagre
      </Button>
    </div>
  </Footer>
);

export default FooterExample;