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

const ReferenceBoxExample = ({ type, message, sticky }) => {
  return (
    <PageContainer>
      <Content>
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

export default ReferenceBoxExample;
