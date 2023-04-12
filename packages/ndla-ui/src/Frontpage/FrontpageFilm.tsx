import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { spacing, spacingUnit, colors, breakpoints, fonts, mq } from '@ndla/core';
import SectionHeading from '../SectionHeading';
import NdlaFilmIllustrasjon from '../../../../images/ndla-film/illustrasjon_film.svg';
import NdlaFilmIllustrasjonRull from '../../../../images/ndla-film/illustrasjon_filmrull.svg';

type Props = {
  url: string;
};

const TwoImages: boolean = true;

const StyledFilmContainer = styled.div`
  display: flex;
  background-color: lightblue;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    max-width: 390px;
  }
`;

const StyledLeftIllustration = styled.img`
  margin-right: 5px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 160px;
  }
  ${!TwoImages &&
  css`
    display: none;
  `}
`;

const StyledRightIllustration = styled.img`
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 200px;
    align-self: flex-end;
    margin: -72px 0 48px 0;
  }
  ${!TwoImages && css``}
`;

const StyledTextContainer = styled.div`
  margin-bottom: 24px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0 20px;
  }
`;

const StyledDesktopHeading = styled.h2`
  margin: 32px 0 0 0;
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const StyledMobileHeading = styled.h2`
  margin: 48px 0 24px 20px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: none;
  }
`;

const StyledText = styled.p`
  margin: 24px 0px;
  font-family: Source Seriff Pro;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
`;

const FrontpageFilm = ({ url }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledFilmContainer>
      <StyledMobileHeading>{t('welcomePage.film.header')}</StyledMobileHeading>
      <StyledLeftIllustration src={NdlaFilmIllustrasjon}></StyledLeftIllustration>
      <StyledTextContainer>
        <StyledDesktopHeading>{t('welcomePage.film.header')}</StyledDesktopHeading>
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
