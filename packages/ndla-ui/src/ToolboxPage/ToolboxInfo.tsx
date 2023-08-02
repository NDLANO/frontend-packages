/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';
import { Heading } from '../Typography';

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

interface Props {
  id?: string;
  title: string;
  introduction: string;
  topics: ItemProps[];
  onSelectTopic?: (event: MouseEvent<HTMLElement>, id?: string) => void;
}

const ToolboxInfo = ({ title, introduction, topics, onSelectTopic, id }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <Heading element="h1" headingStyle="h1" id={id} tabIndex={-1}>
        {title}
      </Heading>
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
