import React, { ReactNode } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { ButtonV2 } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';

type InvertItProps = {
  invertedStyle?: boolean;
};

const StyledWrapper = styled.section``;

const StyledIngress = styled.div<InvertItProps>`
  max-width: 612px;
  ${(props) =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
`;

const StyledH1 = styled.h1<InvertItProps>`
  ${fonts.sizes('24px', '28px')}
  margin: ${spacing.medium} ${spacing.normal} ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px ${spacing.normal} 18px 0;
    ${fonts.sizes('32px', '28px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px ${spacing.normal} 24px 0;
    ${fonts.sizes('38px', '32px')};
  }
  ${(props) =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
`;

const LoaderText = styled.p<InvertItProps>`
  ${(props) =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
`;

const StyledHeadingText = styled.span`
  margin-right: 28px;
`;

const StyledAdditionalResourceMark = styled.span`
  text-align: center;
  display: inline-block;
  line-height: 18px;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.brand.dark};
  border-radius: 100px;
  margin-right: 7px;
`;
const StyledAdditionalResource = styled.span`
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('12px', '15px')};
  color: ${colors.brand.dark};
`;

const StyledButtonWrapper = styled.div<InvertItProps>`
  margin-top: ${spacing.small};
  padding: ${spacing.xsmall} 0 ${spacing.xsmall} ${spacing.medium};
  border-left: 6px solid ${colors.brand.light};
  ${(props) =>
    props.invertedStyle &&
    css`
      button {
        color: #fff;
        &:hover,
        &:focus {
          color: #fff;
        }
      }
    `}
`;

const StyledContentWrapper = styled.div<InvertItProps>`
  padding-top: ${spacing.normal};
  margin-top: 0;
  border-left: 6px solid ${colors.brand.light};

  ${(props) =>
    props.invertedStyle &&
    css`
      background: #fff;
    `}
`;

type Props = {
  heading: string;
  introduction: string;
  onToggleShowContent: () => void;
  showContent: boolean;
  isLoading: boolean;
  isAdditionalTopic?: boolean;
  invertedStyle?: boolean;
  renderMarkdown: (text: string) => string;
  children: ReactNode;
};

export const NavigationTopicAbout = ({
  heading,
  introduction,
  onToggleShowContent,
  showContent,
  isLoading,
  isAdditionalTopic,
  invertedStyle,
  renderMarkdown,
  children,
}: Props) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper data-testid="nav-topic-about">
      <StyledH1 invertedStyle={invertedStyle}>
        <StyledHeadingText>{heading}</StyledHeadingText>
        {isAdditionalTopic && (
          <StyledAdditionalResource>
            <StyledAdditionalResourceMark>T</StyledAdditionalResourceMark>
            {t('navigation.additionalTopic')}
          </StyledAdditionalResource>
        )}
      </StyledH1>
      {isLoading ? (
        <LoaderText invertedStyle={invertedStyle}>{t('navigation.loadingText')}</LoaderText>
      ) : (
        <>
          <StyledIngress invertedStyle={invertedStyle}>
            {parse(renderMarkdown(introduction))}
            <StyledButtonWrapper invertedStyle={invertedStyle}>
              <ButtonV2
                aria-expanded={!!showContent}
                variant="link"
                onClick={() => {
                  onToggleShowContent();
                }}
              >
                {showContent ? (
                  <>
                    {t('navigation.showShorterDescription')} <ChevronUp />
                  </>
                ) : (
                  <>
                    {t('navigation.showLongerDescription')} <ChevronDown />
                  </>
                )}
              </ButtonV2>
            </StyledButtonWrapper>
          </StyledIngress>
          {showContent && <StyledContentWrapper invertedStyle={invertedStyle}>{children}</StyledContentWrapper>}
        </>
      )}
    </StyledWrapper>
  );
};

export default NavigationTopicAbout;
