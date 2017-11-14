/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  SiteNav,
  Masthead,
  MastheadItem,
  Logo,
  ClickToggle,
  TopicMenu,
  DisplayOnPageYOffset,
  BreadcrumbBlock,
} from 'ndla-ui';
import { topicMenu, subjectList, topicList } from '../../dummydata';

export const MastheadLeftRight = () => (
  <Masthead>
    <MastheadItem left>Left</MastheadItem>
    <MastheadItem right>Right</MastheadItem>
  </Masthead>
);

export const MastheadWithTopicMenu = () => {
  const messages = {
    goTo: 'Gå til',
    subjectOverview: 'Fagoversikt',
    search: 'Søk',
  };

  return (
    <Masthead fixed>
      <MastheadItem left>
        <SiteNav>
          <ClickToggle
            title="Meny"
            openTitle="Lukk"
            className="c-topic-menu-container"
            buttonClassName="c-btn c-button--outline c-topic-menu-toggle-button">
            <TopicMenu
              subjectTitle="Mediefag"
              toSubject={() => '#'}
              toTopic={() => '#'}
              withSearchAndFilter
              topics={topicMenu}
              messages={messages}
            />
          </ClickToggle>
        </SiteNav>

        <DisplayOnPageYOffset yOffset={150}>
          <BreadcrumbBlock
            subject={subjectList[1]}
            topicPath={topicList.slice(0, 2)}
            toTopic={() => '#'}
          />
        </DisplayOnPageYOffset>
      </MastheadItem>
      <MastheadItem right>
        <Logo to="#" altText="Nasjonal digital læringsarena" />
      </MastheadItem>
    </Masthead>
  );
};

export default MastheadWithTopicMenu;
