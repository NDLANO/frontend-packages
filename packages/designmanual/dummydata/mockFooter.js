/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { EmailOutline, Facebook, Twitter, Share, Youtube } from '@ndla/icons/common';
import React from 'react';

export const mockFooterLinks = [
  {
    to: 'https://www.facebook.com/ndla.no',
    text: 'NDLA på Facebook',
    icon: <Facebook />,
  },
  {
    to: 'https://twitter.com/ndla_no',
    text: 'NDLA på Twitter',
    icon: <Twitter />,
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
