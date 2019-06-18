/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

// @ts-ignore
export * from './index-javascript';
export { default as ErrorMessage } from './ErrorMessage';
export { default as SafeLink } from './common/SafeLink';
export { default as SafeLinkButton } from './common/SafeLinkButton';
