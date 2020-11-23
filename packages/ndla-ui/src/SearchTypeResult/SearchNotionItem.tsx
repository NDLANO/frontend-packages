/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, colors, fonts, mq } from '@ndla/core';

type ItemWrapperProps = {
  hasMedia?: boolean;
};
const ItemWrapper = styled.div<ItemWrapperProps>`
  border-top: 2px solid ${colors.brand.light};
  padding: 34px 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${props =>
    props.hasMedia &&
    `${mq.range({ from: breakpoints.tabletWide })} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 32px;
    align-items: start;
  }`}
`;

const TextWrapper = styled.div``;
const DescriptionWrapper = styled.div`
  ${fonts.sizes('18px', '26px')};
  font-family: ${fonts.serif};
`;
const TitleWrapper = styled.span`
  font-weight: bold;
`;

const MediaWrapper = styled.div`
  margin-bottom: 24px;
`;
const LabelsWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 4px;
  margin-top: 24px;
`;
const LabelsLabel = styled.span`
  display: inline-block;
  ${fonts.sizes('16px', '20px')};
`;
const Label = styled.span`
  display: inline-block;
  background: ${colors.brand.greyLightest};
  padding: 2px 4px;
  border-radius: 2px;
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
`;

const Image = styled.img`
  border-radius: 5px;
`;

export type SearchNotionItemProps = {
  id: string;
  title: string;
  text: React.ReactNode;
  image?: { url: string; alt: string };
  media?: React.ReactNode;
  labels?: string[];
};

const SearchNotionItem = ({
  title,
  text,
  image,
  media,
  labels = [],
}: SearchNotionItemProps) => {
  const hasMedia = !!(image || media);
  return (
    <ItemWrapper hasMedia={hasMedia}>
      <TextWrapper>
        <DescriptionWrapper>
          <TitleWrapper>{title}</TitleWrapper> – {text}
        </DescriptionWrapper>
        {labels.length > 0 && (
          <LabelsWrapper>
            <LabelsLabel>Brukes i:</LabelsLabel>
            {labels.map(label => (
              <Label>{label}</Label>
            ))}
          </LabelsWrapper>
        )}
      </TextWrapper>
      {hasMedia && (
        <MediaWrapper>
          {image && <Image src={image.url} alt={image.alt} />}
          {media && media}
        </MediaWrapper>
      )}
    </ItemWrapper>
  );
};

export default SearchNotionItem;
