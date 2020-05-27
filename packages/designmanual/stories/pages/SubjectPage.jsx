/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  Image,
  NavigationHeading,
  OneColumn,
  SubjectAbout,
  SubjectCarousel,
} from '@ndla/ui';

import { subject } from '../../dummydata/mockPrograms';
import SubjectTopicsExample from '../molecules/SubjectTopicsExample';
import { contentCards } from '../../dummydata';

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

export default () => {
  return (
    <>
      <OneColumn>
        <NavigationHeading>{subject.label}</NavigationHeading>
        <SubjectTopicsExample />
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
