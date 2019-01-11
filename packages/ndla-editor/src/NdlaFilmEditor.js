/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacing, colors, fonts, animations, misc } from '@ndla/core';
import { FormHeader,
  FormInput,
  FormDropdown } from '@ndla/forms';
  import { Spinner } from '@ndla/editor';

import { uuid } from '@ndla/util';
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';

const ThemeGroup = styled.div`
  animation-duration: ${animations.durations.slow};
  @keyframes themeFade1 {
      0% {
        transform: translateY(${spacing.small});
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes themeFade2 {
      0% {
        transform: translateY(${spacing.small});
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    animation-name: themeFade1;
  &.repaint {
    animation-name: themeFade2;
  }
`;

const MovieImage = styled.div`
  width: 80px;
  height: 60px;
  margin-right: ${spacing.normal};
  background-position: center center;
  background-size: cover;
`;

const MovieSelectedWrapper = styled.div`
  margin: ${spacing.normal} 0 ${spacing.large};
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

const MovieTitle = styled.a`
    ${fonts.sizes(16, 1.1)} font-weight: ${fonts.weight.semibold};
    margin: ${spacing.small} 0;
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
    fill: ${colors.text.primary};
    width: 22px;
    height: 22px;
  }
  &:hover,
  &:focus {
    background: #20588f;
    svg {
      fill: #fff;
    }
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

  a {
  }
  > section {
    margin-bottom: ${spacing.large};
  }
`;

const ThemeNameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${spacing.small};
  padding-top: ${spacing.small};
`;

const ThemeNamesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ThemeName = styled.div`
  width: calc(33.3% - ${spacing.normal} * 0.667);
`;

const HeaderButtons = styled.div`
  display: flex;
  button {
    margin-left: ${spacing.small};
  }
`;

const InputLabel = styled.div`
  ${fonts.sizes(16, 1.1)};
  font-weight: ${fonts.weight.semibold};
  margin-bottom: ${spacing.xsmall};
`;

const ThemeNames = ({ themeKey, values, onChange }) => (
  <ThemeNamesWrapper>
  {values.map(val => (
    <ThemeName key={val.lang}>
    <InputLabel>Tittel {val.label}:</InputLabel>
      <FormInput
        container="div"
        type="text"
        placeholder={`Skriv tittel på ${val.label}`}
        value={val.name}
        onChange={e => onChange(e.target.value, themeKey, val.lang)}
      />
    </ThemeName>
    ))}
    </ThemeNamesWrapper>
);

ThemeNames.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lang: PropTypes.string,
    themeKey: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

class NdlaFilmEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsavedChanges: false,
      firebaseData: null,
      themegroupRepaint: false,
    };
    this.deleteMovieGroup = this.deleteMovieGroup.bind(this);
    this.rearrangeMovieGroup = this.rearrangeMovieGroup.bind(this);
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
        nb: '',
        nn: '',
        en: '',
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

  deleteMovieGroup(themeKey) {
    this.setState(prevState => {
      const { firebaseData: updateFirebaseData } = prevState;
      delete updateFirebaseData.themes[themeKey];
      return { firebaseData: updateFirebaseData, unsavedChanges: true };
    });
  }

  rearrangeMovieGroup(FromThemeKey, oldIndex, swapWith) {
    this.setState(prevState => {
      const { firebaseData: updateFirebaseData } = prevState;
      Object.keys(updateFirebaseData.themes).forEach(themeKey => {
        if (updateFirebaseData.themes[themeKey].order === oldIndex) {
          updateFirebaseData.themes[themeKey].order = swapWith;
        } else if (updateFirebaseData.themes[themeKey].order === swapWith && FromThemeKey !== themeKey) {
          updateFirebaseData.themes[themeKey].order = oldIndex;
        }
      });
      return { firebaseData: updateFirebaseData, unsavedChanges: true, themegroupRepaint: !prevState.themegroupRepaint };
    });
  }

  updateTitle(value, themeKey, lang) {
    this.setState(prevState => {
      const { firebaseData: updateFirebaseData } = prevState;
      updateFirebaseData.themes[themeKey][lang] = value;
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
      return <Wrapper><Spinner /></Wrapper>;
    }
    const {
      firebaseData: { highlighted, themes },
      firebaseData,
    } = this.state;
    const {
      allMovies,
      savingToFirebase,
    } = this.props;

    const themeLength = Object.keys(themes).length;
    console.log(this.state.themegroupRepaint ? 'repaint' : '');
    return (
      <Wrapper>
        <section>
          <FormHeader title="Hovedfilmer" subTitle="på forsiden" width={4 / 4} />
          <MovieSelectedWrapper>
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
                    <MovieTitle
                      href={selectedMovie.url}
                      target="_blank"
                      noopener
                      noreferrer>
                      {selectedMovie.title.title}
                    </MovieTitle>
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
            </MovieSelectedWrapper>
          <FormDropdown
            value=""
            onChange={e => this.addItem(e.target.value)}
          >
            <option value="">Legg til film i slideshow</option>
            {this.renderAddMovieOptions(highlighted)}
          </FormDropdown>
        </section>
        <section>
          {Object.keys(themes)
            .sort((a, b) => themes[a].order - themes[b].order)
            .map((themeKey, index) => (
              <ThemeGroup key={themeKey} className={this.state.themegroupRepaint ? 'repaint' : ''}>
                <FormHeader title={`Filmgruppe`} subTitle={`Rekkefølge ${index +1}`} width={4 / 4}>
                  <HeaderButtons>
                    <Button outline disabled={index === 0} onClick={() => this.rearrangeMovieGroup(themeKey, index, index - 1)}>Flytt opp</Button>
                    <Button outline disabled={index === themeLength - 1} onClick={() => this.rearrangeMovieGroup(themeKey, index, index + 1)}>Flytt ned</Button>
                    <Button onClick={() => this.deleteMovieGroup(themeKey)}>Slett tema</Button>
                  </HeaderButtons>
                </FormHeader>
                <ThemeNameHeader>
                  <ThemeNames
                    values={[{
                      lang: 'nb',
                      name: themes[themeKey].nb,
                      label: 'bokmål',
                    },
                    {
                      lang: 'nn',
                      name: themes[themeKey].nn,
                      label: 'nynorsk',
                    },
                    {
                      lang: 'en',
                      name: themes[themeKey].en,
                      label: 'engelsk',
                    }]}
                    themeKey={themeKey}
                    onChange={(value, key, lang) => { console.log('???'); this.updateTitle(value, key, lang); }}
                  />
                </ThemeNameHeader>
                <FormDropdown
                  value=""
                  onChange={e => this.addItem(e.target.value, themeKey)}>
                  <option value="">Legg til film i gruppe</option>
                  {this.renderAddMovieOptions(themes[themeKey].movies)}
                </FormDropdown>
                <MovieSelectedWrapper>
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
                  </MovieSelectedWrapper>
              </ThemeGroup>
            ))}
        </section>
        <Button
          onClick={() => this.addNewMovieGroup()}
          style={{ marginRight: spacing.normal }}>
          Lag ny temagruppe
        </Button>
        <Button
          disabled={savingToFirebase}
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
};

export default NdlaFilmEditor;
