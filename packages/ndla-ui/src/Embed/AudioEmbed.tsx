/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";
import { Figure } from "@ndla/primitives";
import { AudioMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder, { ErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { Author } from "./ImageEmbed";
import AudioPlayer from "../AudioPlayer";
import { EmbedByline } from "../LicenseByline";
import { licenseAttributes } from "../utils/licenseAttributes";

interface Props extends ComponentPropsWithRef<"figure"> {
  embed: AudioMetaData;
  lang?: string;
}

export const getFirstNonEmptyLicenseCredits = (authors: {
  creators: Author[];
  rightsholders: Author[];
  processors: Author[];
}) => Object.values(authors).find((i) => i.length > 0) ?? [];

const AudioEmbed = forwardRef<HTMLElement, Props>(({ embed, lang, children, ...rest }, ref) => {
  const type = embed.embedData.type === "standard" ? "audio" : "podcast";
  if (embed.status === "error") {
    return (
      <EmbedErrorPlaceholder type={type} {...rest} ref={ref}>
        <ErrorPlaceholder type={type} />
        {children}
      </EmbedErrorPlaceholder>
    );
  }

  const { data, embedData } = embed;

  if (embedData.type === "minimal") {
    return (
      <AudioPlayer
        speech
        src={data.audioFile.url}
        title={data.title.title}
        {...rest}
        // Unfortunate cast. A "simple" audio player is a div, not a figure.
        ref={ref as ForwardedRef<HTMLDivElement>}
      >
        {children}
      </AudioPlayer>
    );
  }

  const subtitle = data.series ? { title: data.series.title.title, url: `/podkast/${data.series.id}` } : undefined;

  const coverPhoto = data.podcastMeta?.coverPhoto;

  const img = coverPhoto && { url: coverPhoto.url, alt: coverPhoto.altText };

  const licenseProps = licenseAttributes(data.copyright.license.license, lang, embedData.url);

  return (
    <Figure lang={lang} data-embed-type={type} {...licenseProps} {...rest} ref={ref}>
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
      {children}
    </Figure>
  );
});

export default AudioEmbed;
