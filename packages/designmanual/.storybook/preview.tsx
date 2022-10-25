import { i18nInstance } from '@ndla/ui';
import { Story, StoryContext } from '@storybook/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import './designmanual.scss';

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  viewMode: 'story',
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
  docs: {
    page: null, // NOTE: Per docs this should disable docs tab globally, but this does not currently work. Bug?
  },
};

export const globalTypes = {};

i18nInstance.language = 'nb';
i18nInstance.options.lng = 'nb';
export const decorators = [
  (Story: Story, context: StoryContext) => (
    <BrowserRouter>
      <I18nextProvider i18n={i18nInstance}>
        <HelmetProvider>
          <div style={{ margin: context.parameters?.custom?.component ? '3em' : undefined }}>
            <Story />
          </div>
        </HelmetProvider>
      </I18nextProvider>
    </BrowserRouter>
  ),
];
