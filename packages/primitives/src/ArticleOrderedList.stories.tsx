/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { OrderedList } from "./ArticleLists";
import { BlockQuote } from "./BlockQuote";

/**
 * Lister bør ikke inneholde flere enn 10 punkter. Har du mye mer, bør du vurdere å organisere innholdet annerledes.
 */
export default {
  title: "Primitives/Article Ordered List",
  tags: ["autodocs"],
  component: OrderedList,
  parameters: {
    inlineStories: true,
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
    variant: "letters",
  },
};

export const OnlyTopLevelLetters: StoryFn = () => (
  <OrderedList variant="letters">
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList>
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

export const WithNumbersAndLetters: StoryFn = () => (
  <OrderedList>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList variant="letters">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList>
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList>
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

export const NumberToLetterToNumber: StoryFn = () => (
  <OrderedList>
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList variant="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList variant="numbers">
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

export const LetterToNumberToLetter: StoryFn = () => (
  <OrderedList variant="letters">
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList variant="numbers">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList variant="letters">
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
  <OrderedList start={5} variant="letters">
    <li>Listepunkt 1</li>
    <li>Listepunkt 2</li>
    <li>
      Listepunkt 3
      <OrderedList variant="letters">
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>
          Listepunkt 3
          <OrderedList variant="letters">
            <li>Listepunkt 1</li>
            <li>Listepunkt 2</li>
            <li>
              Listepunkt 3
              <OrderedList start={5}>
                <li>Listepunkt 1</li>
                <li>Listepunkt 2</li>
                <li>
                  Listepunkt 3
                  <OrderedList>
                    <li>Listepunkt 1</li>
                    <li>Listepunkt 2</li>
                    <li>Listepunkt 3</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
          </OrderedList>
        </li>
      </OrderedList>
    </li>
    <li>Listepunkt 4</li>
  </OrderedList>
);

export const WithParagraphs: StoryFn = () => (
  <OrderedList variant="letters">
    <li>
      <BlockQuote>
        <p>
          is simply dummy text of the printing and typesetting industry is simply dummy text of the printing and
          typesetting industry is simply dummy text of the printing and typesetting industry is simply dummy text of the
          printing and typesetting industry
        </p>
      </BlockQuote>
    </li>
    <li>
      <p>Listepunkt 2</p>
      <p>Listepunkt 2</p>
      <OrderedList variant="letters">
        <li>
          <p>Listepunkt 1</p>
        </li>
        <li>
          <p>Listepunkt 2</p>
          <OrderedList variant="letters">
            <li>
              <p>Listepunkt 1</p>
              <OrderedList variant="letters">
                <li>
                  <p>Listepunkt 1</p>
                  <OrderedList variant="letters">
                    <li>
                      <p>Listepunkt 1</p>
                    </li>
                    <li>
                      <p>Listepunkt 2</p>
                    </li>
                    <li>
                      <p>Listepunkt 3</p>
                    </li>
                  </OrderedList>
                </li>
                <li>
                  <p>Listepunkt 2</p>
                </li>
              </OrderedList>
            </li>
            <li>
              <p>Listepunkt 2</p>
            </li>
          </OrderedList>
        </li>
        <li>
          <p>Listepunkt 3</p>
        </li>
      </OrderedList>
    </li>
    <li>
      <p>Listepunkt 3</p>
    </li>
  </OrderedList>
);
