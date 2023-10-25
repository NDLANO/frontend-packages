/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import { Meta, StoryFn } from '@storybook/react';
import { Alarm, HumanMaleBoard, InformationOutline, WarningOutline } from '@ndla/icons/common';
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
  return (
    <MessageBox icon={<InformationOutline />} {...args}>
      {t('messageBoxInfo.noContent')}
    </MessageBox>
  );
};

export const WithoutCloseButton: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return <MessageBox icon={<InformationOutline />}>{t('messageBoxInfo.subjectOutdated')}</MessageBox>;
};

export const WithLinks: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return (
    <MessageBox
      icon={<InformationOutline />}
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
  return (
    <MessageBox type="ghost" icon={<HumanMaleBoard />}>
      {t('messageBoxInfo.feide')}
    </MessageBox>
  );
};

export const Danger: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return (
    <MessageBox type="danger" icon={<WarningOutline />}>
      {t('messageBoxInfo.feide')}
    </MessageBox>
  );
};

export const WithCustomIcon: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return (
    <MessageBox type="danger" icon={<Alarm />}>
      {t('messageBoxInfo.feide')}
    </MessageBox>
  );
};

export const WithoutIcon: StoryFn<typeof MessageBox> = () => {
  const { t } = useTranslation();
  return (
    <MessageBox type="danger" noIcon>
      {t('messageBoxInfo.feide')}
    </MessageBox>
  );
};
