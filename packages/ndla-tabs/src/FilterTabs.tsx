/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, MutableRefObject, ReactNode, KeyboardEvent, createRef } from 'react';
import BEMHelper from 'react-bem-helper';
import { ArrowDropDown } from '@ndla/icons/common';
import debounce from 'lodash/debounce';
// eslint-disable-next-line lodash/import-scope
import type { DebouncedFunc } from 'lodash';

const classes = BEMHelper('c-tabs');

const leftKeys = ['ArrowLeft', 'Left', 'ArrowUp', 'Up'];
const rightKeys = ['ArrowRight', 'Right', 'ArrowDown', 'Down'];
const tabKeys = ['Tab'];
const escKeys = ['Escape'];

interface Option {
  title: string;
  value: string;
}
interface Props {
  options: Option[];
  dropdownBtnLabel: string;
  contentId: string;
  value: string;
  children: ReactNode;
  onChange: (newTab: string) => void;
}

interface State {
  options: Option[];
  visibleTabsCounter: number;
  focusOnSelected: boolean;
  showDropdown?: boolean;
}

class FilterTabs extends Component<Props, State> {
  containerRef: MutableRefObject<HTMLUListElement | null>;
  dropdownTabRef: MutableRefObject<HTMLButtonElement | null>;
  dropdownTabWidth: number | null;
  showSelectedTab: boolean;
  liRefs: Record<string, HTMLButtonElement | null>;
  tabWidths: number[] | null;
  checkTabSizesDebounce: DebouncedFunc<() => void>;

