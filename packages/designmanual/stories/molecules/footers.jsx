import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { Trans } from '@ndla/i18n';

const FooterExample = ({ inverted }) => (
  <Footer inverted={inverted}>
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
    <ZendeskButton locale="nb" widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
      <Trans>{({ t }) => t('askNDLA')}</Trans>
    </ZendeskButton>
  </Footer>
);

FooterExample.propTypes = {
  inverted: PropTypes.bool,
};

export default FooterExample;
