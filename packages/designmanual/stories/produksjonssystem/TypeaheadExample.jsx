/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { FieldHeader, Typeahead, FormPills, FormPill } from '@ndla/forms';
import { RadioButtonGroup, SubjectMaterialBadge } from '@ndla/ui';

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
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
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

  getPillItems() {
    const { addedData } = this.state;
    return addedData.map(id => {
      const item = mockTypeahead.find(dataItem => dataItem.id === id);
      return {
        id: item.id,
        label: item.title,
      };
    });
  }

  renderTags() {
    return this.state.addedData.map(id => {
      const item = mockTypeahead.find(dataItem => dataItem.id === id);
      return (
        <FormPill
          id={item.id}
          label={item.title}
          onClick={id => {
            this.setState(prevState => ({
              addedData: prevState.addedData.filter(
                addedItemId => addedItemId !== id,
              ),
            }));
          }}
        />
      );
    });
  }

  render() {
    const {
      addedData,
      data,
      loading,
      useLayout,
      useTags,
      keepOpen,
    } = this.state;
    // Populate with icon for example
    let dataWithIcons;
    if (useLayout === '2') {
      dataWithIcons = data.map(item => ({
        ...item,
        image: <SubjectMaterialBadge background />,
      }));
    }

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
        <Typeahead
          data={useLayout === '2' ? dataWithIcons : data}
          value={addedData}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="Type a name"
          focusOnMount
          closeOnSelect={keepOpen === '1'}
          loading={loading}
          tags={useTags === '1' && this.renderTags()}
          renderImage={useLayout === '1' || useLayout === '2'}
          renderDescription={useLayout !== '4'}
          messages={{
            matches: hits => `Søket gav ${hits} treff`,
            searching: 'Søker..',
            addedItem: 'Lagt til',
          }}
        />
      </>
    );
  }
}

export default TypeaheadExample;
