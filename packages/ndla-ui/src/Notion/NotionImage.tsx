/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { animations, breakpoints, colors, mq, spacing } from "@ndla/core";
import { ExpandTwoArrows, CursorClick } from "@ndla/icons/action";
import { Play } from "@ndla/icons/common";
import { Figure, figureActionIndicatorStyle } from "../Figure";
import Image from "../Image";

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
  type: "image" | "video" | "h5p" | "iframe" | "external" | "audio" | undefined;
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

export const NotionImage = ({ src, alt, type }: Props) => {
  return (
    <StyledFigure type={"full-column"}>
      <StyledImageWrapper>
        <StyledImage alt={alt} src={src} expandButton={<OpenButton type={type} />} />
      </StyledImageWrapper>
    </StyledFigure>
  );
};

interface OpenButtonProps {
  type?: "image" | "video" | "h5p" | "iframe" | "external" | "audio";
}

export const OpenButton = ({ type }: OpenButtonProps) => {
  const { t } = useTranslation();
  return (
    <div
      css={figureActionIndicatorStyle}
      data-open-button=""
      aria-label={t("license.images.itemImage.zoomImageButtonLabel")}
    >
      {type === "image" && <ExpandTwoArrows />}
      {type === "h5p" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "iframe" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "external" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "video" && <Play style={{ width: "24px", height: "24px" }} />}
    </div>
  );
};
