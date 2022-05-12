/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { Paragraph } from '@ndla/icons/editor';
import SafeLink from '@ndla/safelink';
import { fonts, spacing, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import Image from '../../Image';

const ResourceTitle = styled.h2`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${fonts.sizes('18')};
  font-weight: 400;
  justify-content: center;
  margin: 0;
`;

const ResourceElementWrapper = styled(SafeLink)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid rgba(209, 214, 219, 1);
  border-radius: 2px;
  height: 64px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${fonts.sans};
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
  transition-duration: 0.5s;
  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.5s;
    ${ResourceTitle} {
      transition-duration: 0.5s;
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
  &active {
    text-decoration: none;
  }
`;

const ResourceTopic = styled.p`
  display: flex;
  margin: 0;
  font-size: ${fonts.sizes('12')};
  margin-top: -5px;
`;
const ResourceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${spacing.medium};
  margin-left: ${spacing.small};
`;
const ResourceImageWrapper = styled.div`
  height: 40px;
  width: 56px;
`;
const ResourceImage = styled(Image)`
  border-radius: 2px;
`;
const ResourceLeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 30%;
`;
const ResourceRightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 70%;
`;
const TagsList = styled.div`
  height: 100%;
  display: flex;
  list-style: none;
  margin-right: ${spacing.medium};
  display: flex;

  li {
    display: flex;
    margin: 0;
    align-items: center;
    padding-right: ${spacing.xxsmall};
    padding-left: ${spacing.xxsmall};
    color: ${colors.brand.grey};
    font-size: ${fonts.sizes(14)};
  }
`;

const MoreIcon = styled(Paragraph)`
  height: 100%;
  margin-right: ${spacing.small};
  fill: ${colors.brand.grey};
`;

type ResourceImageProps = {
  alt: string;
  src: string;
};
type ResourceElementProps = {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topic: string;
  tags?: string[];
  description?: string;
  children?: ReactElement;
};

const ResourceElement = ({ link, title, tags, children, resourceImage, topic }: ResourceElementProps) => {
  const { t } = useTranslation();
  return (
    <ResourceElementWrapper to={link}>
      <ResourceLeftSide>
        <ResourceImageWrapper>
          <ResourceImage alt={resourceImage.alt} src={resourceImage.src} />
        </ResourceImageWrapper>
        <ResourceInfoWrapper>
          <ResourceTitle>{title}</ResourceTitle>
          <ResourceTopic>{topic}</ResourceTopic>
        </ResourceInfoWrapper>
        {children}
      </ResourceLeftSide>
      <ResourceRightSide>
        <TagsList>
          {tags?.map((tag) => (
            <li> #{tag}</li>
          ))}
        </TagsList>
        <MoreIcon />
      </ResourceRightSide>
    </ResourceElementWrapper>
  );
};

export default ResourceElement;
