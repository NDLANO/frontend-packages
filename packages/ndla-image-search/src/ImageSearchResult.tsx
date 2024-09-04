/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Heading, Image, Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { MetadataTranslations } from "./ImageSearch";
import PreviewImage from "./PreviewImage";
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
  },
});

const StyledHeading = styled(Heading, {
  base: {
    lineClamp: "3",
  },
});

interface Props {
  image: IImageMetaInformationV3;
  onImageClick: (image: IImageMetaInformationV3) => void;
  selectedImage?: IImageMetaInformationV3;
  onSelectImage: (image: IImageMetaInformationV3 | undefined, saveAsMetaImage?: boolean) => void;
  useImageTitle: string;
  showCheckbox: boolean;
  translations: MetadataTranslations & { close: string };
  locale: string;
  checkboxLabel?: string;
}

export default function ImageSearchResult({
  image,
  onImageClick,
  selectedImage,
  onSelectImage,
  useImageTitle,
  showCheckbox,
  translations,
  locale,
  checkboxLabel,
}: Props) {
  const active = selectedImage?.id === image.id;

  return (
    <>
      <StyledButton
        variant={active ? "secondary" : "tertiary"}
        data-testid="select-image-from-list"
        onClick={() => onImageClick(image)}
        aria-expanded={active}
        aria-controls={`image-preview-${image.id}`}
      >
        <StyledImage alt="" srcSet={getPreviewSrcSets(image.image.imageUrl)} src={image.image.imageUrl} />
        {/* TODO: consider if this should be h3 */}
        <StyledHeading textStyle="label.medium" asChild consumeCss>
          <h3>{image.title.title}</h3>
        </StyledHeading>
      </StyledButton>
      {selectedImage?.id === image.id && (
        <PreviewImage
          id={`image-preview-${image.id}`}
          image={selectedImage}
          onSelectImage={onSelectImage}
          useImageTitle={useImageTitle}
          checkboxLabel={checkboxLabel}
          translations={translations}
          showCheckbox={showCheckbox}
          locale={locale}
        />
      )}
    </>
  );
}
