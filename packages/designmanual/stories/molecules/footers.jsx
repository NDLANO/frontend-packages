import React from 'react';
import PropTypes from 'prop-types';

import { Footer, FooterText, FooterEditor, LanguageSelector } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { injectT } from '@ndla/i18n';
import { mockFooterLinks } from '../../dummydata';

const FooterExample = ({ inverted, t }) => (
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
      <FooterEditor title="Utgaveansvarlig:" name="Sigurd Trageton" />
      <span>Nettstedet er utarbeidet av NDLA med åpen kildekode.</span>
      <ZendeskButton
        locale="nb"
        widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
        {t('askNDLA')}
      </ZendeskButton>
    </FooterText>
  </Footer>
);

FooterExample.propTypes = {
  inverted: PropTypes.bool,
};

export default injectT(FooterExample);
