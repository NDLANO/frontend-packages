/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import { UnOrderedList } from "./ArticleLists";
import { BlockQuote } from "./BlockQuote";
import { PageContent } from "./Layout/PageContent";

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
            <Story />
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
