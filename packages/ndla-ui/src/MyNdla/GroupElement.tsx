/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useState } from 'react';
import { fonts, colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { IconButtonDualStates } from '@ndla/button';
import { Heart, HeartOutline } from '@ndla/icons/action';

const LinkWrapper = styled(SafeLink)`
  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;
const ElementWrapper = styled.div`
  height: 200px;
  width: 303px;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 4px;
`;
const TopHalfWrapper = styled.div<TopHalfProps>`
  height: 60%;
  width: 100%;
  background-image: url(${(p) => p.backgroundImage});
  background-repeat: none;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const BottomHalfWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CourseTitle = styled.h3`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('16')};
`;

interface CourseGroupProps {
  courseTitle: string;
  courseIllustration: TopHalfProps;
  link: string;
  favouritable?: boolean;
}

interface TopHalfProps {
  backgroundImage: string;
}
const GroupElement = ({ ...props }: CourseGroupProps) => {
  const [isFavorite, setIsFavorite] = useState(true);
  return (
    <>
      <LinkWrapper to={props.link}>
        <ElementWrapper>
          <TopHalfWrapper backgroundImage={props.courseIllustration.backgroundImage}>
            {props.favouritable && (
              <IconButtonDualStates
                ariaLabelInActive="Legg til i mine favoritter"
                ariaLabelActive="Allerede lagt til i mine favoritter"
                activeIcon={<Heart />}
                inactiveIcon={<HeartOutline />}
                active={isFavorite}
                size="small"
                ghostPill
                onClick={() => {
                  isFavorite ? setIsFavorite(false) : setIsFavorite(true);
                }}
              />
            )}
          </TopHalfWrapper>
          <BottomHalfWrapper>
            <CourseTitle>{props.courseTitle}</CourseTitle>
          </BottomHalfWrapper>
        </ElementWrapper>
      </LinkWrapper>
    </>
  );
};

export default GroupElement;
