/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, HTMLProps, ReactElement, ReactNode, useEffect } from 'react';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing, spacingUnit, utils } from '@ndla/core';
import { useForwardedRef } from '@ndla/util';

interface BaseInputProps {
  before?: ReactNode;
  after?: ReactNode;
  white?: boolean;
  error?: string;
  customCss?: SerializedStyles;
  label: string;
  labelHidden?: boolean;
  children: ReactElement;
  name: string;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

interface FormWarningTextProps {
  withLabel?: boolean;
}

const shouldForwardError = (prop: string) => prop !== 'withLabel';

const ErrorText = styled('span', { shouldForwardProp: shouldForwardError })<FormWarningTextProps>`
  margin-top: 2px;
  grid-column: 2;
  font-family: ${fonts.sans};
  color: ${colors.support.red};
  ${fonts.sizes(14, 1.1)};
  padding-left: ${(p) => p.withLabel && `${spacing.xxlarge}`};
`;

interface StyledLabelProps {
  labelHidden: boolean;
}

const shouldForwardLabel = (p: string) => p !== 'labelHidden';

const StyledLabel = styled('label', { shouldForwardProp: shouldForwardLabel })<StyledLabelProps>`
  width: ${spacing.xxlarge};
  max-width: ${spacing.xxlarge};
  padding: 20px ${spacing.small} ${spacing.small} 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes(14, 1.1)};
  ${(p) => p.labelHidden && utils.labelHidden}
`;

interface StyledInputWrapperProps {
  white?: boolean;
}

const InputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  grid-column: 2;
  flex-wrap: wrap;
  flex-grow: 1;
  background: ${(p) => (p.white ? colors.white : colors.brand.greyLightest)};
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.brand.greyLighter};
  transition: border-color 100ms ease;
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};

  &:focus-within {
    border-color: ${colors.brand.primary};
  }

  input,
  textarea {
    padding: 0 ${spacing.small};
    width: inherit;
    font-weight: ${fonts.weight.normal};
    color: ${colors.text.primary};
    ${fonts.sizes(18, 1.3)};
    background: none;
    border: 0;
    display: flex;
    flex-grow: 1;
    &:focus {
      appearance: none;
      outline: none;
    }
  }

  textarea {
    padding: 0 ${spacing.small};
    height: 20px;
    margin: 14px 0;
    resize: none;
  }

  .c-icon {
    width: 24px;
    height: 24px;
  }
`;

const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  flex: 1;
`;

const BaseInput = ({
  before,
  after,
  white,
  error,
  label,
  children,
  customCss,
  labelHidden = false,
  name,
  className,
}: BaseInputProps) => {
  return (
    <Wrapper css={customCss}>
      <StyledLabel labelHidden={labelHidden} htmlFor={name}>
        {label}
      </StyledLabel>
      <FieldWrapper>
        <InputWrapper white={white} className={className}>
          {before}
          {children}
          {after}
        </InputWrapper>
        {error && (
          <ErrorText id={`${name}-error`} aria-live="assertive">
            {error}
          </ErrorText>
        )}
      </FieldWrapper>
    </Wrapper>
  );
};

export interface InputProps
  extends Omit<BaseInputProps, 'children'>,
    Omit<HTMLProps<HTMLInputElement>, 'label' | 'name'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      before,
      after,
      white,
      error,
      customCss,
      label,
      labelHidden,
      name,
      className,
      'aria-describedby': describedBy = '',
      ...rest
    }: InputProps,
    ref,
  ) => {
    return (
      <BaseInput
        before={before}
        after={after}
        white={white}
        error={error}
        customCss={customCss}
        labelHidden={labelHidden}
        name={name}
        className={className}
        label={label}
      >
        <input
          ref={ref}
          name={name}
          aria-invalid={!!error}
          aria-describedby={`${name}-error ${describedBy}`}
          {...rest}
        />
      </BaseInput>
    );
  },
);

export interface TextAreProps
  extends Omit<BaseInputProps, 'children'>,
    Omit<HTMLProps<HTMLTextAreaElement>, 'label' | 'name'> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreProps>(
  ({ before, after, white, error, label, customCss, labelHidden, name, className, ...rest }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    useEffect(() => {
      if (forwardedRef.current) {
        forwardedRef.current.style.height = '0px';
        forwardedRef.current.style.height = `${forwardedRef.current.scrollHeight}px`;
      }
    });

    return (
      <BaseInput
        before={before}
        after={after}
        white={white}
        error={error}
        customCss={customCss}
        label={label}
        name={name}
        className={className}
        labelHidden={labelHidden}
      >
        <textarea name={name} ref={forwardedRef} {...rest} aria-describedby={`${name}-error`} />
      </BaseInput>
    );
  },
);
