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
import React, { ComponentProps, forwardRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@ndla/core';
import { InputV2 } from '@ndla/forms';
import { Done } from '@ndla/icons/editor';
import { Spinner } from '@ndla/icons';
import { useForwardedRef } from '@ndla/util';

interface Props extends ComponentProps<typeof InputV2> {
  loading?: boolean;
  onClose?: () => void;
  onSave: () => void;
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

const StyledInput = styled(InputV2)<StyledInputProps>`
  background-color: white;
  background-image: ${({ error }) => borderStyle(!!error)};
  border: none;
  border-radius: 0;
  flex-wrap: nowrap;
  input {
    line-height: 1.75em;
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

const FolderInput = forwardRef<HTMLInputElement, Props>(({ loading, error, onClose, onSave, ...rest }, ref) => {
  const { t } = useTranslation();
  const inputRef = useForwardedRef(ref);

  useEffect(() => {
    if (isMobile) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledInput
      autoComplete="off"
      white
      error={error}
      aria-disabled={loading ? true : undefined}
      aria-describedby={'folder-input-spinner'}
      ref={ref}
      after={
        <Row>
          {!loading && (
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
          )}
          <div aria-live="assertive">
            {loading && <StyledSpinner size="normal" id="folder-spinner" aria-label={t('loading')} />}
          </div>
        </Row>
      }
      {...rest}
    />
  );
});

export default FolderInput;
