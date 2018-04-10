import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'ndla-icons/common';

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

export const FrontpageSubjectsSection = ({
  heading,
  subjects,
  expanded,
  onExpand,
  id,
}) => {
  const getItems = (disable = false) =>
    subjects.map(subject => (
      <li key={subject.url} {...sectionClasses('item')}>
        <SafeLink
          tabIndex={disable ? '-1' : null}
          to={subject.url}
          {...sectionClasses('link')}
          aria-label={`${subject.text} ${subject.yearInfo}`}>
          <span {...sectionClasses('text')}>{subject.text}</span>
          <span {...sectionClasses('year-info')}>{subject.yearInfo}</span>
        </SafeLink>
      </li>
    ));

  return (
    <nav {...sectionClasses('', { expanded })}>
      <h1 {...sectionClasses('heading')}>
        <button
          onClick={() => {
            onExpand(!expanded);
          }}
          {...sectionClasses('expand-button')}
          aria-expanded={expanded}
          aria-controls={id}>
          <span {...sectionClasses('expand-button-text')}>{heading}</span>
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
        <span {...sectionClasses('heading-text')}>{heading}</span>
      </h1>
      <ul {...sectionClasses('subjects', 'wide')}>{getItems()}</ul>
      <ul
        {...sectionClasses('subjects', 'narrow')}
        id={id}
        aria-hidden={!expanded}>
        {getItems(!expanded)}
      </ul>
    </nav>
  );
};

FrontpageSubjectsSection.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      yearInfo: PropTypes.string,
    }),
  ),
};

FrontpageSubjectsSection.defaultProps = {
  expanded: false,
};
