/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';
import Topic, { TopicProps } from '../Topic/Topic';

const Wrapper = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1176px;
  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: 0 ${spacing.normal};
  }
`;

const Heading = styled.h1`
  ${fonts.sizes('30px', '35px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('36px', '46px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('52px', '65px')};
  }
`;

const Introduction = styled.p`
  max-width: 800px;
  font-weight: ${fonts.weight.light};
  ${fonts.sizes('18px', '28px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('22px', '32px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('26px', '36px')};
  }
`;

const TopicWrapper = styled.div`
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: 40px 40px;
    border: 2px solid #d1d6db;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: 40px 80px;
  }
  ${mq.range({ from: '1180px' })} {
    padding: 60px 160px;
  }
`;

type Props = {
  title: string;
  introduction: string;
  topics: ItemProps[];
  onSelectTopic?: (event: React.MouseEvent<HTMLElement>, id?: string) => void;
  selectedTopic?: TopicProps['topic'];
  isLoadingTopic?: boolean;
};

const ToolboxInfo = injectT(({ title, introduction, topics, onSelectTopic, t }: Props & tType) => (
  <>
    <Heading>{title}</Heading>
    <Introduction>{introduction}</Introduction>
    <NavigationBox
      items={topics}
      listDirection="floating"
      heading={t('topicPage.topics')}
      colorMode="greyLighter"
      onClick={onSelectTopic}
    />
  </>
));

const ToolboxPage = React.forwardRef(
  (
    { title, introduction, topics, onSelectTopic, selectedTopic, isLoadingTopic }: Props,
    ref: React.Ref<any>,
  ) => {
    return (
      <Wrapper>
        <ToolboxInfo
          title={title}
          introduction={introduction}
          topics={topics}
          onSelectTopic={onSelectTopic}
        />
        <div ref={ref}>
          {(selectedTopic || isLoadingTopic) && (
            <TopicWrapper>
              <Topic isLoading={isLoadingTopic} topic={selectedTopic} />
            </TopicWrapper>
          )}
        </div>
      </Wrapper>
    );
  },
);

export default ToolboxPage;
