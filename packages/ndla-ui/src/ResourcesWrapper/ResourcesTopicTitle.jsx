import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HelpCircle } from 'ndla-icons/common';

import { classes } from './ResourcesWrapper';
import SafeLink from '../common/SafeLink';

import ResourceToggleFilter from '../ResourceGroup/ResourceToggleFilter';

import Dialog from '../Dialog';
import Tooltip from '../Tooltip';

import { ContextConsumer } from '../common/TextContexts';

const ResourcesTopicTitle = ({
  typeOfContent,
  title,
  url,
  explainationIconLabelledBy,
  hasAdditionalResources,
  toggleAdditionalResources,
  showAdditionalResources,
  showAdditionalDialog,
  toggleAdditionalDialog,
}) => (
  <ContextConsumer>
    {texts => {
      console.log('typeOfContent', typeOfContent);
      console.log('ContextApi', texts[typeOfContent]);
      return (
        <header {...classes('topic-title-wrapper')}>
          <div>
            <p {...classes('topic-title-label')}>
              {texts[typeOfContent].heading}
            </p>
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
                label={texts[typeOfContent].additionalFilterLabel}
                onClick={toggleAdditionalResources}
              />
              <Tooltip
                tooltip={texts[typeOfContent].dialogTooltip}
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
                labelledby={explainationIconLabelledBy}
                hidden={!showAdditionalDialog}
                onClose={toggleAdditionalDialog}
                disablePortal
                modifier={showAdditionalDialog ? 'active' : ''}>
                <Fragment>
                  <h1 id={explainationIconLabelledBy}>
                    {texts[typeOfContent].dialogHeading}
                  </h1>
                  <hr />
                  {texts[typeOfContent].dialogTexts.map(text => <p>{text}</p>)}
                </Fragment>
              </Dialog>
            </div>
          )}
        </header>
      );
    }}
  </ContextConsumer>
);

/* eslint-disable no-console */
ResourcesTopicTitle.propTypes = {
  typeOfContent: PropTypes.oneOf(['topic', 'learningResources']).isRequired,
  title: PropTypes.string.isRequired,
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
  url: PropTypes.string,
  showAdditionalResources: PropTypes.bool.isRequired,
};

ResourcesTopicTitle.defaultProps = {
  showAdditionalDialog: false,
};

export default ResourcesTopicTitle;
