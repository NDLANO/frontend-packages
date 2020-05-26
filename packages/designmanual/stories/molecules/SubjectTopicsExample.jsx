import React, { useState } from 'react';
import { NavigationBox, SubjectFilter } from '@ndla/ui';
import { subject, topics as topicsData } from '../../dummydata/mockPrograms';

const SubjectTopicsExample = () => {
  const [filterValues, setFilterValues] = useState([]);

  const filterTopics = () => {
    if (filterValues.length === 0) {
      return topicsData;
    }
    const topics = [];
    const len = topicsData.length;
    for (let i = 0; i < len; i += 1) {
      const topic = topicsData[i];
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

export default SubjectTopicsExample;
