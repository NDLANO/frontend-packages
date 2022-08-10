/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { fonts, colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { IconButtonDualStates } from '@ndla/button';
import { Heart, HeartOutline } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

const StyledImage = styled.img`
  object-fit: contain;
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;
  height: 60%;
  position: relative;
`;

const CourseTitle = styled.h3`
  justify-content: center;
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('16')};
  overflow: hidden;
  text-overflow: ellipsis;
`;
const LinkWrapper = styled(SafeLink)`
  box-shadow: none;
  height: 140px;
  max-width: 350px;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 4px;
  &:hover {
    border: 1px solid ${colors.brand.tertiary};
    ${CourseTitle} {
      text-decoration: underline;
    }
  }
`;
const StyledIconButton = styled(IconButtonDualStates)`
  position: absolute;
  right: 0px;
`;
interface Props {
  courseTitle: string;
  image?: { alt: string; src: string };
  href: string;
  favouritable?: boolean;
  favorite?: FavoriteProps;
}

interface FavoriteProps {
  isFavorite: boolean;
  setFavorite: (isFavorite: boolean) => void;
}

const CourseCard = ({ courseTitle, image, href, favouritable, favorite }: Props) => {
  const { t } = useTranslation();
  return (
    <LinkWrapper to={href}>
      <StyledImageWrapper>
        {favouritable && (
          <StyledIconButton
            ariaLabelInActive={t('myNdla.addToCourses')}
            ariaLabelActive={t('myNdla.alreadyAddedToCourses')}
            activeIcon={<Heart />}
            inactiveIcon={<HeartOutline />}
            active={favorite?.isFavorite}
            size="small"
            ghostPill
            onClick={() => favorite?.setFavorite(favorite?.isFavorite)}
          />
        )}
        <StyledImage src={image?.src} />
      </StyledImageWrapper>

      <CourseTitle>{courseTitle}</CourseTitle>
    </LinkWrapper>
  );
};

export default CourseCard;
