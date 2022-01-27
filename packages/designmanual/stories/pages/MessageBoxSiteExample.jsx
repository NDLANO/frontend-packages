/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';
import { PageContainer, constants, Content } from '@ndla/ui';

import MastheadWithTopicMenu from '../molecules/mastheads';
import Tabs from '@ndla/tabs';
import { Programme } from '@ndla/ui/src/Programme/Programme';
import { MessageBox } from '@ndla/ui/lib/MessageBox/MessageBox';

import { programme } from '../../dummydata/mockPrograms';
import messages from '@ndla/ui/lib/locale/messages-nb';

const { contentTypes } = constants;

const MessageBoxSiteExample = ({ type, message, sticky }) => {
  return (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu menuProps={{ hideSubject: true }} />

        <MessageBox sticky={sticky} type={type}>
          {message}
        </MessageBox>

        <Programme messageBox={true} heading={programme.label} grades={programme.grades} image={programme.image} />
      </Content>
    </PageContainer>
  );
};

export default MessageBoxSiteExample;
