import { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronDown } from '@ndla/icons/common';
import { withTranslation } from 'react-i18next';
import { FilterListPhone } from '../Filter';
import CompetenceGoalList from './CompetenceGoalList';

export const classes = new BEMHelper({
  name: 'competence-goals',
  prefix: 'c-',
});

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
      t,
    } = this.props;

    return (
      <div {...classes('', { menu, search })}>
        {!menu && !search ? (
          <>
            <h1 id={headingId}>{messages.heading}</h1>
            <hr />
            <p>{description}</p>
            <p>{messages.listDescription}</p>
            <div {...classes('topic')}>
              <CompetenceGoalList goals={topics[0].items} />
            </div>
          </>
        ) : (
          <>
            <h1 {...classes('subject-heading')}>{subjectName}</h1>
            <h2 id={headingId} {...classes('heading')}>
              {messages.heading}
            </h2>
            <p {...classes('description')}>{messages.listDescription}</p>
            {filterOptions && filterOptions.length > 0 && (
              <>
                <FilterListPhone
                  preid="competence"
                  label="Filtrer kompetansemål"
                  options={filterOptions}
                  alignedGroup
                  values={filterValues}
                  onChange={onFilterClick}
                  messages={{
                    openFilter: t('competenceGoals.openCompentenceGoalsFilter'),
                    useFilter: t('competenceGoals.useCompentenceGoalsFilter'),
                    closeFilter: t('competenceGoals.closeCompentenceGoalsFilter'),
                  }}
                />
              </>
            )}
            {topics.map((topic) => (
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
                      this.setState((prevState) => {
                        let expanded = null;
                        if (prevState.expanded !== topic.heading) {
                          expanded = topic.heading;
                        }

                        return {
                          expanded,
                        };
                      });
                    }}>
                    {this.state.expanded === topic.heading ? <ChevronDown /> : <ChevronRight />}
                    {topic.heading}
                  </button>
                </h3>

                <CompetenceGoalList id={id} aria-hidden={this.state.expanded !== topic.heading} goals={topic.items} />
              </div>
            ))}
          </>
        )}
      </div>
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

export default withTranslation()(CompetenceGoals);
