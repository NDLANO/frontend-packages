/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { SiteNav, SiteNavItem, Masthead, MastheadItem, Logo, ClickToggle, TopicMenu, TopicBreadcrumb } from '../../src';
import { topicMenu, subjectList, topicList } from '../../dummydata';

export const MastheadLeftRight = () => (
  <Masthead>
    <MastheadItem left>Left</MastheadItem>
    <MastheadItem right>Right</MastheadItem>
  </Masthead>
);

export const MastheadDefault = () => (
  <Masthead>
    <MastheadItem left>
      <SiteNav>
        <SiteNavItem to="#">Søk</SiteNavItem>
        <SiteNavItem to="#">Kontakt</SiteNavItem>
        <SiteNavItem to="#">Hjelp</SiteNavItem>
      </SiteNav>
    </MastheadItem>
    <MastheadItem right>
      <Logo to="#" altText="Nasjonal digital læringsarena" />
    </MastheadItem>
  </Masthead>
);

// export const MastheadWithTopicMenu = () => (
//
// );

export class MastheadWithTopicMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sticky: true };
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.state = { sticky: true };

    // Should probably be solved better?
    if (window.pageYOffset > 150) {
      document.getElementsByClassName('c-breadcrumb-masthead')[0].classList.add('u-fade-in');
    } else {
      document.getElementsByClassName('c-breadcrumb-masthead')[0].classList.remove('u-fade-in');
    }
  }

  render() {
    return (
      <Masthead>
        <MastheadItem left>
          <SiteNav>
            <ClickToggle title="Meny" openTitle="Lukk" className="c-topic-menu-container" buttonClassName="c-btn c-button--outline c-topic-menu-toggle-button">
              <TopicMenu subject="Mediefag" toTopic={() => '#'} topics={topicMenu} />
            </ClickToggle>
          </SiteNav>
          <TopicBreadcrumb inMasthead toSubjects={() => '#'} subjectsTitle="Fag" subject={subjectList[1]} topicPath={topicList.slice(0, 2)} toTopic={() => '#'} />
        </MastheadItem>
        <MastheadItem right>
          <Logo to="#" altText="Nasjonal digital læringsarena" />
        </MastheadItem>
      </Masthead>
    );
  }
}

export default MastheadDefault;
