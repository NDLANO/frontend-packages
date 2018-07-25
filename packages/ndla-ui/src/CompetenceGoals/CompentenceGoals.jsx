import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronDown } from 'ndla-icons/common';
import { FilterList } from '../Filter';

import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'compentence-goals',
  prefix: 'c-',
});

const renderItem = (item, expanded = true) => {
  const content = item.url ? (
    <SafeLink to={item.url} tabIndex={!expanded ? -1 : null}>
      {item.text}
    </SafeLink>
  ) : (
    item.text
  );

  return (
    <li {...classes('topic-item')} key={item.text}>
      {content}
    </li>
  );
};

class CompentenceGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  render() {
    const {
      messages,
      headingId,
      topics,
      id,
      menu,
      subjectName,
      filterOptions,
      filterValues,
      onFilterClick,
    } = this.props;

    return (
      <div {...classes('', { menu })}>
        {!menu ? (
          <Fragment>
            <h1 id={headingId} {...classes('heading')}>
              {messages.heading}
            </h1>
            <p {...classes('description')}>{messages.description}</p>

            <div {...classes('topic')}>
              {topics[0].heading && (
                <h2 {...classes('topic-heading')}>{topics[0].heading}</h2>
              )}
              <ul {...classes('topic-list')}>
                {topics[0].items.map(renderItem)}
              </ul>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h1 {...classes('subject-heading')}>{subjectName}</h1>
            <h2 id={headingId} {...classes('heading')}>
              {messages.heading}
            </h2>
            <p {...classes('description')}>{messages.description}</p>
            {filterOptions &&
              filterOptions.length > 0 && (
                <FilterList
                  options={filterOptions}
                  values={filterValues}
                  onChange={onFilterClick}
                />
              )}
            {topics.map(topic => (
              <div
                {...classes('topic', {
                  expandable: true,
                  expanded: this.state.expanded === topic.heading,
                })}
                key={topic.heading}>
                <h3 {...classes('topic-heading')}>
                  <button
                    {...classes('topic-heading-button')}
                    type="button"
                    aria-expanded={this.state.expanded === topic.heading}
                    aria-controls={id}
                    onClick={() => {
                      this.setState(prevState => {
                        let expanded = null;
                        if (prevState.expanded !== topic.heading) {
                          expanded = topic.heading;
                        }

                        return {
                          expanded,
                        };
                      });
                    }}>
                    {this.state.expanded === topic.heading ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                    {topic.heading}
                  </button>
                </h3>
                <ul
                  id={id}
                  aria-hidden={this.state.expanded !== topic.heading}
                  {...classes('topic-list')}>
                  {topic.items.map(item =>
                    renderItem(item, this.state.expanded === topic.heading),
                  )}
                </ul>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    );
  }
}

CompentenceGoals.propTypes = {
  id: PropTypes.string,
  headingId: PropTypes.string,
  menu: PropTypes.bool,
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  subjectName: PropTypes.string,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  filterValues: PropTypes.arrayOf(PropTypes.string),
  onFilterClick: PropTypes.func,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string,
        }),
      ),
    }),
  ),
};

CompentenceGoals.defaultProps = {
  headingId: null,
  menu: false,
};

export default CompentenceGoals;
