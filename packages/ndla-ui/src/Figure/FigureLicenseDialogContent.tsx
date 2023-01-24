/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { ModalBody, ModalHeaderV2 } from '@ndla/modal';
import { ReactNode } from 'react';
import { Contributor } from '../types';
import { FigureLicense } from './Figure';
import { classLicenses, FigureLicenseByline, FigureLicenseCta } from './FigureLicense';

interface Props {
  id: string;
  children?: ReactNode;
  origin?: string;
  authors?: Contributor[];
  onClose: () => void;
  messages: {
    modelPremission?: string;
    rulesForUse: string;
    source: string;
    learnAboutLicenses: string;
    title: string;
  };
  title?: string;
  license: FigureLicense;
  locale: string;
}

const StyledModalBody = styled(ModalBody)`
  background-color: ${colors.brand.light};
`;

export const FigureLicenseDialogContent = ({
  children,
  messages,
  id,
  authors,
  origin,
  title,
  locale,
  license,
  onClose,
}: Props) => {
  const headingLabelId = `heading-${id}`;
  return (
    <StyledModalBody>
      <div {...classLicenses()}>
        <ModalHeaderV2>
          <h1 id={headingLabelId} {...classLicenses('title')}>
            {messages.rulesForUse}
          </h1>
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
