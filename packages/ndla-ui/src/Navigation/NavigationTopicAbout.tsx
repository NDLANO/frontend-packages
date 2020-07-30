import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';

const StyledWrapper = styled.section``;

const StyledIngress = styled.div`
  max-width: 612px;
  margin-bottom: 10px;
`;

const StyledH1 = styled.h1`
  ${fonts.sizes('24px', '28px')}
  margin: ${spacing.medium} 0 ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 40px 0 18px;
    ${fonts.sizes('32px', '28px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('38px', '32px')};
  }
`;

const StyledButtonWrapper = styled.div`
  margin-top: 10px;
`;

const StyledContentWrapper = styled.div`
  margin-top: 32px;
  ${mq.range({ from: breakpoints.tablet })} {
    border: 2px solid #e6e6e6;
    border-radius: 6px;
    margin-left: -8.33%;
    margin-right: -8.33%;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: 0 102px;
  }
  ${mq.range({ from: breakpoints.wide })} {
    margin: 32px -102px;
  }
`;

type Props = {
  heading: string;
  ingress: React.ReactNode;
  onToggleShowContent: () => void;
  showContent: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

export const NavigationTopicAbout = ({
  heading,
  ingress,
  onToggleShowContent,
  showContent,
  isLoading,
  children,
  t,
}: Props) => {
  return (
    <StyledWrapper data-testid="nav-topic-about">
      <StyledH1>{heading}</StyledH1>
      {isLoading ? (
        <p>Laster emne</p>
      ) : (
        <>
          <StyledIngress>
            {ingress}
            <StyledButtonWrapper>
              <Button
                link
                onClick={() => {
                  onToggleShowContent();
                }}>
                {showContent ? (
                  <>
                    {t('navigation.showShorterDescription')} <ChevronUp />
                  </>
                ) : (
                  <>
                    {t('navigation.showLongerDescription')} <ChevronDown />
                  </>
                )}
              </Button>
            </StyledButtonWrapper>
          </StyledIngress>
          {showContent && (
            <StyledContentWrapper>{children}</StyledContentWrapper>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default injectT(NavigationTopicAbout);
