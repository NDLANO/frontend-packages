import React from 'react';
import Tabs from '@ndla/tabs';

const Tab1 = () => (
  <div>
    <h1>Typosss1</h1>
    <p>Lorem ipsum litt design kvasi-filosofi?</p>
  </div>
);

const Tab2 = () => (
  <div>
    <h1>Typosss2</h1>
    <p>Lorem ipsum litt design kvasi-filosofi?</p>
  </div>
);

const tabContent = [
  {
    title: 'Typosss1',
    content: Tab1,
  },
  {
    title: 'Typosss2',
    content: Tab2,
  },
];

const BaseStyles = ({ tabInherited }) => (
  <Tabs
    modifier="tabs-maxwidth"
    tabs={tabInherited ? [tabInherited, ...tabContent] : tabContent}
  />
);

export default BaseStyles;
