import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { Forward } from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, colors, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import SectionHeading from '../SectionHeading';

const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

type StyledImageProps = {
  imageUrl: string;
};

const ToolboxWrapper = styled.div<StyledImageProps>`
  background: ${colors.ndlaToolBox.boxColor};
  background-repeat: no-repeat;
  background-position: 80% 98%;
  background-size: 250%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 200px;
  padding: ${spacing.spacingUnit}px ${spacing.medium} 175px
    ${spacing.spacingUnit}px;
  ${(props: StyledImageProps) =>
    props.imageUrl &&
    css`
      background-image: url(${props.imageUrl});
    `}

  ${mq.range({ from: breakpoints.mobileWide })} {
    background-size: 175%;
  }

  ${mq.range({ from: breakpoints.tablet })} {
    background-size: 150%;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    background-size: 100%;
  }
`;

type StyledTextProps = {
  narrow?: boolean;
};

const StyledText = styled.span<StyledTextProps>`
  font-size: 18px;
  width: 100%;
  max-width: 720px;
  line-height: 28px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-right: ${spacing.spacingUnit}px;
    padding-left: 0;
    width: 85%;
    font-size: 20px;
    line-height: 32px;
  }
`;

const LinkWrapper = styled.div`
  justify-content: flex-start;
  ${mq.range({ from: breakpoints.tabletWide })} {
    justify-content: flex-end;
  }
`;

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  url: string;
  imageUrl: string;
};

const FrontpageToolbox: React.FunctionComponent<Props> = ({
  url,
  imageUrl,
  t,
}) => (
  <StyledSection>
    <SectionHeading large>{t('frontPageToolbox.heading')}</SectionHeading>
    <ToolboxWrapper imageUrl={imageUrl}>
      <StyledText>{t('frontPageToolbox.text')}</StyledText>
    </ToolboxWrapper>
    <LinkWrapper className="o-text-link__wrapper o-text-link__wrapper">
      <SafeLink className="o-text-link" to={url}>
        {t('frontPageToolbox.linkText')}
        <Forward />
      </SafeLink>
    </LinkWrapper>
  </StyledSection>
);

export default injectT(FrontpageToolbox);
