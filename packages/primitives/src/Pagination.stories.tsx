/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PaginationContext } from "@ark-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { ChevronLeft, ChevronRight } from "@ndla/icons/common";
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
  },
  render: (args) => (
    <PaginationRoot {...args}>
      <PaginationPrevTrigger asChild forwardCssProp>
        <Button variant="tertiary">
          <ChevronLeft />
          Forrige
        </Button>
      </PaginationPrevTrigger>
      <PaginationContext>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationItem key={index} {...page} asChild forwardCssProp>
                <Button variant={page.value === pagination.page ? "primary" : "tertiary"}>{page.value}</Button>
              </PaginationItem>
            ) : (
              <PaginationEllipsis key={index} index={index} asChild forwardCssProp>
                <Text asChild>
                  <div>&#8230;</div>
                </Text>
              </PaginationEllipsis>
            ),
          )
        }
      </PaginationContext>
      <PaginationNextTrigger asChild forwardCssProp>
        <Button variant="tertiary">
          Neste
          <ChevronRight />
        </Button>
      </PaginationNextTrigger>
    </PaginationRoot>
  ),
} as Meta<typeof PaginationRoot>;

export const Default: StoryObj<typeof PaginationRoot> = {};
