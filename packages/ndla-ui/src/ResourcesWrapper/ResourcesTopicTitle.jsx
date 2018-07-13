import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HelpCircle } from 'ndla-icons/common';
import { uuid } from 'ndla-util';

import { classes } from './ResourcesWrapper';

import ResourceToggleFilter from '../ResourceGroup/ResourceToggleFilter';

import Dialog from '../Dialog';
import Tooltip from '../Tooltip';

const ResourcesTopicTitle = ({
  title,
  explainationIconLabelledBy,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  showAdditionalDialog,
  toggleAdditionalDialog,
  messages,
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
          {messages.dialogTooltip && (
            <Fragment>
              <Tooltip
                id="resource-title-tooltip"
                tooltip={messages.dialogTooltip}
                align="right">
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
                id="content-explaination-dialog"
                labelledby={explainationIconLabelledBy}
                hidden={!showAdditionalDialog}
                onClose={toggleAdditionalDialog}
                disablePortal
                modifier={showAdditionalDialog ? 'active' : ''}>
                <Fragment>
                  <h1 id={explainationIconLabelledBy}>
                    {messages.dialogHeading}
                  </h1>
                  {messages.dialogTexts.map(text => <p key={uuid()}>{text}</p>)}
                </Fragment>
              </Dialog>
            </Fragment>
          )}
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
  toggleAdditionalDialog: (props, propName, componentName) => {
    if (typeof props[propName] !== 'function' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> !toggleAdditionalDialog prop must be a function if props[hasAdditionalResources] === true`,
      );
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`,
      );
    }
    return null;
  },
  showAdditionalDialog: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> ?toggleAdditionalDialog prop must be a function if props[hasAdditionalResources] === true`,
      );
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`,
      );
    }
    return null;
  },
  explainationIconLabelledBy: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string' && props.hasAdditionalResources) {
      console.warn(
        `<${componentName} /> explainationIconLabelledBy prop must be a string if props[hasAdditionalResources] === true`,
      );
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`,
      );
    }
    return null;
  },
  showAdditionalResources: PropTypes.bool.isRequired,
  messages: PropTypes.shape({
    label: PropTypes.string.isRequired,
    dialogTooltip: PropTypes.string, // should be required
    dialogHeading: PropTypes.string, // should be required
    dialogTexts: PropTypes.arrayOf(PropTypes.string), // should be required
    additionalFilterLabel: PropTypes.string.isRequired,
  }).isRequired,
};

ResourcesTopicTitle.defaultProps = {
  showAdditionalDialog: false,
};

export default ResourcesTopicTitle;
