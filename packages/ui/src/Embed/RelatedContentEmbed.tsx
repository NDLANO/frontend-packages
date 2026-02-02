/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { RelatedContentMetaData } from "@ndla/types-embed";
import { useTranslation } from "react-i18next";
import { RelatedArticle } from "../RelatedArticleList/RelatedArticleList";

interface Props {
  embed: RelatedContentMetaData;
  isOembed?: boolean;
  subject?: string;
  ndlaFrontendDomain?: string;
}

export const RelatedContentEmbed = ({ embed, isOembed, subject, ndlaFrontendDomain }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return null;
  }

  const { data, embedData } = embed;

  if (embedData.articleId && data) {
    const context = data.resource?.contexts.find((c) => c.rootId === subject);
    const url = context?.url ?? data.resource?.url ?? `/article/${embedData.articleId}`;
    return (
      <RelatedArticle
        title={data.article.title?.title ?? ""}
        introduction={data.article.metaDescription?.metaDescription ?? ""}
        target={isOembed ? "_blank" : undefined}
        to={`${ndlaFrontendDomain ?? ""}${url ?? ""}`}
      />
    );
  }
  if (typeof embedData.url === "string") {
    return (
      <RelatedArticle
        title={embedData.title ?? ""}
        to={embedData.url}
        target="_blank"
        linkInfo={`${t("related.linkInfo")} ${embedData.urlDomain}`}
      />
    );
  }
  return null;
};
