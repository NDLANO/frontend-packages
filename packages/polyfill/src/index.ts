/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// addition polyfill for language features used in ndla frontends
import 'core-js/features/array/find';
import 'core-js/features/array/flat-map';
import 'core-js/features/array/find-index';
import 'core-js/features/array/fill';
import 'core-js/features/array/includes';
import 'core-js/features/string/starts-with';
import 'core-js/features/string/ends-with';
import 'core-js/features/string/includes';
import 'core-js/features/number/is-integer';
import 'core-js/features/number/is-nan';

// polyfill for <details></details> and <summary></summary> html elements used in articles.
import 'details-polyfill';

// polyfill for Element .remove() in ie11
(function (arr) {
  arr.forEach(function (item) {
    if (Object.prototype.hasOwnProperty.call(item, 'remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode !== null) this.parentNode.removeChild(this);
      },
    });
  });
})([Element.prototype]);

// Check for ie and add .ie class to <html> tag
if (/Trident\/|MSIE /.test(window.navigator.userAgent)) {
  document.documentElement.classList.add('ie');
}
