import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing, spacingUnit } from '@ndla/core';
import { HTMLProps, ReactElement, useEffect, useRef, ReactNode } from 'react';

interface BaseInputProps {
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  tags?: ReactNode;
  white?: boolean;
  autoSelect?: boolean;
  warningText?: string;
  customCss?: SerializedStyles;
  label?: string;
  children: ReactElement;
}

const StyledWrapper = styled.div`
  margin-top: ${spacing.xsmall};
  display: flex;
  &:first-of-type {
    margin-top: 0;
  }
`;

interface FormWarningTextProps {
  withLabel?: boolean;
}

const FormWarningText = styled.span<FormWarningTextProps>`
  font-family: ${fonts.sans};
  color: ${colors.support.red};
  ${fonts.sizes(14, 1.1)};
  padding-left: ${(p) => p.withLabel && `${spacingUnit & 4}px`};
`;

const StyledLabel = styled.label`
  && {
    width: ${spacingUnit * 4}px;
    max-width: ${spacingUnit * 4}px;
    padding: 20px ${spacing.small} ${spacing.small} 0;
    text-transform: uppercase;
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes(14, 1.1)};
  }
`;

interface StyledInputWrapperProps {
  white?: boolean;
}

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  background: ${(p) => (p.white ? colors.white : colors.brand.greyLightest)};
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.brand.greyLighter};
  transition: border-color 100ms ease;
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};
  padding-right: ${spacing.small};

  &:focus-within {
    border-color: ${colors.brand.primary};
  }

  input,
  textarea {
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

  input {
    padding: ${spacing.xsmall} ${spacing.small};
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

const BaseInput = ({ iconRight, iconLeft, tags, white, warningText, label, children, customCss }: BaseInputProps) => {
  return (
    <div>
      <StyledWrapper>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInputWrapper white={white} css={customCss}>
          {tags && tags}
          {iconLeft && !tags && iconLeft}
          {children}
          {iconRight && iconRight}
        </StyledInputWrapper>
      </StyledWrapper>
      {warningText && <FormWarningText withLabel={!!label}>{warningText}</FormWarningText>}
    </div>
  );
};

export interface InputProps extends Omit<BaseInputProps, 'children'>, HTMLProps<HTMLInputElement> {}

export const Input = ({
  iconRight,
  iconLeft,
  tags,
  white,
  warningText,
  label,
  customCss,
  value = '',
  autoSelect,
  ...rest
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoSelect && ref.current) {
      ref.current.select();
    }
  }, [autoSelect]);
  return (
    <BaseInput
      iconRight={iconRight}
      iconLeft={iconLeft}
      tags={tags}
      white={white}
      warningText={warningText}
      customCss={customCss}
      label={label}
    >
      <input ref={ref} value={value} {...rest} />
    </BaseInput>
  );
};

export interface TextAreaProps extends Omit<BaseInputProps, 'children'>, HTMLProps<HTMLTextAreaElement> {}

export const TextArea = ({
  iconRight,
  iconLeft,
  tags,
  white,
  warningText,
  label,
  customCss,
  value = '',
  onChange,
  ...rest
}: TextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    fixHeight();
  });

  const fixHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = '0px';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return (
    <BaseInput
      iconRight={iconRight}
      iconLeft={iconLeft}
      tags={tags}
      white={white}
      warningText={warningText}
      customCss={customCss}
      label={label}
    >
      <textarea
        ref={inputRef}
        onChange={(e) => {
          fixHeight();
          onChange?.(e);
        }}
        value={value}
        {...rest}
      />
    </BaseInput>
  );
};
