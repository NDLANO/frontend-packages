import React from 'react';
import Tabs from '@ndla/tabs';

const Tab1 = () => (
    <div>
        <h1>Tab1</h1>
        <p>Lorem ipsum litt design kvasi-filosofi?</p>
    </div>
);

const Tab2 = () => (
    <div>
        <h1>Tab2</h1>
        <p>Lorem ipsum litt design kvasi-filosofi?</p>
    </div>
);

const tabContent = [
    {
        title: 'Static tab1',
        content: Tab1,
    },
    {
        title: 'Static tab2',
        content: Tab2,
    }
];

const BaseStyles = ({ tabInherited }) => (
    <Tabs modifier="tabs-maxwidth" tabs={tabInherited ? [tabInherited, ...tabContent] : tabContent} />
);

export default BaseStyles;