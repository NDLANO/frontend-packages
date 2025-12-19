/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Heading, Text, Button } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { Controls } from "./Controls";
import { SpeechControl } from "./SpeechControl";

// TODO: Could the audio metadata be more tightly coupled to the audio player?

const AudioPlayerWrapper = styled("div", {
  base: {
    border: "1px solid",
    borderColor: "stroke.default",
    borderRadius: "xsmall",
    boxShadow: "full",
    marginBlockEnd: "4xsmall",
    overflow: "hidden",
  },
});

const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    tabletWideDown: {
      display: "block",
    },
  },
});

const ImageWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flex: "1 0 auto",
    width: "surface.4xsmall",
    height: "surface.4xsmall",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    desktop: {
      width: "260px",
      height: "260px",
    },
    tabletWideDown: {
      maxHeight: "surface.small",
      maxWidth: "100%",
      width: "100%",
      height: "auto",
    },
  },
});

const TextWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "xsmall",
    padding: "xsmall",
    width: "100%",
    "&[data-has-image='true']": {
      tablet: {
        paddingBlock: "xsmall",
        paddingInline: "medium",
      },
    },
  },
});

const TitleWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    fontFamily: "sans",
    tabletWide: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
});

const TextVersionWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    borderBlockStart: "1px solid",
    borderColor: "stroke.default",
    paddingBlock: "medium",
    paddingInline: "xsmall",
    tablet: {
      paddingInline: "medium",
    },
  },
});

const TextVersionText = styled("div", {
  base: {
    maxWidth: "surface.xlarge",
    "& span > *": {
      whiteSpace: "pre-wrap",
    },
    "& p:not(:first-child):not(:last-child)": {
      marginBlock: "small",
    },
    '& p[data-align="center"]': {
      textAlign: "center",
    },
    '& p:has(span[dir="rtl"])': {
      direction: "rtl",
    },
  },
});

const TextVersionButton = styled(Button, {
  base: {
    alignSelf: "flex-start",
  },
});

const ShowMoreButton = styled(Button, {
  base: {
    marginInlineStart: "3xsmall",
  },
});

const DESCRIPTION_MAX_LENGTH = 200;

type Props = {
  src: string;
  title: string;
  subtitle?: {
    title: string;
    url?: string;
  };
  speech?: boolean;
  description?: string;
  textVersion?: ReactNode;
  img?: {
    url: string;
    alt: string;
  };
};

export const AudioPlayer = ({ src, title, subtitle, speech, description, img, textVersion }: Props) => {
  const { t } = useTranslation();
  const [showTextVersion, setShowTextVersion] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = useMemo(() => description?.slice(0, DESCRIPTION_MAX_LENGTH), [description]);
  const textDescriptionId = useId();

  if (speech) {
    return <SpeechControl src={src} title={title} />;
  }

  const toggleTextVersion = () => {
    setShowTextVersion((curr) => !curr);
  };

  const textVersionButton = (
    <TextVersionButton
      variant="secondary"
      aria-expanded={showTextVersion}
      aria-controls={textDescriptionId}
      size="small"
      onClick={toggleTextVersion}
    >
      {t(showTextVersion ? "audio.textVersion.close" : "audio.textVersion.heading")}
    </TextVersionButton>
  );

  return (
    <AudioPlayerWrapper>
      <InfoWrapper>
        {/* TODO: Image variants */}
        {!!img && (
          <ImageWrapper>
            <img src={img.url} alt={img.alt} />
          </ImageWrapper>
        )}
        <TextWrapper data-has-image={!!img}>
          <TitleWrapper>
            <div>
              {subtitle?.url ? <SafeLink to={subtitle.url}>{subtitle.title}</SafeLink> : subtitle?.title}
              <Heading asChild consumeCss textStyle="title.large">
                <h3>{title}</h3>
              </Heading>
            </div>
            {!!textVersion && !img && textVersionButton}
          </TitleWrapper>
          {!!description && (
            <Text textStyle="body.medium">
              {showFullDescription || description.length < DESCRIPTION_MAX_LENGTH
                ? description
                : `${truncatedDescription}...`}
              {description.length > DESCRIPTION_MAX_LENGTH && (
                <ShowMoreButton variant="link" onClick={() => setShowFullDescription((p) => !p)}>
                  {t(`audio.${showFullDescription ? "readLessDescriptionLabel" : "readMoreDescriptionLabel"}`)}
                </ShowMoreButton>
              )}
            </Text>
          )}
          {!!textVersion && !!img && textVersionButton}
        </TextWrapper>
      </InfoWrapper>
      <Controls src={src} title={title} />
      {!!textVersion && (
        <TextVersionWrapper id={textDescriptionId} hidden={!showTextVersion}>
          <Heading asChild textStyle="title.medium" consumeCss>
            <h4>{t("audio.textVersion.heading")}</h4>
          </Heading>
          <TextVersionText>{textVersion}</TextVersionText>
        </TextVersionWrapper>
      )}
    </AudioPlayerWrapper>
  );
};
