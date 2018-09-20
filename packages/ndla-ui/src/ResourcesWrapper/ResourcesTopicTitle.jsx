import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HelpCircleDual } from 'ndla-icons/common';
import { injectT } from 'ndla-i18n';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Tooltip,
} from 'ndla-ui';

import { classes } from './ResourcesWrapper';

import ResourceToggleFilter from '../ResourceGroup/ResourceToggleFilter';

const HelpIcon = () => (
  <div {...classes('topic-title-icon')}>
    <HelpCircleDual
      className={`c-icon--22 u-margin-left-tiny ${classes('icon').className}`}
    />
  </div>
);

const ResourcesTopicTitle = ({
  title,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  messages,
  t,
}) => {
  // Fix for heading while title not required when ready.
  let heading;
  if (title) {
    heading = <h1 {...classes('topic-title')}>{title}</h1>;
  } else {
    heading = <h1 {...classes('topic-title')}>{messages.label}</h1>;
  }
  return (
    <header {...classes('topic-title-wrapper')}>
      <div>
        {title && <p {...classes('topic-title-label')}>{messages.label}</p>}
        {heading}
      </div>
      {hasAdditionalResources && (
        <div>
          <ResourceToggleFilter
            checked={showAdditionalResources}
            label={messages.additionalFilterLabel}
            onClick={toggleAdditionalResources}
          />
          <Modal
            narrow
            wrapperFunctionForButton={activateButton => (
              <Tooltip tooltip={t('resource.dialogTooltip')}>
                {activateButton}
              </Tooltip>
            )}
            activateButton={
              <button className="c-button c-button--stripped" type="button">
                <HelpIcon />
              </button>
            }>
            {onClose => (
              <Fragment>
                <ModalHeader>
                  <ModalCloseButton
                    title={t('modal.closeModal')}
                    onClick={onClose}
                  />
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
  t: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    label: PropTypes.string.isRequired,
    additionalFilterLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectT(ResourcesTopicTitle);
