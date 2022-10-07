/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';

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

type Props = {
  title: string;
  introduction: string;
  topics: ItemProps[];
  onSelectTopic?: (event: MouseEvent<HTMLElement>, id?: string) => void;
};

const ToolboxInfo = ({ title, introduction, topics, onSelectTopic }: Props) => {
  const { t } = useTranslation();
  return (
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
  );
};

export default ToolboxInfo;
