/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import OrderedList from './OrderedList';
import { defaultParameters } from '../../../../stories/defaults';

/**
 * Lister bør ikke inneholde flere enn 10 punkter. Har du mye mer, bør du vurdere å organisere innholdet annerledes.
 */
export default {
  title: 'Base Styles/Ordered List',
  tags: ['autodocs'],
  component: OrderedList,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  render: ({ ...args }) => (
    <OrderedList {...args}>
      <li>Listepunkt 1</li>
      <li>Listepunkt 2</li>
      <li>
        Listepunkt 3
        <OrderedList {...args}>
          <li>Listepunkt 1</li>
          <li>Listepunkt 2</li>
          <li>
            Listepunkt 3
            <OrderedList {...args}>
              <li>Listepunkt 1</li>
              <li>Listepunkt 2</li>
              <li>Listepunkt 3</li>
            </OrderedList>
          </li>
        </OrderedList>
      </li>
      <li>Listepunkt 4</li>
    </OrderedList>
  ),
} as Meta<typeof OrderedList>;

export const Default: StoryObj = {};

export const Letters: StoryObj = {
  args: {
    type: 'letters',
  },
};

export const WithNumbersAndLetters: StoryFn = () => (
  <OrderedList>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList type="letters">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList type="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList type="letters">
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>Listepunkt 3</li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
      </OrderedList>
    </li>
    <li>Listepunkt 4</li>
  </OrderedList>
);

export const StartingAtFive: StoryFn = () => (
  <OrderedList start={5} type="letters" className="ol-reset-5">
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList type="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList className="ol-reset-5" type="letters" start={5}>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>Listepunkt 3</li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
      </OrderedList>
    </li>
    <li>Listepunkt 4</li>
  </OrderedList>
);

export const NoStyle: StoryFn = () => (
  <ol>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <ol>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <ol>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>Listepunkt 3</li>
          </ol>
        </li>
      </ol>
    </li>
    <li>Listepunkt 4</li>
  </ol>
);
