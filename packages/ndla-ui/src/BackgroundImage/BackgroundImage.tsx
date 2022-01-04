import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-background-image');

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

type ImageType = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface Props {
  showOverlay?: boolean;
  className?: string;
  images: {
    url: string;
    types: ImageType[];
  }[];
}

export default BackgroundImage;
