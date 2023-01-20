/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const featureList = [
  {
    test: `('fetch' in window)`,
    feature: 'fetch',
  },
  {
    test: `('includes' in Array.prototype)`,
    feature: 'Array.prototype.includes',
  },
  {
    test: `('fill' in Array.prototype)`,
    feature: 'Array.prototype.fill',
  },
  {
    test: `('open' in document.createElement('details'))`,
    feature: 'details',
  },
  {
    test: `('assign' in Object)`,
    feature: 'Object.assign',
  },
  {
    test: `('remove' in Element.prototype)`,
    feature: 'Element.prototype.remove',
  },
  {
    test: `('includes' in String.prototype)`,
    feature: 'String.prototype.includes',
  },
  {
    test: `('startsWith' in String.prototype)`,
    feature: 'String.prototype.startsWith',
  },
  {
    test: `('endsWith' in String.prototype)`,
    feature: 'String.prototype.endsWith',
  },
  {
    test: `('isInteger' in Number)`,
    feature: 'Number.isInteger',
  },
  {
    test: `('isNaN' in Number)`,
    feature: 'Number.isNaN',
  },
];

export default featureList;
