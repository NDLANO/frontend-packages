/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import UnOrderedList from './UnOrderedList';

export default {
  title: 'Base styles/UnorderedList',
  tags: ['autodocs'],
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

export const NoStyle: StoryFn = () => (
  <ul>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <ul>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <ul>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>Listepunkt 3</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Listepunkt 4</li>
  </ul>
);
