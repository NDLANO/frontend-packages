/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { breakpoints, fonts, mq } from '@ndla/core';
import { StyledButton } from '@ndla/button';

import { WithTranslation } from 'react-i18next';
import { Launch } from '@ndla/icons/common';
import styled from '@emotion/styled';
import Image from '../Image';

const BoxWrapper = styled.div`
  height: 192px;
  border-radius: 5px;
  border: 1px solid #deebf6;
  position: relative !important;
  right: auto !important;
  left: -16.6666666667%;
  width: 133.3333333333% !important;

  margin-bottom: 24px;
  font-family: ${fonts.sans};
  box-shadow: 0px 20px 35px -15px rgba(32, 88, 143, 0.15);
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: 0 auto;
    width: 80% !important;
    left: 0;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 24px;
    height: 500px;
  }
`;

const BoxHeading = styled.h3`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes(18)};
`;

const BoxText = styled.p`
  font-size: ${fonts.sizes(14)};
  ${mq.range({ until: breakpoints.tabletWide })} {
    line-height: 22px;
  }
`;

const StyledButtonDiv = styled.div`
  position: absolute;
  bottom: 18%;
  left: 25%;
  text-align: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    bottom: 5%;
    left: 5%;
  }
`;
const NewStyledButton = styled(StyledButton)`
  margin-bottom: -10px;
  position: aboslute;
  border: 1px solid #184673;
  ${mq.range({ until: breakpoints.mobileWide })} {
    width: 250px;
  }
`;
const NewLaunchIcon = styled(Launch)`
  margin-left: 8px;
  height: 15px;
  width: 15px;
  ${mq.range({ until: breakpoints.mobileWide })} {
  }
`;

const BoxImage = styled(Image)`
  object-fit: cover;
  width: 130px;
  border-radius: 5px;
  height: 130px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 250px;
    height: 250px;
    margin-top: 10%;
  }
`;

const TextSectionWrapper = styled.div`
  height: 80%;
  float: left;
  width: 70%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 60%;
    width: 100%;
    display: block;
  }
`;

const ImageSectionWrapper = styled.div`
  height: 100%;
  width: 25%;
  margin: 0 auto;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    height: 50%;
    width: 100%;
  }
`;

type Props = {
  image: string;
  heading: string;
  text: string;
};
export const ResourceBox = ({ image, heading, text }: Props & WithTranslation) => {
  return (
    <BoxWrapper>
      <ImageSectionWrapper>
        <BoxImage alt={heading} src={image} sizes="25, 25" />
      </ImageSectionWrapper>
      <TextSectionWrapper>
        <BoxHeading>{heading}</BoxHeading>
        <BoxText>{text}</BoxText>
      </TextSectionWrapper>
      <StyledButtonDiv>
        <NewStyledButton outline borderShape="rounded">
          Åpne i eget vindu
          <NewLaunchIcon aria-hidden />
        </NewStyledButton>
      </StyledButtonDiv>
    </BoxWrapper>
  );
};

export default ResourceBox;
