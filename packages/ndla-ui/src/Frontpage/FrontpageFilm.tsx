import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { Forward } from '@ndla/icons/common';
import { withTranslation, WithTranslation } from 'react-i18next';
import { spacing, colors, breakpoints, fonts, mq } from '@ndla/core';
// @ts-ignore
import SectionHeading from '../SectionHeading';

const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

type StyledImageProps = {
  imageUrl: string;
};

const StyledImage = styled.div<StyledImageProps>`
  background: ${colors.ndlaFilm.filmColorDark};
  background-repeat: no-repeat;
  background-position: ${spacing.small} center;
  background-size: 110px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100px;
  padding: ${spacing.spacingUnit}px ${spacing.medium} ${spacing.spacingUnit}px ${spacing.spacingUnit}px;

  ${(props: StyledImageProps) =>
    props.imageUrl &&
    css`
      background-image: url(${props.imageUrl});
    `}

  ${mq.range({ from: breakpoints.mobileWide })} {
    background-size: contain;
    min-height: 120px;
    background-position: ${spacing.medium} center;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    min-height: 180px;
    background-position: 72px center;
  }
`;

type StyledTextProps = {
  narrow?: boolean;
};

const StyledText = styled.span<StyledTextProps>`
  color: #fff;
  ${fonts.sizes('14px', '26px')};
  width: 50%;

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '26px')};
    padding-right: ${spacing.spacingUnit}px;
    padding-left: 0;
    width: 66.6%;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: ${(props: StyledTextProps) => (props.narrow ? 'none' : 'flex')};
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: ${(props: StyledTextProps) => (!props.narrow ? 'none' : 'flex')};
  }
`;

type Props = {
  url: string;
  imageUrl: string;
};

const FrontpageFilm: React.FunctionComponent<Props & WithTranslation> = ({ url, imageUrl, t }) => (
  <StyledSection>
    <SectionHeading large>{t('welcomePage.film.header')}</SectionHeading>
    <StyledImage imageUrl={imageUrl}>
      <StyledText>{t('welcomePage.film.text')}</StyledText>
      <StyledText narrow>{t('welcomePage.film.textShort')}</StyledText>
    </StyledImage>
    <div className="o-text-link__wrapper o-text-link__wrapper--right">
      <SafeLink className="o-text-link" to={url}>
        {t('welcomePage.film.linkLabel')}
        <Forward />
      </SafeLink>
    </div>
  </StyledSection>
);

export default withTranslation()(FrontpageFilm);
