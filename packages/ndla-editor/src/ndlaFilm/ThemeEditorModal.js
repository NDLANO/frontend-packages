/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { spacing } from '@ndla/core';
import Button from '@ndla/button';
import { FormInput } from '@ndla/forms';
import { injectT } from '@ndla/i18n';

const StyledInputWrapper = styled('div')`
  margin: ${spacing.normal} 0;
  > div:not(:last-child) {
    margin-bottom: ${spacing.xsmall};
  }
`;

const LanguageIndicator = styled('div')`
  width: ${spacing.spaceUnit * 4}px;
  pointer-events: none;
`;

const ThemeEditorModal = ({
  theme,
  onClose,
  onSave,
  onEditName,
  messages: { save, cancel, title },
  t,
}) => (
  <>
    <ModalHeader title="Ny tema gruppe">
      <ModalCloseButton title={t('modal.closeModal')} onClick={onClose} />
    </ModalHeader>
    <ModalBody>
      <h1>{title}</h1>
      <StyledInputWrapper>
        <div>
          <FormInput
            iconLeft={
              <LanguageIndicator style={{ padding: '13px' }}>
                {t('languages.nb')}:
              </LanguageIndicator>
            }
            warningText={theme.warnings.nb && 'Mangler navn'}
            container="div"
            type="text"
            focusOnMount
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.nb'),
            })}
            value={theme.name.nb}
            onChange={e => onEditName({ value: e.target.value, lang: 'nb' })}
          />
        </div>
        <div>
          <FormInput
            iconLeft={
              <LanguageIndicator style={{ padding: '13px' }}>
                {t('languages.nn')}:
              </LanguageIndicator>
            }
            warningText={theme.warnings.nn && 'Mangler navn'}
            container="div"
            type="text"
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.nn'),
            })}
            value={theme.name.nn}
            onChange={e => onEditName({ value: e.target.value, lang: 'nn' })}
          />
        </div>
        <div>
          <FormInput
            iconLeft={
              <LanguageIndicator style={{ padding: '13px' }}>
                {t('languages.en')}:
              </LanguageIndicator>
            }
            warningText={theme.warnings.en && 'Mangler navn'}
            container="div"
            type="text"
            placeholder={t('ndlaFilm.editor.groupNamePlaceholder', {
              lang: t('languages.en'),
            })}
            value={theme.name.en}
            onChange={e => onEditName({ value: e.target.value, lang: 'en' })}
          />
        </div>
      </StyledInputWrapper>
      <Button
        onClick={() => {
          const noErrors = onSave();
          if (noErrors) {
            onClose();
          }
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

ThemeEditorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEditName: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  theme: PropTypes.shape({}).isRequired,
  messages: PropTypes.shape({
    cancel: PropTypes.string.isRequired,
    save: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectT(ThemeEditorModal);
