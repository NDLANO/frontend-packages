/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { UnOrderedList } from "./ArticleLists";

export default {
  title: "Primitives/Article Unordered List",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  component: UnOrderedList,
} as Meta<typeof UnOrderedList>;

export const Default: StoryFn = () => (
  <UnOrderedList>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <UnOrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <UnOrderedList>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <UnOrderedList>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>Listepunkt 3</li>
              </UnOrderedList>
            </li>
          </UnOrderedList>
        </li>
      </UnOrderedList>
    </li>
    <li>Listepunkt 4</li>
  </UnOrderedList>
);
