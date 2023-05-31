/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const customViewports = {
  small: {
    name: 'Liten - 320px',
    styles: {
      width: '320px',
      height: '1000px'
    },
  },
  medium: {
    name: 'Medium - 760px',
    styles: {
      width: '760px',
      height: '1000px'
    },
  },
  large: {
    name: 'Stor - 1440px',
    styles: {
      width: '1440px',
      height: '1000px'
    },
  },
}

export const defaultParameters = {
  viewMode: 'docs',
  layout: 'padded',
  docs: {
    page: undefined,
  },
  viewport: {
    viewports: customViewports,
  },
  previewTabs: {
    'storybook/docs/panel': { hidden: false },
  },
};
