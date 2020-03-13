import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';

type WrapperProps = {
  backgroundColor?: string;
  borderColor?: string;
  hideArrow?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  position: relative;
  padding: ${spacing.small};
  margin-bottom: ${spacing.small};
  border-radius: 2px;
  border: 2px solid
    ${props => (props.borderColor ? props.borderColor : colors.white)};
  display: inline-flex;
  ${props =>
    !props.hideArrow &&
    `
      &:after,
      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 100%;
        left: ${spacing.medium};
        border: solid transparent;
        pointer-events: none;
      }
      &:after {
        border-top-color: ${
          props.backgroundColor ? props.backgroundColor : colors.white
        };
        border-width: 14px;
        margin-left: -14px;
      }
      &:before {
        border-top-color: ${
          props.borderColor ? props.borderColor : colors.white
        };
        border-width: 17px;
        margin-left: -17px;
      }
    `}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type Props = {
  heading?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  hideArrow?: boolean;
  children: React.ReactNode;
};
export const SpeechBadge = ({
  heading,
  icon,
  backgroundColor,
  borderColor,
  hideArrow,
  children,
}: Props) => (
  <Wrapper
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    hideArrow={hideArrow}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <TextWrapper>
      {heading && <Label>{heading}</Label>}
      {children}
    </TextWrapper>
  </Wrapper>
);

export default SpeechBadge;
