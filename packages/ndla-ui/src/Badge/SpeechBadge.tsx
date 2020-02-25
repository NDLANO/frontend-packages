import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';

type WrapperProps = {
  backgroundColor?: string;
};

const Wrapper = styled.div<WrapperProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  position:relative;
  padding: ${spacing.small};
  margin-bottom: ${spacing.small};
  border-radius: 2px;
  border: 2px solid ${colors.white};
  display: inline-flex;
  &:after, &:before {
    content: "";
    position: absolute;
    width: 0; 
    height: 0; 
    top: 100%;
    left: ${spacing.medium};
    border: solid transparent;
    pointer-events: none;
  }
  &:after {
    border-top-color: ${props => props.backgroundColor};
    border-width: 14px;
    margin-left: -14px;
  }
  &:before {
    border-top-color: ${colors.white};
    border-width: 17px;
    margin-left: -17px;
  }
}
`;

const IconWrapper = styled.div`
  padding-right: ${spacing.small};
`;

const Label = styled.label`
  font-size: 20px;
  display: inline-block;
`;

const TextWrapper = styled.div`
  padding: ${spacing.xxsmall} 0 ${spacing.xxsmall};
`;

type Props = {
  heading?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  children: React.ReactNode;
};
export const SpeechBadge = ({
  heading,
  icon,
  backgroundColor = colors.white,
  children,
}: Props) => (
  <Wrapper backgroundColor={backgroundColor}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <TextWrapper>
      {heading && <Label>{heading}</Label>}
      {children}
    </TextWrapper>
  </Wrapper>
);

export default SpeechBadge;
