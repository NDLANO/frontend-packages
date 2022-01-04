import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-background-image');

type ImageType = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface Props {
  showOverlay?: boolean;
  className?: string;
  images: {
    url: string;
    types: ImageType[];
  }[];
}

const BackgroundImage = ({ images, showOverlay = false }: Props) => (
  <div {...classes('', { showOverlay })}>
    {images &&
      images.map((image) =>
        image.types.map((type) => (
          <div
            key={`${image.url}${type}`}
            {...classes('background', type)}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        )),
      )}
  </div>
);

export default BackgroundImage;
