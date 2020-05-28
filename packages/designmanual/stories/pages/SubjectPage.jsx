/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  LayoutItem,
  NavigationBox,
  NavigationHeading,
  NavigationTopicAbout,
  OneColumn,
  SubjectAbout,
  SubjectCarousel,
  SubjectFilter,
} from '@ndla/ui';

import { subject, topics as topicsData } from '../../dummydata/mockPrograms';
import { contentCards } from '../../dummydata';
import Resources from '../molecules/resources';

const subjectAbout = (label, description) => (
  <SubjectAbout
    wide
    media={
      <Image
        alt="Forstørrelsesglass"
        src="https://staging.api.ndla.no/image-api/raw/42-45210905.jpg"
      />
    }
    heading={label}
    description={description}
  />
);

const selectedTopicData = topic => {
  return topicsData.find(item => item.label === topic);
};

const SubjectPage = ({
  selectedFilters,
  selectedMainTopic,
  selectedSubTopic,
}) => {
  const [filterValues, setFilterValues] = useState(selectedFilters);
  const [mainTopic, setMainTopic] = useState(selectedMainTopic);
  const [subTopic, setSubTopic] = useState(selectedSubTopic);
  const [mainTopics, setMainTopics] = useState([]);
  const [topicData, setTopicData] = useState(null);
  const [subTopicData, setSubTopicData] = useState(null);

  const mainTopicRef = createRef();
  const subTopicRef = createRef();

  useEffect(() => {
    if (mainTopic) {
      const topicDataItems = selectedTopicData(mainTopic);

      topicDataItems.subTopics.forEach(item => {
        if (item.label === subTopic) {
          item.selected = true;
          setSubTopicData(item);
        } else {
          item.selected = false;
        }
      });
      if (!subTopic) {
        setSubTopicData(null);
      }
      setTopicData(topicDataItems);
    }
  }, [mainTopic, subTopic]);

  useEffect(() => {
    const topics = [];
    const len = topicsData.length;
    for (let i = 0; i < len; i += 1) {
      const topic = topicsData[i];
      if (topic.label === mainTopic) {
        topic.selected = true;
      }

      const filterlen = filterValues.length;
      if (filterlen) {
        for (let j = 0; j < filterlen; j += 1) {
          const filter = filterValues[j];
          if (topic.tags.indexOf(filter) > -1) {
            topics.push(topic);
          }
        }
      } else {
        topics.push(topic);
      }
    }
    setMainTopics(topics);
  }, [filterValues, mainTopic]);

  const onClickMainTopic = e => {
    e.preventDefault();
    setMainTopic('Økonomi');
    setSubTopic('');
    window.scrollTo({
      top:
        mainTopicRef.current.getBoundingClientRect().bottom +
        window.scrollY -
        100,
      behavior: 'smooth',
    });
  };

  const onClickSubTopic = e => {
    e.preventDefault();
    window.scrollTo({
      top:
        subTopicRef.current.getBoundingClientRect().bottom +
        window.scrollY -
        100,
      behavior: 'smooth',
    });
    setSubTopic('Lønsemd');
  };

  return (
    <>
      <OneColumn>
        <LayoutItem layout="extend">
          <NavigationHeading>{subject.label}</NavigationHeading>
          <div ref={mainTopicRef}>
            <SubjectFilter
              label="Filter"
              options={subject.filters}
              values={filterValues}
              onChange={newValues => {
                setFilterValues(newValues);
              }}
            />
            <NavigationBox items={mainTopics} onClick={onClickMainTopic} />
          </div>
          {topicData && (
            <>
              <NavigationTopicAbout
                heading={topicData.label}
                ingress={topicData.description}
              />
              {topicData.subTopics && (
                <div ref={subTopicRef}>
                  <NavigationBox
                    colorMode="light"
                    heading="emner"
                    items={topicData.subTopics}
                    onClick={onClickSubTopic}
                  />
                </div>
              )}
              {subTopicData && (
                <>
                  <NavigationTopicAbout
                    heading={subTopicData.label}
                    ingress={subTopicData.description}
                  />
                  <Resources />
                </>
              )}
            </>
          )}
        </LayoutItem>
      </OneColumn>
      <OneColumn wide>
        {subjectAbout(subject.description.heading, subject.description.text)}
      </OneColumn>
      <SubjectCarousel
        wideScreen
        subjects={contentCards}
        title="Litt forskjellig fra faget"
        subjectPage
      />
    </>
  );
};

SubjectPage.propTypes = {
  selectedFilters: PropTypes.array,
  selectedMainTopic: PropTypes.string,
  selectedSubTopic: PropTypes.string,
};
SubjectPage.defaultProps = {
  selectedFilters: [],
};

export default SubjectPage;
