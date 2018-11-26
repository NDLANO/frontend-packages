/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
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
    props.isOpen &&
    props.level === 0 &&
    css`
      > div {
        background: ${colors.brand.light};
      }
    `};
`;

const FileStructure = ({
  renderListItems,
  listClass,
  fileStructureFilters,
  filters: subjectFilters,
  structure,
  openedPaths,
  toggleOpen,
}) => {
  const renderItems = (subjectsOrTopics, paths, names, subjectId) => {
    const level = paths.length;
    const ignoreFilter =
      level === 0 ||
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
          .map(({ id, name, topics, subtopics, filters, loading }) => {
            const currentPaths = paths.slice();
            const currentNames = names.slice();
            currentPaths.push(id);
            currentNames.push(name);
            const children = topics || subtopics;
            const pathToString = currentPaths.toString();
            const isOpen = openedPaths.includes(pathToString);
            return (
              <Fragment key={pathToString}>
                <ItemsList className={listClass} level={level} isOpen={isOpen}>
                  <ItemName
                    isOpen={isOpen}
                    title={name}
                    path={pathToString}
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
                        names: currentNames,
                        isOpen,
                        id,
                      })}
                  </ItemName>
                  {children &&
                    renderItems(
                      children,
                      currentPaths,
                      currentNames,
                      level === 0 ? id : subjectId,
                    )}
                  {loading && (
                    <span>
                      <Spinner size="normal" margin="4px 26px" />
                    </span>
                  )}
                </ItemsList>
              </Fragment>
            );
          })}
      </ItemListWrapper>
    );
  };

  return renderItems(structure, [], []);
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

FileStructure.propTypes = {
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

FileStructure.defaultProps = {
  structure: [],
  className: '',
  fileStructureFilters: [],
  filters: [],
};

export default FileStructure;
