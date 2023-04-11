import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { spacing, spacingUnit, colors, breakpoints, fonts, mq } from '@ndla/core';
import SectionHeading from '../SectionHeading';
import NdlaFilmIllustrasjon from '../../../../images/ndla-film/illustrasjon_film.svg';
import NdlaFilmIllustrasjonRull from '../../../../images/ndla-film/illustrasjon_filmrull.svg';

const StyledFilmContainer = styled.div`
  display: flex;
`;

const StyledLeftIllustration = styled.img``;

const StyledRightIllustration = styled.img``;

const StyledTextContainer = styled.div``;

const StyledHeading = styled.h2``;

const StyledText = styled.p``;

type Props = {
  url: string;
};

const FrontpageFilm = ({ url }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledFilmContainer>
      <StyledLeftIllustration src={NdlaFilmIllustrasjon}></StyledLeftIllustration>
      <StyledTextContainer>
        <StyledHeading>{t('welcomePage.film.header')}</StyledHeading>
        <StyledText>{t('welcomePage.film.text')}</StyledText>
        <div>
          <SafeLink className="o-text-link" to={url}>
            {t('welcomePage.film.linkLabel')}
            <Forward />
          </SafeLink>
        </div>
      </StyledTextContainer>
      <StyledRightIllustration src={NdlaFilmIllustrasjonRull}></StyledRightIllustration>
    </StyledFilmContainer>
  );
};

export default FrontpageFilm;
