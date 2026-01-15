/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface Props {
  trackerUrl: string;
  siteId: string;
}

export const MatomoTracker = ({ trackerUrl, siteId }: Props) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        var _paq = window._paq = window._paq || [];
        _paq.push(['alwaysUseSendBeacon']);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u="${trackerUrl}";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '${siteId}']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();`,
      }}
    />
  );
};
