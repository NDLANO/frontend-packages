/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { RelatedContentMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { contentTypeMapping } from '../model/ContentType';
import { RelatedArticleV2 } from '../RelatedArticleList/RelatedArticleV2';

interface Props {
  embed: RelatedContentMetaData;
  isOembed?: boolean;
  subject?: string;
}

const RelatedContentEmbed = ({ embed, isOembed, subject }: Props) => {
  const { t } = useTranslation();
  if (embed.status === 'error') {
    return <></>;
  }

  const { data, embedData } = embed;

  if (embedData.articleId && data) {
    const typeId = data.resource?.resourceTypes.find((rt) => contentTypeMapping[rt.id])?.id;
    const type = typeId ? contentTypeMapping[typeId] : undefined;
    const path =
      data.resource?.paths.find((p) => p.split('/')[1] === subject?.replace('urn:', '')) ?? data.resource?.path;
    return (
      <RelatedArticleV2
        title={data.article.title.title ?? ''}
        introduction={data.article.metaDescription?.metaDescription ?? ''}
        target={isOembed ? '_blank' : undefined}
        to={path ?? ''}
        type={type}
      />
    );
  } else if (typeof embedData.url === 'string') {
    return (
      <RelatedArticleV2
        title={embedData.title ?? ''}
        introduction=""
        to={embedData.url}
        target="_blank"
        type={'external-learning-resources'}
        linkInfo={`${t('related.linkInfo')} ${
          // Get domain name only from url
          embedData.url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im)?.[1] || embedData.url
        }`}
      />
    );
  } else {
    return <></>;
  }
};

export default RelatedContentEmbed;
