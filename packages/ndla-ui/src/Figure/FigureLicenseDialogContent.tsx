/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { ModalBody, ModalHeaderV2 } from '@ndla/modal';
import { ReactNode } from 'react';
import { Contributor } from '../types';
import { FigureLicense } from './Figure';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from './FigureLicense';

interface Props {
  children?: ReactNode;
  origin?: string;
  authors?: Contributor[];
  onClose: () => void;
  type: 'image' | 'text' | 'audio' | 'podcast' | 'video' | 'h5p' | 'concept' | 'files';
  title?: string;
  license: FigureLicense;
  locale: string;
}

const StyledModalBody = styled(ModalBody)`
  background-color: ${colors.brand.light};
  flex: 1;
`;

export const FigureLicenseDialogContent = ({
  children,
  authors,
  origin,
  title,
  locale,
  license,
  onClose,
  type,
}: Props) => {
  const { t } = useTranslation();
  const messages = {
    title: t('title'),
    source: t('source'),
    learnAboutLicenses: t('license.learnMore'),
  };
  return (
    <StyledModalBody>
      <div {...classLicenses()}>
        <ModalHeaderV2>
          <h1 {...classLicenses('title')}>{t(`license.${type}.rules`)}</h1>
          <ButtonV2 variant="link" onClick={onClose}>
            Lukk
          </ButtonV2>
        </ModalHeaderV2>
        <FigureLicenseByline license={license} messages={messages} locale={locale} />
        <FigureLicenseCta authors={authors} title={title} origin={origin} messages={messages}>
          {children}
        </FigureLicenseCta>
      </div>
    </StyledModalBody>
  );
};
