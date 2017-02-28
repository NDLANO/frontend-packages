import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Tabs from 'ndla-tabs';
import { Center } from './helpers';

import {
  TopicIntroductionList,
} from '../src';
import { topicListWithIntro } from '../dummydata/index';
import { ResourceTabs } from './molecules/resources';

storiesOf('Organismer', module)
  .add('Læringsressurspanel for emneside', () => (
    <Center>
      <div className="c-resources u-margin-top-large">
        <Tabs
          selectedIndex={1}
          tabs={[
                { displayName: 'Emner', content: <TopicIntroductionList toTopic={() => '#'} topics={topicListWithIntro} subjectId="1" /> },
                { displayName: 'Fagstoff', content: <ResourceTabs /> },
          ]}
        />
      </div>
    </Center>
  ))
;
