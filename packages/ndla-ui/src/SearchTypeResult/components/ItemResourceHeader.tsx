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

import { fonts, spacing } from '@ndla/core';

import { ContentType } from '../SearchTypeResult';
import { SearchItemType } from '../SearchItem';

import resourceTypeColor from '../../utils/resourceTypeColor';
import ContentTypeBadge from '../../ContentTypeBadge';

type ItemTypeProps = {
  contentType?: ContentType;
};

const ImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  flex: 1;
`;

const NoImageElement = styled.div<ItemTypeProps>`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  flex: 1;
  background: ${(props) => props.contentType && `${resourceTypeColor(props.contentType)}`};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .c-content-type-badge {
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
`;

const ContentTypeIcon = styled.span<ItemTypeProps>`
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='78' height='23' viewBox='17 0 78 23' fill='none'%3E%3Cpath d='M35.6874 10.8284C37.0999 8.9889 38.405 7.28934 40 6C44.8452 2.08335 48.9078 0 56 0C63.0922 0 67.6548 2.5833 72.5 6.49995C74.0499 7.75284 75.2937 9.39082 76.6385 11.1617C80.0028 15.5921 83.9988 20.8545 95 23H17C27.9865 20.8573 32.1701 15.409 35.6874 10.8284ZM352' fill='${(
    props,
  ) => props.contentType && `${encodeURIComponent(resourceTypeColor(props.contentType))}`}'/%3E%3C/svg%3E");
  background-position: top;
  background-repeat: no-repeat;
  left: 15px;
  top: -23px;
  height: 45px;
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const HeaderWrapper = styled.div`
  overflow: hidden;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  labels: SearchItemType['item']['labels'];
  img?: SearchItemType['item']['img'] | null;
  type?: ContentType;
};

const ItemResourceHeader = ({ labels = [], img, type }: Props) => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      {img ? (
        <ImageElement src={img.url} alt={img.alt} />
      ) : (
        <NoImageElement contentType={type}>{type && <ContentTypeBadge type={type} border={false} />}</NoImageElement>
      )}
      <ContentTypeWrapper className="resource-type-wrapper" contentType={type}>
        {img && type && (
          <ContentTypeIcon className="resource-icon-wrapper" contentType={type}>
            <ContentTypeBadge type={type} border={false} />
          </ContentTypeIcon>
        )}
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
    </HeaderWrapper>
  );
};

export default ItemResourceHeader;
