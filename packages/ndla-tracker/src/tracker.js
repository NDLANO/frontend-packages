/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-disable no-console */

const pageViewHistory = [];

function initializeGA(gaTrackingId) {
  // prettier-ignore
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)}; //eslint-disable-line
  window.ga.l = +new Date();
  window.ga('create', gaTrackingId, 'auto');
}

function resetDataLayer(googleTagManagerId) {
  if (window.dataLayer && window.google_tag_manager && googleTagManagerId) {
    window.google_tag_manager[googleTagManagerId].dataLayer.reset();
    window.dataLayer.push(window.originalLocation);
  }
}

export const configureTracker = ({
  listen,
  debug,
  gaTrackingId,
  googleTagManagerId,
}) => {
  initializeGA(gaTrackingId);

  // Push current page and start listning
  pageViewHistory.push({
    url: `${location.pathname}${location.search}${location.hash}`,
    tracked: false,
    debug,
  });

  listen(location => {
    if (debug) {
      console.info(
        `The current URL is ${location.pathname}${location.search}${
          location.hash
        }`,
      );
    }

    pageViewHistory.push({
      url: `${location.pathname}${location.search}${location.hash}`,
      tracked: false,
      debug,
      resetDataLayer: () => resetDataLayer(googleTagManagerId),
    });
  });
};

export const hasCurrentPageBeenTracked = () =>
  pageViewHistory[pageViewHistory.length - 1].tracked;

export const sendPageView = ({ title, dimensions }) => {
  const current = pageViewHistory[pageViewHistory.length - 1];
  current.tracked = true;

  if (current.debug) {
    console.info(`Tracking ${title} for page ${current.url}`);
    if (dimensions) {
      console.info('With dimensions: ', dimensions);
    }
  }

  // Always reset dataLayer before pushing new page events
  if (current.resetDataLayer) {
    current.resetDataLayer();
  }

  window.ga('send', {
    hitType: 'pageview',
    page: current.url,
    title,
  });

  window.dataLayer.push({
    page_title: title,
    event: 'Pageview',
    url: current.url,
  });
};
