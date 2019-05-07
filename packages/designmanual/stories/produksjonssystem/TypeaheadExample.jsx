/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import Downshift from 'downshift';
import { css } from '@emotion/core';
import { RadioButtonGroup, SubjectMaterialBadge } from '@ndla/ui';
import { DropdownMenu, Input, FieldHeader, FormPills } from '@ndla/forms';
import { Spinner } from '@ndla/editor';
import { Search } from '@ndla/icons/common';
import { mockTypeahead } from '../../dummydata';

const fetchData = lowerCaseValue => {
  return new Promise(resolve => {
    setTimeout(() => {
      const returnData = mockTypeahead.filter(
        mock => mock.title.toLowerCase().indexOf(lowerCaseValue) !== -1,
      );
      resolve(returnData);
    }, 500);
  });
};

class TypeaheadExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedData: [],
      data: [],
      useLayout: '1',
      useTags: '1',
      keepOpen: '1',
      isOpen: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  async onSearch(value) {
    if (value === '') {
      this.setState({
        data: [],
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
      const lowerCaseValue = value.toLowerCase();
      const data = await fetchData(lowerCaseValue);
      this.setState({
        data,
        loading: false,
      });
    }
  }

  onChange(addedData) {
    this.setState({
      addedData,
    });
  }

  handleStateChange(changes) {
    const { isOpen, type } = changes;

    if (type === Downshift.stateChangeTypes.mouseUp) {
      this.setState({ isOpen });
    }

    if (type === Downshift.stateChangeTypes.keyDownEnter) {
      this.setState({ inputValue: '' });
    }
  }

  render() {
    const {
      addedData,
      data,
      loading,
      useLayout,
      useTags,
      keepOpen,
      isOpen,
    } = this.state;
    // Populate with icon for example
    let dataWithIcons;
    if (useLayout === '2') {
      dataWithIcons = data.map(item => ({
        ...item,
        image: <SubjectMaterialBadge background />,
      }));
    }

    const inputProps = {
      value: addedData,
      onChange: this.onSearch,
      placeholder: 'Type a name',
    };

    return (
      <>
        <RadioButtonGroup
          label="Design:"
          selected={useLayout}
          uniqeIds
          options={[
            { title: 'Med bilde', value: '1' },
            { title: 'Med ikon', value: '2' },
            { title: 'Kun tekst', value: '3' },
            { title: 'Kun tittel', value: '4' },
          ]}
          onChange={useLayout => {
            this.setState({
              useLayout,
            });
          }}
        />
        <RadioButtonGroup
          label="Tags plassering:"
          selected={useTags}
          uniqeIds
          options={[
            { title: 'Tags i input', value: '1' },
            { title: 'Tags utenfor input', value: '2' },
          ]}
          onChange={useTags => {
            this.setState({
              useTags,
            });
          }}
        />
        <RadioButtonGroup
          label="Oppførsel:"
          selected={keepOpen}
          uniqeIds
          options={[
            { title: 'Lukk når lagt til', value: '1' },
            { title: 'Behold åpen etter valg', value: '2' },
          ]}
          onChange={keepOpen => {
            this.setState({
              keepOpen,
            });
          }}
        />
        {useTags !== '1' && (
          <FormPills
            onClick={id => {
              this.setState(prevState => ({
                addedData: prevState.addedData.filter(
                  addedItemId => addedItemId !== id,
                ),
              }));
            }}
            labels={this.getPillItems()}
          />
        )}
        <FieldHeader title="Countries" subTitle="in Europe" />
        <Downshift
          onChange={this.onChange}
          onStateChange={this.handleStateChange}
          isOpen={isOpen}>
          {({ getInputProps, getRootProps, ...downshiftProps }) => {
            return (
              <div
                {...getRootProps({
                  css: css`
                    position: relative;
                  `,
                })}>
                <Input
                  {...getInputProps({ inputProps })}
                  data-testid={'dropdownInput'}
                  iconRight={
                    loading ? <Spinner size="normal" margin="0" /> : <Search />
                  }
                />
                <DropdownMenu
                  {...downshiftProps}
                  items={useLayout === '2' ? dataWithIcons : data}
                  positionAbsolute
                />
              </div>
            );
          }}
        </Downshift>
      </>
    );
  }
}

export default TypeaheadExample;
