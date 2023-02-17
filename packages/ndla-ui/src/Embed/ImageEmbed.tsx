/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import isNumber from 'lodash/isNumber';
import styled from '@emotion/styled';
import { figureApa7CopyString, getGroupedContributorDescriptionList, getLicenseByAbbreviation } from '@ndla/licenses';
import { ImageEmbedData, ImageMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { ModalV2 } from '@ndla/modal';
import { SafeLinkButton } from '@ndla/safelink';
import { MouseEventHandler, useState } from 'react';
import { ButtonV2, CopyButton } from '@ndla/button';
import { ExpandTwoArrows } from '@ndla/icons/action';
import { ArrowCollapse, ChevronDown, ChevronUp } from '@ndla/icons/common';
import { Figure, FigureCaption, FigureType } from '../Figure';
import Image, { ImageLink } from '../Image';
import { FigureLicenseDialogContent } from '../Figure/FigureLicenseDialogContent';
import { Copyright } from '../types';

interface Props {
  embed: ImageMetaData;
  articlePath?: string;
  previewAlt?: boolean;
}

export interface Author {
  name: string;
  type: string;
}

export const getLicenseCredits = (copyright?: {
  creators?: Author[];
  rightsholders?: Author[];
  processors?: Author[];
}) => {
  return {
    creators: copyright?.creators ?? [],
    rightsholders: copyright?.rightsholders ?? [],
    processors: copyright?.processors ?? [],
  };
};

export const errorSvgSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg fill='%238A8888' height='400' viewBox='0 0 24 12' width='100%25' xmlns='http://www.w3.org/2000/svg' style='background-color: %23EFF0F2'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath transform='scale(0.3) translate(28, 8.5)' d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E`;
const isSmall = (size?: string): size is 'xsmall' | 'small' => size === 'xsmall' || size === 'small';

const isAlign = (align?: string): align is 'left' | 'right' => align === 'left' || align === 'right';

const getFigureType = (size?: string, align?: string): FigureType => {
  if (size && isSmall(size) && align && isAlign(align)) {
    return `${size}-${align}`;
  }
  if (size && isSmall(size) && !align) {
    return size as FigureType;
  }
  if (align && isAlign(align)) {
    return align;
  }
  return 'full';
};

const getSizes = (size?: string, align?: string) => {
  if (align && size === 'full') {
    return '(min-width: 1024px) 512px, (min-width: 768px) 350px, 100vw';
  }
  if (align && size === 'small') {
    return '(min-width: 1024px) 350px, (min-width: 768px) 180px, 100vw';
  }
  if (align && size === 'xsmall') {
    return '(min-width: 1024px) 180px, (min-width: 768px) 180px, 100vw';
  }
  return '(min-width: 1024px) 1024px, 100vw';
};

const getFocalPoint = (data: ImageEmbedData) => {
  if (isNumber(data.focalX) && isNumber(data.focalY)) {
    return { x: data.focalX, y: data.focalY };
  }
  return undefined;
};

const getCrop = (data: ImageEmbedData) => {
  if (
    isNumber(data.lowerRightX) &&
    isNumber(data.lowerRightY) &&
    isNumber(data.upperLeftX) &&
    isNumber(data.upperLeftY)
  ) {
    return {
      startX: data.lowerRightX,
      startY: data.lowerRightY,
      endX: data.upperLeftX,
      endY: data.upperLeftY,
    };
  }
  return undefined;
};

const StyledSpan = styled.span`
  font-style: italic;
  color: grey;
`;

const expandedSizes = '(min-width: 1024px) 1024px, 100vw';

const ImageEmbed = ({ embed, articlePath, previewAlt }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBylineHidden, setIsBylineHidden] = useState(hideByline(embed.embedData.size));
  const [imageSizes, setImageSizes] = useState<string | undefined>(undefined);
  const { t, i18n } = useTranslation();
  if (embed.status === 'error') {
    const { align, size } = embed.embedData;
    const figureType = getFigureType(size, align);
    return (
      <Figure type={figureType}>
        <div className="c-figure__img">
          <img alt={t('image.error.url')} src={errorSvgSrc} />
        </div>
        <figcaption>{t('image.error.caption')}</figcaption>
      </Figure>
    );
  }

  const { data, embedData, seq } = embed;

  const authors = getLicenseCredits(data.copyright);

  const altText = embedData.alt || '';
  const caption = embedData.caption || '';
  const license = getLicenseByAbbreviation(data.copyright.license.license, i18n.language);

  const figureType = getFigureType(embedData.size, embedData.align);
  const sizes = getSizes(embedData.size, embedData.align);

  const focalPoint = getFocalPoint(embedData);
  const crop = getCrop(embedData);

  const contributors = getGroupedContributorDescriptionList(data.copyright, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));

  const figureId = `figure-${seq}-${data.id}`;

  const { creators, rightsholders, processors } = authors;
  const captionAuthors = creators.length || rightsholders.length ? [...creators, ...rightsholders] : processors;
  return (
    <Figure
      id={figureId}
      type={imageSizes ? undefined : figureType}
      className={imageSizes ? 'c-figure--right expanded' : ''}>
      <ImageWrapper src={data.imageUrl} crop={crop} size={embedData.size}>
        <Image
          focalPoint={focalPoint}
          contentType={data.contentType}
          crop={crop}
          sizes={imageSizes ?? sizes}
          alt={altText}
          src={data.imageUrl}
          expandButton={
            <ExpandButton
              size={embedData.size}
              expanded={!!imageSizes}
              bylineHidden={isBylineHidden}
              onExpand={() => setImageSizes((p) => (p ? undefined : expandedSizes))}
              onHideByline={() => setIsBylineHidden((p) => !p)}
            />
          }
        />
      </ImageWrapper>
      {previewAlt ? <StyledSpan>{`Alt: ${embedData.alt}`}</StyledSpan> : null}
      <FigureCaption
        hideFigcaption={isSmall(embedData.size) || isBylineHidden}
        figureId={figureId}
        id={figureId}
        caption={caption}
        reuseLabel={t('image.reuse')}
        modalButton={
          <ButtonV2 shape="pill" variant="outline" size="small" onClick={() => setIsOpen(true)}>
            {t('image.reuse')}
          </ButtonV2>
        }
        licenseRights={license.rights}
        authors={captionAuthors}
        locale={i18n.language}>
        <ModalV2 controlled isOpen={isOpen} onClose={() => setIsOpen(false)} labelledBy="license-dialog-rules-heading">
          {(close) => (
            <FigureLicenseDialogContent
              title={data.title.title}
              license={license}
              onClose={close}
              authors={contributors}
              origin={data.copyright.origin}
              locale={i18n.language}
              type="image">
              <ImageLicenseButtons
                articlePath={articlePath}
                title={data.title.title}
                imageUrl={data.imageUrl}
                copyright={data.copyright}
              />
            </FigureLicenseDialogContent>
          )}
        </ModalV2>
      </FigureCaption>
    </Figure>
  );
};

interface ImageWrapperProps {
  src: string;
  children: React.ReactNode;
  crop?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  size?: string;
}
const hideByline = (size?: string): boolean => {
  return !!size && size.endsWith('-hide-byline');
};

interface ImageLicenseButtonsProps {
  imageUrl: string;
  title?: string;
  articlePath?: string;
  copyright?: Partial<Copyright>;
}

export const ImageLicenseButtons = ({ imageUrl, title, articlePath, copyright }: ImageLicenseButtonsProps) => {
  const { t, i18n } = useTranslation();
  if (!copyright?.license?.license || copyright?.license?.license === 'COPYRIGHTED') return null;

  const copyString = figureApa7CopyString(
    title,
    undefined,
    imageUrl,
    articlePath,
    copyright,
    copyright?.license?.license,
    '',
    t,
    i18n.language,
  );

  return (
    <>
      <CopyButton
        variant="outline"
        onClick={() => navigator.clipboard.writeText(copyString)}
        copyNode={t('license.hasCopiedTitle')}
        aria-live="assertive">
        {t('license.copyTitle')}
      </CopyButton>
      <SafeLinkButton to={`${imageUrl}?download=true`} download variant="outline">
        {t('image.download')}
      </SafeLinkButton>
    </>
  );
};

const ImageWrapper = ({ src, crop, size, children }: ImageWrapperProps) => {
  const { t } = useTranslation();
  if (isSmall(size) || hideByline(size)) {
    return <>{children}</>;
  }

  return (
    <ImageLink src={src} crop={crop} aria-label={t('license.images.itemImage.ariaLabel')}>
      {children}
    </ImageLink>
  );
};

interface ExpandButtonProps {
  size?: string;
  expanded: boolean;
  bylineHidden: boolean;
  onExpand: MouseEventHandler<HTMLButtonElement>;
  onHideByline: MouseEventHandler<HTMLButtonElement>;
}

const ExpandButton = ({ size, expanded, bylineHidden, onExpand, onHideByline }: ExpandButtonProps) => {
  const { t } = useTranslation();
  if (isSmall(size)) {
    return (
      <button
        type="button"
        className="c-figure__fullscreen-btn"
        aria-label={t(`license.images.itemImage.zoom${expanded ? 'Out' : ''}ImageButtonLabel`)}
        onClick={onExpand}>
        {expanded ? <ArrowCollapse /> : <ExpandTwoArrows />}
      </button>
    );
  } else if (hideByline(size)) {
    return (
      <button
        type="button"
        className="c-figure__show-byline-btn"
        aria-label={t(`license.images.itemImage.${bylineHidden ? 'expandByline' : 'minimizeByline'}`)}
        onClick={onHideByline}>
        {bylineHidden ? <ChevronDown /> : <ChevronUp />}
      </button>
    );
  } else return null;
};

export default ImageEmbed;
