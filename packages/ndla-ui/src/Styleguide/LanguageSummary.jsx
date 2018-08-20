import React from 'react';
import PropTypes from 'prop-types';

// TODO:
// better system for categorize text status codes.
// use global variables for STATUS_TYPES and LANG_NAMES.

const STATUS_TYPES = {
  dummyText: 'Trenger tekst',
  test: 'Til gjennomgang',
  approved: 'Godkjent',
};

const LANG_NAMES = {
  nb: 'Norsk bokmål',
  nn: 'Nynorsk',
  en: 'Engelsk',
};

const LanguageSummary = ({ texts, lang }) => {
  const approvedTexts = Object.keys(texts).filter(
    textKey => texts[textKey].status[lang] === STATUS_TYPES.approved,
  ).length;
  return (
    <details>
      <summary>
        {approvedTexts} av {Object.keys(texts).length} tekster er godkjent på{' '}
        {LANG_NAMES[lang]}
      </summary>
      <ul>
        {Object.keys(texts).map(textKey => (
          <li key={textKey}>
            {textKey}: {texts[textKey].text[lang] || '(???)'} ({texts[textKey]
              .status[lang] || STATUS_TYPES.dummyText})
          </li>
        ))}
      </ul>
    </details>
  );
};

LanguageSummary.propTypes = {
  texts: PropTypes.shape(
    PropTypes.shape({
      description: PropTypes.string,
      text: PropTypes.shape({
        nb: PropTypes.string,
        ny: PropTypes.string,
        en: PropTypes.string,
      }),
      status: {
        nb: PropTypes.string,
        ny: PropTypes.string,
        en: PropTypes.string,
      },
    }),
  ).isRequired,
  lang: PropTypes.oneOf(['nb', 'nn', 'en']),
};

export default LanguageSummary;
