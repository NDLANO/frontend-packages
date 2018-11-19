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
import { spacing, colors, fonts } from '@ndla/core';

const Spinner = styled.span`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-bottom-color: ${colors.brand.primary};
  border-radius: 50%;
  animation: loadVideoSpinner 0.7s linear infinite;
  height: 22px;
  width: 22px;
  display: block;
  margin: 4px 17px;
`;

const ItemListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const itemTitleArrow = css`
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid ${colors.text.primary};
    margin-right: ${spacing.xsmall};
  }
`;

const itemTitleLinked = css`
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid ${colors.brand.light};
    border-left: 2px solid ${colors.brand.light};
    border-bottom-left-radius: 2px;
    margin-right: ${spacing.xsmall};
    margin-left: 7px;
  }
`;

const ItemTitleButton = styled.button`
  ${fonts.sizes(16, 1)} font-weight: ${fonts.weight.semibold};
  border: 0;
  background: 0;
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  text-align: left;
  white-space: nowrap;
  ${props => props.arrowDirection !== undefined && itemTitleArrow};
  ${props =>
    props.arrowDirection === undefined &&
    !props.isMainTopic &&
    itemTitleLinked};
  &:before {
    transition: transform 200ms ease;
    transform: rotate(${props => props.arrowDirection}deg);
  }
`;

const ItemTitleSpan = ItemTitleButton.withComponent('span');

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

const itemNameStyling = css`
  display: flex;
  justify-content: space-between;
`;

const ItemName = ({
  title,
  children,
  path,
  toggleOpen,
  hasSubtopics,
  isOpen,
  level,
}) => (
  <div className={itemNameStyling}>
    {hasSubtopics ? (
      <ItemTitleButton
        type="button"
        arrowDirection={isOpen ? 90 : 0}
        onClick={() => toggleOpen(path)}>
        {title}
      </ItemTitleButton>
    ) : (
      <ItemTitleSpan isMainTopic={level === 0}>{title}</ItemTitleSpan>
    )}
    {children}
  </div>
);

ItemName.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  hasSubtopics: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool,
  level: PropTypes.number,
};

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
          openedPaths = openedPaths.filter(
            openPath =>
              !this.props.structure.some(subject => subject.id === openPath),
          );
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
      FileStructureFilters,
      filters,
    } = this.props;

    const ignoreFilter =
      level === 0 ||
      !filters[subjectId].some(filter =>
        FileStructureFilters.includes(filter.id),
      );

    return (
      <ItemListWrapper>
        {topics
          .filter(
            topic =>
              ignoreFilter ||
              topic.filters.some(topicFilter =>
                FileStructureFilters.includes(topicFilter.id),
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
                      })}
                  </ItemName>
                  {hasSubtopics &&
                    this.renderItems(
                      topic.subtopics,
                      currentPaths,
                      currentNames,
                      level === 0 ? topic.id : subjectId,
                    )}
                  {topic.loading && <Spinner />}
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
  FileStructureFilters: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.shape(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  ),
  allowMultipleSubjectsOpen: PropTypes.bool,
};

FileStructure.defaultProps = {
  structure: [],
  openedPaths: [],
  className: '',
  FileStructureFilters: [],
  filters: [],
  allowMultipleSubjectsOpen: false,
};

export default FileStructure;
