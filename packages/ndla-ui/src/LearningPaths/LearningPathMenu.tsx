/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacing, misc, mq, breakpoints } from "@ndla/core";
import { useWindowSize } from "@ndla/hooks";
import { ArrowExpandRight, ArrowExpandLeft } from "@ndla/icons/action";
import Tooltip from "@ndla/tooltip";
import LearningPathMenuAside from "./LearningPathMenuAside";
import LearningPathMenuContent from "./LearningPathMenuContent";
import LearningPathMenuIntro from "./LearningPathMenuIntro";
import LearningPathMenuModalWrapper from "./LearningPathMenuModalWrapper";

const SIDE_NAV_WIDTH = "372px";

type StyledMenuProps = {
  isOpen?: boolean;
};

const StyledMenu = styled.div<StyledMenuProps>`
  width: 100%;
  ${mq.range({ from: breakpoints.tablet })} {
    flex-shrink: 0;
    transition: all 200ms ease;
    max-width: ${SIDE_NAV_WIDTH};
    width: ${SIDE_NAV_WIDTH};
    margin-bottom: ${spacing.large};
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    min-width: ${SIDE_NAV_WIDTH};
    margin-right: ${spacing.xsmall};
    ${(props) =>
      !props.isOpen &&
      `
      width: ${spacing.large};
      min-width: ${spacing.large};
    `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-right: ${spacing.small};
  }
`;

const StyledToggleMenubutton = styled.button`
  background: ${colors.brand.light};
  color: ${colors.brand.primary};
  width: ${spacing.medium};
  height: ${spacing.medium};
  align-items: center;
  justify-content: center;
  border-radius: ${misc.borderRadius};
  display: none;
  border: none;
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    display: inline-flex;
    &:hover,
    &:focus {
      background: ${colors.brand.primary};
      color: #fff;
    }
  }
`;

export type StepProps = {
  title: string;
  type: string;
  id: number;
};

interface Props {
  heartButton?: ReactNode;
  learningsteps: StepProps[];
  name: string;
  lastUpdated: string;
  copyright: {
    contributors: {
      type: string;
      name: string;
    }[];
    license: {
      license: string;
    };
  };
  learningPathURL: string;
  invertedStyle?: boolean;
  currentIndex: number;
  cookies: {
    [key: string]: string;
  };
  learningPathId: number;
  toLearningPathUrl(pathId: number, stepId: number): string;
}

const LearningPathMenu = ({
  learningsteps,
  currentIndex,
  name,
  lastUpdated,
  copyright,
  learningPathId,
  toLearningPathUrl,
  learningPathURL,
  invertedStyle,
  cookies,
  heartButton,
}: Props) => {
  const { t } = useTranslation();
  const [isOpen, toggleOpenState] = useState(false);
  const { innerWidth } = useWindowSize(100);

  return (
    <StyledMenu isOpen={isOpen}>
      <LearningPathMenuModalWrapper innerWidth={innerWidth}>
        {(closeModal: VoidFunction) => (
          <>
            <div
              css={css`
                padding-left: ${spacing.small};
              `}
            >
              <Tooltip tooltip={t("learningPath.openMenuTooltip")}>
                <StyledToggleMenubutton type="button" onClick={() => toggleOpenState(!isOpen)}>
                  {!isOpen ? <ArrowExpandRight /> : <ArrowExpandLeft />}
                </StyledToggleMenubutton>
              </Tooltip>
            </div>
            <LearningPathMenuIntro
              isOpen={isOpen}
              name={name}
              invertedStyle={invertedStyle}
              id={learningPathId}
              heartButton={heartButton}
            />
            <LearningPathMenuContent
              learningsteps={learningsteps}
              learningPathId={learningPathId}
              toLearningPathUrl={toLearningPathUrl}
              isOpen={isOpen}
              currentIndex={currentIndex}
              cookies={cookies}
              invertedStyle={invertedStyle}
              onStepNavigate={closeModal}
            />
            <LearningPathMenuAside
              isOpen={isOpen}
              lastUpdated={lastUpdated}
              copyright={copyright}
              learningPathURL={learningPathURL}
              invertedStyle={invertedStyle}
            />
          </>
        )}
      </LearningPathMenuModalWrapper>
    </StyledMenu>
  );
};

export default LearningPathMenu;
