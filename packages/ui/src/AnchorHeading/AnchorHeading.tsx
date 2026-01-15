/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, useMemo } from "react";
import { styled } from "@ndla/styled-system/jsx";

const StyledAnchor = styled("a", {
  base: {
    _before: {
      position: "absolute",
      marginInlineStart: "-1em",
      content: '"#"',
      visibility: "hidden",
    },
    _hover: {
      textDecoration: "underline",
      tablet: {
        _before: {
          visibility: "visible",
        },
      },
    },
  },
});

interface Props {
  // What to render within the h2
  children: ReactNode;
  copyText: string;
  lang?: string;
}

function slugifyUnicode(input: string) {
  return (
    input
      .trim()
      .toLowerCase()
      // Normalize to reduce weird Unicode equivalences
      .normalize("NFKC")
      // Keep any Unicode letters/numbers; replace everything else with "-"
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      // Trim leading/trailing "-"
      .replace(/^-+|-+$/g, "")
  );
}

export const AnchorHeading = ({ children, copyText, lang }: Props) => {
  const slug = useMemo(() => slugifyUnicode(copyText.replace(/ /g, "_")), [copyText]);

  return (
    <h2 id={slug} lang={lang} tabIndex={-1}>
      <StyledAnchor href={`#${encodeURIComponent(slug)}`}>{children}</StyledAnchor>
    </h2>
  );
};
