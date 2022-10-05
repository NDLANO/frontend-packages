/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FormEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { spacing, spacingUnit } from '@ndla/core';
import Button from '@ndla/button';
import { Input } from '@ndla/forms';
import { WithTranslation, withTranslation } from 'react-i18next';

const StyledInputWrapper = styled('div')`
  margin: ${spacing.normal} 0;
  > div:not(:last-child) {
    margin-bottom: ${spacing.xsmall};
  }
`;

const LanguageIndicator = styled('div')`
  width: ${spacingUnit * 4}px;
  pointer-events: none;
`;

interface Props {
  onClose: () => void;
  onEditName: (evt: { value: string; lang: string }) => void;
  onSave: () => void;
  theme: { name: Record<string, string>; warnings: Record<string, boolean> };
  messages: {
    cancel: string;
    save: string;
    title: string;
  };
}

const ThemeEditorModal = ({
  theme,
  onClose,
  onSave,
  onEditName,
  messages: { save, cancel, title },
  t,
}: Props & WithTranslation) => (
  <>
    <ModalHeader>
      <ModalCloseButton title={t('modal.closeModal')} onClick={onClose} />
    </ModalHeader>
    <ModalBody>
      <h1>{title}</h1>
      <StyledInputWrapper>
        <div>
          <Input
            iconLeft={<LanguageIndicator style={{ padding: '13px' }}>{t('languages.nb')}:</LanguageIndicator>}
            warningText={theme.warnings.nb ? 'Mangler navn' : undefined}
            type="text"
            autoFocus
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.nb'),
            })}
            value={theme.name.nb}
            onChange={(e: FormEvent<HTMLInputElement>) => onEditName({ value: e.currentTarget.value, lang: 'nb' })}
          />
        </div>
        <div>
          <Input
            iconLeft={<LanguageIndicator style={{ padding: '13px' }}>{t('languages.nn')}:</LanguageIndicator>}
            warningText={theme.warnings.nn ? 'Mangler navn' : undefined}
            type="text"
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.nn'),
            })}
            value={theme.name.nn}
            onChange={(e: FormEvent<HTMLInputElement>) => onEditName({ value: e.currentTarget.value, lang: 'nn' })}
          />
        </div>
        <div>
          <Input
            iconLeft={<LanguageIndicator style={{ padding: '13px' }}>{t('languages.en')}:</LanguageIndicator>}
            warningText={theme.warnings.en ? 'Mangler navn' : undefined}
            type="text"
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.en'),
            })}
            value={theme.name.en}
            onChange={(e: FormEvent<HTMLInputElement>) => onEditName({ value: e.currentTarget.value, lang: 'en' })}
          />
        </div>
      </StyledInputWrapper>
      <Button
        onClick={() => {
          onSave();
          onClose();
        }}>
        {save}
      </Button>
      <Button
        outline
        onClick={onClose}
        css={css`
          margin-left: ${spacing.small};
        `}>
        {cancel}
      </Button>
    </ModalBody>
  </>
);

export default withTranslation()(ThemeEditorModal);
