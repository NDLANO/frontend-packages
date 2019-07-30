import React from 'react';
import PropTypes from 'prop-types';

import { Footer, FooterText, FooterEditor, LanguageSelector } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { Trans } from '@ndla/i18n';
import { mockFooterLinks } from '../../dummydata';

const FooterExample = ({ inverted }) => (
  <Footer
    links={mockFooterLinks}
    languageSelector={
      <LanguageSelector
        alwaysVisible
        outline
        center
        inverted={inverted}
        options={{
          nb: {
            name: 'Bokmål',
            url: '#',
          },
          nn: {
            name: 'Nynorsk',
            url: '#',
          },
          en: {
            name: 'English',
            url: '#',
          },
        }}
        currentLanguage="nb"
      />
    }>
    <FooterText>
      <FooterEditor title="Ansvarlig redaktør:" name="Christer Gundersen" />
      <FooterEditor title="Utgaveansvarlig:" name="Pål Frønsdal" />
      <span>Nettstedet er utarbeidet av NDLA med åpen kildekode.</span>
      <ZendeskButton
        locale="nb"
        widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
        <Trans>{({ t }) => t('askNDLA')}</Trans>
      </ZendeskButton>
    </FooterText>
  </Footer>
);

FooterExample.propTypes = {
  inverted: PropTypes.bool,
};

export default FooterExample;
