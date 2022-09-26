/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import { animations, fonts, spacing } from '@ndla/core';

import { ContentType } from '../SearchTypeResult';
import { resourceTypeColor, SearchItemType } from '../SearchItem';
import ContentTypeBadge from '../../ContentTypeBadge';

type ItemTypeProps = {
  contentType?: ContentType;
};

const ImageElement = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 1;
  min-height: 40px;
`;

const ImageWrapper = styled.div`
  min-height: 40px;
  overflow: hidden;
`;

const NoImageElement = styled.div<ItemTypeProps>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  flex: 1;
  max-height: 150px;
  background-color: ${(props) => props.contentType && `${resourceTypeColor(props.contentType)}`};
  display: flex;
  align-items: center;
  justify-content: center;
  .c-content-type-badge {
    transition: all ${animations.durations.normal} ease-in-out;
    width: 58px;
    height: 58px;
    opacity: 0.2;
    z-index: 3;
    svg {
      width: 58px;
      height: 58px;
    }
  }
`;

const ContentTypeWrapper = styled.div<ItemTypeProps>`
  height: 48px;
  background: ${(props) => props.contentType && `${resourceTypeColor(props.contentType)}`};
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.normal};
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
  transition: all ${animations.durations.fast} ease-in-out;
`;

type Props = {
  labels: SearchItemType['item']['labels'];
  img?: SearchItemType['item']['img'] | null;
  type?: ContentType;
};

const ItemResourceHeader = ({ labels = [], img, type }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {img ? (
        <ImageWrapper>
          <ImageElement src={img.url} alt={img.alt} />
        </ImageWrapper>
      ) : (
        <NoImageElement contentType={type}>{type && <ContentTypeBadge type={type} border={false} />}</NoImageElement>
      )}
      <ContentTypeWrapper className="resource-type-wrapper" contentType={type}>
        {type && t(`contentTypes.${type}`)}
        {labels.length > 0 && (
          <>
            {labels.map((label) => (
              <Fragment key={label}>
                {' '}
                <>&#8226;</> {label}
              </Fragment>
            ))}
          </>
        )}
      </ContentTypeWrapper>
    </>
  );
};

export default ItemResourceHeader;
