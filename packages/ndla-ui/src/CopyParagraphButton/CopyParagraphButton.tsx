/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useMemo } from "react";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";

const StyledSafeLink = styled(SafeLink, {
  base: {
    color: "inherit",
    tablet: {
      _hover: {
        _before: {
          position: "relative",
          float: "left",
          content: "'#'",
          left: "-1em",
          width: "0",
          height: "0",
          color: "text.subtle",
          fontSize: "0.8em",
        },
      },
    },
    _hover: {
      textDecoration: "underline",
    },
    _focusVisible: {
      textDecoration: "underline",
    },
  },
});

interface Props {
  // What to render within the h2
  children: ReactNode;
  copyText: string;
  lang?: string;
}
const CopyParagraphButton = ({ children, copyText, lang }: Props) => {
  const sanitizedTitle = useMemo(() => encodeURIComponent(copyText.replace(/ /g, "-")), [copyText]);

  return (
    <h2 id={sanitizedTitle} lang={lang}>
      <StyledSafeLink to={`#${sanitizedTitle}`}>{children}</StyledSafeLink>
    </h2>
  );
};

export default CopyParagraphButton;
