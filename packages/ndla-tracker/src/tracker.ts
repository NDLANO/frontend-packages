/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { History } from 'history';

/* eslint-disable no-console */

declare global {
  interface Window {
    ga: any;
    dataLayer: any;
    google_tag_manager: any;
    originalLocation: unknown;
    _mtm: any;
    _paq: any;
  }
}

type PageViewHistoryType = {
  url: string;
  tracked: boolean;
  debug: boolean;
  resetDataLayer?: () => void;
};

const pageViewHistory: PageViewHistoryType[] = [];

function initializeGA(gaTrackingId?: string) {
  window.ga =
    window.ga ||
    function () {
      // @ts-ignore
      (ga.q = ga.q || []).push(arguments);
    }; //eslint-disable-line
  window.ga.l = +new Date();
  window.ga('create', gaTrackingId, 'auto');
}

function resetDataLayer(googleTagManagerId?: string) {
  if (window.dataLayer && window.google_tag_manager && googleTagManagerId) {
    window.google_tag_manager[googleTagManagerId].dataLayer.reset();
    window.dataLayer.push(window.originalLocation);
  }
}

export type UnregisterCallback = () => void;

export const configureTracker = ({
  listen,
  debug,
  gaTrackingId,
  googleTagManagerId,
}: {
  listen: History['listen'];
  debug?: boolean;
  gaTrackingId?: string;
  googleTagManagerId?: string;
}) => {
  initializeGA(gaTrackingId);
  // Push current page and start listning
  pageViewHistory.push({
    url: `${location.pathname}${location.search}${location.hash}`,
    tracked: false,
    debug: !!debug,
  });

  listen(({ location }) => {
    if (debug) {
      console.info(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    }

    pageViewHistory.push({
      url: `${location.pathname}${location.search}${location.hash}`,
      tracked: false,
      debug: !!debug,
      resetDataLayer: () => resetDataLayer(googleTagManagerId),
    });
  });
};

export const hasCurrentPageBeenTracked = () => pageViewHistory[pageViewHistory.length - 1].tracked;

export const sendPageView = ({
  title,
  dimensions,
}: {
  title: string;
  dimensions?: {
    ga: any;
    gtm: any;
  };
}) => {
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

  const dim = dimensions || { ga: {}, gtm: {} };
  window.document.title = title;

  window.ga('send', {
    hitType: 'pageview',
    page: current.url,
    title,
    ...dim.ga,
  });

  window.dataLayer.push({
    page_title: title,
    event: 'Pageview',
    url: current.url,
    ...dim.gtm,
  });

  window._mtm.push({
    page_title: title,
    event: 'Pageview',
    url: current.url,
    ...dim.gtm,
  });
};
