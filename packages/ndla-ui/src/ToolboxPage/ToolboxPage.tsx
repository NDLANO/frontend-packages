/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';
import Topic, { TopicProps } from '../Topic/Topic';

const Wrapper = styled.div`
  padding: 0 ${spacing.normal};
  margin: 0 auto;
  max-width: 1176px;
`;

const Heading = styled.h1`
  ${fonts.sizes('52px', '65px')};
`;

const Introduction = styled.p`
  max-width: 800px;
  font-weight: ${fonts.weight.light};
  ${fonts.sizes('26px', '36px')};
`;

const TopicWrapper = styled.div`
  border: 2px solid #d1d6db;
  padding: 60px 160px;
`;

type Props = {
  introduction: string;
  topics: ItemProps[];
  onSelectTopic?: (event: React.MouseEvent<HTMLElement>, id?: string) => void;
  selectedTopic?: TopicProps['topic'];
  isLoadingTopic?: boolean;
};

const ToolboxPage = ({
  introduction,
  topics,
  onSelectTopic,
  selectedTopic,
  isLoadingTopic,
}: Props) => {
  return (
    <Wrapper>
      <Heading>Verktøykassa</Heading>
      <Introduction>{introduction}</Introduction>
      <NavigationBox
        items={topics}
        listDirection="floating"
        heading="Velg emne"
        colorMode="greyLighter"
        onClick={onSelectTopic}
      />
      {(selectedTopic || isLoadingTopic) && (
        <TopicWrapper>
          <Topic isLoading={isLoadingTopic} topic={selectedTopic} />
        </TopicWrapper>
      )}
    </Wrapper>
  );
};

export default ToolboxPage;
