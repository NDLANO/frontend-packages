/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps, ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

export type ExpandableBoxProps = HTMLArkProps<"details"> & JsxStyleProps;

export const ExpandableBox = styled("details", {
  base: {
    transitionDuration: "fast",
    width: "100%",
    position: "relative",
    border: "1px solid",
    borderRadius: "xsmall",
    borderColor: "stroke.subtle",
    padding: "medium",
    _open: {
      padding: "medium",
      "& summary": {
        marginBlockEnd: "-xxsmall",
      },
    },
  },
});

export type ExpandableBoxSummaryProps = HTMLArkProps<"summary"> & JsxStyleProps;

export const ExpandableBoxSummary = styled(ark.summary, {
  base: {
    cursor: "pointer",
    margin: "-medium",
    padding: "medium",
    textStyle: "label.large!",
    _hover: {
      color: "text.action",
    },
    "& > *": {
      display: "inline!",
      textStyle: "label.large!",
    },
  },
});
