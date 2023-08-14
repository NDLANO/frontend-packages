/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FormEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalBody, ModalCloseButton, ModalHeader, ModalTitle } from '@ndla/modal';
import { spacing, spacingUnit } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { Input } from '@ndla/forms';
import { useTranslation } from 'react-i18next';

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

const ThemeEditorModal = ({ theme, onClose, onSave, onEditName, messages: { save, cancel, title } }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>
        <StyledInputWrapper>
          <div>
            <Input
              iconLeft={<LanguageIndicator style={{ padding: '13px' }}>{t('languages.nb')}:</LanguageIndicator>}
              warningText={theme.warnings.nb ? 'Mangler navn' : undefined}
              type="text"
              // eslint-disable-next-line jsx-a11y/no-autofocus
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
        <ButtonV2
          onClick={() => {
            onSave();
            onClose();
          }}
        >
          {save}
        </ButtonV2>
        <ButtonV2
          variant="outline"
          onClick={onClose}
          css={css`
            margin-left: ${spacing.small};
          `}
        >
          {cancel}
        </ButtonV2>
      </ModalBody>
    </>
  );
};

export default ThemeEditorModal;
