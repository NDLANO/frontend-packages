import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';
import { Center } from './helpers';

import {
  TopicIntroductionList,
  ResourceWrapper,
} from '../src';
import { topicList } from '../dummydata/index';
import { ResourceTabs } from './molecules/resources';
import LicenseExample from './article/LicenseExample';

storiesOf('Organismer', module)
  .add('Læringsressurspanel for emneside', () => (
    <Center>
      <ResourceWrapper>
        <Tabs
          selectedIndex={1}
          tabs={[
            { title: 'Emner',
              content:
                <TopicIntroductionList
                  toTopic={() => '#'}
                  goToTopicTitle="Gå til emnet"
                  toTopicResources={() => '#'}
                  goToTopicResourcesTitle="Se fagstoff"
                  topics={topicList}
                />,
            },
            { title: 'Fagstoff', content: <ResourceTabs /> },
          ]}
        />
      </ResourceWrapper>
    </Center>
  ))
  .add('Ekspanderbar lisensboks', () => (
    <Center>
      <h2 className="u-heading">Ekspanderbar lisensboks</h2>
      <article className="article">
        <LicenseExample />
      </article>
      <h2 className="u-heading">Ekspanderbar lisensboks med byline</h2>
      <article className="article">
        <LicenseExample showByline />
      </article>
    </Center>
  ))
;
