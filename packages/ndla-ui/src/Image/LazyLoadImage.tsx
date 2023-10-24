/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface Props {
  alt: string;
  src: string;
  sizes?: string;
  contentType?: string;
  srcSet?: string;
  lazyLoadSrc?: string;
}

const LazyLoadImage = ({ alt, src, srcSet, lazyLoadSrc, sizes, ...rest }: Props) => (
  <>
    <noscript key="noscript">
      <img alt={alt} src={`${src}`} srcSet={srcSet} sizes={sizes} {...rest} />
    </noscript>
    <img
      alt={alt}
      key="img"
      style={{ width: '100%' }}
      className="lazyload"
      src={lazyLoadSrc}
      loading="lazy"
      data-src={src}
      data-src-set={srcSet}
      data-sizes={sizes}
      {...rest}
    />
  </>
);

export default LazyLoadImage;
