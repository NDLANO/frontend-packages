/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { IconButtonV2 } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { ComponentPropsWithRef, forwardRef, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@ndla/core';
import { InputContainer, FieldErrorMessage, InputV3, FieldHelper, FormControl, Label } from '@ndla/forms';
import { Done } from '@ndla/icons/editor';
import { Spinner } from '@ndla/icons';
import { composeRefs } from '@ndla/util';

interface Props {
  loading?: boolean;
  onClose?: () => void;
  onSave: () => void;
  error?: string;
  label: string;
}

const StyledSpinner = styled(Spinner)`
  margin: ${spacing.small};
`;

// Source: https://kovart.github.io/dashed-border-generator/
const borderStyle = (error?: boolean) =>
  `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${encodeURIComponent(
    error ? colors.support.red : colors.brand.tertiary,
  )}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`;

interface StyledInputProps {
  error?: string;
}

const StyledInputContainer = styled(InputContainer)<StyledInputProps>`
  display: flex;
  flex-wrap: nowrap;
  background-image: ${borderStyle()};
  border: none;

  border-left: ${spacing.xsmall} solid ${colors.brand.light};
  border-right: ${spacing.xsmall} solid ${colors.brand.light};
  border-radius: 0px;

  /* Not good practice, but necessary to give error message same padding as caused by border. */
  & + [data-error-message] {
    padding: 0 ${spacing.xsmall};
  }
  &:focus-within {
    border-color: ${colors.brand.light};
  }

  &[data-error='true'] {
    background-image: ${borderStyle(true)};
  }
  input {
    line-height: 1.75rem;
    color: ${colors.brand.primary};
    caret-color: ${colors.brand.tertiary};
    ::selection {
      background: ${colors.brand.lighter};
    }
    ::placeholder {
      color: ${colors.brand.tertiary};
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  padding-right: ${spacing.xsmall};
`;

const FolderInput = forwardRef<HTMLInputElement, Props & ComponentPropsWithRef<'input'>>(
  ({ loading, label, error, onClose, onSave, ...rest }, ref) => {
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (isMobile) {
        inputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

    return (
      <FormControl id="folder-name" isRequired isInvalid={!!error}>
        <Label visuallyHidden>{label}</Label>
        <StyledInputContainer data-error={!!error}>
          <InputV3 autoComplete="off" disabled={loading} ref={composeRefs(ref, inputRef)} {...rest} />
          <Row>
            {!loading ? (
              <>
                {!error && (
                  <IconButtonV2
                    variant={'ghost'}
                    colorTheme="light"
                    tabIndex={0}
                    aria-label={t('save')}
                    title={t('save')}
                    size="small"
                    onClick={onSave}
                  >
                    <Done />
                  </IconButtonV2>
                )}
                <IconButtonV2 aria-label={t('close')} title={t('close')} size="small" variant="ghost" onClick={onClose}>
                  <Cross />
                </IconButtonV2>
              </>
            ) : (
              <FieldHelper>
                <StyledSpinner size="normal" aria-label={t('loading')} />
              </FieldHelper>
            )}
          </Row>
        </StyledInputContainer>
        <FieldErrorMessage data-error-message="">{error}</FieldErrorMessage>
      </FormControl>
    );
  },
);

export default FolderInput;
