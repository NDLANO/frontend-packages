import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

import { OneColumn } from '../Layout';
import SafeLink from '../common/SafeLink';

const wrapperClasses = BEMHelper('c-frontpage-subjects-wrapper');

const FrontpageSubjectsWrapper = ({ children }) => (
  <OneColumn noPadding>
    <div {...wrapperClasses()}>{children}</div>
  </OneColumn>
);

FrontpageSubjectsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FrontpageSubjectsWrapper;

const sectionClasses = BEMHelper('c-frontpage-subjects-section');

export const FrontpageSubjectsSection = ({ heading, subjects }) => (
  <nav {...sectionClasses()}>
    <h1 {...sectionClasses('heading')}>{heading}</h1>
    <ul {...sectionClasses('subjects')}>
      {subjects.map(subject => (
        <li key={subject.url} {...sectionClasses('item')}>
          <SafeLink
            to={subject.url}
            {...sectionClasses('link')}
            aria-label={`${subject.text} ${subject.yearInfo}`}>
            <span {...sectionClasses('text')}>{subject.text}</span>
            <span {...sectionClasses('year-info')}>{subject.yearInfo}</span>
          </SafeLink>
        </li>
      ))}
    </ul>
  </nav>
);

FrontpageSubjectsSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      yearInfo: PropTypes.string.isRequired,
    }),
  ),
};
