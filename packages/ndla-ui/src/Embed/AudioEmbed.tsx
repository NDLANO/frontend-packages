/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { COPYRIGHTED } from "@ndla/licenses";
import { AudioMetaData, ImageMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { Author } from "./ImageEmbed";
import { HeartButtonType } from "./types";
import AudioPlayer from "../AudioPlayer";
import { Figure } from "../Figure";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: AudioMetaData;
  lang?: string;
}

export const getFirstNonEmptyLicenseCredits = (authors: {
  creators: Author[];
  rightsholders: Author[];
  processors: Author[];
}) => Object.values(authors).find((i) => i.length > 0) ?? [];

const imageMetaToMockEmbed = (
  imageMeta: Extract<AudioMetaData, { status: "success" }>,
): Extract<ImageMetaData, { status: "success" }> => ({
  resource: "image",
  status: "success",
  // We check that this exists where the function is used.
  data: imageMeta.data.imageMeta!,
  embedData: {
    resource: "image",
    resourceId: imageMeta.data.imageMeta?.id?.toString() || "",
    alt: imageMeta.data.imageMeta?.alttext.alttext ?? "",
  },
});

const AudioEmbed = ({ embed, lang }: Props) => {
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type={embed.embedData.type === "standard" ? "audio" : "podcast"} />;
  }

  const { data, embedData } = embed;

  if (embedData.type === "minimal") {
    return <AudioPlayer speech src={data.audioFile.url} title={data.title.title} />;
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  return (
    <Figure type="full" lang={lang}>
      <AudioPlayer
        description={data.podcastMeta?.introduction ?? ""}
        img={img}
        src={data.audioFile.url}
        textVersion={
          data.manuscript?.manuscript.length ? (
            <span dangerouslySetInnerHTML={{ __html: data.manuscript.manuscript }} />
          ) : undefined
        }
        title={data.title.title}
        subtitle={subtitle}
      />
      <EmbedByline
        error={false}
        type={data.audioType === "standard" ? "audio" : "podcast"}
        copyright={embed.data.copyright}
      />
    </Figure>
  );
};

export default AudioEmbed;
