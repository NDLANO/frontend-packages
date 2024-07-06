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
import { animations, breakpoints, colors, misc, mq, spacing } from "@ndla/core";
import { ExpandTwoArrows, CursorClick } from "@ndla/icons/action";
import { Play } from "@ndla/icons/common";
import { Figure } from "../Figure";
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

export const FigureActionIndicator = styled.div`
  all: unset;
  cursor: pointer;
  position: absolute;
  padding: 0;
  bottom: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  // The 65 is added to alter the opacity.
  background-color: ${colors.background.default}65;
  border-radius: ${misc.borderRadiusLarge};
  border: 0;
  svg {
    transition: transform 0.4s ease-out;
    width: 18px;
    height: 18px;
    fill: ${colors.brand.primary};
    color: ${colors.brand.primary};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

export const OpenButton = ({ type }: OpenButtonProps) => {
  const { t } = useTranslation();
  return (
    <FigureActionIndicator data-open-button="" aria-label={t("license.images.itemImage.zoomImageButtonLabel")}>
      {type === "image" && <ExpandTwoArrows />}
      {type === "h5p" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "iframe" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "external" && <CursorClick style={{ width: "24px", height: "24px" }} />}
      {type === "video" && <Play style={{ width: "24px", height: "24px" }} />}
    </FigureActionIndicator>
  );
};
