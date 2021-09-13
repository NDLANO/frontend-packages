import React from 'react';
import PropTypes from 'prop-types';

import { Footer, FooterText, EditorName, LanguageSelector, FooterAuth } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { withTranslation } from 'react-i18next';
import { mockFooterLinks } from '../../dummydata';

const FooterExample = ({ inverted, invertedOutlineLargeScreensOnly, t, hideLanguageSelector, i18n }) => (
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
          options={i18n.options.supportedLanguages}
          currentLanguage={i18n.language}
        />
      )
    }
    auth={<FooterAuth isAuthenticated />}>
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

export default withTranslation()(FooterExample);
