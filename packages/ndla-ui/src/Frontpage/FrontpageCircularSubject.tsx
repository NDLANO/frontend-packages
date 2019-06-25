import React from 'react';
import styled from '@emotion/styled';
import { fonts, colors, spacing, mq, breakpoints } from '@ndla/core';

const StyledFigure = styled.figure`
  display: flex;
  align-item: center;
  svg {
    height: 30vw;
    width: 30vw;
    max-width: 200px;
    max-height: 200px;
    transform: translateY(-${spacing.small});
    ${mq.range({ from: breakpoints.mobileWide })} {
      transform: translateY(-${spacing.spacingUnit * 0.75}px);
    }
  }
`;

const StyledFigCaption = styled.figcaption`
  position: absolute;
  bottom: ${spacing.normal};
  left: 50%;
  background: transparent;
  ${fonts.sizes(16, 1.3)};
  ${mq.range({ from: breakpoints.mobileWide })} {
    ${fonts.sizes(20, 1.3)};
    bottom: ${spacing.medium};
  }
  transform: translateX(-50%);
  padding: 0;
  font-weight: bold;
  color: ${colors.subject.dark};
`;

const StyledButton = styled.button`
  box-shadow: none;
  border: 0;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    width: 30vw;
    height: 30vw;
    max-width: 200px;
    max-height: 200px;
    position: absolute;
    background: red;
    border-radius: 100%;
    background: ${colors.brand.lighter};
    transition: transform 200ms ease, background 200ms ease;
  }
  border-radius: 100%;
  height: 30vw;
  width: 30vw;
  max-width: 200px;
  max-height: 200px;
  padding: 0;
  &:hover, &:focus {
    &:before {
      background: ${colors.brand.light};
      transform: scale(1.1);
    }
  }
  &:active :before {
      background: ${colors.brand.light};
      transform: scale(0.9);
    }
  }
`;

type Props = {
  textValue: string;
  Illustration: React.FunctionComponent;
};

const FrontpageCircularSubject: React.FunctionComponent<Props & React.HTMLProps<HTMLButtonElement>> = ({
  textValue, Illustration, ...rest
}) => (
  <StyledButton type="button" {...rest}>
    <StyledFigure>
      <Illustration />
    </StyledFigure>
    <StyledFigCaption>{textValue}</StyledFigCaption>
  </StyledButton>
);

export default FrontpageCircularSubject;
