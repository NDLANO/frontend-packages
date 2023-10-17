/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, Fragment } from 'react';
import { Structure } from '@ndla/editor';
import { Spinner } from '@ndla/icons';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonV2 } from '@ndla/button';
import { colors, spacing, fonts } from '@ndla/core';
import { AlertCircle } from '@ndla/icons/editor';
import Tooltip from '@ndla/tooltip';
import { subjectTopics, subjects, allFilters, favoriteSubjects } from '../../dummydata/mockTaxonomyStructure';

function delay(t, v) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, v), t);
  });
}

const fetchSubjectsTopics = (subjectId) => delay(1000).then(() => subjectTopics[subjectId]);

let fetchFavoriteSubjectIds = [].concat(favoriteSubjects);

const AddTitle = styled('span')`
  ${fonts.sizes(16, 1.2)};
  font-weight: ${fonts.weight.semibold};
  text-transform: uppercase;
  color: ${colors.text.primary};
  opacity: ${(props) => (props.show ? 1 : 0)};
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
  ${fonts.sizes(14, 1.2)};
  white-space: no-wrap;
  &:disabled {
    color: ${colors.brand.light};
  }
  > span:first-of-type {
    ${checkboxItemCSS};
  }
  &:not(:disabled) {
    &:hover,
    &:focus {
      > span:first-of-type {
        ${checkboxItemHoverCSS};
      }
    }
  }
  &.checkboxItem--checked {
    > span:first-of-type {
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

const StyledButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  &:focus-within {
    > button {
      opacity: 1;
    }
  }

  div:hover > & {
    background: #f1f5f8;
    > button,
    > span {
      opacity: 1;
    }
  }

  div:active > & {
    > button,
    > span {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledWarnIcon = styled(AlertCircle)`
  height: ${spacing.nsmall};
  width: ${spacing.nsmall};
  fill: ${colors.support.red};
`;

class StructureExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [],
      openedPaths: [],
      loadedEssentials: false,
      activeFilters: [],
      availableFilters: [],
    };
    this.renderListItems = this.renderListItems.bind(this);
    this.renderBeforeTitles = this.renderBeforeTitles.bind(this);
    this.onOpenPath = this.onOpenPath.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
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

  onOpenPath({ id, isSubject }) {
    if (isSubject) {
      // already loaded?
      const index = this.state.structure.findIndex((subject) => subject.id === id);
      if (!this.state.structure[index].topics && !this.state.structure[index].loading) {
        this.setState(
          (prevState) => {
            const { structure } = prevState;
            structure[index].loading = true;
            return {
              structure,
            };
          },
          () => {
            fetchSubjectsTopics(id).then((result) => {
              const { structure } = this.state;

              structure[index].topics = result;
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

  toggleFavorite(subjectId) {
    if (!fetchFavoriteSubjectIds.includes(subjectId)) {
      fetchFavoriteSubjectIds.push(subjectId);
    } else {
      fetchFavoriteSubjectIds = fetchFavoriteSubjectIds.filter((id) => id !== subjectId);
    }
    this.forceUpdate();
  }

  renderBeforeTitles({ id }) {
    if (id !== 'urn:topic:1:183520') return null;

    const text = 'Noe galt med dette emnet';
    return (
      <Tooltip tooltip={text}>
        <StyledWarnIcon title={text} />
      </Tooltip>
    );
  }

  renderListItems({ subjectId, isSubject, isOpen }) {
    const { availableFilters } = this.state;

    if (isSubject) {
      if (!availableFilters[subjectId] || !isOpen) {
        return <Wrapper />;
      }
      return (
        <Wrapper>
          <StyledButtonWrapper>
            <AddTitle show>Filtrer emner:</AddTitle>
            {availableFilters[subjectId].map((filter) => (
              <ConnectionButton
                type="button"
                key={filter.id}
                className={
                  this.state.activeFilters.some((StructureFilter) => StructureFilter === filter.id)
                    ? 'checkboxItem--checked'
                    : ''
                }
                onClick={() => {
                  const currentIndex = this.state.activeFilters.findIndex(
                    (StructureFilter) => StructureFilter === filter.id,
                  );
                  if (currentIndex === -1) {
                    this.setState((prevState) => {
                      const { activeFilters } = prevState;
                      activeFilters.push(filter.id);
                      return {
                        activeFilters,
                      };
                    });
                  } else {
                    this.setState((prevState) => {
                      const { activeFilters } = prevState;
                      activeFilters.splice(currentIndex, 1);
                      return {
                        activeFilters,
                      };
                    });
                  }
                }}
              >
                <span />
                <span>{filter.name}</span>
              </ConnectionButton>
            ))}
          </StyledButtonWrapper>
        </Wrapper>
      );
    }
    return (
      <StyledButtonWrapper>
        <ButtonV2 variant="outline" css={buttonAddition} onClick={() => {}}>
          Emne funksjon
        </ButtonV2>
      </StyledButtonWrapper>
    );
  }

  render() {
    const { loadedEssentials, structure, activeFilters, availableFilters } = this.state;

    return !loadedEssentials ? (
      <Spinner />
    ) : (
      <Fragment>
        <Structure
          DND={this.props.structureEditor}
          openedPaths={this.state.openedPaths}
          highlightMainActive={this.props.structureEditor}
          renderBeforeTitles={this.renderBeforeTitles}
          structure={structure}
          toggleOpen={({ path, id, isSubject }) => {
            this.setState((prevState) => {
              const filtered = prevState.openedPaths.filter((p) => p !== path);
              if (filtered.length === prevState.openedPaths.length) {
                this.onOpenPath({ id, isSubject });
                return { openedPaths: [...prevState.openedPaths, path] };
              }
              return { openedPaths: filtered };
            });
          }}
          renderListItems={this.renderListItems}
          activeFilters={activeFilters}
          filters={availableFilters}
          toggleFavorite={this.toggleFavorite}
          favoriteSubjectIds={fetchFavoriteSubjectIds}
        />
      </Fragment>
    );
  }
}

export default StructureExample;
