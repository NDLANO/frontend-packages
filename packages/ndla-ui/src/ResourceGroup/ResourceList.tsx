/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { fonts } from '@ndla/core';
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
  font-family: ${fonts.sans};
  ${({ showAdditionalResources }) =>
    showAdditionalResources &&
    css`
      animation-name: ${fakeLoadingAnimation};
      animation-duration: 0.4s;
    `}
`;

export type ResourceListProps = {
  resources: Resource[];
  onClick?: () => void;
  contentType?: string;
  title?: string;
  showAdditionalResources?: boolean;
  heartButton?: (path: string) => ReactNode;
};

const ResourceList = ({
  resources,
  onClick,
  contentType,
  title,
  showAdditionalResources,
  heartButton,
}: ResourceListProps) => {
  const { t } = useTranslation();
  const renderAdditionalResourceTrigger =
    !showAdditionalResources &&
    resources.filter((res) => res.additional).length > 0 &&
    resources.filter((res) => !res.additional).length === 0;

  return (
    <div>
      <StyledResourceList showAdditionalResources={showAdditionalResources}>
        {resources.map(({ id, ...resource }) => (
          <ResourceItem
            id={id}
            key={id}
            contentType={contentType}
            showAdditionalResources={showAdditionalResources}
            heartButton={heartButton}
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

export default ResourceList;
