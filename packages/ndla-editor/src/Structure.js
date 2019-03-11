/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, colors } from '@ndla/core';
import Spinner from './Spinner';
import ItemName from './ItemName';

const ItemListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const ItemsList = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  > div {
    padding: 0 ${spacing.small} 0
      calc(${props => props.level} * 17px + ${spacing.small});
    height: 40px;
    border-bottom: 1px solid ${colors.brand.greyLighter};

    &:hover {
      background: ${props =>
        props.highlight ? colors.brand.light : '#f1f5f8'};
    }
  }
  > ul {
    display: none;
  }

  ${props =>
    props.isOpen &&
    css`
      > ul {
        display: block;
      }
    `};
  ${props =>
    props.highlight &&
    css`
      > div {
        background: ${colors.brand.light};
      }
    `};
  ${props =>
    props.greyedOut &&
    css`
      > div > button {
        color: rgb(32, 88, 143, 0.5);
      }
    `};
`;

const Structure = ({
  renderListItems,
  listClass,
  fileStructureFilters,
  filters: subjectFilters,
  structure,
  openedPaths,
  toggleOpen,
  highlightMainActive,
}) => {
  const renderItems = (subjectsOrTopics, paths, subjectId) => {
    const level = paths.length;
    const ignoreFilter =
      level === 0 ||
      !subjectFilters[subjectId] ||
      !subjectFilters[subjectId].some(filter =>
        fileStructureFilters.includes(filter.id),
      );

    return (
      <ItemListWrapper>
        {subjectsOrTopics
          .filter(
            subjectOrTopic =>
              ignoreFilter ||
              subjectOrTopic.filters.some(topicFilter =>
                fileStructureFilters.includes(topicFilter.id),
              ),
          )
          .map(({ id, name, topics, subtopics, filters, loading, ...rest }) => {
            const currentPaths = paths.slice();
            currentPaths.push(id);
            const children = topics || subtopics;
            const pathToString = currentPaths.join('/');
            const parentId = paths.slice(-1);
            const isOpen = openedPaths.includes(pathToString);
            const isMainActive = openedPaths.slice(-1).pop() === pathToString;
            return (
              <ItemsList
                key={pathToString}
                className={listClass}
                level={level}
                highlight={
                  highlightMainActive ? isMainActive : isOpen && level === 0
                }
                greyedOut={!isOpen && level === 0 && openedPaths.length > 0}
                isOpen={isOpen}>
                <ItemName
                  isOpen={isOpen}
                  title={name}
                  lastItemClickable={highlightMainActive}
                  path={pathToString}
                  id={id.includes('topic') ? `${parentId}/${id}` : id}
                  hasSubtopics={!!children || level === 0}
                  toggleOpen={() =>
                    toggleOpen({
                      path: pathToString,
                      level,
                      id,
                    })
                  }
                  level={level}>
                  {renderListItems &&
                    renderListItems({
                      paths: currentPaths,
                      pathToString,
                      filters,
                      level,
                      isOpen,
                      id,
                      name,
                      ...rest,
                    })}
                </ItemName>
                {children &&
                  renderItems(
                    children,
                    currentPaths,
                    level === 0 ? id : subjectId,
                  )}
                {loading && (
                  <span>
                    <Spinner size="normal" margin="4px 26px" />
                  </span>
                )}
              </ItemsList>
            );
          })}
      </ItemListWrapper>
    );
  };

  return renderItems(structure, []);
};

const FilterShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

const ItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line no-use-before-define
  topics: PropTypes.arrayOf(ItemShape),
  filters: PropTypes.arrayOf(FilterShape),
}).isRequired;

Structure.propTypes = {
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(ItemShape),
      loading: PropTypes.bool,
    }),
  ),
  openedPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderListItems: PropTypes.func,
  listClass: PropTypes.string,
  fileStructureFilters: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.objectOf(PropTypes.arrayOf(FilterShape)),
};

Structure.defaultProps = {
  structure: [],
  className: '',
  fileStructureFilters: [],
};

export default Structure;
