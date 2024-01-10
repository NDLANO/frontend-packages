/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacing, spacingUnit, fonts, mq, breakpoints, animations } from "@ndla/core";
import { SafeLinkButton } from "@ndla/safelink";
import { ArticleByline } from "../Article";

const infoTextCSS = css`
  ${fonts.sizes(18, 1.3)};
  font-weight: ${fonts.weight.semibold};
  width: calc(100% - ${spacing.medium});
  border-top: 2px solid ${colors.brand.greyLight};
  margin-top: ${spacing.normal};
  padding: ${spacing.normal} 0 0;
`;

type StyledAsideProps = {
  isOpen: boolean;
  invertedStyle?: boolean;
};

const StyledAside = styled.aside<StyledAsideProps>`
  display: none;
  padding-left: ${spacing.xlarge};
  ${mq.range({ from: breakpoints.desktop })} {
    display: block;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${(props) =>
      props.isOpen &&
      css`
        display: block;
        opacity: 0;
        ${animations.fadeIn()}
        animation-fill-mode: forwards;
        animation-delay: 450ms;
      `}
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: block;
    padding-left: ${spacingUnit * 1.25}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${(props) =>
      props.invertedStyle &&
      `
      color: #fff;
    `}
  }
`;

type Props = {
  isOpen: boolean;
  lastUpdated: string;
  learningPathURL: string;
  invertedStyle?: boolean;
  copyright: {
    contributors: {
      type: string;
      name: string;
    }[];
    license: {
      license: string;
    };
  };
};

const LearningPathMenuAside = ({ lastUpdated, learningPathURL, copyright, isOpen, invertedStyle }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledAside isOpen={isOpen} invertedStyle={invertedStyle}>
      <ArticleByline
        authors={copyright.contributors}
        license={copyright.license.license}
        published={lastUpdated}
        learningPath
      />
      <p css={infoTextCSS}>{t("learningPath.createLearningPathText")}</p>
      <SafeLinkButton
        to={learningPathURL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        inverted={invertedStyle}
      >
        {t("learningPath.createLearningPathButtonText")}
      </SafeLinkButton>
    </StyledAside>
  );
};

export default LearningPathMenuAside;
