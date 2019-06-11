import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Forward } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';
import { spacing, colors, breakpoints, fonts, mq } from '@ndla/core';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SectionHeading from '../SectionHeading';
import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-frontpage-film');

const StyledSection = styled('section')`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
`;

const StyledImage = styled('div')`
  background: ${colors.ndlaFilm.filmColorDark};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${spacing.small} center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100px;
  padding: ${spacing.spacingUnit}px ${spacing.medium} ${spacing.spacingUnit}px
    ${spacing.spacingUnit}px;

  ${props =>
    props.imageUrl &&
    css`
      background-image: url(${props.imageUrl});
    `}

  ${mq.range({ from: breakpoints.mobileWide })} {
    min-height: 120px;
    background-position: ${spacing.medium} center;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    min-height: 180px;
    background-position: 72px center;
  }
`;

const textCss = css`
  color: #fff;
  ${fonts.sizes('14px', '26px')};
  width: 50%;

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('18px', '26px')};
    padding-right: ${spacing.spacingUnit}px;
    padding-left: 0;
    width: 66.6%;
  }
`;

const FrontpageFilm = ({ url, imageUrl, t }) => (
  <StyledSection>
    <SectionHeading large>{t('welcomePage.film.header')}</SectionHeading>
    <StyledImage imageUrl={imageUrl}>
      <span {...classes('film-text', 'wide')} css={textCss}>
        {t('welcomePage.film.text')}
      </span>
      <span {...classes('film-text', 'narrow')} css={textCss}>
        {t('welcomePage.film.textShort')}
      </span>
    </StyledImage>
    <div className="o-text-link__wrapper o-text-link__wrapper--right">
      <SafeLink className="o-text-link" to={url}>
        {t('welcomePage.film.linkLabel')}
        <Forward />
      </SafeLink>
    </div>
  </StyledSection>
);

FrontpageFilm.propTypes = {
  t: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

FrontpageFilm.defaultProps = {};

export default injectT(FrontpageFilm);
