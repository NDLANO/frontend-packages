/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import styled from 'react-emotion';
import { NdlaFilmMovieList, NdlaFilmThemeEditorModal } from '@ndla/editor';
import { FormHeader, FormDropdown, FormHeaderIconClass } from '@ndla/forms';
import { uuid } from '@ndla/util';
import Modal from '@ndla/modal';
import { spacing } from '@ndla/core';
import Button from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { injectT } from '@ndla/i18n';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';
import { DeleteForever } from '@ndla/icons/editor';
import { Pencil } from '@ndla/icons/action';

import {
  mockAllMovies,
  mockHighlightedMovies,
  movieThemes as themes,
} from '../../dummydata';

const StyledSection = styled('section')`
  margin-top: ${spacing.spacingUnit * 4}px;
`;

const StyledThemeWrapper = styled('div')`
  margin-bottom: ${spacing.large};
`;

class NdlaFilmExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMovies: mockHighlightedMovies,
      themes,
      newTheme: {
        name: {
          nb: '',
          nn: '',
          en: '',
        },
        warnings: {
          nb: false,
          nn: false,
          en: false,
        },
      },
    };
    this.onSaveThemeChanges = this.onSaveThemeChanges.bind(this);
    this.onEditTheme = this.onEditTheme.bind(this);
  }

  onMoveTheme(index, direction) {
    if (
      index + direction >= 0 &&
      this.state.themes.length > index + direction
    ) {
      this.setState(prevState => {
        const { themes } = prevState;
        const moveTheme = themes[index];
        themes.splice(index, 1);
        themes.splice(index + direction, 0, moveTheme);
        return {
          themes,
        };
      });
    }
  }

  onDeleteTheme(index) {
    this.setState(prevState => {
      const { themes } = prevState;
      themes.splice(index, 1);
      return {
        themes,
      };
    });
  }

  onSaveThemeChanges() {
    // Only allow if all fields are filled in and return ok status
    const { name } = this.state.newTheme;
    const errors = Object.keys(name).filter(key => name[key].length < 2);
    if (errors.length === 0) {
      this.setState(prevState => {
        const { themes, editingThemeIndex, newTheme } = prevState;
        if (editingThemeIndex === -1) {
          newTheme.movies = [];
          newTheme.id = uuid();
          themes.unshift(newTheme);
        } else {
          themes[editingThemeIndex].name = newTheme.name;
        }
        return {
          themes,
        };
      });
      return true;
    }
    this.setState(prevState => {
      const { newTheme } = prevState;
      newTheme.warnings.nb = errors.includes('nb') ? 'error' : undefined;
      newTheme.warnings.nn = errors.includes('nn') ? 'error' : undefined;
      newTheme.warnings.en = errors.includes('en') ? 'error' : undefined;
    });
    return false;
  }

  onEditTheme({ value, lang }) {
    this.setState(prevState => {
      const { newTheme } = prevState;
      newTheme.name[lang] = value;
      newTheme.warnings[lang] = undefined;
      return {
        newTheme,
      };
    });
  }

  onAddMovieToTheme(id, index) {
    const movie = mockAllMovies.find(movie => movie.id === id);
    this.setState(prevState => {
      const { themes } = prevState;
      themes[index].movies.push(movie);
      return {
        themes,
      };
    });
  }

  onAddMovieToSlideshow(id) {
    const movie = mockAllMovies.find(movie => movie.id === id);
    this.setState(prevState => {
      const { mainMovies } = prevState;
      mainMovies.push(movie);
      return {
        mainMovies,
      };
    });
  }

  movieThemeUpdate(updates, index) {
    this.setState(prevState => {
      const { themes } = prevState;
      themes[index].movies = updates;
      return {
        themes,
      };
    });
  }

  renderAddMovieOptions(addedMovies) {
    return mockAllMovies
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .map(movie => (
        <option
          key={movie.id}
          value={movie.id}
          disabled={addedMovies.some(addedMovie => addedMovie.id === movie.id)}>
          {movie.title}
        </option>
      ));
  }

  render() {
    const { mainMovies, themes, editingThemeIndex } = this.state;

    const { t } = this.props;

    return (
      <>
        <StyledSection>
          <h1>{t('ndlaFilm.editor.slideshowHeader')}</h1>
          <FormHeader
            title={t('ndlaFilm.editor.slideshowTitle')}
            subTitle={t('ndlaFilm.editor.slideshowSubTitle')}
          />
          <NdlaFilmMovieList
            id="slideshowId"
            movies={mainMovies}
            messages={{
              dragFilm: t('ndlaFilm.editor.changeOrder'),
              removeFilm: t('ndlaFilm.editor.removeMovieFromSlideshow'),
            }}
            onUpdateMovies={updates => {
              this.setState({
                mainMovies: updates,
              });
            }}
          />
          <FormDropdown
            value=""
            onChange={e => this.onAddMovieToSlideshow(e.target.value)}>
            <option value="">{t('ndlaFilm.editor.addMovieToSlideshow')}</option>
            {this.renderAddMovieOptions(mainMovies)}
          </FormDropdown>
        </StyledSection>
        <StyledSection>
          <h1>{t('ndlaFilm.editor.movieGroupHeader')}</h1>
          <Modal
            narrow
            onClick={() => {
              this.setState({
                editingThemeIndex: -1,
                newTheme: {
                  name: {
                    nb: '',
                    nn: '',
                    en: '',
                  },
                  warnings: {
                    nb: undefined,
                    nn: undefined,
                    en: undefined,
                  },
                },
              });
            }}
            activateButton={<Button>Lag ny gruppe</Button>}>
            {onClose => (
              <NdlaFilmThemeEditorModal
                onClose={onClose}
                onSave={this.onSaveThemeChanges}
                theme={this.state.newTheme}
                onEditName={this.onEditTheme}
                messages={{
                  save: t('ndlaFilm.editor.createThemeGroup'),
                  cancel: t('ndlaFilm.editor.cancel'),
                  title: t('ndlaFilm.editor.newGroupTitle'),
                }}
              />
            )}
          </Modal>
          {themes.map((theme, index) => (
            <StyledThemeWrapper key={theme.id}>
              <FormHeader
                title={theme.name.nb}
                subTitle={` | ${theme.name.nn} | ${theme.name.en}`}>
                <Modal
                  narrow
                  onClick={() => {
                    this.setState({
                      editingThemeIndex: index,
                      newTheme: {
                        name: {
                          nb: theme.name.nb,
                          nn: theme.name.nn,
                          en: theme.name.en,
                        },
                        warnings: {
                          nb: undefined,
                          nn: undefined,
                          en: undefined,
                        },
                      },
                    });
                  }}
                  wrapperFunctionForButton={activateButton => (
                    <Tooltip tooltip={t('ndlaFilm.editor.editMovieGroupName')}>
                      {activateButton}
                    </Tooltip>
                  )}
                  activateButton={
                    <button className={FormHeaderIconClass} tabIndex={-1}>
                      <Pencil />
                    </button>
                  }>
                  {onClose => (
                    <NdlaFilmThemeEditorModal
                      onClose={onClose}
                      onSave={this.onSaveThemeChanges}
                      theme={this.state.newTheme}
                      onEditName={this.onEditTheme}
                      messages={{
                        save: t('ndlaFilm.editor.saveNameChanges'),
                        cancel: t('ndlaFilm.editor.cancel'),
                        title: t('ndlaFilm.editor.editGroupTitle'),
                      }}
                    />
                  )}
                </Modal>
                <Tooltip
                  tooltip={t('ndlaFilm.editor.deleteMovieGroup', {
                    name: theme.name.nb,
                  })}>
                  <button
                    className={FormHeaderIconClass}
                    tabIndex={-1}
                    onClick={() => this.onDeleteTheme(index)}>
                    <DeleteForever />
                  </button>
                </Tooltip>
                <Tooltip tooltip={t('ndlaFilm.editor.moveMovieGroupUp')}>
                  <button
                    className={FormHeaderIconClass}
                    tabIndex={-1}
                    onClick={() => this.onMoveTheme(index, -1)}>
                    <ChevronUp />
                  </button>
                </Tooltip>
                <Tooltip tooltip={t('ndlaFilm.editor.moveMovieGroupDown')}>
                  <button
                    className={FormHeaderIconClass}
                    tabIndex={-1}
                    onClick={() => this.onMoveTheme(index, 1)}>
                    <ChevronDown />
                  </button>
                </Tooltip>
              </FormHeader>
              <NdlaFilmMovieList
                movies={theme.movies}
                messages={{
                  dragFilm: t('ndlaFilm.editor.changeOrder'),
                  removeFilm: t('ndlaFilm.editor.removeMovieFromGroup'),
                }}
                id={theme.id}
                onUpdateMovies={updates =>
                  this.movieThemeUpdate(updates, index)
                }
              />
              <FormDropdown
                value=""
                onChange={e => this.onAddMovieToTheme(e.target.value, index)}>
                <option value="">
                  {t('ndlaFilm.editor.addMovieToGroup', {
                    name: theme.name.nb,
                  })}
                </option>
                {this.renderAddMovieOptions(theme.movies)}
              </FormDropdown>
            </StyledThemeWrapper>
          ))}
        </StyledSection>
      </>
    );
  }
}

export default injectT(NdlaFilmExample);
