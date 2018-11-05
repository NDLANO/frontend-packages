import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronDown } from '@ndla/icons/common';
import { Trans } from '@ndla/i18n';
import { FilterListPhone } from '../Filter';

import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'competence-goals',
  prefix: 'c-',
});

const renderItem = item => {
  const content = item.url ? (
    <SafeLink to={item.url}>{item.text}</SafeLink>
  ) : (
    item.text
  );

  return (
    <li {...classes('topic-item')} key={item.text}>
      {content}
    </li>
  );
};

class CompetenceGoals extends Component {
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
      search,
      subjectName,
      filterOptions,
      filterValues,
      onFilterClick,
      description,
    } = this.props;

    return (
      <Trans>
        {({ t }) => (
          <div {...classes('', { menu, search })}>
            {!menu && !search ? (
              <Fragment>
                <h1 id={headingId}>{messages.heading}</h1>
                <hr />
                <p>{description}</p>
                <p>{messages.listDescription}</p>
                <div {...classes('topic')}>
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
                <p {...classes('description')}>{messages.listDescription}</p>
                {filterOptions &&
                  filterOptions.length > 0 && (
                    <Fragment>
                      <FilterListPhone
                        label="Filtrer kompetansemål"
                        options={filterOptions}
                        alignedGroup
                        values={filterValues}
                        onChange={onFilterClick}
                        messages={{
                          openFilter: t(
                            'competenceGoals.openCompentenceGoalsFilter',
                          ),
                          useFilter: t(
                            'competenceGoals.useCompentenceGoalsFilter',
                          ),
                          closeFilter: t(
                            'competenceGoals.closeCompentenceGoalsFilter',
                          ),
                        }}
                      />
                    </Fragment>
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
                      {topic.items.map(item => renderItem(item))}
                    </ul>
                  </div>
                ))}
              </Fragment>
            )}
          </div>
        )}
      </Trans>
    );
  }
}

CompetenceGoals.propTypes = {
  id: PropTypes.string,
  headingId: PropTypes.string,
  menu: PropTypes.bool,
  search: PropTypes.bool,
  description: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    listDescription: PropTypes.string.isRequired,
  }).isRequired,
  subjectName: PropTypes.string,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  filterValues: PropTypes.arrayOf(PropTypes.string),
  onFilterClick: PropTypes.func.isRequired,
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

CompetenceGoals.defaultProps = {
  headingId: null,
  menu: false,
  search: false,
};

export default CompetenceGoals;
