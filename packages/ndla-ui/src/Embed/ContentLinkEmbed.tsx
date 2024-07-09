/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "@ndla/styled-system/jsx";
import { ContentLinkMetaData } from "@ndla/types-embed";

interface Props {
  embed: ContentLinkMetaData;
  isOembed?: boolean;
  children?: ReactNode;
}

const StyledSpan = styled("span", {
  base: {
    color: "text.error",
  },
});

const ContentLinkEmbed = ({ embed, isOembed, children }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return (
      <StyledSpan>
        <span>{`${t("embed.linkError")}: `}</span>
        {children}
      </StyledSpan>
    );
  }

  const { embedData, data } = embed;

  if (embedData.openIn === "new-context" || isOembed) {
    return (
      <a href={data.path} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <a href={data.path}>{children}</a>;
};

export default ContentLinkEmbed;
