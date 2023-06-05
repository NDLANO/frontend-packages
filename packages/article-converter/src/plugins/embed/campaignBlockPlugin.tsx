/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from 'html-react-parser';
import { CampaignBlockMetaData } from '@ndla/types-embed';
import { CampaignBlock } from '@ndla/ui';
import { PluginType } from '../types';

export const campaignBlockPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props['data-json']) as CampaignBlockMetaData;
  const embed = data.embedData;
  return (
    <CampaignBlock
      title={{ title: embed.title, language: embed.titleLanguage }}
      description={{ text: embed.description, language: embed.descriptionLanguage }}
      url={{ url: embed.url, text: embed.urlText }}
      imageAfter={
        data.status === 'success' && data.data.imageAfter
          ? { src: data.data.imageAfter.image.imageUrl, alt: data.data.imageAfter.alttext.alttext }
          : undefined
      }
      imageBefore={
        data.status === 'success' && data.data.imageBefore
          ? { src: data.data.imageBefore.image.imageUrl, alt: data.data.imageBefore.alttext.alttext }
          : undefined
      }
    />
  );
};
