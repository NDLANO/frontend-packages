/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { OneColumn, FilmFrontpage } from '@ndla/ui';

import DirtyWars from '../../images/ndla-film/documentary/Dirty-wars.jpg';
import ExitThroughTheGiftShop from '../../images/ndla-film/documentary/Exit-through-the-gift-shop.jpg';
import KonTiki from '../../images/ndla-film/documentary/Kon-tiki.jpg';

const highlighted = [
  {
    name: 'Dirty wars',
    id: 'highlighted1',
    path: 'www.test.no',
    metaData: {
      description: 'PropTypes.string',
      image: {
        alt: 'img alt txt',
        img: DirtyWars,
      },
    },
  },
  {
    name: 'Exit through the gift shop',
    id: 'highlighted2',
    path: 'www.tes2t.no',
    metaData: {
      description: 'Pdesg',
      image: {
        alt: 'img alt txt',
        img: ExitThroughTheGiftShop,
      },
    },
  },
  {
    name: 'Kon Tiki',
    id: 'highlighted3',
    path: 'www.tes2t.no',
    metaData: {
      description: 'Pdesg',
      image: {
        alt: 'img alt txt',
        img: KonTiki,
      },
    },
  },
];

export default () => <FilmFrontpage highlighted={highlighted} />;
