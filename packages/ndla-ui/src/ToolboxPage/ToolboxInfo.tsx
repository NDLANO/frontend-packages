/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading, Text } from '@ndla/typography';
import { ItemProps } from '../Navigation/NavigationBox';
import { NavigationBox } from '../Navigation';

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
      <Heading element="h1" headingStyle="h1-resource" id={id} tabIndex={-1}>
        {title}
      </Heading>
      <Text textStyle="ingress">{introduction}</Text>
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
