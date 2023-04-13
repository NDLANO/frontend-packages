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
  margin-top: 48px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    max-width: 390px;
    margin: 48px auto;
  }
`;

const StyledHeading = styled.h2`
  margin: 48px 0 24px 20px;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${!TwoImages &&
  css`
    flex-direction: column-reverse;
  `}
`;

const StyledLeftIllustration = styled.img`
  margin-right: 5px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 160px;
    margin-bottom: 24px;
  }
  ${!TwoImages &&
  css`
    width: 290px;
    margin: 24px auto;
  `}
`;

const StyledRightIllustration = styled.img`
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 200px;
    align-self: flex-end;
  }
  ${!TwoImages &&
  css`
    display: none;
  `}
`;

const StyledText = styled.p`
  font-family: Source Seriff Pro;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  margin: 0;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0 20px;
  }
`;

const StyledLinkContainer = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    position: relative;
    bottom: 120px;
    padding-left: 20px;
    ${!TwoImages &&
    css`
      position: static;
      justify-self: flex-end;
      margin-bottom: 48px;
    `}
  }
`;

const FrontpageFilm = ({ url }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledFilmContainer>
      <StyledHeading>{t('welcomePage.film.header')}</StyledHeading>
      <StyledContentContainer>
        <StyledLeftIllustration src={NdlaFilmIllustrasjon}></StyledLeftIllustration>
        <StyledText>{t('welcomePage.film.text')}</StyledText>
        <StyledRightIllustration src={NdlaFilmIllustrasjonRull}></StyledRightIllustration>
      </StyledContentContainer>
      <StyledLinkContainer>
        <SafeLink className="o-text-link" to={url}>
          {t('welcomePage.film.linkLabel')}
          <Forward />
        </SafeLink>
      </StyledLinkContainer>
    </StyledFilmContainer>
  );
};

export default FrontpageFilm;
