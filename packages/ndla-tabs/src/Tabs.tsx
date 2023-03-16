/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, createRef, MutableRefObject, ReactNode } from 'react';
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import { isMobile } from 'react-device-detect';
import { isFunction } from '@ndla/util';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'tabs',
  prefix: 'c-',
});

type TabType = {
  key?: string;
  title: string;
  content: (() => ReactNode) | ReactNode;
  disabled?: boolean;
};

interface Props {
  tabs: TabType[];
  singleLine?: boolean;
  onSelect?: (index: number, last: number) => void;
  modifier?: string;
  forceRenderTabPanel?: boolean;
  selectedIndex?: number;
}

interface State {
  index: number;
  singleLineState: boolean;
}

const assertIsFunction = (maybeFunc: (() => ReactNode) | ReactNode): maybeFunc is () => ReactNode =>
  isFunction(maybeFunc);

class Tabs extends Component<Props, State> {
  tabRef: MutableRefObject<HTMLDivElement | null>;
  constructor(props: Props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: props.selectedIndex || 0,
      singleLineState: false,
    };
    this.tabRef = createRef();
  }

  componentDidMount() {
    if (this.props.singleLine && isMobile) {
      // We only allow horisontal scrolling for phones..
      const widthTotal = this.tabRef.current?.offsetWidth ?? 0;
      let childrensWidthsTotal = 0;
      this.tabRef.current?.querySelectorAll<HTMLLIElement>('.c-tabs__list li').forEach((el) => {
        childrensWidthsTotal += el.offsetWidth;
      });
      if (childrensWidthsTotal > widthTotal) {
        this.setState({
          singleLineState: true,
        });
      }
    }
  }

  componentDidUpdate(_: Props, __: State) {
    const { index } = this.state;
    if (this.props.selectedIndex !== undefined && this.props.selectedIndex !== index) {
      this.setState({ index: this.props.selectedIndex });
    }
  }

  handleSelect(index: number, last: number) {
    this.setState({
      index,
    });

    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(index, last);
    }
  }

  render() {
    const { tabs, forceRenderTabPanel, modifier } = this.props;
    const { index } = this.state;

    const baseClass = modifier ? { [modifier]: modifier } : {};

    return (
      <div ref={this.tabRef}>
        <ReactTabs
          {...classes({ modifier })}
          onSelect={this.handleSelect}
          selectedIndex={this.state.index}
          forceRenderTabPanel={forceRenderTabPanel}
        >
          <TabList
            {...classes('list', {
              ...baseClass,
              singleLine: this.state.singleLineState,
            })}
          >
            {tabs.map((tab, i) => (
              <Tab
                {...classes('tab', {
                  selected: i === index,
                  disabled: !!tab.disabled,
                  ...baseClass,
                })}
                key={tab.key ? tab.key : i}
                disabled={tab.disabled}
                data-cy={`${tab.title}-video-tab`}
              >
                {tab.title}
              </Tab>
            ))}
          </TabList>
          {tabs.map((tab, i) => (
            <TabPanel {...classes('panel', modifier)} key={tab.key ? tab.key : i}>
              {assertIsFunction(tab.content) ? tab.content() : tab.content}
            </TabPanel>
          ))}
        </ReactTabs>
      </div>
    );
  }
}

export default Tabs;
