/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { CloseLine, HashTag, CheckLine } from "@ndla/icons";
import { getModelReleaseValue } from "@ndla/licenses";
import {
  Button,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  Text,
  Image,
  IconButton,
  FieldRoot,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import { ImageMeta } from "./ImageMeta";
import type { PreviewTranslations } from "./ImageSearch";

const ImageContainer = styled("div", {
  base: {
    flexShrink: "0",
  },
});

const StyledImage = styled(Image, {
  base: {
    maxHeight: "surface.xsmall",
  },
});

const StyledImageMetadata = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xxsmall",
  },
});

const HashTagWrapper = styled("ul", {
  base: {
    display: "flex",
    gap: "xxsmall",
    flexWrap: "wrap",
  },
});

const HashTagGroup = styled("div", {
  base: {
    display: "flex",
    gap: "xxsmall",
    flexWrap: "wrap",
  },
});

const StyledTagItem = styled("li", {
  base: {
    display: "flex",
    alignItems: "center",
  },
});

const StyledPreview = styled("div", {
  base: {
    display: "flex",
    gridColumn: "1 / -1",
    borderColor: "stroke.default",
    border: "1px solid",
    borderRadius: "xsmall",
    gap: "small",
    padding: "small",
    flexWrap: "wrap",
    overflow: "hidden",
  },
});

const StyledTopRow = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    flex: "2",
  },
});

const ActionsWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "small",
    marginBlockEnd: "medium",
  },
});

const StyledFieldRoot = styled(FieldRoot, {
  base: { alignSelf: "center" },
});

interface Props {
  id: string;
  image: ImageMetaInformationV3DTO;
  onSelectImage: (image: ImageMetaInformationV3DTO | undefined, saveAsMetaImage?: boolean) => void;
  showCheckbox: boolean;
  translations: PreviewTranslations;
  locale: string;
}

export const PreviewImage = ({ id, image, onSelectImage, showCheckbox, translations, locale }: Props) => {
  const [saveAsMetaImage, setSaveAsMetaImage] = useState(false);

  return (
    <StyledPreview id={id}>
      <ImageContainer>
        <StyledImage
          alt=""
          src={image.image.imageUrl}
          aria-label={image.title.title}
          variants={image.image.variants}
          variant="rounded"
        />
      </ImageContainer>
      <ContentWrapper>
        <StyledImageMetadata>
          <StyledTopRow>
            <Text textStyle="title.medium">
              {image.title.title.trim() ? image.title.title : (translations.missingTitleFallback ?? `ID: ${image.id}`)}
            </Text>
            <IconButton
              variant="tertiary"
              onClick={() => onSelectImage(undefined)}
              aria-label={translations.close}
              title={translations.close}
            >
              <CloseLine />
            </IconButton>
          </StyledTopRow>
          {!!image.copyright.creators.length && (
            <Text>
              <b>{`${translations.creatorsLabel}: `}</b>
              {image.copyright.creators.map((creator) => creator.name).join(", ")}
            </Text>
          )}
          {!!image.copyright.license.description?.trim() && (
            <Text>
              <b>{`${translations.license}: `}</b>
              {image.copyright.license.description}
            </Text>
          )}
          {!!image.caption.caption.trim() && (
            <Text>
              <b>{`${translations.caption}: `}</b>
              {image.caption.caption}
            </Text>
          )}
          {!!image.alttext.alttext.trim() && (
            <Text>
              <b>{`${translations.altText}:`}</b> {image.alttext.alttext}
            </Text>
          )}
          {!!image.modelRelease.trim() && (
            <Text>
              <b>{`${translations.modelRelease}: `}</b>
              {getModelReleaseValue(image.modelRelease, locale)}
            </Text>
          )}
          <ImageMeta
            contentType={image.image.contentType}
            fileSize={image.image.size}
            imageDimensions={image.image.dimensions}
            locale={locale}
          />
          {!!image.tags.tags.length && (
            <HashTagGroup>
              <Text id="tags-title">
                <b>{`${translations.tags}: `}</b>
              </Text>
              <HashTagWrapper aria-describedby="tags-title">
                {image.tags.tags.map((tag) => (
                  <StyledTagItem key={tag}>
                    <HashTag size="small" />
                    {tag}
                  </StyledTagItem>
                ))}
              </HashTagWrapper>
            </HashTagGroup>
          )}
        </StyledImageMetadata>
        <ActionsWrapper>
          <Button data-testid="use-image" onClick={() => onSelectImage(image, saveAsMetaImage)}>
            {translations.useImageTitle}
          </Button>
          {!!showCheckbox && (
            <StyledFieldRoot>
              <CheckboxRoot checked={saveAsMetaImage} onCheckedChange={() => setSaveAsMetaImage((prev) => !prev)}>
                <CheckboxControl>
                  <CheckboxIndicator asChild>
                    <CheckLine />
                  </CheckboxIndicator>
                </CheckboxControl>
                <CheckboxLabel>{translations.checkboxLabel}</CheckboxLabel>
                <CheckboxHiddenInput />
              </CheckboxRoot>
            </StyledFieldRoot>
          )}
        </ActionsWrapper>
      </ContentWrapper>
    </StyledPreview>
  );
};
