/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';

import ResourceList, { ResourceListProps } from './ResourceList';

const Wrapper = styled.section`
  margin-bottom: ${spacing.large};
`;

type StyledHeaderProps = {
  invertedStyle?: boolean;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  margin: ${spacing.small} 0 ${spacing.xsmall};
  ${(props) => props.invertedStyle && `color: #fff`};
`;

const StyledHeading = styled.h1`
  ${fonts.sizes('16px', '18px')};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`;

type Props = {
  invertedStyle?: boolean;
  toggleAdditionalResources: () => void;
  onToggleAddToFavorites: (id: string | number, add: string) => void;
  showAddToFavoriteButton: boolean;
};

const ResourceGroup = ({
  title,
  resources,
  showAdditionalResources,
  toggleAdditionalResources,
  contentType,
  invertedStyle,
  onToggleAddToFavorites,
  showAddToFavoriteButton = false,
}: Props & ResourceListProps) => (
  <Wrapper>
    {title && (
      <StyledHeader invertedStyle={invertedStyle}>
        <StyledHeading>{title}</StyledHeading>
      </StyledHeader>
    )}
    {resources.length > 0 ? (
      <ResourceList
        title={title}
        onClick={toggleAdditionalResources}
        showAdditionalResources={showAdditionalResources}
        contentType={contentType}
        resources={resources}
        onToggleAddToFavorites={onToggleAddToFavorites}
        showAddToFavoriteButton={showAddToFavoriteButton}
      />
    ) : null}
  </Wrapper>
);

export default ResourceGroup;
