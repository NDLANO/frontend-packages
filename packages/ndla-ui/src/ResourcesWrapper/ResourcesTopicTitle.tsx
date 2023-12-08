import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { LearningPathQuiz } from '@ndla/icons/contentType';
import { ModalBody, ModalHeader, ModalCloseButton, Modal, ModalTitle, ModalTrigger, ModalContent } from '@ndla/modal';
import { Switch } from '@ndla/switch';
import Tooltip from '@ndla/tooltip';

interface HelpIconProps {
  invertedStyle: boolean;
}

const StyledTopicTitleIcon = styled.div`
  color: ${colors.brand.light};
  flex-grow: 1;
  justify-content: flex-end;
  border: 0;
  display: flex;
  padding: 5px;
  border-radius: 100%;
  align-items: center;
  outline: 0;
  background-color: ${colors.brand.light};
  svg {
    fill: ${colors.brand.primary};
    height: 10px;
    width: 10px;
  }
  &:hover,
  &:focus {
    background-color: ${colors.brand.primary};
    svg {
      fill: ${colors.white};
    }
  }
`;

const invertedTopicTitleIconStyle = css`
  background-color: ${colors.white};
  svg {
    fill: ${colors.brand.primary};
  }
  &:hover,
  &:focus {
    background-color: ${colors.white};
    svg: {
      fill: ${colors.brand.primary};
    }
  }
`;

const HelpIcon = ({ invertedStyle }: HelpIconProps) => (
  <StyledTopicTitleIcon css={invertedStyle ? invertedTopicTitleIconStyle : undefined}>
    <LearningPathQuiz />
  </StyledTopicTitleIcon>
);

const switchCSS = css`
  margin-right: ${spacing.xsmall};
`;

const invertedSwitchCSS = css`
  margin-right: ${spacing.xsmall};
  color: #fff;
`;

const TooltipWrapper = styled.div`
  line-height: 1;
`;
const TooltipButton = styled.button`
  border: 0;
  background: initial;
  padding: 0;
  line-height: unset;
  cursor: pointer;
`;

const StyledTopicTitleParagraph = styled.p`
  font-family: ${fonts.sans};
  ${fonts.sizes('18px', '24px')};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 ${spacing.xsmall} 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-right: ${spacing.small};
    ${fonts.sizes('20px', '26px')};
  }
`;

const TopicTitleWrapper = styled.header`
  display: inline-flex;
  flex-flow: wrap;
  align-items: center;
  margin-top: ${spacing.large};
  padding-bottom: ${spacing.small};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    &:last-child {
      padding: ${spacing.xsmall} 0;
    }
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    > div {
      display: block;
    }
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: block;
  }
`;

const invertedTopicTitleWrapperStyle = css`
  color: #fff;
`;

const TopicTitle = styled.h1`
  font-weight: ${fonts.weight.normal};
  margin: 0;
  ${fonts.sizes('18px', '24px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('20px', '26px')};
  }
`;

const topicTitleSingleStyle = css`
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

interface Props {
  title?: string;
  toggleAdditionalResources: () => void;
  hasAdditionalResources: boolean;
  showAdditionalResources: boolean;
  invertedStyle?: boolean;
  messages: {
    label: string;
    additionalFilterLabel: string;
  };
}
const ResourcesTopicTitle = ({
  title,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  messages,
  invertedStyle = false,
}: Props) => {
  const { t } = useTranslation();
  // Fix for heading while title not required when ready.
  let heading;
  if (title) {
    heading = <TopicTitle>{title}</TopicTitle>;
  } else {
    heading = <TopicTitle css={topicTitleSingleStyle}>{messages.label}</TopicTitle>;
  }

  return (
    <TopicTitleWrapper css={invertedStyle ? invertedTopicTitleWrapperStyle : undefined}>
      <div>
        {title && <StyledTopicTitleParagraph>{messages.label}</StyledTopicTitleParagraph>}
        {heading}
      </div>
      {hasAdditionalResources && (
        <StyledRow>
          <Switch
            id="toggleAdditionID"
            checked={showAdditionalResources}
            label={messages.additionalFilterLabel}
            onChange={toggleAdditionalResources}
            css={invertedStyle ? invertedSwitchCSS : switchCSS}
          />
          <Modal>
            <TooltipWrapper>
              <Tooltip tooltip={t('resource.dialogTooltip')}>
                <ModalTrigger>
                  <TooltipButton aria-label={t('resource.dialogTooltip')}>
                    <HelpIcon invertedStyle={invertedStyle} />
                  </TooltipButton>
                </ModalTrigger>
              </Tooltip>
            </TooltipWrapper>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{t('resource.dialogHeading')}</ModalTitle>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody>
                <hr />
                <p>{t('resource.dialogText1')}</p>
                <p>{t('resource.dialogText2')}</p>
              </ModalBody>
            </ModalContent>
          </Modal>
        </StyledRow>
      )}
    </TopicTitleWrapper>
  );
};

export default ResourcesTopicTitle;
