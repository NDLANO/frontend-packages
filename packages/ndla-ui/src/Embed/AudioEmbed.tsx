/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AudioMetaData } from '@ndla/types-embed';
//@ts-ignore
import { Remarkable } from 'remarkable';
import AudioPlayer from '../AudioPlayer';
import { Figure } from '../Figure';
import { Author } from './ImageEmbed';
import { EmbedByline } from '../LicenseByline';

interface Props {
  embed: AudioMetaData;
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

const AudioEmbed = ({ embed }: Props) => {
  if (embed.status === 'error') {
    return (
      <Figure>
        <svg
          fill="#8A8888"
          height="50"
          viewBox="0 0 24 12"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: '#EFF0F2' }}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            transform="scale(0.3) translate(28, 8.5)"
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          />
        </svg>
        <EmbedByline error type={embed.embedData.type === 'standard' ? 'audio' : 'podcast'} topRounded={false} />
      </Figure>
    );
  }

  const { data, embedData, seq } = embed;

  if (embedData.type === 'minimal') {
    return <AudioPlayer speech src={data.audioFile.url} title={data.title.title} />;
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const textVersion = data.manuscript && renderMarkdown(data.manuscript.manuscript);
  const description = renderMarkdown(data.podcastMeta?.introduction ?? '');

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  const figureId = `figure-${seq}-${data.id}`;

  return (
    <Figure id={figureId} type="full">
      <AudioPlayer
        description={description}
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
      />
      {data.imageMeta && (
        <EmbedByline
          error={false}
          first={false}
          type="image"
          topRounded={false}
          bottomRounded
          copyright={data.imageMeta.copyright}
        />
      )}
    </Figure>
  );
};

export default AudioEmbed;
