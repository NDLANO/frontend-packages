/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import AudioSearch from '@ndla/audio-search';

const fetchAudios = (queryObject) => {
  const { query, page, pageSize, locale } = queryObject;
  const queryString = `${query ? `query=${query}&` : ''}page=${page}&page-size=${pageSize}&language=${locale}`;
  return new Promise((resolve, reject) => {
    fetch(`https://api.test.ndla.no/audio-api/v1/audio/?${queryString}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) return resolve(res.json());
      return res.json().then((json) => reject(json));
    });
  });
};

const fetchAudio = (id) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.test.ndla.no/audio-api/v1/audio/${id}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) return resolve(res.json());
      return res.json().then((json) => reject(json));
    });
  });

export const AudioSearcher = () => {
  const audioSelect = (audio) => {
    console.log(audio); // eslint-disable-line no-console
  };

  const onError = (err) => {
    console.error(err); // eslint-disable-line no-console
  };

  const defaultQueryObject = {
    query: '',
    page: 1,
    pageSize: 16,
    locale: 'nb',
  };

  const translations = {
    searchPlaceholder: 'Søk i lydfiler',
    searchButtonTitle: 'Søk',
    useAudio: 'Velg lyd',
    noResults: 'Ingen resultater funnet',
  };

  return (
    <AudioSearch
      translations={translations}
      fetchAudio={fetchAudio}
      searchAudios={fetchAudios}
      onAudioSelect={audioSelect}
      onError={onError}
      queryObject={defaultQueryObject}
    />
  );
};

export default AudioSearcher;
