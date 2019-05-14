/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  LearningPathWrapper,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathStickySibling,
  LearningPathHero,
  LearningPathContent,
  constants,
} from '@ndla/ui';

import ArticleLearningmaterial from './ArticleLearningmaterial';
import Breadcrumb from '../molecules/breadcrumbs';

const { contentTypes } = constants;

const menuItems = [
  {
    name: 'Introduksjon',
    url: '#',
    contentType: contentTypes.SUBJECT_MATERIAL,
  },
  {
    name: 'Introduksjon2',
    url: '#',
    contentType: contentTypes.SUBJECT_MATERIAL,
  },
  {
    name: 'Introduksjon3',
    url: '#',
    current: true,
    contentType: contentTypes.SUBJECT_MATERIAL,
  },
  {
    name: 'Introduksjon4',
    url: '#',
    contentType: contentTypes.SUBJECT_MATERIAL,
  },
];

const LearningPathExample = () => (
  <LearningPathWrapper>
    <div className="c-hero__content">
      <section>
        <Breadcrumb />
      </section>
    </div>
    <LearningPathContent>
      <LearningPathMenu
        menuItems={menuItems}
        estimatedTime={3}
        lastUpdated={"21.06.2019"}
        authors={['Ivar Borthen']}
        license="CC-BY-SA"
      />
      <ArticleLearningmaterial />
    </LearningPathContent>
    <LearningPathSticky>
      <LearningPathStickySibling to="#" name="Gå til neste" />
      <LearningPathStickySibling to="#" name="Gå til neste" />
    </LearningPathSticky>
  </LearningPathWrapper>
);

export default LearningPathExample;
