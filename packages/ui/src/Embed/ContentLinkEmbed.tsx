/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text } from "@ndla/primitives";
import type { ContentLinkMetaData } from "@ndla/types-embed";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  embed: ContentLinkMetaData;
  isOembed?: boolean;
  children?: ReactNode;
}

export const ContentLinkEmbed = ({ embed, isOembed, children }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return (
      <Text color="text.error" asChild consumeCss>
        <span>
          <span>{`${t("embed.linkError")}: `}</span>
          {children}
        </span>
      </Text>
    );
  }

  const { embedData, data } = embed;

  if (embedData.openIn === "new-context" || isOembed) {
    return (
      <a href={data.path} data-embed-type="content-link" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <a href={data.path}>{children}</a>;
};
