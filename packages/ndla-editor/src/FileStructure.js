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
  filters,
  structure,
  openedPaths,
  toggleOpen,
  onCloseModal,
}) => {
  const renderItems = (topics, paths, names, subjectId) => {
    const level = paths.length;
    const ignoreFilter =
      level === 0 ||
      !filters[subjectId].some(filter =>
        fileStructureFilters.includes(filter.id),
      );

    return (
      <ItemListWrapper>
        {topics
          .filter(
            topic =>
              ignoreFilter ||
              topic.filters.some(topicFilter =>
                fileStructureFilters.includes(topicFilter.id),
              ),
          )
          .map(topic => {
            const currentPaths = paths.slice();
            const currentNames = names.slice();
            currentPaths.push(topic.id);
            currentNames.push(topic.name);
            const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;
            const pathToString = currentPaths.toString();
            const isOpen = openedPaths.includes(pathToString);
            return (
              <Fragment key={pathToString}>
                <ItemsList className={listClass} level={level} isOpen={isOpen}>
                  <ItemName
                    isOpen={isOpen}
                    title={topic.name}
                    path={pathToString}
                    hasSubtopics={hasSubtopics || level === 0}
                    toggleOpen={() =>
                      toggleOpen({ path: pathToString, level, id: topic.id })
                    }
                    level={level}>
                    {renderListItems &&
                      renderListItems({
                        paths: currentPaths,
                        pathToString,
                        filters: topic.filters,
                        level,
                        names: currentNames,
                        isOpen,
                        id: topic.id,
                        onCloseModal,
                      })}
                  </ItemName>
                  {hasSubtopics &&
                    renderItems(
                      topic.subtopics,
                      currentPaths,
                      currentNames,
                      level === 0 ? topic.id : subjectId,
                    )}
                  {topic.loading && (
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

const ItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

FileStructure.propTypes = {
  structure: PropTypes.arrayOf(
    PropTypes.shape({
      ...ItemShape,
      loading: PropTypes.bool,
      filters: PropTypes.arrayOf(PropTypes.shape({})),
      subtopics: PropTypes.arrayOf(PropTypes.shape(ItemShape)),
    }),
  ),
  openedPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderListItems: PropTypes.func,
  listClass: PropTypes.string,
  fileStructureFilters: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  ),
  onCloseModal: PropTypes.func,
};

FileStructure.defaultProps = {
  structure: [],
  className: '',
  fileStructureFilters: [],
  filters: [],
};

export default FileStructure;
