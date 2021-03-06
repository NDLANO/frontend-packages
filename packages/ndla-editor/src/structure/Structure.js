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

import Spinner from '../Spinner';
import ItemNameBar from './ItemNameBar';
import MakeDNDList from './MakeDNDList';
import Fade from './Fade';

const StructureWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledStructureItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.greyedOut &&
    css`
      > div > button {
        color: rgb(32, 88, 143, 0.5);
      }
    `};
`;

const Structure = ({
  renderListItems,
  structure,
  openedPaths,
  toggleOpen,
  highlightMainActive,
  currentPath,
  DND,
  isMainActive,
  onDragEnd,
  isOpen,
  favoriteSubjectIds,
  toggleFavorite,
}) => {
  const isSubject = currentPath.length === 0;
  const enableDND = DND && isMainActive && structure.length > 1;
  return (
    <StructureWrapper>
      <Fade show={isOpen} fadeType="fadeInTop">
        <MakeDNDList disableDND={!enableDND} dragHandle onDragEnd={onDragEnd}>
          {structure.map(({ id, connectionId, name, topics, subtopics, loading, metadata, ...rest }) => {
            const currentPathIds = [...currentPath, id];
            const children = topics || subtopics;
            const pathToString = currentPathIds.join('/');
            const parentId = currentPath.slice(-1);
            const isOpen = openedPaths.includes(pathToString);
            const isNewMainActive = openedPaths.slice(-1).pop() === pathToString;
            const greyedOut = highlightMainActive
              ? !isNewMainActive && !isMainActive && openedPaths.length > 0
              : !isOpen && isSubject && openedPaths.length > 0;
            const isVisible = metadata !== undefined ? metadata.visible : true;
            return (
              <StyledStructureItem connectionId={connectionId} key={pathToString} greyedOut={greyedOut}>
                <ItemNameBar
                  highlight={highlightMainActive ? isNewMainActive : isOpen && isSubject}
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
                      parent: rest.parent,
                    })
                  }
                  isSubject={isSubject}
                  isVisible={isVisible}
                  favoriteSubjectIds={favoriteSubjectIds}
                  toggleFavorite={() => toggleFavorite(id)}>
                  {renderListItems &&
                    renderListItems({
                      pathToString,
                      isSubject,
                      subjectId: currentPathIds[0],
                      isOpen,
                      id,
                      name,
                      metadata,
                      isMainActive: isNewMainActive,
                      ...rest,
                    })}
                </ItemNameBar>
                {loading ? (
                  <span>
                    <Spinner size="normal" margin="4px 26px" />
                  </span>
                ) : (
                  <Structure
                    structure={children}
                    currentPath={currentPathIds}
                    openedPaths={openedPaths}
                    toggleOpen={toggleOpen}
                    renderListItems={renderListItems}
                    highlightMainActive={highlightMainActive}
                    isMainActive={isNewMainActive}
                    DND={DND}
                    isOpen={isOpen}
                    onDragEnd={onDragEnd}
                  />
                )}
              </StyledStructureItem>
            );
          })}
        </MakeDNDList>
      </Fade>
    </StructureWrapper>
  );
};

function lazyFunction(f) {
  return function () {
    return f.apply(this, arguments);
  };
}

const lazyItemShape = lazyFunction(function () {
  return ItemShape;
});

const ItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line no-use-before-define
  topics: PropTypes.arrayOf(lazyItemShape),
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
  favoriteSubjectIds: PropTypes.arrayOf(PropTypes.string),
  toggleFavorite: PropTypes.func,
};

Structure.defaultProps = {
  structure: [],
  className: '',
  isSubject: true,
  currentPath: [],
};

export default Structure;
