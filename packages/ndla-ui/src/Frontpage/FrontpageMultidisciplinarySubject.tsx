import React from 'react';
import SafeLink, { SafeLinkButton } from '@ndla/safelink';
import styled from '@emotion/styled';
import { spacing, breakpoints, mq } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import SectionHeading from '../SectionHeading';
import ComponentCursor from '../ComponentCursor';
import { MultidisciplinarySubjectIllustration as Illustration } from './illustrations/FrontpageIllustrations';

export const StyledSection = styled.section`
  position: relative;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  background-color: rgb(250, 246, 240);
  background: linear-gradient(
    304.38deg,
    rgba(239, 238, 220, 0.35),
    rgba(250, 246, 240, 0.75)
  );
  border-radius: 8px;
  padding: ${spacing.medium};
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
    margin: 124px 0;
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
  url: string;
  topics?: [{ url: string; title: string; id: string }];
};

const FrontpageMultidisciplinarySubject: React.FunctionComponent<
  Props & tType
> = ({ url, t, topics }) => (
  <StyledSection>
    <ComponentCursor
      variant="left"
      text={t('frontpageMultidisciplinarySubject.cursorText')}
    />
    <Wrapper>
      <Content>
        <SectionHeading large>
          {t('frontpageMultidisciplinarySubject.heading')}
        </SectionHeading>
        {topics ? (
          <Topics>
            {topics.map(topic => {
              return (
                <Topic key={topic.id}>
                  <SafeLink to={topic.url}>{topic.title}</SafeLink>
                </Topic>
              );
            })}
          </Topics>
        ) : null}
        <StyledText>{t('frontpageMultidisciplinarySubject.text')}</StyledText>
      </Content>
    </Wrapper>
    <TargetItem className="o-text-link__wrapper o-text-link__wrapper">
      <SafeLinkButton to={url} buttonSize="medium" borderShape="rounded">
        {t('frontpageMultidisciplinarySubject.linkText')}
      </SafeLinkButton>
    </TargetItem>
    <Illustration />
  </StyledSection>
);

export default injectT(FrontpageMultidisciplinarySubject);
