/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@ndla/styled-system/jsx";
import { FootnoteMetaData } from "@ndla/types-embed";

interface Props extends ComponentPropsWithRef<"span"> {
  embed: FootnoteMetaData;
}

const StyledSup = styled("sup", {
  base: {
    "& a": {
      textStyle: "label.xsmall",
      marginInlineStart: "1",
    },
  },
});

const FootnoteEmbed = forwardRef<HTMLSpanElement, Props>(({ embed, children, ...rest }, ref) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return (
      <span {...rest} ref={ref}>
        {t("error")}
        {children}
      </span>
    );
  }

  return (
    <span id={`ref${embed.data.entryNum}`} data-embed-type="footnote" {...rest} ref={ref}>
      <StyledSup>
        <a href={`#note${embed.data.entryNum}`} target="_self">{`[${embed.data.entryNum}]`}</a>
      </StyledSup>
      {children}
    </span>
  );
});

export default FootnoteEmbed;
