/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { FramedContent, FramedContentProps, FramedContentVariantProps } from "@ndla/primitives";
import { ContentType } from "..";

const contentTypeToVariantMapping = {
  "subject-material": "brand1",
  "source-material": "brand1",
  concept: "brand1",
  "tasks-and-activities": "brand2",
  "assessment-resources": "brand2",
} as Record<ContentType, NonNullable<FramedContentVariantProps>["colorTheme"]>;

export type ContentTypeFramedContentVariant = "colored" | "neutral";

interface Props extends FramedContentProps {
  variant?: ContentTypeFramedContentVariant;
  contentType?: ContentType;
}

export const ContentTypeFramedContent = forwardRef<HTMLDivElement, Props>(
  ({ variant = "neutral", contentType, ...props }, ref) => {
    return (
      <FramedContent
        {...props}
        colorTheme={variant === "colored" && contentType ? contentTypeToVariantMapping[contentType] : undefined}
        ref={ref}
      />
    );
  },
);
