/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { EmailOutline, Facebook, Instagram, LinkedIn, Share, Youtube } from '@ndla/icons/common';
import Footer from './Footer';
import { defaultParameters } from '../../../../stories/defaults';
import { FooterText } from './FooterText';
import { EditorName } from './EditorName';
import { LanguageSelector } from '../LanguageSelector';

const mockCommonLinks = [
  {
    to: 'https://ndla.no/about/om-ndla',
    text: 'Om NDLA',
    external: false,
  },
  {
    to: 'https://ndla.no/about/about-ndla',
    text: 'About NDLA',
    external: false,
  },
  {
    to: 'https://blogg.ndla.no/',
    text: 'NDLA fagblogg',
    external: true,
  },
];

const mockFooterLinks = [
  {
    to: 'https://www.facebook.com/ndla.no',
    text: 'NDLA på Facebook',
    icon: <Facebook />,
  },
  {
    to: 'https://instagram.com/ndla_no/',
    text: 'NDLA på Instagram',
    icon: <Instagram />,
  },
  {
    to: 'https://www.linkedin.com/company/ndla/',
    text: 'NDLA på LinkedIn',
    icon: <LinkedIn />,
  },
  {
    to: 'https://www.youtube.com/channel/UCBlt6T8B0mmvDh3k5q7EhsA',
    text: 'NDLA på YouTube',
    icon: <Youtube />,
  },
  {
    to: 'https://om.ndla.no/nyhetsbrev/',
    text: 'Meld deg på vårt nyhetsbrev',
    icon: <EmailOutline />,
  },
  {
    to: '#',
    text: 'Del denne siden',
    icon: <Share />,
  },
];

const privacyLinks = [
  { label: 'Personvernerklæring', url: 'https://om.ndla.no/gdpr' },
  { label: 'Erklæring om informasjonskapsler', url: 'https://om.ndla.no/cookies' },
];

export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },

  args: {
    children: (
      <>
        <FooterText>
          <EditorName title="Ansvarlig redaktør:" name="Sigurd Trageton" />
        </FooterText>
        <FooterText>Nettstedet er utarbeidet av NDLA med åpen kildekode.</FooterText>
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    languageSelector: { control: false },
    auth: { control: false },
  },
  render: (args) => <Footer {...args}></Footer>,
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {};

export const WithContentAndLinks: StoryObj<typeof Footer> = {
  args: {
    privacyLinks: privacyLinks,
    commonLinks: mockCommonLinks,
    links: mockFooterLinks,
  },
};

export const WithoutContent: StoryObj<typeof Footer> = {
  args: {
    children: undefined,
    commonLinks: mockCommonLinks,
    links: mockFooterLinks,
    privacyLinks: privacyLinks,
  },
};

export const WithLanguageSelector: StoryObj<typeof Footer> = {
  args: {
    privacyLinks: privacyLinks,
    commonLinks: mockCommonLinks,
    links: mockFooterLinks,
    // eslint-disable-next-line no-console
    languageSelector: <LanguageSelector inverted locales={['nn', 'nb']} onSelect={console.log} />,
  },
};

export const WithAuthBlock: StoryObj<typeof Footer> = {
  args: {
    privacyLinks: privacyLinks,
    commonLinks: mockCommonLinks,
    links: mockFooterLinks,
    // eslint-disable-next-line no-console
    languageSelector: <LanguageSelector inverted locales={['nn', 'nb']} onSelect={console.log} />,
    auth: <div>Auth info can be placed down here</div>,
  },
};
