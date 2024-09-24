/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { BlockQuote, BlockQuoteProps, BlockQuoteVariantProps } from "@ndla/primitives";
import { ContentType } from "../ContentTypeBadge/ContentTypeBadgeNew";

export type ContentTypeBlockQuoteVariant = "colored" | "neutral";

const contentTypeToVariantMapping = {
  "subject-material": "brand1",
  "source-material": "brand1",
  concept: "brand1",
  "tasks-and-activities": "brand2",
  "assessment-resources": "brand2",
} as Record<ContentType, NonNullable<BlockQuoteVariantProps>["variant"]>;

interface Props extends Omit<BlockQuoteProps, "variant"> {
  variant?: ContentTypeBlockQuoteVariant;
  contentType?: ContentType;
}

export const ContentTypeBlockQuote = forwardRef<HTMLQuoteElement, Props>(({ variant, contentType, ...props }, ref) => {
  return (
    <BlockQuote
      {...props}
      variant={variant === "colored" && contentType ? contentTypeToVariantMapping[contentType] : undefined}
      ref={ref}
    />
  );
});
