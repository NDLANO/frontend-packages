/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { PaginationContext } from "@ark-ui/react";
import { ArrowLeftShortLine, ArrowRightShortLine } from "@ndla/icons";
import { Button } from "./Button";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./Pagination";
import { Text } from "./Text";

export default {
  title: "Primitives/Pagination",
  component: PaginationRoot,
  tags: ["autodocs"],
  args: {
    count: 5000,
    pageSize: 10,
    siblingCount: 2,
    translations: {
      nextTriggerLabel: "Neste side",
      prevTriggerLabel: "Forrige side",
      rootLabel: "Sidenavigering",
      itemLabel: (details) => {
        const lastPage = details.totalPages > 1 && details.page === details.totalPages;
        return lastPage ? `Forrige side, side ${details.page}` : `Side ${details.page}`;
      },
    },
  },
  render: (args) => (
    <PaginationRoot {...args}>
      <PaginationPrevTrigger asChild>
        <Button variant="tertiary">
          <ArrowLeftShortLine />
          Forrige
        </Button>
      </PaginationPrevTrigger>
      <PaginationContext>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationItem key={index} {...page} asChild>
                <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
              </PaginationItem>
            ) : (
              <PaginationEllipsis key={index} index={index} asChild>
                <Text asChild consumeCss>
                  <div>&#8230;</div>
                </Text>
              </PaginationEllipsis>
            ),
          )
        }
      </PaginationContext>
      <PaginationNextTrigger asChild>
        <Button variant="tertiary">
          Neste
          <ArrowRightShortLine />
        </Button>
      </PaginationNextTrigger>
    </PaginationRoot>
  ),
} as Meta<typeof PaginationRoot>;

export const Default: StoryObj<typeof PaginationRoot> = {};
