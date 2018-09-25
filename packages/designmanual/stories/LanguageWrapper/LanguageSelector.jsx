import React, { Fragment } from 'react';
import { RadioButtonGroup } from 'ndla-ui';
import { LanguageContext } from './LanguageWrapper';

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

const LanguageSelector = () => (
  <LanguageContext.Consumer value="en">
    {context => (
      <Fragment>
        <h2 className="u-heading">Velg språk for labels</h2>
        <div className="c-filter u-margin-top">
          <RadioButtonGroup
            label="Velg språk:"
            options={LANGUAGES}
            selected={context.lang}
            onChange={value => {
              context.changeLanguage(value);
            }}
          />
        </div>
      </Fragment>
    )}
  </LanguageContext.Consumer>
);

export default LanguageSelector;
