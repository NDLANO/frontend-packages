import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';

type BannerProps = {
  image: string;
};
const StyledBanner = styled.div<BannerProps>`
  width: 100%;
  height: 120px;
  margin-top: -40px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 260px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    height: 320px;
    margin-top: -80px;
  }
`;

type Props = BannerProps & {};
const SubjectBanner = ({ image }: Props) => <StyledBanner image={image} />;

export default SubjectBanner;
