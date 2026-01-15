/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { formatNestedMessages } from "../formatNestedMessages";

test("i18n formatNestedMessages()", () => {
  const messages = formatNestedMessages({
    helloworld: "Hello world",
    test: {
      Me: "Test Me",
    },
    welcome: {
      to: {
        my: {
          unittest: "Welcome to my unittest",
        },
      },
    },
  });

  expect(messages.helloworld).toBe("Hello world");
  expect(messages["test.Me"]).toBe("Test Me");
  expect(messages["welcome.to.my.unittest"]).toBe("Welcome to my unittest");
});
