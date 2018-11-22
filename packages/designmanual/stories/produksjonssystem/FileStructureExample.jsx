/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import { FileStructure, Spinner } from '@ndla/editor';
import styled, { cx, css } from 'react-emotion';
import Button from '@ndla/button';
import { colors, spacing, fonts } from '@ndla/core';
import {
  subjectTopics,
  subjects,
  allFilters,
} from '../../dummydata/mockTaxonomyStructure';

function delay(t, v) {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, v), t);
  });
}

const fetchSubjectsTopics = subjectId =>
  delay(1000).then(() => subjectTopics[subjectId]);

const AddTitle = styled('span')`
  ${fonts.sizes(16, 1.2)} font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  color: ${colors.text.primary};
  opacity: ${props => (props.show ? 1 : 0)};
  display: flex;
  align-items: center;
  padding-right: ${spacing.small};
  white-space: no-wrap;
`;

const checkboxItemCSS = css`
  border: 2px solid ${colors.brand.tertiary};
  background: transparent;
  width: 18px;
  height: 18px;
  margin: 4px ${spacing.xsmall} 4px 0;
  border-radius: 2px;
  position: relative;

  &:before {
    content: '';
    width: 0px;
    height: 2px;
    border-radius: 2px;
    position: absolute;
    background: ${colors.brand.tertiary};
    transform: rotate(45deg);
    transition: width 50ms ease;
    transform-origin: 0% 0%;
    top: 7px;
    left: 4px;
  }

  &:after {
    content: '';
    width: 0px;
    height: 2px;
    border-radius: 2px;
    position: absolute;
    background: ${colors.brand.tertiary};
    transform: rotate(305deg);
    transition: width 50ms ease;
    transform-origin: 0% 0%;
    top: 10px;
    left: 5px;
  }
`;

const checkboxItemSelectedCSS = css`
  background: ${colors.brand.primary};
  border: 2px solid ${colors.brand.primary};
  &:before {
    width: 5px;
    transition: width 100ms ease;
    background: #fff;
  }
  &:after {
    width: 10px;
    transition: width 150ms ease 100ms;
    background: #fff;
  }
`;

const checkboxItemHoverCSS = css`
  &:before {
    width: 5px;
    transition: width 100ms ease;
  }
  &:after {
    width: 10px;
    transition: width 150ms ease 100ms;
  }
`;

const ConnectionButton = styled('button')`
  border: 0;
  margin: 0 0 0 ${spacing.xsmall};
  background: none;
  transition: opacity 100ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: ${spacing.xsmall};
  color: ${colors.brand.primary};
  ${fonts.sizes(14, 1.2)} white-space: no-wrap;
  &:disabled {
    color: ${colors.brand.light};
  }
  > span:first-child {
    ${checkboxItemCSS};
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      > span:first-child {
        ${checkboxItemHoverCSS};
      }
    }
  }
  &.checkboxItem--checked {
    > span:first-child {
      ${checkboxItemSelectedCSS};
    }
  }
`;

const buttonAddition = css`
  opacity: 0;
  height: auto;
  padding: 0 ${spacing.small};
  margin: 3px ${spacing.xsmall};
  transition: background 200ms ease;
  ${fonts.sizes(14, 1.1)};
`;

const listClass = css`
  > div {
    > .filestructure {
      display: flex;
      &:focus-within {
        > button {
          opacity: 1;
        }
      }
    }
    &:hover {
      background: #f1f5f8;
      .filestructure {
        > button,
        > span {
          opacity: 1;
        }
      }
    }
  }
  &.active {
    .filestructure {
      > button,
      > span {
        opacity: 1;
      }
    }
  }
`;

class FileStructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [],
      openedPaths: [],
      loadedEssentials: false,
      fileStructureFilters: [],
      availableFilters: [],
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
  }

  componentDidMount() {
    delay(1000).then(() => {
      this.setState({
        structure: subjects,
        loadedEssentials: true,
        availableFilters: allFilters,
      });
    });
  }

  onOpenPath({ id, level }) {
    if (level === 0) {
      // already loaded?
      const index = this.state.structure.findIndex(
        subject => subject.id === id,
      );
      if (
        !this.state.structure[index].subtopics &&
        !this.state.structure[index].loading
      ) {
        this.setState(
          prevState => {
            const { structure } = prevState;
            structure[index].loading = true;
            return {
              structure,
            };
          },
          () => {
            fetchSubjectsTopics(id).then(result => {
              const { structure } = this.state;

              structure[index].subtopics = result;
              structure[index].loading = false;
              this.setState({
                structure,
              });
            });
          },
        );
      }
    }
  }

  renderListItems({ paths, level, isOpen }) {
    const { availableFilters } = this.state;

    if (level === 0) {
      if (!availableFilters[paths[0]] || !isOpen) {
        return null;
      }
      return (
        <div className={cx('filestructure')}>
          <AddTitle show>Filtrer emner:</AddTitle>
          {availableFilters[paths[0]].map(filter => (
            <ConnectionButton
              type="button"
              key={filter.id}
              className={
                this.state.fileStructureFilters.some(
                  FileStructureFilter => FileStructureFilter === filter.id,
                )
                  ? 'checkboxItem--checked'
                  : ''
              }
              onClick={() => {
                const currentIndex = this.state.fileStructureFilters.findIndex(
                  FileStructureFilter => FileStructureFilter === filter.id,
                );
                if (currentIndex === -1) {
                  this.setState(prevState => {
                    const { fileStructureFilters } = prevState;
                    fileStructureFilters.push(filter.id);
                    return {
                      fileStructureFilters,
                    };
                  });
                } else {
                  this.setState(prevState => {
                    const { fileStructureFilters } = prevState;
                    fileStructureFilters.splice(currentIndex, 1);
                    return {
                      fileStructureFilters,
                    };
                  });
                }
              }}>
              <span />
              <span>{filter.name}</span>
            </ConnectionButton>
          ))}
        </div>
      );
    }
    return (
      <div className={cx('filestructure')}>
        <Button outline className={buttonAddition} onClick={() => {}}>
          Emne funksjon
        </Button>
      </div>
    );
  }

  render() {
    const {
      loadedEssentials,
      structure,
      fileStructureFilters,
      availableFilters,
    } = this.state;

    return !loadedEssentials ? (
      <Spinner />
    ) : (
      <Fragment>
        <FileStructure
          openedPaths={this.state.openedPaths}
          structure={structure}
          toggleOpen={({ path, id, level }) => {
            this.setState(prevState => {
              const filtered = prevState.openedPaths.filter(p => p !== path);
              if (filtered.length === prevState.openedPaths.length) {
                this.onOpenPath({ id, level });
                return { openedPaths: [...prevState.openedPaths, path] };
              }
              return { openedPaths: filtered };
            });
          }}
          renderListItems={this.renderListItems}
          listClass={listClass}
          fileStructureFilters={fileStructureFilters}
          filters={availableFilters}
        />
      </Fragment>
    );
  }
}

export default FileStructureExample;
