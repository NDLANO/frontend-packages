/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import styled from '@emotion/styled';

import { animations, colors, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';

// @ts-ignore
import ContentTypeBadge from '../ContentTypeBadge';
import { resourceTypeColor, SearchItemType } from './SearchItem';
import ItemContexts from './components/ItemContexts';
import { ContentType } from './SearchTypeResult';

type ItemTypeProps = {
  contentType?: ContentType;
};

const Container = styled.div<ItemTypeProps>`
  display: flex;
  flex-direction: column;
  min-height: 192px;
  height: 100%;
  border: 1px solid ${(props) => props.contentType && `${resourceTypeColor(props.contentType)}`};
  border-radius: 5px;
  transition: all ${animations.durations.fast} ease-in-out;
  &:hover {
    margin: -2px;
    min-height: 196px;
    height: calc(100% + 4px);
  }
`;

const ItemLink = styled(SafeLink)`
  box-shadow: none;
  color: unset;
  text-decoration: none;
  display: flex;
  position: relative;
  min-height: 0;
  flex: 1;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.normal};
  max-width: 800px;
  transition: all ${animations.durations.fast} ease-in-out;
  ${Container}:hover & {
    margin: calc(${spacing.small} + 2px) calc(${spacing.small} + 2px) calc(${spacing.small} + 2px)
      calc(${spacing.normal} + 2px);
  }
`;
const ContentTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  ${fonts.sizes('12px', '16px')};
  font-weight: ${fonts.weight.semibold};
`;
const ContentTypeIconWrapper = styled.div`
  margin-right: ${spacing.small};
`;

const ItemTitleWrapper = styled.div`
  margin: ${spacing.small} 0 ${spacing.xsmall};
`;

const ItemTitle = styled.h3`
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.dark};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  display: inline;
  transition: all ${animations.durations.fast} ease-in-out;
  ${Container}:hover & {
    box-shadow: inset 0 -1px;
    background-color: transparent;
  }
`;

const ItemText = styled.div`
  ${fonts.sizes('16px', '24px')};
`;

const ImageWrapper = styled.div`
  float: right;
  position: relative;
  width: 224px;
  height: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacing.small};
  transition: all ${animations.durations.fast} ease-in-out;
  ${Container}:hover & {
    width: 228px;
    height: 168px;
  }
`;

const ImageElement = styled.img`
  border-radius: 2px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ${animations.durations.fast} ease-in-out;
  max-width: unset;
`;

const ContextWrapper = styled.div`
  transition: all ${animations.durations.fast} ease-in-out;
  justify-self: flex-end;
`;

const SearchItemList = ({ item, type }: SearchItemType) => {
  const { t } = useTranslation();
  const { id, title, url, ingress, contexts, img = null, labels = [] } = item;
  return (
    <Container contentType={type}>
      <ItemLink to={url}>
        <TextWrapper>
          {type && (
            <ContentTypeWrapper>
              <ContentTypeIconWrapper>
                <ContentTypeBadge type={type} background border={false} />
              </ContentTypeIconWrapper>
              {t(`contentTypes.${type}`)}
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
          )}
          <ItemTitleWrapper>
            <ItemTitle>{title}</ItemTitle>
          </ItemTitleWrapper>
          <ItemText>{parse(ingress)}</ItemText>
          <ContextWrapper>
            <ItemContexts contexts={contexts} id={id} title={title} />
          </ContextWrapper>
        </TextWrapper>
        {img && (
          <ImageWrapper>
            <ImageElement src={img.url} alt={img.alt} />
          </ImageWrapper>
        )}
      </ItemLink>
    </Container>
  );
};

export default SearchItemList;
