/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { ModalBody } from '@ndla/modal';
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

const StyledH1 = styled.h1`
  color: ${colors.brand.primary};
  ${fonts.sizes('22px', '22px')};
  margin: 0;
  flex-grow: 1;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${spacing.normal};
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
        <StyledHeader>
          <StyledH1 id="license-dialog-rules-heading">{t(`license.${type}.rules`)}</StyledH1>
          <ButtonV2 variant="link" onClick={onClose}>
            {t('close')}
          </ButtonV2>
        </StyledHeader>
        <FigureLicenseByline license={license} messages={messages} locale={locale} />
        <FigureLicenseCta authors={authors} title={title} origin={origin} messages={messages}>
          {children}
        </FigureLicenseCta>
      </div>
    </StyledModalBody>
  );
};
