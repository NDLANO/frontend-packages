import React from 'react';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { spacing, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import SectionHeading from '../SectionHeading';
import { MultidisciplinarySubjectIllustration as Illustration } from './illustrations/FrontpageIllustrations';

const AnchorButton = StyledButton.withComponent('a');
/* 
import {
  Content,
  StyledSection,
  TargetItem,
  StyledText,
  Wrapper,
  Topics,
  Topic,
} from './FrontpageMultidisciplinarySubjectStyle'; */


export const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  background-color: rgb(250,246,240);
  background: linear-gradient(304.38deg, rgba(239,238,220,0.35), rgba(250,246,240,0.75));
  border-radius: 8px;
  padding: ${spacing.medium};
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Content = styled.div`
  max-width: 720px;
`;

export const TargetItem = styled.div`
  padding: ${spacing.small} 0 0;
`;

export const StyledText = styled.span`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ${mq.range({ from: breakpoints.desktop })} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Topics = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${spacing.xxsmall} 0;
  margin: ${spacing.small} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    flex-direction: row;
    margin: 0;
  }
`;

const Topic = styled.div`
  margin: ${spacing.small} 0;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.small};
  }
`;

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  url: string;
  topics?: [{ url: string, title: string }],
};

const FrontpageMultidisciplinarySubject: React.FunctionComponent<Props> = ({
  url,
  t,
  topics,
}) => (
    <StyledSection>
      <Wrapper>
        <Content>
          <SectionHeading large>
            {t('frontpageMultidisciplinarySubject.heading')}
          </SectionHeading>
          {topics ? <Topics>
            {topics.map(topic => {
              return (
                <Topic>
                  <SafeLink to={topic.url} key={`subjecttitle-${topic.title}`}>{topic.title}</SafeLink>
                </Topic>
              )
            })}
          </Topics> : null}
          <StyledText>{t('frontpageMultidisciplinarySubject.text')}</StyledText>
        </Content>
      </Wrapper>
      <TargetItem className="o-text-link__wrapper o-text-link__wrapper">
        <AnchorButton
          href={url}
          size="medium"
          borderShape="rounded"
          rel="noopener noreferrer">
          {t('frontpageMultidisciplinarySubject.linkText')}
        </AnchorButton>
      </TargetItem>
      <Illustration />
    </StyledSection>
  );

export default injectT(FrontpageMultidisciplinarySubject);
