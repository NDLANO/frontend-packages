/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import features from './featureList';

export const generateFeatureChecks = () => {
  return features
    .map((item) => {
      if (item.test) {
        return `${item.test} || feats.push('${item.feature}');`;
      }
      return `feats.push('${item.feature}');`;
    })
    .join('');
};

export const featureDetect = (polyfill: string, scripts: string | string[] = []) => {
  return `
  var feats = [];
  ${generateFeatureChecks()}

  function cs(script, useHead, onLoad) {
    var s = document.createElement('script');
    s.src = script.src;
    s.async = true;
    s.crossorigin = 'anonymous';
    if (onLoad) { s.onload = onLoad; }
    if (useHead) {
      document.head.appendChild(s);
    } else {
      document.body.appendChild(s);
    }
  }

  function _polyfillComplete() {
    var scripts = ${scripts};
    for (var i = 0; i < scripts.length; i++) {
      cs(scripts[i], false);
    }
  }

  if (feats.length && ${polyfill}) {
    cs(${polyfill}, true, _polyfillComplete);
  } else {
    _polyfillComplete();
  }
  `;
};
