/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Spinner } from '@ndla/icons';
import React from 'react';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonProps } from './ButtonV2';

interface Props extends ButtonProps {
  loading?: boolean;
}

const LoadingButton = forwardRef<HTMLButtonElement, Props>(({ loading, children, ...rest }, ref) => {
  const { t } = useTranslation();

  return (
    <Button disabled={loading} aria-live="assertive" {...rest} ref={ref}>
      {loading && <Spinner size="normal" margin="0" aria-label={t('loading')} />}
      {children}
    </Button>
  );
});

export default LoadingButton;