  constructor(props: Props) {
    super(props);
    this.state = {
      options: props.options,
      visibleTabsCounter: 999,
      focusOnSelected: false,
    };
    this.checkTabSizes = this.checkTabSizes.bind(this);
    this.checkTabSizesDebounce = debounce(() => this.checkTabSizes(), 100);
    this.liRefs = {};
    this.tabWidths = null;
    this.dropdownTabWidth = null;
    this.dropdownTabRef = createRef();
    this.containerRef = createRef();
    this.showSelectedTab = false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkTabSizesDebounce);
    this.updateTabSizes();
    this.checkTabSizes();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.options !== this.state.options) {
      this.tabWidths = null;
      // It's fine: https://reactjs.org/docs/react-component.html#componentdidupdate
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        focusOnSelected: false,
        showDropdown: false,
      });
    }
    this.updateTabSizes();
    if (this.state.focusOnSelected) {
      this.liRefs[this.props.value]?.focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkTabSizesDebounce);
  }

  updateTabSizes() {
    const firstLi = this.liRefs[Object.keys(this.liRefs)[0]];
    if (!this.tabWidths && firstLi?.parentElement?.offsetWidth !== 0) {
      // Get all tabs widths
      this.tabWidths = [];
      let widestNode = 0;
      this.props.options.forEach((option, counter) => {
        const nodeWidth = this.liRefs[option.value]?.parentElement?.offsetWidth ?? 0;
        widestNode = Math.max(nodeWidth, widestNode);
        if (this.tabWidths) {
          this.tabWidths[counter] = nodeWidth;
        }
      });
      this.dropdownTabWidth = Math.max(this.dropdownTabRef.current?.parentElement?.offsetWidth ?? 0, widestNode);
    }
  }

  checkTabSizes() {
    if (!this.tabWidths) {
      this.updateTabSizes();
    }
    if (this.tabWidths) {
      const containerWidth = (this.containerRef.current?.offsetWidth ?? 0) - (this.dropdownTabWidth ?? 0);
      let visibleTabsTotalWidth = 0;
      let visibleTabsCounter = -1;
      for (let i = 0; i <= this.tabWidths.length && visibleTabsTotalWidth < containerWidth; i += 1) {
        visibleTabsCounter = i;
        visibleTabsTotalWidth += this.tabWidths[i];
      }
      this.setState({
        visibleTabsCounter,
      });
    }
  }

  changeMainTabs(currentMainTab: number, event: KeyboardEvent<HTMLButtonElement>) {
    let mainTabSelected: number | null = null;

    if (rightKeys.some((key) => key === event.key)) {
      mainTabSelected = currentMainTab + 1;
      if (mainTabSelected > this.props.options.length - 1) {
        mainTabSelected = 0;
      }
    } else if (leftKeys.some((key) => key === event.key)) {
      mainTabSelected = currentMainTab - 1;
      if (mainTabSelected < 0) {
        mainTabSelected = this.props.options.length - 1;
      }
    }

    if (mainTabSelected !== null) {
      this.setState(
        {
          focusOnSelected: true,
        },
        () => {
          if (mainTabSelected) {
            this.props.onChange(this.props.options[mainTabSelected].value);
          }
        },
      );
    }
  }

  renderVisibleTabs() {
    const { options, value, contentId, onChange } = this.props;
    const { visibleTabsCounter } = this.state;

    return options.map((option, mainTabIndex) => {
      if (mainTabIndex >= visibleTabsCounter) {
        return null;
      }

      const modifiers = ['no-margin', 'button-based'];
      const selected = option.value === value;
      let tabIndex = -1;
      if (selected) {
        modifiers.push('selected');
        tabIndex = 0;
      } else if (!value && mainTabIndex === 0) {
        tabIndex = 0;
      }

      return (
        <li key={option.value} {...classes('tab', modifiers)}>
          <button
            type="button"
            data-value={option.value}
            id={option.value}
            tabIndex={tabIndex}
            role="tab"
            aria-selected={selected}
            aria-controls={contentId}
            onClick={() => {
              onChange(option.value);
            }}
            onFocus={() => {
              this.setState({
                showDropdown: false,
              });
            }}
            ref={(ref) => {
              this.liRefs[option.value] = ref;
            }}
            onKeyDown={(event) => {
              this.changeMainTabs(mainTabIndex, event);
            }}
          >
            {option.title}
          </button>
        </li>
      );
    });
  }

  renderDropdownTabs() {
    this.showSelectedTab = false;
    if (this.state.visibleTabsCounter === this.props.options.length && this.dropdownTabRef.current) {
      // No need for dropdown as every tab is showing.
      return null;
    }

    const { options, value, dropdownBtnLabel, contentId, onChange } = this.props;
    let minimumWidthDropdownContainer = 0;
    const tabDropdownModifier = ['no-margin'];
    if (this.state.showDropdown) {
      tabDropdownModifier.push('visible');
    } else if (options.findIndex((option) => option.value === value) >= this.state.visibleTabsCounter) {
      this.showSelectedTab = true;
    }
    const dropdownTabs = options.map((option, mainTabIndex) => {
      if (mainTabIndex < this.state.visibleTabsCounter) {
        return null;
      }
      if ((this.tabWidths?.[mainTabIndex] ?? 0) > minimumWidthDropdownContainer) {
        minimumWidthDropdownContainer = this.tabWidths![mainTabIndex] + 1;
      }
      const tabIndex = option.value === value ? 0 : -1;
      return (
        <li key={option.value} {...classes('tab', ['no-margin'])}>
          <button
            type="button"
            data-dropdowntab
            data-value={option.value}
            id={option.value}
            role="tab"
            tabIndex={tabIndex}
            onClick={() => {
              this.setState(
                {
                  showDropdown: false,
                },
                () => {
                  onChange(option.value);
                },
              );
            }}
            onFocus={() => {
              this.setState({
                showDropdown: true,
              });
            }}
            ref={(ref) => {
              this.liRefs[option.value] = ref;
            }}
            onKeyDown={(event) => {
              if (escKeys.some((key) => key === event.key) || tabKeys.some((key) => key === event.key)) {
                this.setState({
                  showDropdown: false,
                });
              } else {
                this.changeMainTabs(mainTabIndex, event);
              }
            }}
          >
            {option.title}
          </button>
        </li>
      );
    });
    const moreLabel = this.showSelectedTab
      ? this.props.options[this.props.options.findIndex((option) => option.value === value)].title
      : dropdownBtnLabel;
    const modifiers = ['no-margin', 'button-based', 'dropdown-btn'];
    const isSelected = moreLabel !== dropdownBtnLabel;
    if (isSelected) {
      modifiers.push('selected');
    }
    return (
      <li {...classes('tab', modifiers)}>
        <button
          type="button"
          role="tab"
          tabIndex={-1}
          aria-selected={isSelected}
          aria-controls={contentId}
          onClick={() => {
            if (!this.state.showDropdown) {
              this.setState({
                focusOnSelected: false,
                showDropdown: true,
              });
            }
          }}
          onBlur={() => {
            this.setState({
              showDropdown: false,
              focusOnSelected: false,
            });
          }}
          onKeyDown={(event) => {
            if (escKeys.some((key) => key === event.key)) {
              this.setState({
                showDropdown: false,
              });
            }
          }}
          ref={this.dropdownTabRef}
        >
          {moreLabel} <ArrowDropDown />
        </button>
        <div {...classes('tab-dropdown', tabDropdownModifier)} style={{ width: `${minimumWidthDropdownContainer}px` }}>
          <ul>{dropdownTabs}</ul>
        </div>
      </li>
    );
  }

  render() {
    const { contentId, value, children } = this.props;
    return (
      <div {...classes('')}>
        <ul {...classes('list')} role="tablist" ref={this.containerRef}>
          {this.renderVisibleTabs()}
          {this.renderDropdownTabs()}
        </ul>
        <div {...classes('panel')} role="tabpanel" id={contentId} aria-labelledby={value}>
          {children}
        </div>
      </div>
    );
  }
}

export default FilterTabs;
