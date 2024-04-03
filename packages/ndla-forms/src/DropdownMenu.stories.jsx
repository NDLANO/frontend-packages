/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Downshift from "downshift";
import React, { Component } from "react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";
import {
  DropdownMenu,
  DropdownInput,
  FieldHeader,
  FormPills,
  Label,
  RadioButtonItem,
  RadioButtonGroup,
} from "@ndla/forms";
import { Spinner } from "@ndla/icons";
import { Search } from "@ndla/icons/common";
import { Text } from "@ndla/typography";
import { SubjectMaterialBadge } from "@ndla/ui";
import { mockTypeahead } from "../../../dummydata";

const meta = {
  title: "Forms/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    inlineStories: true,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = ({ ...args }) => <MultiSelectDropdownExample {...args} />;

Default.storyName = "DropdownMenu";

const StyledSpinner = styled(Spinner)`
  margin: 0;
`;

const fetchData = (lowerCaseValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const returnData = mockTypeahead.filter((mock) => mock.title.toLowerCase().indexOf(lowerCaseValue) !== -1);
      resolve(returnData);
    }, 500);
  });
};

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  gap: ${spacing.medium};
  margin-bottom: ${spacing.medium};
`;

const StyledText = styled(Text)`
  float: left;
`;
class MultiSelectDropdownExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedData: [],
      data: [],
      useLayout: "1",
      useTags: "1",
      keepOpen: "1",
      showPagination: "1",
      isOpen: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  async onSearch(e) {
    const {
      target: { value },
    } = e;
    this.setState({
      loading: true,
      value,
    });
    const lowerCaseValue = value.toLowerCase();
    const data = await fetchData(lowerCaseValue);
    this.setState({
      isOpen: true,
      data,
      loading: false,
    });
  }

  onChange(selected) {
    this.setState((prevState) => ({
      addedData: [...prevState.addedData, selected],
      value: "",
      isOpen: this.state.keepOpen !== "1",
    }));
  }

  handleStateChange(changes) {
    const { isOpen, type } = changes;

    if (type === Downshift.stateChangeTypes.mouseUp) {
      this.setState({ isOpen });
    }

    if (type === Downshift.stateChangeTypes.keyDownEnter) {
      this.setState({ value: "" });
    }
  }

  removeItem(item) {
    console.log(item); // eslint-disable-line no-console
    this.setState((prevState) => ({
      addedData: prevState.addedData.filter((it) => it.title !== item),
    }));
  }

  render() {
    const { addedData, data, loading, useLayout, useTags, keepOpen, isOpen, showPagination, value } = this.state;

    const dataFormatted = data.map((item, idx) => ({
      title: item.title,
      description: useLayout !== "4" && item.description,
      disabledText: idx === 0 ? "Finnes allerede" : undefined,
      image: useLayout === "1" ? item.image : useLayout === "2" && <SubjectMaterialBadge background />,
      alt: item.alt,
    }));

    const inputProps = {
      value,
      onChange: this.onSearch,
      placeholder: "Type a name",
      onKeyDown: async (event) => {
        if (event.key === "ArrowDown") {
          await this.onSearch(event);
        }
      },
    };

    const page = showPagination === "1" ? undefined : 1;

    return (
      <>
        <StyledFieldset>
          <StyledText margin="none" textStyle="label-small" element="legend">
            Design:
          </StyledText>
          <RadioButtonGroup
            style={{ display: "flex", gap: spacing.small }}
            orientation="horizontal"
            value={useLayout}
            onValueChange={(useLayout) => this.setState({ useLayout })}
          >
            {[
              { title: "Med bilde", value: "1" },
              { title: "Med ikon", value: "2" },
              { title: "Kun tekst", value: "3" },
              { title: "Kun tittel", value: "4" },
            ].map((option) => (
              <div style={{ display: "flex", alignItems: "center", gap: spacing.xsmall }} key={option.value}>
                <RadioButtonItem value={option.value} />
                <Label margin="none" textStyle="label-small">
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioButtonGroup>
        </StyledFieldset>
        <StyledFieldset>
          <StyledText margin="none" textStyle="label-small" element="legend">
            Tags plassering:
          </StyledText>
          <RadioButtonGroup
            style={{ display: "flex", gap: spacing.small }}
            orientation="horizontal"
            value={useTags}
            onValueChange={(useTags) => this.setState({ useTags })}
          >
            {[
              { title: "Tags i input", value: "1" },
              { title: "Tags utenfor input", value: "2" },
            ].map((option) => (
              <div style={{ display: "flex", alignItems: "center", gap: spacing.xsmall }} key={option.value}>
                <RadioButtonItem value={option.value} />
                <Label margin="none" textStyle="label-small">
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioButtonGroup>
        </StyledFieldset>
        <StyledFieldset>
          <StyledText margin="none" textStyle="label-small" element="legend">
            Oppførsel:
          </StyledText>
          <RadioButtonGroup
            style={{ display: "flex", gap: spacing.small }}
            orientation="horizontal"
            value={keepOpen}
            onValueChange={(keepOpen) => this.setState({ keepOpen })}
          >
            {[
              { title: "Lukk når lagt til", value: "1" },
              { title: "Behold åpen etter valg", value: "2" },
            ].map((option) => (
              <div style={{ display: "flex", alignItems: "center", gap: spacing.xsmall }} key={option.value}>
                <RadioButtonItem value={option.value} />
                <Label margin="none" textStyle="label-small">
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioButtonGroup>
        </StyledFieldset>
        <StyledFieldset>
          <StyledText margin="none" textStyle="label-small" element="legend">
            Paginering:
          </StyledText>
          <RadioButtonGroup
            style={{ display: "flex", gap: spacing.small }}
            orientation="horizontal"
            value={showPagination}
            onValueChange={(showPagination) => this.setState({ showPagination })}
          >
            {[
              { title: "Uten", value: "1" },
              { title: "Med", value: "2" },
            ].map((option) => (
              <div style={{ display: "flex", alignItems: "center", gap: spacing.xsmall }} key={option.value}>
                <RadioButtonItem value={option.value} />
                <Label margin="none" textStyle="label-small">
                  {option.title}
                </Label>
              </div>
            ))}
          </RadioButtonGroup>
        </StyledFieldset>
        {useTags !== "1" && (
          <FormPills
            onClick={(id) => {
              this.setState((prevState) => ({
                addedData: prevState.addedData.filter((addedItemId) => addedItemId !== id),
              }));
            }}
            labels={addedData}
          />
        )}
        <FieldHeader title="Countries" subTitle="in Europe" />
        <Downshift
          onChange={this.onChange}
          itemToString={(item) => item?.title || ""}
          onStateChange={this.handleStateChange}
          isOpen={isOpen}
        >
          {({ getInputProps, getMenuProps, getItemProps, highlightedIndex }) => {
            return (
              <div>
                <DropdownInput
                  multiSelect={useTags === "1"}
                  {...getInputProps(inputProps)}
                  data-testid="dropdown-input"
                  idField="title"
                  labelField="title"
                  iconRight={loading ? <StyledSpinner size="normal" /> : <Search />}
                  values={useTags === "1" && addedData}
                  removeItem={this.removeItem}
                />
                <DropdownMenu
                  getMenuProps={getMenuProps}
                  getItemProps={getItemProps}
                  isOpen={isOpen}
                  idField="title"
                  labelField="title"
                  multiSelect
                  selectedItems={addedData}
                  items={dataFormatted}
                  totalCount={dataFormatted.length}
                  page={page}
                  loading={loading}
                  highlightedIndex={highlightedIndex}
                />
              </div>
            );
          }}
        </Downshift>
      </>
    );
  }
}
