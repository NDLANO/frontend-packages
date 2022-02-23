/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { PageContainer, Content } from '@ndla/ui';
import { Programme, MessageBox } from '@ndla/ui';
import MastheadWithTopicMenu from '../molecules/mastheads';

import { programme } from '../../dummydata/mockPrograms';

const MessageBoxSiteExample = ({ type, message, sticky }) => {
  return (
    <PageContainer>
      <Content>
        <MastheadWithTopicMenu menuProps={{ hideSubject: true }} />

        <MessageBox sticky={sticky} type={type} showCloseButton>
          Nettleseren din er utdatert. Oppdater den, eller finn en trygg og oppdatert nettleser på:
          <a href="https://browsehappy.com"> https://browsehappy.com.</a>
        </MessageBox>

        <Programme
          messageBoxText={'Dette emnet hører til et fag som ikke er oppdatert etter gjeldende læreplan.'}
          heading={programme.label}
          grades={programme.grades}
          image={programme.image}
        />
      </Content>
    </PageContainer>
  );
};

export default MessageBoxSiteExample;
