/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  NavigationBox,
  NavigationHeading,
  NavigationTopicAbout,
  OneColumn,
  SubjectAbout,
  SubjectCarousel,
} from '@ndla/ui';

import { subject, topics } from '../../dummydata/mockPrograms';
import SubjectTopicsExample from '../molecules/SubjectTopicsExample';
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
  return topics.find(item => item.label === topic);
};

const SubjectPage = ({
  selectedFilters,
  selectedMainTopic,
  selectedSubTopic,
}) => {
  let topicData,
    subTopicData = null;
  if (selectedMainTopic) {
    topicData = selectedTopicData(selectedMainTopic);
    if (selectedSubTopic) {
      topicData.subTopics.forEach(item => {
        if (item.label === selectedSubTopic) {
          item.selected = true;
          subTopicData = item;
        }
      });
    }
  }
  return (
    <>
      <OneColumn>
        <NavigationHeading>{subject.label}</NavigationHeading>
        <SubjectTopicsExample
          selectedFilters={selectedFilters}
          selectedMainTopic={selectedMainTopic}
        />
        {topicData && (
          <>
            <NavigationTopicAbout
              heading={topicData.label}
              ingress={topicData.description}
            />
            {topicData.subTopics && (
              <NavigationBox
                colorMode="light"
                heading="emner"
                items={topicData.subTopics}
              />
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
