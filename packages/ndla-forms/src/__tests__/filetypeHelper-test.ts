/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getIllegalFiles, illegalEndings, illegalFormats } from "../filetypeHelper";

const allowedFiles = [".pdf", "application/pdf", "image/*"];

// Check file types
test("File with known type is allowed", () => {
  const files = [
    {
      type: "application/pdf",
      name: "file.pdf",
    } as File,
  ];
  expect(illegalFormats(files, allowedFiles)).toStrictEqual([]);
});

test("File with unknown type is denied", () => {
  const files = [
    {
      type: "application/woot",
      name: "file.whatever",
    } as File,
  ];
  expect(illegalFormats(files, allowedFiles)).toStrictEqual(files);
});

test("File without type is denied", () => {
  const files = [
    {
      type: "",
      name: "file.pdf",
    } as File,
  ];
  expect(illegalFormats(files, allowedFiles)).toStrictEqual(files);
});

// Check file endings
test("File with known ending is allowed", () => {
  const files = [
    {
      type: "application/pdf",
      name: "file.pdf",
    } as File,
  ];
  expect(illegalEndings(files, allowedFiles)).toStrictEqual([]);
});

test("File with unknown ending is denied", () => {
  const files = [
    {
      type: "application/pdf",
      name: "file.whatever",
    } as File,
  ];
  expect(illegalEndings(files, allowedFiles)).toStrictEqual(files);
});

// Check types and endings combined
test("File with allowed type and allowed ending is allowed in catch-all function", () => {
  const files = [
    {
      type: "application/pdf",
      name: "file.pdf",
    } as File,
  ];
  expect(getIllegalFiles(files, allowedFiles)).toStrictEqual([]);
});

test("File with empty type but allowed ending is allowed in catch-all function", () => {
  const files = [
    {
      type: "",
      name: "file.pdf",
    } as File,
  ];
  expect(getIllegalFiles(files, allowedFiles)).toStrictEqual([]);
});

test("File with unknown type but allowed ending is allowed in catch-all function", () => {
  const files = [
    {
      type: "application/woot",
      name: "file.pdf",
    } as File,
  ];
  expect(getIllegalFiles(files, allowedFiles)).toStrictEqual([]);
});

test("File with empty type and disallowed ending is denied in catch-all function", () => {
  const files = [
    {
      type: "",
      name: "file.whatever",
    } as File,
  ];
  expect(getIllegalFiles(files, allowedFiles)).toStrictEqual(files);
});

test("Image file with image type and unknown ending is allowed in catch-all function", () => {
  const files = [
    {
      type: "image/png",
      name: "file.whatever",
    } as File,
  ];
  expect(getIllegalFiles(files, allowedFiles)).toStrictEqual([]);
});
