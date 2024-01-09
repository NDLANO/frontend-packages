/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacing, animations, mq, breakpoints } from "@ndla/core";
import { Back, Forward } from "@ndla/icons/common";
import SafeLink from "@ndla/safelink";

const FOOTER_HEIGHT = "78px";
const FOOTER_HEIGHT_MOBILE = spacing.large;
const SAFELINK_SIZE_MOBILE = spacing.large;

const StyledFooter = styled.nav`
  display: flex;
  height: ${FOOTER_HEIGHT};
  width: 100%;
  ${mq.range({ until: breakpoints.tablet })} {
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    height: calc(${FOOTER_HEIGHT_MOBILE} + var(--safe-area-inset-bottom));
    min-height: var(-webkit-fill-available);
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
    padding-bottom: env(safe-area-inset-bottom);
  }
  background: ${colors.brand.lighter};
  align-items: center;
  justify-content: space-between;
  ${animations.fadeInBottom()}
`;

interface Props {
  children: ReactNode;
}

export const LearningPathSticky = ({ children }: Props) => <StyledFooter>{children}</StyledFooter>;

const SafeLinkCSS = css`
  display: flex;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  color: ${colors.brand.primary};
  height: ${FOOTER_HEIGHT};
  ${mq.range({ until: breakpoints.tablet })} {
    height: ${SAFELINK_SIZE_MOBILE};
    width: ${SAFELINK_SIZE_MOBILE};
    min-width: ${SAFELINK_SIZE_MOBILE};
  }
  padding: 0 ${spacing.normal} 0 ${spacing.normal};
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0;
  }
  transition: background 200ms ease;
  div {
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing.small};
    span:last-child {
      box-shadow: inset 0 -1px;
    }
    ${mq.range({ until: breakpoints.tablet })} {
      display: none;
    }
  }
  &:hover,
  &:focus {
    hr {
      opacity: 0;
    }
    background: rgba(0, 0, 0, 0.1);
    div {
      span:last-child {
        box-shadow: none;
      }
    }
  }
`;

const StyledTitle = styled.span`
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

type PropsSiblings = {
  title: string;
  toLearningPathUrl(pathId: number, stepId: number): string;
  arrow?: "left" | "right";
  pathId: number;
  stepId: number;
};

export const LearningPathStickySibling = ({ title, toLearningPathUrl, pathId, stepId, arrow }: PropsSiblings) => {
  const { t } = useTranslation();
  return (
    <SafeLink
      to={toLearningPathUrl(pathId, stepId)}
      css={SafeLinkCSS}
      aria-label={arrow === "left" ? t("learningPath.previousArrow") : t("learningPath.nextArrow")}
    >
      {arrow === "left" && <Back size="normal" />}
      <div>
        <StyledTitle>{title}</StyledTitle>
      </div>
      {arrow === "right" && <Forward size="normal" />}
    </SafeLink>
  );
};

export const LearningPathStickyPlaceholder = () => <div css={SafeLinkCSS} />;
