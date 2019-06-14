/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '@ndla/core';
import Spinner from './Spinner';
import ItemNameBar from './ItemNameBar';

const StructureWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledStructureItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
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
  activeFilters,
  filters: subjectFilters,
  structure,
  openedPaths,
  toggleOpen,
  highlightMainActive,
  currentPath,
}) => {
  const isSubject = currentPath.length === 0;
  const ignoreFilter =
    isSubject ||
    !subjectFilters[currentPath[0]] ||
    !subjectFilters[currentPath[0]].some(filter =>
      activeFilters.includes(filter.id),
    );
  const filteredStructure = useMemo(
    () =>
      structure.filter(
        subjectOrTopic =>
          ignoreFilter ||
          subjectOrTopic.filters.some(topicFilter =>
            activeFilters.includes(topicFilter.id),
          ),
      ),
    [structure, activeFilters],
  );

  return (
    <StructureWrapper>
      {filteredStructure.map(
        ({ id, name, topics, subtopics, filters, loading, ...rest }) => {
          const currentPathIds = [...currentPath, id];
          const children = topics || subtopics;
          const pathToString = currentPathIds.join('/');
          const parentId = currentPath.slice(-1);
          const isOpen = openedPaths.includes(pathToString);
          const isMainActive = openedPaths.slice(-1).pop() === pathToString;
          return (
            <StyledStructureItem
              key={pathToString}
              highlight={
                highlightMainActive ? isMainActive : isOpen && isSubject
              }
              isOpen={isOpen}
              greyedOut={!isOpen && isSubject && openedPaths.length > 0}>
              <ItemNameBar
                isOpen={isOpen}
                title={name}
                level={currentPath.length}
                lastItemClickable={highlightMainActive}
                path={pathToString}
                id={id.includes('topic') ? `${parentId}/${id}` : id}
                hasSubtopics={!!children || isSubject}
                toggleOpen={() =>
                  toggleOpen({
                    path: pathToString,
                    isSubject,
                    id,
                  })
                }
                isSubject={isSubject}>
                {renderListItems &&
                  renderListItems({
                    pathToString,
                    filters,
                    isSubject,
                    subjectId: currentPathIds[0],
                    isOpen,
                    id,
                    name,
                    ...rest,
                  })}
              </ItemNameBar>
              {children && (
                <Structure
                  structure={children}
                  currentPath={currentPathIds}
                  filters={subjectFilters}
                  openedPaths={openedPaths}
                  toggleOpen={toggleOpen}
                  activeFilters={activeFilters}
                  renderListItems={renderListItems}
                  highlightMainActive={highlightMainActive}
                />
              )}
              {loading && (
                <span>
                  <Spinner size="normal" margin="4px 26px" />
                </span>
              )}
            </StyledStructureItem>
          );
        },
      )}
    </StructureWrapper>
  );
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
  activeFilters: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.objectOf(PropTypes.arrayOf(FilterShape)),
};

Structure.defaultProps = {
  structure: [],
  className: '',
  activeFilters: [],
  isSubject: true,
  currentPath: [],
};

export default Structure;
