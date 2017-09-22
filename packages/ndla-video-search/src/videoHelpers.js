/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const getLastPage = (search, type) => {
  if (type === 'youtube') {
    if (search.queries && search.queries.request.length > 0) {
      return Math.ceil(
        search.queries.request[0].totalResults /
          search.queries.request[0].count,
      );
    }
  }
  return 0;
};

export const youTubeDurationToSeconds = duration => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(match[1], 10) || 0;
  const minutes = parseInt(match[2], 10) || 0;
  const seconds = parseInt(match[3], 10) || 0;

  return hours * 3600 + minutes * 60 + seconds;
};

export const setLocaleDate = (date, locale) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(Date.parse(date)).toLocaleDateString(locale, options);
};

export const setYouTubeDuration = duration => {
  const seconds = youTubeDurationToSeconds(duration);
  if (seconds > 86400) {
    return `24h+ ${new Date(seconds * 1000).toISOString().substr(11, 8)}`;
  }
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};
