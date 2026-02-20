/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import type { Meta, StoryFn } from "@storybook/react";
import { OrderedList, UnOrderedList } from "./ArticleLists";
import { BlockQuote } from "./BlockQuote";
import { PageContent } from "./Layout/PageContent";

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis convallis augue. Aenean ipsum erat, fringilla ut erat fringilla, scelerisque eleifend nulla. Vestibulum facilisis odio vitae risus accumsan vestibulum. Nulla vitae enim condimentum, finibus lacus sed, sodales quam. Donec pretium metus ac blandit varius. Ut vehicula risus vitae malesuada accumsan. Praesent id ante condimentum, venenatis ex varius, tempor diam. Praesent mollis luctus enim, id convallis metus vulputate a. Sed et diam odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur faucibus sodales tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

export default {
  title: "Primitives/Article Unordered List",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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

export const WithParagraphs: StoryFn = () => (
  <UnOrderedList>
    <li>
      <BlockQuote>
        <p>Listepunkt 1</p>
        <p>Test</p>
      </BlockQuote>
    </li>
    <li>
      <p>Listepunkt 2</p>
      <UnOrderedList>
        <li>
          <p>Listepunkt 1</p>
        </li>
        <li>
          <p>Listepunkt 2</p>
          <UnOrderedList>
            <li>
              <p>Listepunkt 1</p>
              <UnOrderedList>
                <li>
                  <p>Listepunkt 1</p>
                  <UnOrderedList>
                    <li>
                      <p>Listepunkt 1</p>
                    </li>
                    <li>
                      <p>Listepunkt 2</p>
                    </li>
                    <li>
                      <p>Listepunkt 3</p>
                    </li>
                  </UnOrderedList>
                </li>
                <li>
                  <p>Listepunkt 2</p>
                </li>
              </UnOrderedList>
            </li>
            <li>
              <p>Listepunkt 2</p>
            </li>
          </UnOrderedList>
        </li>
        <li>
          <p>Listepunkt 3</p>
        </li>
      </UnOrderedList>
    </li>
    <li>
      <p>Listepunkt 3</p>
    </li>
  </UnOrderedList>
);

export const WithNestedOrderedList: StoryFn = () => (
  <UnOrderedList>
    <li>
      Listpunkt 1
      <UnOrderedList>
        <li>Listpunkt 2</li>
      </UnOrderedList>
    </li>
    <li>Listpunkt 3</li>
    <li>
      Listepunkt 4
      <OrderedList>
        <li>
          Listepunkt 5
          <OrderedList>
            <li>Listepunkt 6</li>
          </OrderedList>
        </li>
      </OrderedList>
    </li>
  </UnOrderedList>
);
