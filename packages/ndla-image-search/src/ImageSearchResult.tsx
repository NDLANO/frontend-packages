/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text, Image, Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import type { PreviewTranslations } from "./ImageSearch";
import { PreviewImage } from "./PreviewImage";
import { getPreviewSrcSets } from "./util/imageUtil";

const StyledButton = styled(Button, {
  base: {
    display: "flex",
    flexDirection: "column",
    borderColor: "stroke.subtle",
  },
});

const StyledImage = styled(Image, {
  base: {
    maxHeight: "135px",
    width: "100%",
    height: "100%",
  },
});

const StyledText = styled(Text, {
  base: {
    lineClamp: "3",
  },
});

interface Props {
  image: IImageMetaInformationV3DTO;
  onImageClick: (image: IImageMetaInformationV3DTO) => void;
  selectedImage?: IImageMetaInformationV3DTO;
  onSelectImage: (image: IImageMetaInformationV3DTO | undefined, saveAsMetaImage?: boolean) => void;
  showCheckbox: boolean;
  translations: PreviewTranslations;
  locale: string;
}

export const ImageSearchResult = ({
  image,
  onImageClick,
  selectedImage,
  onSelectImage,
  showCheckbox,
  translations,
  locale,
}: Props) => {
  const isSelectedImage = selectedImage?.id === image.id;
  return (
    <>
      <StyledButton
        variant={isSelectedImage ? "secondary" : "tertiary"}
        data-testid="select-image-from-list"
        onClick={() => onImageClick(image)}
        aria-expanded={isSelectedImage}
        aria-controls={`image-preview-${image.id}`}
      >
        <StyledImage
          alt=""
          srcSet={getPreviewSrcSets(image.image.imageUrl)}
          src={image.image.imageUrl}
          variant="rounded"
        />
        <StyledText textStyle="label.medium" asChild consumeCss>
          <span>
            {image.title.title.trim() ? image.title.title : (translations.missingTitleFallback ?? `ID: ${image.id}`)}
          </span>
        </StyledText>
      </StyledButton>
      {isSelectedImage ? (
        <PreviewImage
          id={`image-preview-${image.id}`}
          image={selectedImage}
          onSelectImage={onSelectImage}
          translations={translations}
          showCheckbox={showCheckbox}
          locale={locale}
        />
      ) : null}
    </>
  );
};
