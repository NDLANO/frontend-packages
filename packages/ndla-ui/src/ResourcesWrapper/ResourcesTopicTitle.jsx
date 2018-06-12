import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { classes } from './ResourcesWrapper';
import SafeLink from '../common/SafeLink';

import ResourceToggleFilter from '../ResourceGroup/ResourceToggleFilter';
import ClickToggle from '../common/ClickToggle';
import { HelpCircle } from 'ndla-icons/common';
import Dialog from '../Dialog';
import Tooltip from '../Tooltip';

const classesButton = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

const ResourcesTopicTitle = ({
  messages,
  title,
  url,
  explainationIconLabelledBy,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  showAdditionalDialog,
  toggleAdditionalDialog,
}) => (
  <header {...classes('topic-title-wrapper')}>
    <div>
      <p {...classes('topic-title-label')}>{messages.label}</p>
      <h1 {...classes('topic-title')}>
        {url ? (
          <SafeLink to={url} {...classes('topic-title-link')}>
            {title}
          </SafeLink>
        ) : (
          title
        )}
      </h1>
    </div>
    {hasAdditionalResources && (
      <div>
        <ResourceToggleFilter
          checked={showAdditionalResources}
          label={messages.toggleFilterLabel}
          onClick={toggleAdditionalResources}
        />
        <Tooltip tooltip={messages.additionalDialogTooptip} align="right">
          <button
            {...classes('topic-title-icon')}
            aria-labelledby={explainationIconLabelledBy}
            onClick={toggleAdditionalDialog}>
            <HelpCircle
              className={`c-icon--22 u-margin-left-tiny ${
                classes('icon').className
              }`}
            />
          </button>
        </Tooltip>
        <Dialog
          labelledby={explainationIconLabelledBy}
          hidden={!showAdditionalDialog}
          onClose={toggleAdditionalDialog}
          disablePortal
          messages={{ close: 'lukk' }}
          modifier={showAdditionalDialog ? 'active' : ''}>
          <div>
            <h1 id={explainationIconLabelledBy}>
              {messages.additionalDialogLabel}
            </h1>
            <hr />
            <p>{messages.additionalDialogDescription1}</p>
            {messages.additionalDialogDescription2 && (
              <p>{messages.additionalDialogDescription2}</p>
            )}
          </div>
        </Dialog>
      </div>
    )}
  </header>
);

ResourcesTopicTitle.propTypes = {
  messages: PropTypes.shape({
    label: PropTypes.string.isRequired,
    toggleFilterLabel: PropTypes.string.isRequired,
    additionalDialogLabel: (props, propName, componentName) => {
      if (typeof props[propName] !== 'string' && props.hasAdditionalResources) {
        console.warn(
          `<${componentName} /> messages.additionalDialogLabel prop must be a string if props[hasAdditionalResources] === true`,
        );
        return new Error(
          'Invalid prop `' +
            propName +
            '` supplied to' +
            ' `' +
            componentName +
            '`. Validation failed.',
        );
      }
    },
    additionalDialogDescription1: (props, propName, componentName) => {
      if (typeof props[propName] !== 'string' && props.hasAdditionalResources) {
        console.warn(
          `<${componentName} /> messages.additionalDialogDescription1 prop must be a string if props[hasAdditionalResources] === true`,
        );
        return new Error(
          'Invalid prop `' +
            propName +
            '` supplied to' +
            ' `' +
            componentName +
            '`. Validation failed.',
        );
      }
    },
    additionalDialogDescription2: PropTypes.string,
    additionalDialogTooptip: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  toggleAdditionalResources: PropTypes.func.isRequired,
  hasAdditionalResources: PropTypes.bool.isRequired,
  toggleAdditionalDialog: (props, propName, componentName) => {
    if (typeof props[propName] !== 'function' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> !toggleAdditionalDialog prop must be a function if props[hasAdditionalResources] === true`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  showAdditionalDialog: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> ?toggleAdditionalDialog prop must be a function if props[hasAdditionalResources] === true`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  explainationIconLabelledBy: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> explainationIconLabelledBy prop must be a string if props[hasAdditionalResources] === true`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  url: PropTypes.string,
};

ResourcesTopicTitle.defaultProps = {
  hasAdditionalResources: false,
  showAdditionalDialog: false,
};

export default ResourcesTopicTitle;
