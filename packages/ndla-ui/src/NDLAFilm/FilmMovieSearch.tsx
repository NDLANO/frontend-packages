/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints, colors } from '@ndla/core';
import CategorySelect from './CategorySelect';
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
  ul {
    list-style-type: none;
    list-style-image: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    margin: ${spacing.small} 0;
    ${mq.range({ from: breakpoints.tablet })} {
      padding-left: ${spacing.normal};
    }
    li {
      padding: 0;
      width: 100%;
      ${mq.range({ from: breakpoints.tablet })} {
        width: 50%;
      }
      a {
        color: #fff;
        &:hover,
        &:focus {
          color: ${colors.brand.light};
        }
      }
    }
  }
`;

interface Props {
  topics?: { id: string; path: string; name: string }[];
  onChangeResourceType: (resourceType?: string) => void;
  resourceTypeSelected?: MovieResourceType;
  resourceTypes: MovieResourceType[];
  ariaControlId: string;
  skipToContentId?: string;
}

const FilmMovieSearch = ({
  topics = [],
  onChangeResourceType,
  resourceTypes,
  resourceTypeSelected,
  ariaControlId,
  skipToContentId,
}: Props) => {
  const { t } = useTranslation();
  return (
    <FilmMovieSearchContainer>
      <OneColumn>
        <TopicNavigation>
          <StyledHeadingH2 id={skipToContentId} className="u-12/12 u-4/12@tablet">
            {`${t('ndlaFilm.subjectsInMovies')}:`}
          </StyledHeadingH2>
          <nav className="u-12/12 u-8/12@tablet" aria-labelledby={skipToContentId}>
            <ul>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <SafeLink to={topic.path} key={topic.id}>
                    <span>{topic.name}</span>
                  </SafeLink>
                </li>
              ))}
            </ul>
          </nav>
        </TopicNavigation>
        <CategorySelect
          onChangeResourceType={onChangeResourceType}
          resourceTypes={resourceTypes}
          resourceTypeSelected={resourceTypeSelected}
          ariaControlId={ariaControlId}
        />
      </OneColumn>
    </FilmMovieSearchContainer>
  );
};

export default FilmMovieSearch;
