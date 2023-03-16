/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { MovieList, NdlaFilmThemeEditorModal } from '@ndla/editor';
import { FieldHeader, Select, FieldHeaderIconStyle } from '@ndla/forms';
import Modal from '@ndla/modal';
import { spacing, spacingUnit } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { withTranslation } from 'react-i18next';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';
import { DeleteForever } from '@ndla/icons/editor';
import { Pencil } from '@ndla/icons/action';

import { mockAllMovies, mockHighlightedMovies, movieThemes as themes } from '../../dummydata';

const StyledSection = styled('section')`
  margin-top: ${spacingUnit * 4}px;
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
    this.onMoveTheme = this.onMoveTheme.bind(this);
    this.onDeleteTheme = this.onDeleteTheme.bind(this);
    this.onAddMovieToTheme = this.onAddMovieToTheme.bind(this);
    this.movieThemeUpdate = this.movieThemeUpdate.bind(this);
    this.renderAddMovieOptions = this.renderAddMovieOptions.bind(this);
  }

  onMoveTheme(index, direction) {
    if (index + direction >= 0 && this.state.themes.length > index + direction) {
      this.setState((prevState) => {
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
    this.setState((prevState) => {
      const { themes } = prevState;
      themes.splice(index, 1);
      return {
        themes,
      };
    });
  }

  onAddMovieToTheme(id, index) {
    const movie = mockAllMovies.find((movie) => movie.id === id);
    this.setState((prevState) => {
      const { themes } = prevState;
      themes[index].movies.push(movie);
      return {
        themes,
      };
    });
  }

  onAddMovieToSlideshow(id) {
    const movie = mockAllMovies.find((movie) => movie.id === id);
    this.setState((prevState) => {
      const { mainMovies } = prevState;
      mainMovies.push(movie);
      return {
        mainMovies,
      };
    });
  }

  movieThemeUpdate(updates, index) {
    this.setState((prevState) => {
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
      .map((movie) => (
        <option key={movie.id} value={movie.id} disabled={addedMovies.some((addedMovie) => addedMovie.id === movie.id)}>
          {movie.title}
        </option>
      ));
  }

  render() {
    const { mainMovies, themes } = this.state;

    const { t } = this.props;

    return (
      <>
        <StyledSection>
          <h1>{t('ndlaFilm.editor.slideshowHeader')}</h1>
          <FieldHeader title={t('ndlaFilm.editor.slideshowTitle')} subTitle={t('ndlaFilm.editor.slideshowSubTitle')} />
          <MovieList
            id="slideshowId"
            movies={mainMovies}
            messages={{
              dragFilm: t('ndlaFilm.editor.changeOrder'),
              removeFilm: t('ndlaFilm.editor.removeMovieFromSlideshow'),
            }}
            onUpdateMovies={(updates) => {
              this.setState({
                mainMovies: updates,
              });
            }}
          />
          <Select value="" onChange={(e) => this.onAddMovieToSlideshow(e.target.value)}>
            <option value="">{t('ndlaFilm.editor.addMovieToSlideshow')}</option>
            {this.renderAddMovieOptions(mainMovies)}
          </Select>
        </StyledSection>
        <StyledSection>
          <h1>{t('ndlaFilm.editor.movieGroupHeader')}</h1>
          <Modal
            narrow
            onClick={() => {
              this.setState({
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
            activateButton={<ButtonV2>Lag ny gruppe</ButtonV2>}
          >
            {(onClose) => (
              <NdlaFilmThemeEditorModal
                onClose={onClose}
                onEditName={() => {}}
                onSave={() => {}}
                theme={this.state.newTheme}
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
              <FieldHeader title={theme.name.nb} subTitle={` | ${theme.name.nn} | ${theme.name.en}`}>
                <Modal
                  narrow
                  onClick={() => {
                    this.setState({
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
                  wrapperFunctionForButton={(activateButton) => (
                    <Tooltip tooltip={t('ndlaFilm.editor.editMovieGroupName')}>{activateButton}</Tooltip>
                  )}
                  activateButton={
                    <button type="button" css={FieldHeaderIconStyle} tabIndex={-1}>
                      <Pencil />
                    </button>
                  }
                >
                  {(onClose) => (
                    <NdlaFilmThemeEditorModal
                      onClose={onClose}
                      onEditName={() => {}}
                      onSave={() => {}}
                      theme={this.state.newTheme}
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
                  })}
                >
                  <button
                    type="button"
                    css={FieldHeaderIconStyle}
                    tabIndex={-1}
                    onClick={() => this.onDeleteTheme(index)}
                  >
                    <DeleteForever />
                  </button>
                </Tooltip>
                <Tooltip tooltip={t('ndlaFilm.editor.moveMovieGroupUp')}>
                  <button
                    type="button"
                    css={FieldHeaderIconStyle}
                    tabIndex={-1}
                    onClick={() => this.onMoveTheme(index, -1)}
                  >
                    <ChevronUp />
                  </button>
                </Tooltip>
                <Tooltip tooltip={t('ndlaFilm.editor.moveMovieGroupDown')}>
                  <button
                    type="button"
                    css={FieldHeaderIconStyle}
                    tabIndex={-1}
                    onClick={() => this.onMoveTheme(index, 1)}
                  >
                    <ChevronDown />
                  </button>
                </Tooltip>
              </FieldHeader>
              <MovieList
                movies={theme.movies}
                messages={{
                  dragFilm: t('ndlaFilm.editor.changeOrder'),
                  removeFilm: t('ndlaFilm.editor.removeMovieFromGroup'),
                }}
                id={theme.id}
                onUpdateMovies={(updates) => this.movieThemeUpdate(updates, index)}
              />
              <Select value="" onChange={(e) => this.onAddMovieToTheme(e.target.value, index)}>
                <option value="">
                  {t('ndlaFilm.editor.addMovieToGroup', {
                    name: theme.name.nb,
                  })}
                </option>
                {this.renderAddMovieOptions(theme.movies)}
              </Select>
            </StyledThemeWrapper>
          ))}
        </StyledSection>
      </>
    );
  }
}

export default withTranslation()(NdlaFilmExample);
