/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { FilmFrontpage } from '@ndla/ui';
import { NdlaFilmEditor } from '@ndla/editor';

import { headerWithAccessToken, getToken } from '../apiFunctions';
import Poster from '../../images/filmposter-aboutNDLA.png';

const languageFilter = ['nb'];

const fetchData = ({ apiUrl, query }) => {
  return new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://staging.api.ndla.no/${apiUrl}${query}`, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });
};

class NdlaFilmExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      movies: [],
      highlightedMovies: [],
      movieThemes: [],
      loaded: false,
      savingToFirebase: false,
      user: null,
      userMessage: undefined,
    };
    this.saveToFirebase = this.saveToFirebase.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA58h8H0l0Q4f-PdIOX38lTpnkO4hJK-I8',
      authDomain: 'ndla-film.firebaseapp.com',
      databaseURL: 'https://ndla-film.firebaseio.com',
      projectId: 'ndla-film',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    if (this.props.editor) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.setState({
            user: result.user,
            userMessage: undefined,
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            userMessage: error.message,
          });
        });
    }

    // Fetch all data from database.
    firebase
      .database()
      .ref()
      .once('value', snapshot => {
        const firebaseData = snapshot.val();
        if (firebaseData) {
          this.loadNdlaFilmContent(firebaseData);
        }
        // Failed to get data from firebase...
      });
  }

  async loadNdlaFilmContent(firebaseData) {
    // Example uses Firebase, this needs to be changed..
    const { subjectId, highlighted, parentTopic, themes } = firebaseData;

    const resourceTypes = [
      { name: 'Dokumentarer', id: 'urn:resourcetype:movieAndClip' },
      { name: 'Spillefilmer', id: 'urn:resourcetype:featureFilm' },
      { name: 'Kort film', id: 'urn:resourcetype:shortFilm' },
      { name: 'Læringsressurser', id: 'urn:resourcetype:learningPath' },
    ];

    const resourceTypesIds = resourceTypes
      .reduce((value, item) => `${value},${item.id}`, '')
      .substring(1);

    const resourceQuery = `?resource-types=${resourceTypesIds}&languageFilter=${languageFilter.toString(
      ',',
    )}&page=1&page-size=999&subjects=${subjectId}`;

    const topicQuery = `?context-types=topic-article&languageFilter=${languageFilter.toString(
      ',',
    )}&page=1&page-size=999&subjects=${subjectId}`;

    const [topics, allResources, allTopics] = await Promise.all([
      fetchData({
        apiUrl: `taxonomy/v1/subjects/${subjectId}/topics`,
        query: '?recursive=true',
      }),
      fetchData({
        apiUrl: 'search-api/v1/search',
        query: resourceQuery,
      }),
      fetchData({
        apiUrl: 'search-api/v1/search',
        query: topicQuery,
      }),
    ]);

    const resourceTypesId = resourceTypes.map(resourceType => resourceType.id);
    const validTopicIds = {};

    allResources.results.forEach(resource => {
      resource.contexts.forEach(context => {
        context.resourceTypes.forEach(resourceType => {
          if (resourceTypesId.includes(resourceType.id)) {
            const paths = context.path.split('/');
            const tmpId = `urn:${paths[paths.length - 2]}`;
            if (!validTopicIds[tmpId]) {
              validTopicIds[tmpId] = {};
            }
            validTopicIds[tmpId][resourceType.id] = true;
          }
        });
      });
    });

    // allTopics har alle emner under faget (fra subjectId'en)
    // Vi har på forhånd definert hvilke ressurstyper som er riktig mtp film. (resourceTypes)
    // Vi søker igjennom alle topics og filtrer ut de som ikke har riktig ressurstype.
    // Så legger vi med movieTypes som brukes til labels på hover og for å sortere på ressurstypene.

    const filteredTopics = allTopics.results
      .map(topic => {
        const context = topic.contexts.find(
          currentContext => validTopicIds[currentContext.id],
        );
        if (context) {
          return { ...topic, movieTypes: validTopicIds[context.id] };
        }
        return null;
      })
      .filter(topic => topic);

    // Basert på definerte id'er fra firebase finner vi filmene basert på ID'er derfra.
    const highlightedMovies = Object.keys(highlighted)
      .sort((a, b) => highlighted[a] - highlighted[b])
      .map(id =>
        filteredTopics.find(topic =>
          topic.contexts.some(context => context.id === id),
        ),
      )
      .filter(foundMovie => foundMovie);

    // Basert på definerte id'er fra firebase finner vi filmene fra filmgruppene samt grupperer disse og sorterer gruppene og filmene.
    const movieThemes = Object.keys(themes)
      .sort((a, b) => themes[a].order - themes[b].order)
      .map(theme => ({
        name: themes[theme][languageFilter],
        movies: Object.keys(themes[theme].movies)
          .sort((a, b) => themes[theme].movies[a] - themes[theme].movies[b])
          .map(id =>
            filteredTopics.find(topic =>
              topic.contexts.some(context => context.id === id),
            ),
          )
          .filter(foundMovie => foundMovie),
      }));

    this.setState({
      movieThemes,
      highlightedMovies,
      movies: filteredTopics,
      topics: topics.filter(topic => topic.parent === parentTopic),
      resourceTypes,
      firebaseData,
      loaded: true,
    });
  }

  saveToFirebase(data) {
    this.setState({
      savingToFirebase: true,
    });
    firebase
      .database()
      .ref()
      .update(data)
      .then(() => {
        this.setState({
          savingToFirebase: false,
        });
      })
      .catch(() => {
        console.log('something went terrible wrong here...');
      });
  }

  userLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null,
          userMessage: 'Du er ikke innlogget',
        });
      })
      .catch(e => {
        console.log('couldnt signout', e);
      });
  }

  render() {
    const {
      movieThemes,
      highlightedMovies,
      movies,
      topics,
      resourceTypes,
      firebaseData,
      loaded,
      savingToFirebase,
      user,
      userMessage,
    } = this.state;

    const { editor } = this.props;

    if (editor) {
      return (
        <NdlaFilmEditor
          loaded={loaded}
          firebaseData={firebaseData}
          allMovies={movies}
          topics={topics}
          resourceTypes={resourceTypes}
          saveToFirebase={this.saveToFirebase}
          savingToFirebase={savingToFirebase}
          user={user}
          userMessage={userMessage}
          userLogout={this.userLogout}
        />
      );
    }
    return (
      <FilmFrontpage
        highlighted={highlightedMovies}
        themes={movieThemes}
        allMovies={movies}
        topics={topics}
        resourceTypes={resourceTypes}
        aboutNDLAVideo={<img src={Poster} alt="example of video" />}
      />
    );
  }
}

NdlaFilmExample.propTypes = {
  editor: PropTypes.bool,
};

export default NdlaFilmExample;
