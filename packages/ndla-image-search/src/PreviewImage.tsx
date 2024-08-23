/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CloseLine } from "@ndla/icons/action";
import { HashTag } from "@ndla/icons/common";
import { CheckLine } from "@ndla/icons/editor";
import {
  Button,
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  Heading,
  Text,
  Image,
  IconButton,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import ImageMeta from "./ImageMeta";
import { getSrcSets } from "./util/imageUtil";

const StyledImage = styled(Image, {
  base: {
    maxHeight: "300px",
    flex: "1",
  },
});

const StyledImageMetadata = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xxsmall",
    flex: "2",
  },
});

const StyledButton = styled(Button, {
  base: {
    width: "fit-content",
  },
});

const HashTagWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xxsmall",
    flexWrap: "wrap",
  },
});

const StyledTagItem = styled("div", {
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
  },
});

const StyledTopRow = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

interface Props {
  id: string;
  image: IImageMetaInformationV3;
  onSelectImage: (image: IImageMetaInformationV3 | undefined, saveAsMetaImage?: boolean) => void;
  useImageTitle: string;
  showCheckbox: boolean;
  checkboxLabel?: string;
}

const PreviewImage = ({ id, image, onSelectImage, useImageTitle, showCheckbox, checkboxLabel }: Props) => {
  const { t } = useTranslation();
  const [saveAsMetaImage, setSaveAsMetaImage] = useState(false);

  return (
    <StyledPreview id={id}>
      <StyledImage
        alt=""
        srcSet={getSrcSets(image.image.imageUrl)}
        sizes="(min-width: 800px) 360px, (min-width: 400px) 300px, 100vw"
        src={image.image.imageUrl}
        aria-label={image.title.title}
      />
      <StyledImageMetadata>
        <StyledTopRow>
          <Heading asChild consumeCss textStyle="title.medium">
            <h2>{image.title.title}</h2>
          </Heading>
          <IconButton
            variant="tertiary"
            onClick={() => onSelectImage(undefined)}
            aria-label={t("close")}
            title={t("close")}
          >
            <CloseLine />
          </IconButton>
        </StyledTopRow>
        {!!image.copyright.creators.length && (
          <Text>
            <b>{`${t("photo")}: `}</b>
            {image.copyright.creators.map((creator) => creator.name).join(", ")}
          </Text>
        )}
        {!!image.copyright.license.description?.trim() && (
          <Text>
            <b>{`${t("image.license")}: `}</b>
            {image.copyright.license.description}
          </Text>
        )}
        {!!image.caption.caption.trim() && (
          <Text>
            <b>{`${t("image.caption")}: `}</b>
            {image.caption.caption}
          </Text>
        )}
        {!!image.alttext.alttext.trim() && (
          <Text>
            <b>{`${t("image.altText")}:`}</b> {image.alttext.alttext}
          </Text>
        )}
        {!!image.modelRelease.trim() && (
          <Text>
            <b>{`${t("image.modelReleased.label")}: `}</b>
            {t(`image.modelReleased.${image.modelRelease}`)}
          </Text>
        )}
        <ImageMeta
          contentType={image.image.contentType}
          fileSize={image.image.size}
          imageDimensions={image.image.dimensions}
        />
        {/* TODO: make accessible ? */}
        <HashTagWrapper>
          {image.tags.tags.map((tag) => (
            <StyledTagItem key={tag}>
              <HashTag size="small" />
              {tag}
            </StyledTagItem>
          ))}
        </HashTagWrapper>
        <StyledButton data-testid="use-image" onClick={() => onSelectImage(image, saveAsMetaImage)}>
          {useImageTitle}
        </StyledButton>
        {showCheckbox && (
          <CheckboxRoot checked={saveAsMetaImage} onCheckedChange={() => setSaveAsMetaImage((prev) => !prev)}>
            <CheckboxControl>
              <CheckboxIndicator asChild>
                <CheckLine />
              </CheckboxIndicator>
            </CheckboxControl>
            <CheckboxLabel>{checkboxLabel}</CheckboxLabel>
            <CheckboxHiddenInput />
          </CheckboxRoot>
        )}
      </StyledImageMetadata>
    </StyledPreview>
  );
};

export default PreviewImage;
