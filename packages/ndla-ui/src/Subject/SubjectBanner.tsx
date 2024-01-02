/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { breakpoints, mq } from "@ndla/core";

type BannerProps = {
  image: string;
  negativeTopMargin?: boolean;
};
const StyledBanner = styled.div<BannerProps>`
  width: 100%;
  height: 120px;
  margin-top: 0px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 190px;
    ${(props) => props.negativeTopMargin && `margin-top: -30px;`}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 220px;
    ${(props) => props.negativeTopMargin && `margin-top: -60px;`}
  }
`;

type Props = BannerProps & {};
const SubjectBanner = ({ image, negativeTopMargin }: Props) => (
  <StyledBanner image={image} negativeTopMargin={negativeTopMargin} />
);

export default SubjectBanner;
