/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import {
  resourceTypes,
  getResourceTypeNamespace,
  microDataTypes,
  getMicroDataNamespaceByType,
  metaTypes,
  getMicroDataNamespaceByMicroDataTypeWithFallback,
} from '../microData';

test('microData/getResourceTypeNamespace when type video should return video namespace', () => {
  const namespace = getResourceTypeNamespace(resourceTypes.video);
  expect(namespace).toBe('http://purl.org/dc/dcmitype/MovingImage');
});

test('microData/getResourceTypeNamespace when unknown type should return null', () => {
  const namespace = getResourceTypeNamespace('UNKNOWN');
  expect(namespace).toBe(null);
});

test('microData/getMicroDataNamespaceByType when person type should return person namespace', () => {
  const namespace = getMicroDataNamespaceByType(microDataTypes.person);
  expect(namespace).toBe('http://schema.org/Person');
});

test('microData/getMicroDataNamespaceByType when type not defined, should throw error', () => {
  expect(() => {
    getMicroDataNamespaceByType(undefined);
  }).toThrow();
});

test('microData/getMicroDataNamespaceByMicroDataTypeWithFallback when person micro data type should return person namespace', () => {
  const namespace = getMicroDataNamespaceByMicroDataTypeWithFallback(
    metaTypes.author,
    microDataTypes.person,
  );
  expect(namespace).toBe('http://schema.org/Person');
});

test('microData/getMicroDataNamespaceByMicroDataTypeWithFallback when only metaType provided should return fallback namespace', () => {
  const namespace = getMicroDataNamespaceByMicroDataTypeWithFallback(
    metaTypes.copyrightHolder,
  );
  expect(namespace).toBe('http://schema.org/Organization');
});
