/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { IImageMetaInformationV3 } from '@ndla/types-backend/image-api';
import PreviewImage from './PreviewImage';
import { getPreviewSrcSets } from './util/imageUtil';

const StyledButton = styled(ButtonV2)`
  display: flex;
  flex-direction: column;
`;

interface Props {
  image: IImageMetaInformationV3;
  onImageClick: (image: IImageMetaInformationV3) => void;
  selectedImage?: IImageMetaInformationV3;
  onSelectImage: (image: IImageMetaInformationV3, saveAsMetaImage: boolean) => void;
  useImageTitle: string;
  showCheckbox: boolean;
  checkboxLabel?: string;
  useAsMetaImageLabel?: string;
}

export default function ImageSearchResult({
  image,
  onImageClick,
  selectedImage,
  onSelectImage,
  useImageTitle,
  showCheckbox,
  checkboxLabel,
}: Props) {
  const active = selectedImage && selectedImage.id === image.id ? 'active' : '';

  return (
    <div key={image.id} className={`list-item ${active}`}>
      <div className="list-item-inner">
        <StyledButton variant="stripped" data-testid="select-image-from-list" onClick={() => onImageClick(image)}>
          <img
            role="presentation"
            alt="presentation"
            srcSet={getPreviewSrcSets(image.image.imageUrl)}
            src={image.image.imageUrl}
          />
          <span className="list-item-title">{image.title.title}</span>
        </StyledButton>
      </div>
      {selectedImage && selectedImage.id === image.id ? (
        <PreviewImage
          image={selectedImage}
          onSelectImage={onSelectImage}
          useImageTitle={useImageTitle}
          checkboxLabel={checkboxLabel}
          showCheckbox={showCheckbox}
          aria-hidden={true}
        />
      ) : (
        ''
      )}
    </div>
  );
}
