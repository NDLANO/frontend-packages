import React from 'react';
import { Footer, FooterQualityInsurance } from '@ndla/editor';
import { spacing, colors } from '@ndla/core';
import Button from '@ndla/button';

const FooterExample = () => (
  <Footer>
    <FooterQualityInsurance
      label="Kvalitetsikring"
      options={[
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
      ]}
    />
    <Button>
      Click me
    </Button>
  </Footer>
);

export default FooterExample;