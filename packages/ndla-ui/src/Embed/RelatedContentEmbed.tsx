/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { Badge } from "@ndla/primitives";
import type { RelatedContentMetaData } from "@ndla/types-embed";
import { contentTypeMapping } from "../model/ContentType";
import { RelatedArticle } from "../RelatedArticleList/RelatedArticleList";

interface Props {
  embed: RelatedContentMetaData;
  isOembed?: boolean;
  subject?: string;
  ndlaFrontendDomain?: string;
  language?: string;
}

export const RelatedContentEmbed = ({ embed, isOembed, subject, ndlaFrontendDomain, language }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return null;
  }

  const { data, embedData } = embed;

  if (embedData.articleId && data) {
    const resourceTypes = data.resource?.resourceTypes.map((rt) => ({
      type: contentTypeMapping[rt.id],
      name: rt.translations.find((t) => t.language === language)?.name ?? rt.name,
    }));
    const badges = resourceTypes?.map((rt) => (
      <Badge key={rt.type} color="subtle">
        {rt.name}
      </Badge>
    ));
    const context = data.resource?.contexts.find((c) => c.rootId === subject);
    const url = context?.url ?? data.resource?.url ?? `/article/${embedData.articleId}`;
    return (
      <RelatedArticle
        title={data.article.title?.title ?? ""}
        introduction={data.article.metaDescription?.metaDescription ?? ""}
        target={isOembed ? "_blank" : undefined}
        to={`${ndlaFrontendDomain ?? ""}${url ?? ""}`}
        badges={badges}
      />
    );
  }
  if (typeof embedData.url === "string") {
    return (
      <RelatedArticle
        title={embedData.title ?? ""}
        introduction=""
        to={embedData.url}
        target="_blank"
        badges={<Badge color="subtle">{t("contentTypes.external")}</Badge>}
        linkInfo={`${t("related.linkInfo")} ${embedData.urlDomain}`}
      />
    );
  }
  return null;
};
