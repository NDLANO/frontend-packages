import React from 'react';
import { Footer, FooterLinkButton } from '@ndla/editor';
import { ButtonV2 } from '@ndla/button';

const FooterExample = () => (
  <Footer>
    <div>
      <hr />
      <FooterLinkButton
        onClick={() => {
          console.log('clicked..'); // eslint-disable-line no-console
        }}
      >
        Tilbakestill endringer
      </FooterLinkButton>
    </div>
    <div>
      <ButtonV2
        large
        onClick={() => {
          console.log('save resource'); // eslint-disable-line no-console
        }}
      >
        Lagre
      </ButtonV2>
    </div>
  </Footer>
);

export default FooterExample;
