/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { ContentLinkMetaData } from "@ndla/types-embed";
interface Props {
  embed: ContentLinkMetaData;
  isOembed?: boolean;
}

const StyledSpan = styled.span`
  color: ${colors.support.red};
`;

const ContentLinkEmbed = ({ embed, isOembed }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return <StyledSpan>{`${t("embed.linkError")}: ${embed.embedData.linkText}`}</StyledSpan>;
  }

  const { embedData, data } = embed;

  if (embedData.openIn === "new-context" || isOembed) {
    return (
      <a href={embed.data.path} target="_blank" rel="noopener noreferrer">
        {embedData.linkText}
      </a>
    );
  }

  return <a href={data.path}>{embedData.linkText}</a>;
};

export default ContentLinkEmbed;
