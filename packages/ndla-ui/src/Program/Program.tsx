import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { breakpoints, fonts, mq } from '@ndla/core';
// @ts-ignore
import LayoutItem, { OneColumn } from '../Layout';
import { NavigationHeading, NavigationBox } from '../Navigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type StyledBackgroundProps = {
  image?: string;
};
const StyledBackground = styled.div<StyledBackgroundProps>`
  height: 160px;
  max-width: 1105px;
  width: 100%;
  margin: 0 auto;
  ${(props: StyledBackgroundProps) =>
    props.image &&
    `
    background-image: url(${props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    
    ${mq.range({ until: breakpoints.tablet })} {
      height: 160px;
    }
    ${mq.range({ until: breakpoints.mobileWide })} {
      height: 128px;
    }
  `}
`;

const StyledLayoutWrapper = styled.div`
  background: #fff;
  margin-top: -170px;
  ${mq.range({ until: breakpoints.tablet })} {
    margin-top: 0;
  }
`;

const StyledContentWrapper = styled.div`
  padding-top: 1px;
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
  image?: string;
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

export const Program = ({ heading, image, grades }: Props) => {
  const [showGradeIndex, setShowGradeIndex] = useState(0);

  const selectedGrade = grades[showGradeIndex];

  return (
    <StyledWrapper>
      <StyledBackground image={image} />
      <OneColumn>
        <StyledLayoutWrapper>
          <LayoutItem layout="extend">
            <StyledContentWrapper>
              <NavigationHeading>{heading}</NavigationHeading>
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
            </StyledContentWrapper>
          </LayoutItem>
        </StyledLayoutWrapper>
      </OneColumn>
    </StyledWrapper>
  );
};

export default Program;
