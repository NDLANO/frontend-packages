import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavigationBox, SubjectFilter } from '@ndla/ui';
import { subject, topics as topicsData } from '../../dummydata/mockPrograms';

const SubjectTopicsExample = ({ selectedFilters, selectedMainTopic }) => {
  const [filterValues, setFilterValues] = useState(selectedFilters);

  const filterTopics = () => {
    if (filterValues.length === 0) {
      return topicsData;
    }
    const topics = [];
    const len = topicsData.length;
    for (let i = 0; i < len; i += 1) {
      const topic = topicsData[i];
      if (topic.label === selectedMainTopic) {
        topic.selected = true;
      }
      const filterlen = filterValues.length;
      for (let j = 0; j < filterlen; j += 1) {
        const filter = filterValues[j];
        if (topic.tags.indexOf(filter) > -1) {
          topics.push(topic);
        }
      }
    }
    return topics;
  };

  return (
    <div>
      <SubjectFilter
        label="Filter"
        options={subject.filters}
        values={filterValues}
        onChange={newValues => {
          setFilterValues(newValues);
        }}
      />
      <NavigationBox items={filterTopics()} />
    </div>
  );
};

SubjectTopicsExample.propTypes = {
  selectedFilters: PropTypes.array,
  selectedMainTopic: PropTypes.string,
};
SubjectTopicsExample.defaultProps = {
  selectedFilters: [],
};

export default SubjectTopicsExample;
