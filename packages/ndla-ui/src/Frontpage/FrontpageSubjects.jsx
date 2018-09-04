import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'ndla-icons/common';

import { OneColumn } from '../Layout';
import SafeLink from '../common/SafeLink';

const wrapperClasses = BEMHelper('c-frontpage-subjects-wrapper');
const sectionClasses = BEMHelper('c-frontpage-subjects-section');

export const FrontpageSubjectsSection = ({
  name,
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
          type="button"
          onClick={() => {
            onExpand(!expanded);
          }}
          {...sectionClasses('expand-button')}
          aria-expanded={expanded}
          aria-controls={id}>
          <span {...sectionClasses('expand-button-text')}>{name}</span>
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
        <span {...sectionClasses('heading-text')}>{name}</span>
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
  name: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      yearInfo: PropTypes.string,
    }),
  ),
};

export class FrontpageSubjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
    };
  }

  render() {
    return (
      <OneColumn wide noPadding>
        <div {...wrapperClasses()}>
          {Object.keys(this.props.subjects).map(key => (
            <FrontpageSubjectsSection
              key={key}
              expanded={this.state.expanded === key}
              onExpand={expanded => {
                this.setState({
                  expanded: expanded ? key : undefined,
                });
              }}
              id={key}
              name={this.props.subjects[key].name}
              subjects={this.props.subjects[key].subjects}
            />
          ))}
        </div>
      </OneColumn>
    );
  }
}

FrontpageSubjects.propTypes = {
  expanded: PropTypes.string,
  subjects: PropTypes.shape({
    id: PropTypes.isRequired,
    name: PropTypes.isRequired,
    subject: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        yearInfo: PropTypes.string,
      }),
    ),
  }),
};

FrontpageSubjects.defaultProps = {
  expanded: undefined,
};

export default FrontpageSubjects;
