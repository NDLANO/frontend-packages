import React, { Component } from 'react';
import { SubjectFilter, TopicIntroductionList } from 'ndla-ui';
import { topicList } from '../../dummydata/index';

class TopicListExample extends Component {
  constructor(props) {
    super(props);
    this.state = { filterValues: [] };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(newValues) {
    this.setState({ filterValues: newValues });
  }

  filterTopics() {
    const { filterValues } = this.state;
    if (filterValues.length === 0) return topicList;
    const topics = [];
    const len = topicList.length;
    for (let i = 0; i < len; i += 1) {
      const topic = topicList[i];
      const filterlen = filterValues.length;
      for (let j = 0; j < filterlen; j += 1) {
        const filter = filterValues[j];
        if (topic.tags.indexOf(filter) > -1) {
          topics.push(topic);
        }
      }
    }
    return topics;
  }

  render() {
    const { filterValues } = this.state;
    return (
      <div>
        <SubjectFilter
          label="Filter"
          options={[
            { title: 'VG1', value: 'VG1' },
            { title: 'VG2', value: 'VG2' },
            { title: 'VG3', value: 'VG3' },
          ]}
          values={filterValues}
          onChange={(newValues, value) => {
            this.onFilterChange(newValues, value, this);
          }}
        />
        <TopicIntroductionList
          toTopic={() => '#'}
          topics={this.filterTopics()}
          messages={{
            shortcutButtonText: 'Lærestoff',
          }}
        />
      </div>
    );
  }
}

export default TopicListExample;
