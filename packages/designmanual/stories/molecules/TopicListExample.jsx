import React, { Component } from 'react';

import { FilterList, TopicIntroductionList } from 'ndla-ui';
import { topicList} from '../../dummydata/index';

class TopicListExample extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: [...topicList], filterValues: [] }
  }

  _filterTopics() {
    const { filterValues } = this.state
    if (filterValues.length === 0) return topicList;
    let topics = []
    for (const topic of topicList) {
      for (const filter of filterValues) {
        if (topic.tags.indexOf(filter) > -1) {
          topics.push(topic);
        }
      }
    }
    return topics;
  }

  onFilterChange(newValues, values, self) {
    self.setState({ filterValues: newValues });
  }

  render() {
    const { topics, filterValues } = this.state;
    return (
      <div>
        <FilterList
          label=''
          options={[
            { title: 'VG1', value: 'VG1' },
            { title: 'VG2', value: 'VG2' },
            { title: 'VG3', value: 'VG3' },
          ]}
          values={filterValues}
          onChange={ (newValues, value) => {
            this.onFilterChange(newValues, value, this) }}
        />
        <TopicIntroductionList
          toTopic={() => '#'}
          topics={ this._filterTopics() }
          subjectPage/>
      </div>
    );
  }
}

export default TopicListExample;
