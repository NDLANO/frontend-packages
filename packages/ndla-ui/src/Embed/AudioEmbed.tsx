/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { AudioMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import type { Author } from "./ImageEmbed";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { EmbedByline } from "../LicenseByline/EmbedByline";
import { licenseAttributes } from "../utils/licenseAttributes";

const StyledFigure = styled(Figure, {
  base: {
    clear: "both",
  },
});

interface Props {
  embed: AudioMetaData;
  lang?: string;
}

export const getFirstNonEmptyLicenseCredits = (authors: {
  creators: Author[];
  rightsholders: Author[];
  processors: Author[];
}) => Object.values(authors).find((i) => i.length > 0) ?? [];

const AudioEmbed = ({ embed, lang }: Props) => {
  const type = embed.embedData.type === "standard" ? "audio" : "podcast";
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type={type} />;
  }

  const { data, embedData } = embed;

  if (embedData.type === "minimal") {
    return <AudioPlayer speech src={data.audioFile.url} title={data.title.title} />;
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  const licenseProps = licenseAttributes(data.copyright.license.license, lang, embedData.url);

  return (
    <StyledFigure lang={lang} data-embed-type={type} {...licenseProps}>
      <AudioPlayer
        description={data.podcastMeta?.introduction ?? ""}
        img={img}
        src={data.audioFile.url}
        textVersion={
          data.manuscript?.manuscript.length ? (
            <div dangerouslySetInnerHTML={{ __html: data.manuscript.manuscript }} />
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
    </StyledFigure>
  );
};

export default AudioEmbed;
