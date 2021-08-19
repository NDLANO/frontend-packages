/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { keyframes } from '@emotion/core';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import NoContentBox from '../NoContentBox';
import ResourceItem from './ResourceItem';
import { Resource } from '../types';

const fakeLoadingAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  99% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

type StyledListProps = {
  showAdditionalResources?: boolean;
};
const StyledResourceList = styled.ul<StyledListProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ showAdditionalResources }) =>
    showAdditionalResources &&
    css`
      animation-name: ${fakeLoadingAnimation};
      animation-duration: 0.4s;
    `}
`;

export type ResourceListProps = {
  resources: Resource[];
  onClick: () => void;
  contentType?: string;
  title?: string;
  showAdditionalResources?: boolean;
};

const ResourceList = ({
  resources,
  onClick,
  contentType,
  title,
  showAdditionalResources,
  t,
}: ResourceListProps & tType) => {
  const renderAdditionalResourceTrigger =
    !showAdditionalResources &&
    resources.filter((res) => res.additional).length > 0 &&
    resources.filter((res) => !res.additional).length === 0;

  return (
    <div>
      <StyledResourceList showAdditionalResources={showAdditionalResources}>
        {resources.map((resource) => (
          <ResourceItem
            key={resource.id}
            contentType={contentType}
            showAdditionalResources={showAdditionalResources}
            {...resource}
            contentTypeDescription={
              resource.additional ? t('resource.tooltipAdditionalTopic') : t('resource.tooltipCoreTopic')
            }
          />
        ))}
        {renderAdditionalResourceTrigger && (
          <li>
            <NoContentBox
              onClick={onClick}
              buttonText={t('resource.toggleFilterLabel')}
              text={
                title
                  ? t('resource.noCoreResourcesAvailable', {
                      name: title.toLowerCase(),
                    })
                  : t('resource.noCoreResourcesAvailableUnspecific')
              }
            />
          </li>
        )}
      </StyledResourceList>
    </div>
  );
};

export default injectT(ResourceList);
