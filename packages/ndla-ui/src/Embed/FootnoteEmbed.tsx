/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { styled } from "@ndla/styled-system/jsx";
import type { FootnoteMetaData } from "@ndla/types-embed";

interface Props {
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

export const FootnoteEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return <div>{t("error")}</div>;
  }

  return (
    <span id={`ref${embed.data.entryNum}`} data-embed-type="footnote">
      <StyledSup>
        <a href={`#note${embed.data.entryNum}`} target="_self">{`[${embed.data.entryNum}]`}</a>
      </StyledSup>
    </span>
  );
};
