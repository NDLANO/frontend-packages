/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import Button from '@ndla/button';
import { spacing, mq, breakpoints } from '@ndla/core';
import { CourseCard } from '@ndla/ui';
import { Plus } from '@ndla/icons/action';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2``;

const CoursesWrapper = styled.div`
  padding: ${spacing.small} 0;
  display: grid;
  gap: 12px;
  row-gap: 24px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MyCourses = () => {
  return (
    <Wrapper>
      <StyledH2>Mine Fag</StyledH2>
      <Button ghostPillOutline>
        <Plus /> Legg til fag
      </Button>
      <CoursesWrapper>
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: '',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: '',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: '',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: '',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: '',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
        <CourseCard
          courseTitle="Naturfag"
          href="www.google.com"
          favouritable={true}
          image={{
            src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
            alt: '',
          }}
          favorite={{
            isFavorite: true,
            setFavorite: () => 0,
          }}
        />
      </CoursesWrapper>
    </Wrapper>
  );
};

export default MyCourses;
