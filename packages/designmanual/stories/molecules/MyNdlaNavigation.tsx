/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Tag, Person } from '@ndla/icons/common';
import { FolderOutlined } from '@ndla/icons/contentType';
import { VerticalNavigation } from '@ndla/ui';
import { useTranslation } from 'react-i18next';

const MyNdlaNavigation = () => {
  const { t } = useTranslation();
  return (
    <VerticalNavigation
      navElements={[
        { name: t('myNdla.myFolders'), url: '', icon: <FolderOutlined /> },
        { name: t('myNdla.myTags'), url: '', icon: <Tag /> },
        { name: t('myNdla.myPage'), url: '', icon: <Person /> },
      ]}
    />
  );
};

export default MyNdlaNavigation;
