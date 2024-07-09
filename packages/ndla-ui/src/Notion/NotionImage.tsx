/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { animations, breakpoints, colors, mq, spacing } from "@ndla/core";
import { Image } from "@ndla/primitives";
import { Figure } from "../Figure";

const StyledImageWrapper = styled.div`
  overflow: hidden;
  width: 260px;
  padding-top: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: 0 auto;
  }
  &:hover {
    img {
      transform: scale(1.1);
      opacity: 1.1;
      transition-duration: 0.5s;
    }
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  max-height: 162px;
  transition: transform ${animations.durations.fast};
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 260px;
  }
`;

interface Props {
  src: string;
  alt: string;
}

const StyledFigure = styled(Figure)`
  &:hover {
    [data-open-button] {
      background: ${colors.white};
      svg {
        transform: scale(1.2);
      }
    }
  }
`;

export const NotionImage = ({ src, alt }: Props) => {
  return (
    <StyledFigure type={"full-column"}>
      <StyledImageWrapper>
        <StyledImage alt={alt} src={src} />
      </StyledImageWrapper>
    </StyledFigure>
  );
};
