/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import { Meta, StoryFn } from '@storybook/react';
import MessageBox from './MessageBox';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Patterns/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    showCloseButton: true,
  },
} as Meta<typeof MessageBox>;

export const Default: StoryFn<typeof MessageBox> = ({ ...args }) => {
  const { t } = useTranslation();
  return <MessageBox {...args}>{t('messageBoxInfo.noContent')}</MessageBox>;
};

export const WithoutCloseButton: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return <MessageBox>{t('messageBoxInfo.subjectOutdated')}</MessageBox>;
};

export const WithLinks: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return (
    <MessageBox
      links={[
        { text: 'link 1', href: '#' },
        { text: 'link 2', href: '#' },
        { text: 'link 3', href: '#' },
      ]}
    >
      {t('messageBoxInfo.newVersion')}
    </MessageBox>
  );
};

export const Ghost: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return <MessageBox type="ghost">{t('messageBoxInfo.feide')}</MessageBox>;
};

export const Danger: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return <MessageBox type="danger">{t('messageBoxInfo.feide')}</MessageBox>;
};
