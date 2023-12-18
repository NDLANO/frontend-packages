/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import { fonts, spacing } from '@ndla/core';

import ContentTypeBadge from '../../ContentTypeBadge';
import resourceTypeColor from '../../utils/resourceTypeColor';
import { SearchItemType } from '../SearchItem';
import { ContentType } from '../SearchTypeResult';

interface ItemTypeProps {
  contentType?: ContentType;
}

const ImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const NoImageElement = styled.div<ItemTypeProps>`
  flex: 1;
  background: ${(props) => props.contentType && `${resourceTypeColor(props.contentType)}`};
  display: flex;
  align-items: center;
  justify-content: center;
  [data-badge] {
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
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.normal};
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
`;

const ContentTypeIcon = styled.span<ItemTypeProps>`
  display: flex;
  position: absolute;
  top: -23px;
  margin-left: ${spacing.small};
  justify-content: center;
  ::before {
    content: '';
    position: absolute;
    height: 23px;
    width: 78px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='78' height='23' viewBox='17 0 78 23' fill='none'%3E%3Cpath d='M35.6874 10.8284C37.0999 8.9889 38.405 7.28934 40 6C44.8452 2.08335 48.9078 0 56 0C63.0922 0 67.6548 2.5833 72.5 6.49995C74.0499 7.75284 75.2937 9.39082 76.6385 11.1617C80.0028 15.5921 83.9988 20.8545 95 23H17C27.9865 20.8573 32.1701 15.409 35.6874 10.8284ZM352' fill='${(
      props,
    ) => props.contentType && `${encodeURIComponent(resourceTypeColor(props.contentType))}`}'/%3E%3C/svg%3E");
  }
`;

const StyledContentTypeBadge = styled(ContentTypeBadge)`
  z-index: 1;
  margin-top: ${spacing.xxsmall};

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Wrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
  flex-direction: column;
  height: 180px;
`;

interface Props {
  labels: SearchItemType['item']['labels'];
  img?: SearchItemType['item']['img'] | null;
  type?: ContentType;
}

const ItemResourceHeader = ({ labels = [], img, type }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {img ? (
        <ImageElement src={img.url} alt={img.alt} />
      ) : (
        <NoImageElement contentType={type}>{type && <ContentTypeBadge type={type} border={false} />}</NoImageElement>
      )}
      <ContentTypeWrapper className="resource-type-wrapper" contentType={type}>
        {img && type && (
          <ContentTypeIcon className="resource-icon-wrapper" contentType={type}>
            <StyledContentTypeBadge type={type} border={false} />
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
    </Wrapper>
  );
};

export default ItemResourceHeader;
