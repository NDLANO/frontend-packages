/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import { spacing, colors, fonts, shadows, animations, misc } from '@ndla/core';
import { FormDropdown } from '@ndla/forms';
import { uuid } from '@ndla/util';
import Button from '@ndla/button';
import { Pencil, Cross } from '@ndla/icons/action';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';

const MovieImage = styled.div`
  width: 80px;
  height: 60px;
  margin-right: ${spacing.normal};
  background-position: center center;
  background-size: cover;
`;

const MovieSelected = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -${spacing.xsmall};
  transition: background 50ms ease;
  padding: ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MovieTitle = styled.h3`
    ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
    margin: ${spacing.small} 0;
`;

const Header = styled.h1`
${fonts.sizes(26, 1.1)} font-weight: ${fonts.weight.semibold};
    margin: ${spacing.normal} 0;
`;

const IconButton = styled.button`
  background: none;
  border: 0;
  margin: 0 ${spacing.xsmall} 0 0;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  transition: background 100ms ease;
  svg {
    fill: #fff;
    width: 22px;
    height: 22px;
  }
  &:hover,
  &:focus {
    background: #20588f;
  }
`;

const ButtonWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: ${spacing.large};
  color: #fff;
  a {
    color: #fff;
  }
  > section {
    margin-bottom: ${spacing.large};
  }
`;

const ThemeNameHeader = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${spacing.small};
  margin-bottom: ${spacing.small};
  margin-top: ${spacing.medium};
  padding-top: ${spacing.normal};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover,
  &:focus-within {
    svg {
      opacity: 1;
    }
  }
`;

const SlideShowName = styled.h2`
${fonts.sizes(20, 1.1)} font-weight: ${fonts.weight.semibold};
margin-left: -${spacing.normal};
color: #fff;
padding: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.medium};
`;

const inputHeader = css`
${fonts.sizes(20, 1.1)} font-weight: ${fonts.weight.semibold};
    margin-left: -${spacing.normal};
    color: #fff;
    padding: ${spacing.small} ${spacing.small} ${spacing.small} ${
  spacing.medium
};
    border: 0;
    background: transparent;
`;

const dropdownBtn = css`
  ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
  width: 240px;
  height: 42px;
`;

const Avatar = styled.div`
  width: ${spacing.medium};
  height: ${spacing.medium};
  margin: 0 ${spacing.small} 0 0;
  border-radius: 100%;
  background-position: center center;
  background-size: cover;
`;

const UserHeader = styled.aside`
  display: flex;
`;

const ThemeName = ({ value, onChange }) => (
  <InputWrapper>
    <Pencil />
    <input className={inputHeader} value={value} onChange={onChange} />
  </InputWrapper>
);

ThemeName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

class NdlaFilmEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsavedChanges: false,
      firebaseData: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.unsavedChanges) {
      return {
        firebaseData: props.firebaseData,
      };
    }
    return {};
  }

  addItem(key, themeKey) {
    if (themeKey) {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        Object.keys(updateFirebaseData.themes[themeKey].movies).forEach(
          movieKey => {
            updateFirebaseData.themes[themeKey].movies[movieKey] += 1;
          },
        );
        updateFirebaseData.themes[themeKey].movies[key] = 0;
        return { firebaseData: updateFirebaseData, unsavedChanges: true };
      });
    } else {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        Object.keys(updateFirebaseData.highlighted).forEach(highlightKey => {
          updateFirebaseData.highlighted[highlightKey] += 1;
        });
        updateFirebaseData.highlighted[key] = 0;
        return { firebaseData: updateFirebaseData, unsavedChanges: true };
      });
    }
  }

  addNewMovieGroup() {
    this.setState(prevState => {
      const { firebaseData: updateFirebaseData } = prevState;
      updateFirebaseData.themes[uuid()] = {
        name: 'Velg navn',
        movies: {},
      };
      return {
        firebaseData: updateFirebaseData,
      };
    });
  }

  changeOrder(key, direction, themeKey) {
    if (themeKey) {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        const currentNumber = updateFirebaseData.themes[themeKey].movies[key];
        const replaceKey = Object.keys(
          updateFirebaseData.themes[themeKey].movies,
        ).find(
          highlightKey =>
            updateFirebaseData.themes[themeKey].movies[highlightKey] ===
            currentNumber - direction,
        );
        if (replaceKey) {
          updateFirebaseData.themes[themeKey].movies[replaceKey] += direction;
          updateFirebaseData.themes[themeKey].movies[key] -= direction;
          return { firebaseData: updateFirebaseData, unsavedChanges: true };
        }
        return {};
      });
    } else {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        const currentNumber = updateFirebaseData.highlighted[key];
        const replaceKey = Object.keys(updateFirebaseData.highlighted).find(
          highlightKey =>
            updateFirebaseData.highlighted[highlightKey] ===
            currentNumber - direction,
        );
        if (replaceKey) {
          updateFirebaseData.highlighted[replaceKey] += direction;
          updateFirebaseData.highlighted[key] -= direction;
          return { firebaseData: updateFirebaseData, unsavedChanges: true };
        }
        return {};
      });
    }
  }

  deleteMovie(key, themeKey) {
    if (themeKey) {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        const oldIndex = updateFirebaseData.themes[themeKey].movies[key];
        Object.keys(updateFirebaseData.themes[themeKey].movies).forEach(
          highlightKey => {
            if (
              updateFirebaseData.themes[themeKey].movies[highlightKey] >
              oldIndex
            ) {
              updateFirebaseData.themes[themeKey].movies[highlightKey] -= 1;
            }
          },
        );
        delete updateFirebaseData.themes[themeKey].movies[key];
        return { firebaseData: updateFirebaseData, unsavedChanges: true };
      });
    } else {
      this.setState(prevState => {
        const { firebaseData: updateFirebaseData } = prevState;
        const oldIndex = updateFirebaseData.highlighted[key];
        Object.keys(updateFirebaseData.highlighted).forEach(highlightKey => {
          if (updateFirebaseData.highlighted[highlightKey] > oldIndex) {
            updateFirebaseData.highlighted[highlightKey] -= 1;
          }
        });
        delete updateFirebaseData.highlighted[key];
        return { firebaseData: updateFirebaseData, unsavedChanges: true };
      });
    }
  }

  updateTitle(themeKey, value) {
    this.setState(prevState => {
      const { firebaseData: updateFirebaseData } = prevState;
      updateFirebaseData.themes[themeKey].name = value;
      return { firebaseData: updateFirebaseData, unsavedChanges: true };
    });
  }

  renderAddMovieOptions(addedMovies) {
    const addedKeys = Object.keys(addedMovies);
    return this.props.allMovies.map(movie => (
      <option
        key={movie.contexts[0].id}
        value={movie.contexts[0].id}
        disabled={addedKeys.includes(movie.contexts[0].id)}>
        {movie.title.title}
      </option>
    ));
  }

  render() {
    if (!this.props.loaded) {
      return 'loading...';
    }
    const {
      firebaseData: { highlighted, themes },
      firebaseData,
    } = this.state;
    const {
      allMovies,
      savingToFirebase,
      user,
      userMessage,
      userLogout,
    } = this.props;
    return (
      <Wrapper>
        <UserHeader>
          {user ? (
            <Fragment>
              <Avatar style={{ backgroundImage: `url(${user.photoURL})` }} />
              {user.displayName}
              <Button
                onClick={userLogout}
                style={{ marginLeft: spacing.normal }}>
                Logout
              </Button>
            </Fragment>
          ) : (
            userMessage
          )}
        </UserHeader>
        )}
        <section>
          <ThemeNameHeader>
            <Header>Slideshow:</Header>
            <FormDropdown
              value=""
              onChange={e => this.addItem(e.target.value)}
              className={dropdownBtn}>
              <option value="">Legg til film i slideshow</option>
              {this.renderAddMovieOptions(highlighted)}
            </FormDropdown>
          </ThemeNameHeader>

          {Object.keys(highlighted)
            .sort((a, b) => highlighted[a] - highlighted[b])
            .map(key => {
              const selectedMovie = allMovies.find(movie =>
                movie.contexts.some(context => context.id === key),
              );
              if (selectedMovie) {
                return (
                  <MovieSelected key={key}>
                    <MovieImage
                      style={{
                        backgroundImage: `url(${selectedMovie.metaImage &&
                          selectedMovie.metaImage.url})`,
                      }}
                    />
                    <MovieTitle>{selectedMovie.title.title}</MovieTitle>
                    <ButtonWrappper>
                      <IconButton
                        type="button"
                        onClick={() => this.changeOrder(key, 1)}>
                        <ChevronUp />
                      </IconButton>
                      <IconButton
                        type="button"
                        onClick={() => this.changeOrder(key, -1)}>
                        <ChevronDown />
                      </IconButton>
                      <IconButton
                        type="button"
                        onClick={() => {
                          this.deleteMovie(key);
                        }}>
                        <Cross />
                      </IconButton>
                    </ButtonWrappper>
                  </MovieSelected>
                );
              }
            })}
        </section>
        <section>
          <Header>Temaer:</Header>
          {Object.keys(themes)
            .sort((a, b) => themes[a] - themes[b])
            .map(themeKey => (
              <Fragment>
                <ThemeNameHeader>
                  <ThemeName
                    value={themes[themeKey].name}
                    onChange={e => this.updateTitle(themeKey, e.target.value)}
                  />
                  <FormDropdown
                    className={dropdownBtn}
                    value=""
                    onChange={e => this.addItem(e.target.value, themeKey)}>
                    <option value="">Legg til film i gruppe</option>
                    {this.renderAddMovieOptions(themes[themeKey].movies)}
                  </FormDropdown>
                </ThemeNameHeader>
                {Object.keys(themes[themeKey].movies)
                  .sort(
                    (a, b) =>
                      themes[themeKey].movies[a] - themes[themeKey].movies[b],
                  )
                  .map(key => {
                    const selectedMovie = allMovies.find(movie =>
                      movie.contexts.some(context => context.id === key),
                    );
                    if (selectedMovie) {
                      return (
                        <MovieSelected key={key}>
                          <MovieImage
                            style={{
                              backgroundImage: `url(${selectedMovie.metaImage &&
                                selectedMovie.metaImage.url})`,
                            }}
                          />
                          <MovieTitle>{selectedMovie.title.title}</MovieTitle>
                          <ButtonWrappper>
                            <IconButton
                              type="button"
                              onClick={() =>
                                this.changeOrder(key, 1, themeKey)
                              }>
                              <ChevronUp />
                            </IconButton>
                            <IconButton
                              type="button"
                              onClick={() =>
                                this.changeOrder(key, -1, themeKey)
                              }>
                              <ChevronDown />
                            </IconButton>
                            <IconButton
                              type="button"
                              onClick={() => {
                                this.deleteMovie(key, themeKey);
                              }}>
                              <Cross />
                            </IconButton>
                          </ButtonWrappper>
                        </MovieSelected>
                      );
                    }
                  })}
              </Fragment>
            ))}
        </section>
        <Button
          onClick={() => this.addNewMovieGroup()}
          style={{ marginRight: spacing.normal }}>
          Lag ny temagruppe
        </Button>
        <Button
          disabled={savingToFirebase || !user}
          onClick={() => this.props.saveToFirebase(firebaseData)}>
          {savingToFirebase ? 'Lagrer' : 'Lagre endringer'}
        </Button>
      </Wrapper>
    );
  }
}

NdlaFilmEditor.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape()),
  allTopics: PropTypes.arrayOf(PropTypes.shape()),
  allMovies: PropTypes.arrayOf(PropTypes.shape()),
  firebaseData: PropTypes.shape(),
  saveToFirebase: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  savingToFirebase: PropTypes.bool,
  user: PropTypes.shape({}),
  userLogout: PropTypes.func,
  userMessage: PropTypes.string,
};

export default NdlaFilmEditor;
