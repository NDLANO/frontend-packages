/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { IconButton, IconButtonV2 } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import React, { ComponentProps, forwardRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '@ndla/core';
import { InputV2 } from '@ndla/forms';
import { css } from '@emotion/core';
import { Done } from '@ndla/icons/editor';
import { Spinner } from '@ndla/icons';
import { useForwardedRef } from '@ndla/util';

interface Props extends ComponentProps<typeof InputV2> {
  loading?: boolean;
  onClose?: () => void;
  onSave: () => void;
}

// Source: https://kovart.github.io/dashed-border-generator/
const borderStyle = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${encodeURIComponent(
  colors.brand.tertiary,
)}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`;

const inputWrapperStyle = css`
  padding: ${spacing.xxsmall};
  background: white;
  background-image: ${borderStyle};
  border: none;
`;

const StyledInput = styled(InputV2)`
  border: none;
  border-radius: 0;
  flex-wrap: nowrap;
  input {
    min-width: 100px;
    line-height: 1.75em;
    color: ${colors.brand.primary};
    ::selection {
      background: ${colors.brand.lighter};
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
      customCss={inputWrapperStyle}
      white
      error={error}
      aria-disabled={loading ? true : undefined}
      aria-describedby={'folder-input-spinner'}
      ref={ref}
      after={
        <Row>
          {!loading && (
            <>
              <IconButtonV2
                variant={'ghost'}
                colorTheme="light"
                tabIndex={0}
                disabled={!!error}
                aria-label={t('save')}
                title={t('save')}
                size="small"
                onClick={onSave}>
                <Done />
              </IconButtonV2>
              <IconButton aria-label={t('close')} title={t('close')} size="small" ghostPill onClick={onClose}>
                <Cross />
              </IconButton>
            </>
          )}
          <div aria-live="assertive">
            {loading && <Spinner size="normal" margin={spacing.small} id="folder-spinner" aria-label={t('loading')} />}
          </div>
        </Row>
      }
      {...rest}
    />
  );
});

export default FolderInput;
