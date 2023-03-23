/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-tabs');

type TabType = {
  id: string;
  title: string;
  content: (() => ReactNode) | ReactNode;
};
interface Props {
  tabs: TabType[];
}

const ArticleTabs = ({ tabs }: Props) => {
  const tabElements: ReactNode[] = [];
  const tabPanels: ReactNode[] = [];

  tabs.forEach((tab, index) => {
    const selected = index === 0;
    let modifiers: string[] | undefined = undefined;
    let tabIndex: number | undefined = undefined;

    if (selected) {
      modifiers = ['selected'];
      tabIndex = 0;
    }

    const tabPanelId = `${tab.id}_panel`;

    tabElements.push(
      <li
        data-index={index}
        key={tab.id}
        {...classes('tab', modifiers)}
        id={tab.id}
        tabIndex={tabIndex}
        role="tab"
        aria-selected={selected}
        aria-controls={tabPanelId}
      >
        {tab.title}
      </li>,
    );

    tabPanels.push(
      <div
        key={tabPanelId}
        {...classes('panel')}
        role="tabpanel"
        id={tabPanelId}
        aria-hidden={!selected}
        aria-labelledby={tab.id}
      >
        {tab.content}
      </div>,
    );
  });
  return (
    <div {...classes('', 'article')} data-length={tabs.length}>
      <ul {...classes('list')} role="tablist">
        {tabElements}
      </ul>
      {tabPanels}
    </div>
  );
};

export default ArticleTabs;
