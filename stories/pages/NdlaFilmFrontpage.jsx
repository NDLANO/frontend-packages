/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmFrontpage from './FilmFrontpage';

import {
  mockAllMovies,
  mockHighlightedMovies,
  movieThemes,
  mockMovieTopics,
  mockMovieResourceTypes,
} from '../../dummydata';

import { ALL_MOVIES } from '../../dummydata/mockFilm';

const sortAlphabetically = (movies) => movies.sort((a, b) => a.title.localeCompare(b.title));

class NdlaFilmExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesByType: [],
      fetchingMoviesByType: false,
    };
    this.simulateLoadingTimer = null;
    this.onSelectedMovieByType = this.onSelectedMovieByType.bind(this);
  }

  onSelectedMovieByType(resourceId) {
    // Simulate fetching movies..
    clearInterval(this.simulateLoadingTimer);
    const showingAll = resourceId === ALL_MOVIES;
    this.setState(
      {
        fetchingMoviesByType: true,
      },
      () => {
        this.simulateLoadingTimer = setTimeout(() => {
          this.setState({
            showingAll,
            fetchingMoviesByType: false,
            moviesByType: sortAlphabetically(
              showingAll ? mockAllMovies : mockAllMovies.filter((movie) => movie.movieTypes[resourceId]),
            ),
          });
        }, 500);
      },
    );
  }

  render() {
    const { moviesByType, fetchingMoviesByType, showingAll } = this.state;

    return (
      <FilmFrontpage
        id={this.props.id}
        showingAll={showingAll}
        highlighted={mockHighlightedMovies}
        themes={movieThemes}
        moviesByType={moviesByType}
        topics={mockMovieTopics}
        resourceTypes={mockMovieResourceTypes}
        onSelectedMovieByType={this.onSelectedMovieByType}
        resizeThumbnailImages={false}
        aboutNDLAVideo={{
          title: 'Om NDLA film',
          description:
            'Ndla film er en nettbasert filmtjeneste for elever og lærere i videregående skole. Her finner du spillefilmer, kortfilmer, dokumentarfilmer og TV-serier.',
          visualElement: {
            url: 'https://videoapi.streamps.net/video/ndlaseria/uai66jcyfg2e1sb',
            type: 'brightcove',
            alt: 'NDLA film',
          },
        }}
        fetchingMoviesByType={fetchingMoviesByType}
        moreAboutNdlaFilm={
          <>
            <h1>NDLA film</h1>
            <hr />
            <p>
              Filmene i filmtjenesten er hentet fra norsk og internasjonal filmarv og kobles mot læreplaner i flere fag.
              De er valgt ut av NDLAs redaksjoner i samarbeid med Norgesfilm AS og Norsk filminstitutt.
            </p>
            <p>
              Du kan se filmene om du er koblet til Internett via datamaskinen, nettbrettet eller smarttelefonen din. Vi
              har gjort jobben med rettighetsklarering og betaling. Alt du trenger å gjøre, er å trykke play.
            </p>
            <p>
              Filmene er copyrightmerket. De kan fritt spilles av på ndla.no, men ikke lastes ned eller distribueres
              videre i andre publikasjoner. Alle rettighetshavere honoreres for de avspillinger som gjøres.
            </p>
            <h2>Bruk film i undervisningen</h2>
            <p>
              En film forteller historier på måter som engasjerer og berører oss. I film brukes noen av de mest
              effektive visuelle virkemidlene som finnes; bevegelige bilder og lyd. En god film kan vise sider ved
              samtiden og gi visjoner om framtiden eller kommentere fortiden. Derfor kan film ofte gi oss bedre
              forståelse av hendelser, kulturmøter og historie enn en fagtekst.
            </p>
            <p>
              Ved å se film blir elevene bedre rustet til å lese filmspråket, slik at filmen får en verdi ut over det
              rent underholdningsmessige. Den generelle delen av læreplanen legger vekt på at elevene skal møte kunst og
              kulturformer som stimulerer, inspirerer egen skaperevne, og fremmer etisk orienteringsevne og estetisk
              sans.
            </p>
            <p>
              Kom gjerne med tips, spørsmål eller filmønsker på{' '}
              <a
                href="https://www.facebook.com/NDLAfilm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besøk Facebooksiden til NDLA-film"
              >
                Facebook-siden
              </a>{' '}
              vår.
            </p>
            <p>
              <strong>Vi ønsker alle filmelskere en god og lærerik opplevelse!</strong>
            </p>
          </>
        }
        language="nb"
      />
    );
  }
}

NdlaFilmExample.propTypes = {
  editor: PropTypes.bool,
  id: PropTypes.string,
};

export default NdlaFilmExample;
