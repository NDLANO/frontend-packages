/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AudioMetaData, ImageMetaData } from '@ndla/types-embed';
import { COPYRIGHTED } from '@ndla/licenses';
//@ts-ignore
import { Remarkable } from 'remarkable';
import AudioPlayer from '../AudioPlayer';
import { Figure } from '../Figure';
import { Author } from './ImageEmbed';
import { EmbedByline } from '../LicenseByline';
import EmbedErrorPlaceholder from './EmbedErrorPlaceholder';
import { HeartButtonType } from './types';

interface Props {
  embed: AudioMetaData;
  heartButton?: HeartButtonType;
}

export const getFirstNonEmptyLicenseCredits = (authors: {
  creators: Author[];
  rightsholders: Author[];
  processors: Author[];
}) => Object.values(authors).find((i) => i.length > 0) ?? [];

const renderMarkdown = (text: string) => {
  const md = new Remarkable();
  const rendered = md.render(text);
  return <span dangerouslySetInnerHTML={{ __html: rendered }} />;
};

const imageMetaToMockEmbed = (
  imageMeta: Extract<AudioMetaData, { status: 'success' }>,
): Extract<ImageMetaData, { status: 'success' }> => ({
  resource: 'image',
  status: 'success',
  // We check that this exists where the function is used.
  data: imageMeta.data.imageMeta!,
  embedData: {
    resource: 'image',
    resourceId: imageMeta.data.imageMeta?.id?.toString() || '',
    alt: imageMeta.data.imageMeta?.alttext.alttext ?? '',
  },
});

const AudioEmbed = ({ embed, heartButton: HeartButton }: Props) => {
  if (embed.status === 'error') {
    return <EmbedErrorPlaceholder type={embed.embedData.type === 'standard' ? 'audio' : 'podcast'} />;
  }

  const { data, embedData } = embed;

  if (embedData.type === 'minimal') {
    return <AudioPlayer speech src={data.audioFile.url} title={data.title.title} />;
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const textVersion = data.manuscript?.manuscript.length ? renderMarkdown(data.manuscript.manuscript) : undefined;

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  return (
    <Figure type="full">
      <AudioPlayer
        description={data.podcastMeta?.introduction ?? ''}
        img={img}
        src={data.audioFile.url}
        textVersion={textVersion}
        title={data.title.title}
        subtitle={subtitle}
      />
      <EmbedByline
        error={false}
        type={embedData.type === 'standard' ? 'audio' : 'podcast'}
        topRounded={false}
        bottomRounded={!data.imageMeta}
        copyright={embed.data.copyright}
      >
        {HeartButton && embed.data.copyright.license.license.toLowerCase() !== COPYRIGHTED && (
          <HeartButton embed={embed} />
        )}
      </EmbedByline>
      {data.imageMeta && (
        <EmbedByline
          error={false}
          first={false}
          type="image"
          topRounded={false}
          bottomRounded
          copyright={data.imageMeta.copyright}
        >
          {HeartButton && data.imageMeta.copyright.license.license.toLowerCase() !== COPYRIGHTED && (
            <HeartButton embed={imageMetaToMockEmbed(embed)} />
          )}
        </EmbedByline>
      )}
    </Figure>
  );
};

export default AudioEmbed;
