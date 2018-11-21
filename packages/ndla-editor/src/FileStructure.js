/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
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

class FileStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedPaths: props.openedPaths.map(path => path.toString()),
    };
  }

  handleOpenToggle(path, id, level) {
    this.setState(prevState => {
      let { openedPaths } = prevState;
      const index = openedPaths.indexOf(path);
      if (index === -1) {
        // Has other subjects open and !allowMultipleSubjectsOpen?
        if (level === 0 && !this.props.allowMultipleSubjectsOpen) {
          openedPaths = [];
        }
        openedPaths.push(path);
        if (this.props.onOpenPath) {
          this.props.onOpenPath({ id, level });
        }
      } else {
        openedPaths.splice(index, 1);
      }
      return {
        openedPaths,
      };
    });
  }

  renderItems(topics, paths, names, subjectId) {
    const level = paths.length;
    const { openedPaths } = this.state;
    const {
      renderListItems,
      listClass,
      fileStructureFilters,
      filters,
      onCloseModal,
    } = this.props;

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
            const hasSubtopics = topic.subtopics && topic.subtopics.length > 1;
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
                      this.handleOpenToggle(pathToString, topic.id, level)
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
                    this.renderItems(
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
  }

  render() {
    const { structure } = this.props;
    return this.renderItems(structure, [], []);
  }
}

FileStructure.propTypes = {
  structure: PropTypes.arrayOf(PropTypes.shape()),
  openedPaths: PropTypes.arrayOf(PropTypes.string),
  renderListItems: PropTypes.func,
  listClass: PropTypes.string,
  onOpenPath: PropTypes.func,
  fileStructureFilters: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.shape(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  ),
  allowMultipleSubjectsOpen: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

FileStructure.defaultProps = {
  structure: [],
  openedPaths: [],
  className: '',
  fileStructureFilters: [],
  filters: [],
  allowMultipleSubjectsOpen: false,
};

export default FileStructure;
