/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { isPathToHighlight } from "../IsPathToHighlight";

test("Test that determining whether to highlight path works with locale and not", () => {
  const tests = [
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      expected: true,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/nn/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      expected: true,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/nb/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      expected: true,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/kultspråk/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      expected: true,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/nb/subject:123/topic:1:123/topic:2:5343",
      expected: false,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/nb/subject:123/topic:1:123",
      expected: false,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343/resource:1:1231231231",
      href: "/nb/subject:123",
      expected: false,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343",
      href: "/nb/subject:123/topic:1:123",
      expected: false,
    },
    {
      path: "/subject:123/topic:1:123/topic:2:5343",
      href: "/nb/subject:123",
      expected: false,
    },
  ];

  tests.forEach((t) => {
    const result = isPathToHighlight(t.path, t.href);
    expect(result).toBe(t.expected);
  });
});
