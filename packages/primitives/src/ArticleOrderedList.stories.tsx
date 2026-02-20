/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { OrderedList, UnOrderedList } from "./ArticleLists";
import { BlockQuote } from "./BlockQuote";
import { PageContent } from "./Layout/PageContent";
import { MessageBox } from "./MessageBox";

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis convallis augue. Aenean ipsum erat, fringilla ut erat fringilla, scelerisque eleifend nulla. Vestibulum facilisis odio vitae risus accumsan vestibulum. Nulla vitae enim condimentum, finibus lacus sed, sodales quam. Donec pretium metus ac blandit varius. Ut vehicula risus vitae malesuada accumsan. Praesent id ante condimentum, venenatis ex varius, tempor diam. Praesent mollis luctus enim, id convallis metus vulputate a. Sed et diam odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur faucibus sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

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
  decorators: [
    (Story) => (
      <PageContent variant="content" asChild>
        <ArticleWrapper>
          <ArticleContent>
            <section>
              <p>{lipsum}</p>
              <Story />
              <p>{lipsum}</p>
            </section>
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
    ),
  ],
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

export const ListsBelowEachOther: StoryFn = () => (
  <>
    <OrderedList>
      <li>Listepunkt 1</li>
      <li>Listepunkt 2</li>
      <li>Listepunkt 3</li>
    </OrderedList>
    <OrderedList variant="letters">
      <li>Listepunkt 1</li>
      <li>Listepunkt 2</li>
      <li>Listepunkt 3</li>
    </OrderedList>
  </>
);

export const WithNestedUnOrderedList: StoryFn = () => (
  <OrderedList>
    <li>
      Listepunkt 1
      <OrderedList>
        <li>Listepunkt 2</li>
      </OrderedList>
    </li>
    <li>Listepunkt 3</li>
    <li>
      Listepunkt 4
      <UnOrderedList>
        <li>
          Listepunkt 5
          <UnOrderedList>
            <li>
              Listepunkt 6
              <OrderedList>
                <li>
                  Listepunkt 7
                  <OrderedList>
                    <li>Listepunkt 8</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
          </UnOrderedList>
        </li>
      </UnOrderedList>
    </li>
  </OrderedList>
);

export const ListAfterListInsideComponent: StoryFn = () => (
  <ArticleContent>
    <OrderedList>
      <li>Listepunkt 1</li>
      <li>Listepunkt 2</li>
      <li>Listepunkt 3</li>
      <li>Listepunkt 4</li>
    </OrderedList>
    <MessageBox>
      <OrderedList>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </OrderedList>
    </MessageBox>
  </ArticleContent>
);
