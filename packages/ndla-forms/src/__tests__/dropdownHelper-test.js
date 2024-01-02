/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { checkIfItemIsSelected, getFieldValue } from "../dropdownHelper";

const dropdownItem = {
  anIdField: "1",
  someTitleField: "A title",
  description: "Test",
};

const dropdownItem2 = {
  anIdField: "2",
  someTitleField: "A title number two",
  description: "Test",
};

test("checkIfItemIsSelected is true with objects & multiselect", () => {
  const selectedItem = undefined;
  const selectedItems = [dropdownItem, dropdownItem2];
  const multiselect = true;
  expect(checkIfItemIsSelected(dropdownItem, selectedItem, selectedItems, multiselect, "anIdField")).toBe(true);
});

test("checkIfItemIsSelected is false with objects & multiselect", () => {
  const selectedItem = undefined;
  const selectedItems = [dropdownItem2];
  const multiselect = true;
  expect(checkIfItemIsSelected(dropdownItem, selectedItem, selectedItems, multiselect, "anIdField")).toBe(false);
});

test("checkIfItemIsSelected is true with strings & multiselect", () => {
  const selectedItem = undefined;
  const selectedItems = ["String 1", "String 2", "String 3"];
  const multiselect = true;
  expect(checkIfItemIsSelected("String 2", selectedItem, selectedItems, multiselect, undefined)).toBe(true);
});

test("checkIfItemIsSelected is false with strings & multiselect", () => {
  const selectedItem = undefined;
  const selectedItems = ["String 1", "String 2", "String 3"];
  const multiselect = true;
  expect(checkIfItemIsSelected("Some random string", selectedItem, selectedItems, multiselect, undefined)).toBe(false);
});

test("checkIfItemIsSelected is true with strings & multiselect false", () => {
  const selectedItem = "String 2";
  const selectedItems = ["String 1", "String 2", "String 3"];
  const multiselect = false;
  expect(checkIfItemIsSelected("String 2", selectedItem, selectedItems, multiselect, undefined)).toBe(true);
});

test("checkIfItemIsSelected is false with strings & multiselect false", () => {
  const selectedItem = "Some random string 2";
  const selectedItems = ["String 1", "String 2", "String 3"];
  const multiselect = false;
  expect(checkIfItemIsSelected("Some random string", selectedItem, selectedItems, multiselect, undefined)).toBe(false);
});

test("getFieldValue with field undefined", () => {
  expect(getFieldValue("test")).toMatchSnapshot();
  expect(getFieldValue({ test: "test" })).toMatchSnapshot();
});

test("getFieldValue with field assigned", () => {
  expect(getFieldValue({ testfield: "test", someotherfield: "other test value" }, "testfield")).toMatchSnapshot();
});
