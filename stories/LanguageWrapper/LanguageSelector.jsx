import { Fragment } from 'react';
import { RadioButtonGroup } from '@ndla/ui';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  {
    title: 'Norsk bokmål',
    value: 'nb',
  },
  {
    title: 'Norsk nynorsk',
    value: 'nn',
  },
  {
    title: 'Engelsk',
    value: 'en',
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  return (
    <Fragment>
      <h2 className="u-heading">Velg språk for labels</h2>
      <div className="c-filter u-margin-top">
        <RadioButtonGroup
          label="Velg språk:"
          options={LANGUAGES}
          selected={i18n.language}
          onChange={(value) => {
            i18n.changeLanguage(value);
          }}
        />
      </div>
    </Fragment>
  );
};

export default LanguageSelector;
