import React from 'react';
import PropTypes from 'prop-types';

import { Footer, FooterText, EditorName, LanguageSelector } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { injectT } from '@ndla/i18n';
import { mockFooterLinks } from '../../dummydata';

const FooterExample = ({ inverted, invertedOutlineLargeScreensOnly, t, hideLanguageSelector }) => (
  <Footer
    links={mockFooterLinks}
    languageSelector={
      !hideLanguageSelector && (
        <LanguageSelector
          alwaysVisible
          outline
          center
          inverted={inverted}
          invertedOutlineLargeScreensOnly={invertedOutlineLargeScreensOnly}
          options={{
            nb: {
              name: 'Bokmål',
              url: '#',
            },
            nn: {
              name: 'Nynorsk',
              url: '#',
            },
          }}
          currentLanguage="nb"
        />
      )
    }>
    <FooterText>
      <EditorName title="Utgaveansvarlig:" name="Sigurd Trageton" />
      <span>Nettstedet er utarbeidet av NDLA med åpen kildekode.</span>
      <ZendeskButton locale="nb" widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
        {t('askNDLA')}
      </ZendeskButton>
    </FooterText>
  </Footer>
);

FooterExample.propTypes = {
  inverted: PropTypes.bool,
  hideLanguageSelector: PropTypes.bool,
};

export default injectT(FooterExample);
