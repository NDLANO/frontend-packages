import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';

type BannerProps = {
  image: string;
  negativeTopMargin?: boolean;
};
const StyledBanner = styled.div<BannerProps>`
  width: 100%;
  height: 120px;
  margin-top: 0px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 260px;
    ${props => props.negativeTopMargin && `margin-top: -40px;`}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 320px;
    ${props => props.negativeTopMargin && `margin-top: -80px;`}
  }
`;

type Props = BannerProps & {};
const SubjectBanner = ({ image, negativeTopMargin }: Props) => (
  <StyledBanner image={image} negativeTopMargin={negativeTopMargin} />
);

export default SubjectBanner;
