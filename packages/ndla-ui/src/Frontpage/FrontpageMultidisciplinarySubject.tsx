import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { Forward } from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import SectionHeading from '../SectionHeading';

const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

type StyledImageProps = {
  imageUrl: string;
};

const Wrapper = styled.div<StyledImageProps>`
  background-repeat: no-repeat;
  background-position: 80% 98%;
  background-size: 250%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${mq.range({ from: breakpoints.tabletWide })} {
    background-size: 125%;
    padding: ${spacing.spacingUnit}px ${spacing.medium} 175px;
    ${(props: StyledImageProps) =>
      props.imageUrl &&
      css`
        background-image: url(${props.imageUrl});
      `}
    background-repeat: no-repeat;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    background-position: 0 98%;
    background-size: 100%;
  }
`;

const Content = styled.div`
  max-width: 720px;
`;

type StyledTextProps = {
  narrow?: boolean;
};

const StyledText = styled.span<StyledTextProps>`
  font-size: 18px;
  width: 100%;
  line-height: 28px;
  ${mq.range({ from: breakpoints.tablet })} {
    padding-right: ${spacing.spacingUnit}px;
    padding-left: 0;
  }
`;

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  url: string;
  imageUrl: string;
};

const FrontpageMultidisciplinarySubject: React.FunctionComponent<Props> = ({
  url,
  imageUrl,
  t,
}) => (
  <StyledSection>
    <Wrapper imageUrl={imageUrl}>
      <Content>
        <SectionHeading large>
          {t('frontpageMultidisciplinarySubject.heading')}
        </SectionHeading>
        <StyledText>{t('frontpageMultidisciplinarySubject.text')}</StyledText>
        <div className="o-text-link__wrapper o-text-link__wrapper">
          <SafeLink className="o-text-link" to={url}>
            {t('frontpageMultidisciplinarySubject.linkText')}
            <Forward />
          </SafeLink>
        </div>
      </Content>
    </Wrapper>
  </StyledSection>
);

export default injectT(FrontpageMultidisciplinarySubject);
