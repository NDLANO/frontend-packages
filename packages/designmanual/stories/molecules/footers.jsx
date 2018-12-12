import React from 'react';

import { Footer } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { isMobile } from 'react-device-detect';

const FooterExample = () => (
  <Footer>
    <div className="footer_form">
      {/* eslint-disable jsx-a11y/label-has-associated-control  */}
      <label htmlFor="language-select" className="footer_label footer--bold">
        Velg språk
        <select id="language-select" className="footer_language-select">
          <option value="Norsk">Norsk</option>
          <option value="English">English</option>
        </select>
      </label>
    </div>
    <Footer.Ruler />
    <Footer.Text>
      <Footer.Editor title="Ansvarlig redaktør:" name="Christer Gundersen" />
      <Footer.Editor title="Utgaveansvarlig:" name="Pål Frønsdal" />
    </Footer.Text>
    <Footer.Text>
      Nettstedet er utarbeidet av NDLA med åpen kildekode.
    </Footer.Text>
    <ZendeskButton
      isMobile={isMobile}
      locale="nb"
      zendeskHost="ndla.zendesk.com">
      Spør NDLA
    </ZendeskButton>
  </Footer>
);

export default FooterExample;
