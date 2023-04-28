/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { i18nInstance } from '@ndla/ui';
import { Preview } from '@storybook/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import './designmanual.scss';

i18nInstance.language = 'nb';
i18nInstance.options.lng = 'nb';
const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Velkommen',
          'Konsepter',
          'Grunnstiler',
          'Enkle komponenter',
          'Sammensatte moduler',
          'Lisensgivning',
          'Produksjonssystem',
          'Eksperimentelle komponenter',
          'Tekster og labels',
          'NDLA lenker',
          'Min NDLA',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <I18nextProvider i18n={i18nInstance}>
          <HelmetProvider>
            <Story />
          </HelmetProvider>
        </I18nextProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
