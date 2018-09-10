import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { TopicIntroductionList, SubjectFilter } from 'ndla-ui';
import { topicListChinese } from '../../dummydata/index';

export const classes = new BEMHelper({
  name: 'subject-topic-language-container',
  prefix: 'c-',
});

const filterOptions = [
  { title: 'Kinesisk 1', value: 'Kinesisk1' },
  { title: 'Kinesisk 2', value: 'Kinesisk2' },
];

class TwoColumnsLanguageExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValues: [],
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    // Storybook only: Extract filter values from URL to examplify how language links with filter should work from frontpage.
    if (window.location.href.indexOf('&filterexample=') !== -1) {
      const filteredValueFromUrl = window.location.href.substr(
        window.location.href.lastIndexOf('=') + 1,
      );
      this.setState({
        filterValues: [filteredValueFromUrl],
      });
    }
  }

  onFilterChange(newValues) {
    this.setState({ filterValues: newValues });
  }

  getSortedTopics() {
    const filterValues =
      this.state.filterValues.length === 0
        ? filterOptions.map(option => option.value)
        : this.state.filterValues;

    return filterValues
      .map(value => ({
        topics: topicListChinese.filter(topic => topic.tags.includes(value)),
        key: value,
        heading: filterOptions.find(option => option.value === value).title,
      }))
      .filter(values => values.topics.length);
  }

  render() {
    const { filterValues } = this.state;
    const topics = this.getSortedTopics().sort(
      (a, b) => (a.heading.toLowerCase() > b.heading.toLowerCase() ? 1 : -1),
    );

    return (
      <section>
        <SubjectFilter
          label="Filter"
          options={filterOptions}
          values={filterValues}
          onChange={(newValues, value) => {
            this.onFilterChange(newValues, value, this);
          }}
        />
        {topics.map(filteredTopics => (
          <section key={filteredTopics.key} {...classes()}>
            <h1 {...classes('heading')}>{filteredTopics.heading}</h1>
            <TopicIntroductionList
              toTopic={() => '#'}
              topics={filteredTopics.topics.sort(
                (a, b) =>
                  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
              )}
              twoColumns
              subjectPage
              toggleAdditionalCores={() => {}}
            />
          </section>
        ))}
      </section>
    );
  }
}

export default TwoColumnsLanguageExample;
