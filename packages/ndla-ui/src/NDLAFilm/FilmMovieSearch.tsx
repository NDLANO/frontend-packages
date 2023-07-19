/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useCallback, useMemo } from 'react';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints, colors } from '@ndla/core';
import { Option, Select, SingleValue } from '@ndla/select';
import { MovieResourceType } from './types';
import { OneColumn } from '..';
import { StyledHeadingH2 } from './filmStyles';

const FilmMovieSearchContainer = styled.div`
  margin: ${spacing.normal} 0 ${spacing.large};
`;

const TopicNavigation = styled.div`
  margin: ${spacing.normal} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
    align-items: flex-start;
    padding: 0 ${spacing.normal};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  list-style-image: none;
  li {
    flex: 1;
    width: 100%;
    a {
      color: ${colors.white};
      &:hover,
      &:focus-within {
        color: ${colors.brand.light};
      }
    }
  }
  ${mq.range({ from: breakpoints.tablet })} {
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    column-gap: ${spacing.normal};
  }
`;

interface Props {
  topics?: { id: string; path: string; name: string }[];
  onChangeResourceType: (resourceType?: string) => void;
  resourceTypeSelected?: MovieResourceType;
  resourceTypes: MovieResourceType[];
  skipToContentId?: string;
}

const FilmMovieSearch = ({
  topics = [],
  onChangeResourceType,
  resourceTypes,
  resourceTypeSelected,
  skipToContentId,
}: Props) => {
  const { t } = useTranslation();
  const selectedOption = useMemo(() => {
    if (resourceTypeSelected) {
      return { value: resourceTypeSelected.id, label: resourceTypeSelected.name };
    }
    return { value: 'fromNdla', label: t('ndlaFilm.search.categoryFromNdla') };
  }, [resourceTypeSelected, t]);

  const options: Option[] = useMemo(() => {
    const fromNdla = { value: 'fromNdla', label: t('ndlaFilm.search.categoryFromNdla') };
    return [fromNdla].concat(resourceTypes.map((rt) => ({ value: rt.id, label: rt.name })));
  }, [resourceTypes, t]);

  const onChange = useCallback(
    (value: SingleValue) => {
      if (value?.value === 'fromNdla') {
        onChangeResourceType();
      } else {
        onChangeResourceType(value?.value);
      }
    },
    [onChangeResourceType],
  );

  return (
    <FilmMovieSearchContainer>
      <OneColumn>
        <TopicNavigation>
          <StyledHeadingH2 id={skipToContentId} className="u-12/12 u-4/12@tablet">
            {`${t('ndlaFilm.subjectsInMovies')}:`}
          </StyledHeadingH2>
          <nav className="u-12/12 u-8/12@tablet" aria-labelledby={skipToContentId}>
            <StyledUl>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <SafeLink to={topic.path} key={topic.id}>
                    <span>{topic.name}</span>
                  </SafeLink>
                </li>
              ))}
            </StyledUl>
          </nav>
        </TopicNavigation>
        <Select<false>
          options={options}
          value={selectedOption}
          onChange={onChange}
          colorTheme="white"
          placeholder={`${t('ndlaFilm.search.chooseCategory')}`}
          prefix={`${t('ndlaFilm.search.chooseCategory')} `}
        />
      </OneColumn>
    </FilmMovieSearchContainer>
  );
};

export default FilmMovieSearch;
