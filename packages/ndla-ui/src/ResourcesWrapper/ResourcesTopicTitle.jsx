import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { HelpCircleDual } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';
import Modal, { ModalBody, ModalHeader, ModalCloseButton } from '@ndla/modal';
import Tooltip from '@ndla/tooltip';
import { Switch } from '@ndla/switch';

import { classes } from './ResourcesWrapper';

const HelpIcon = ({ invertedStyle }) => (
  <div {...classes('topic-title-icon', { invertedStyle })}>
    <HelpCircleDual className={`c-icon--22 u-margin-left-tiny ${classes('icon').className}`} />
  </div>
);

const switchCSS = css`
  margin-right: ${spacing.xsmall};
`;

const invertedSwitchCSS = css`
  margin-right: ${spacing.xsmall};
  color: #fff;
`;

const TooltipWrapper = styled.div`
  line-height: 1;
`;
const TooltipButton = styled.button`
  border: 0;
  background: initial;
  padding: 0;
  line-height: unset;
  cursor: pointer;
`;

const ResourcesTopicTitle = ({
  title,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  messages,
  invertedStyle,
  t,
}) => {
  // Fix for heading while title not required when ready.
  let heading;
  if (title) {
    heading = <h1 {...classes('topic-title')}>{title}</h1>;
  } else {
    heading = <h1 {...classes('topic-title', 'single')}>{messages.label}</h1>;
  }
  return (
    <header {...classes('topic-title-wrapper', { invertedStyle })}>
      <div>
        {title && <p {...classes('topic-title-label')}>{messages.label}</p>}
        {heading}
      </div>
      {hasAdditionalResources && (
        <div>
          <Switch
            id="toggleAdditionID"
            checked={showAdditionalResources}
            label={messages.additionalFilterLabel}
            onChange={toggleAdditionalResources}
            css={invertedStyle ? invertedSwitchCSS : switchCSS}
          />
          <Modal
            narrow
            wrapperFunctionForButton={activateButton => (
              <TooltipWrapper>
                <Tooltip tooltip={t('resource.dialogTooltip')}>{activateButton}</Tooltip>
              </TooltipWrapper>
            )}
            activateButton={
              <TooltipButton aria-label={t('resource.dialogTooltip')}>
                <HelpIcon invertedStyle={invertedStyle} />
              </TooltipButton>
            }>
            {onClose => (
              <Fragment>
                <ModalHeader>
                  <ModalCloseButton title={t('modal.closeModal')} onClick={onClose} />
                </ModalHeader>
                <ModalBody>
                  <h1>{t('resource.dialogHeading')}</h1>
                  <hr />
                  <p>{t('resource.dialogText1')}</p>
                  <p>{t('resource.dialogText2')}</p>
                </ModalBody>
              </Fragment>
            )}
          </Modal>
        </div>
      )}
    </header>
  );
};

/* eslint-disable no-console */
ResourcesTopicTitle.propTypes = {
  title: PropTypes.string, // Should be required
  toggleAdditionalResources: PropTypes.func.isRequired,
  hasAdditionalResources: PropTypes.bool.isRequired,
  showAdditionalResources: PropTypes.bool.isRequired,
  invertedStyle: PropTypes.bool,
  t: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    label: PropTypes.string.isRequired,
    additionalFilterLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectT(ResourcesTopicTitle);
