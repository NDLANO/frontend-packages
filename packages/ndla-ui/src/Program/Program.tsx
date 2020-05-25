import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import LayoutItem, { OneColumn } from '../Layout';
import NavigationBox from '../NavigationBox/NavigationBox';

const StyledWrapper = styled.div`
  background-image: url(https://www.flowerglossary.com/wp-content/uploads/2019/12/lotus-flowers.png);
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

const StyledContentWrapper = styled.div`
  background: #fff;
  margin-top: 230px;
  padding: 50px 0;
`;

const StyledH1 = styled.h1`
  ${fonts.sizes('24px', '28px')}
  margin: ${spacing.medium} 0 ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 0;
    ${fonts.sizes('40px', '48px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 0;
    ${fonts.sizes('52px', '62px')};
  }
`;

const StyledMenu = styled.div`
  margin-top: 28px;
  margin-bottom: 28px;
  > *:first-of-type {
    margin-right: 10px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
const StyledMenuItem = styled.span`
  text-transform: uppercase;
  font-weight: ${fonts.weight.bold};
`;

type Props = {
  heading?: string;
  grades: [
    {
      name: string;
      categories: [
        {
          name: string;
          subjects: [
            {
              label: string;
              url: string;
            }
          ];
        }
      ];
    }
  ];
};

export const Program = ({ heading, grades }: Props) => {
  const [showGradeIndex, setShowGradeIndex] = useState(0);

  const selectedGrade = grades[showGradeIndex];

  return (
    <StyledWrapper>
      <OneColumn>
        <StyledContentWrapper>
          <LayoutItem layout="extend">
            <StyledH1>{heading}</StyledH1>
            <StyledMenu>
              {grades.map((item, index) => (
                <Button
                  key={item.name}
                  onClick={() => setShowGradeIndex(index)}
                  lighter={showGradeIndex !== index}
                  size="normal"
                  borderShape="rounded">
                  <StyledMenuItem>{item.name}</StyledMenuItem>
                </Button>
              ))}
            </StyledMenu>
            {selectedGrade.categories.map(category => (
              <NavigationBox
                key={category.name}
                heading={category.name}
                items={category.subjects}
              />
            ))}
          </LayoutItem>
        </StyledContentWrapper>
      </OneColumn>
    </StyledWrapper>
  );
};

export default Program;
