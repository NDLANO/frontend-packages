import PropTypes from 'prop-types';

import { Footer, FooterText, EditorName, LanguageSelector } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { withTranslation } from 'react-i18next';
import { mockFooterLinks } from '../../dummydata';

const FooterExample = ({ t, hideLanguageSelector, i18n }) => {
  const privacyLinks = [
    { label: t('footer.privacyLink'), url: 'https://om.ndla.no/gpdr' },
    { label: t('footer.cookiesLink'), url: 'https://om.ndla.no/cookies' },
    {
      url: 'https://uustatus.no/nn/erklaringer/publisert/8cefdf3d-3272-402a-907b-689ddfc9bba7',
      label: t('footer.availabilityLink'),
    },
  ];
  return (
    <Footer
      links={mockFooterLinks}
      languageSelector={
        !hideLanguageSelector && (
          <LanguageSelector inverted={true} locales={i18n.options.supportedLngs} onSelect={i18n.changeLanguage} />
        )
      }
      privacyLinks={privacyLinks}
    >
      <FooterText>
        <EditorName title="Utgaveansvarlig:" name="Sigurd Trageton" />
        <span>Nettstedet er utarbeidet av NDLA med åpen kildekode.</span>
        <ZendeskButton locale="nb" widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
          {t('askNDLA')}
        </ZendeskButton>
      </FooterText>
    </Footer>
  );
};

FooterExample.propTypes = {
  inverted: PropTypes.bool,
  hideLanguageSelector: PropTypes.bool,
};

export default withTranslation()(FooterExample);
