/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { colors, fonts, breakpoints, mq } from '@ndla/core';
import styled from '@emotion/styled';
import { Image } from '..';

const BannerWrapper = styled.div`
  height: 223px;
  border-radius: 8px;
  width: 669px;
  border: 1px solid ${colors.brand.greyLight};
  font-family: ${fonts.sans};
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    text-align: center;
    display: inline-table;
  }
`;

const FlagWrapper = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    margin-top: 15px;
  }
`;
const Flag = styled(Image)`
  height: 159px;
  width: 225px;
`;

const TextWrapper = styled.div`
  width: 50%;
  float: left;
  padding: 20px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
`;

const RegularText = styled.p`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.grey};
  margin: 0;
`;
const EnglishText = styled.a`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.grey};
`;
const TitleText = styled.h2`
  margin-top: 7px;
  font-size: ${fonts.sizes(22)};
`;

type BannerProps = {
  link: string;
  norwegian: string;
  ukrainian: string;
  english: string;
};
export const Ukrainebanner = ({ link, norwegian, ukrainian, english }: BannerProps) => {
  return (
    <BannerWrapper>
      <FlagWrapper>
        <Flag
          alt="Ukrainian Flag"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png"
        />
      </FlagWrapper>
      <TextWrapper>
        <TitleText>{norwegian}</TitleText>
        <RegularText>{ukrainian}</RegularText>
        <EnglishText href={link}>{english}</EnglishText>
      </TextWrapper>
    </BannerWrapper>
  );
};

export default Ukrainebanner;
