/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ContentLinkMetaData } from '@ndla/types-embed';
interface Props {
  embed: ContentLinkMetaData;
  isOembed?: boolean;
}
const ContentLinkEmbed = ({ embed, isOembed }: Props) => {
  if (embed.status === 'error') {
    return <div>Failed to show link</div>;
  }

  const { embedData, data } = embed;

  if (embedData.openIn === 'new-context' || isOembed) {
    return (
      <a href={embed.data.path} target="_blank" rel="noopener noreferrer">
        {embedData.linkText}
      </a>
    );
  }

  return <a href={data.path}>{embedData.linkText}</a>;
};

export default ContentLinkEmbed;
