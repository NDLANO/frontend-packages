/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { NoContentBox, Tooltip, SafeLink } from 'ndla-ui';
import { Additional, Core } from 'ndla-icons/common';
import { ResourceShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-resource',
  prefix: 'c-',
});

const Resource = ({
  resource,
  icon,
  resourceToLinkProps,
  showAdditionalResources,
  messages,
  id,
}) => {
  const hidden = resource.additional ? !showAdditionalResources : false;
  const contentTypeDescription = resource.additional
    ? messages.additionalTooltip
    : messages.coreTooltip;

  return (
    <li
      {...classes('item', {
        hidden,
        additional: resource.additional,
      })}>
      <div {...classes('body o-flag__body')}>
        <SafeLink
          {...resourceToLinkProps(resource)}
          {...classes('link o-flag o-flag--top')}
          aria-describedby={id}>
          <div {...classes('icon o-flag__img')}>{icon}</div>
          <h1 {...classes('title')}>
            <span>{resource.name}</span>
          </h1>
        </SafeLink>
        <span id={id} hidden>
          {contentTypeDescription}
        </span>
        <div>
          {resource.additional && (
            <Tooltip
              id="resource-additional-tooltip"
              tooltip={contentTypeDescription}
              align="right">
              <Additional className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons" />
            </Tooltip>
          )}
          {!resource.additional &&
            showAdditionalResources && (
              <Tooltip
                id="resource-core-tooltip"
                tooltip={contentTypeDescription}
                align="right">
                <Core className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons" />
              </Tooltip>
            )}
        </div>
      </div>
    </li>
  );
};

Resource.propTypes = {
  showAdditionalResources: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  resource: ResourceShape.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    additionalTooltip: PropTypes.string,
    coreTooltip: PropTypes.string,
  }).isRequired,
};

const ResourceList = ({
  resources,
  onClick,
  messages,
  type,
  showAdditionalResources,
  ...rest
}) => {
  const renderAdditionalResourceTrigger =
    !showAdditionalResources &&
    resources.filter(res => res.additional).length > 0 &&
    resources.filter(res => !res.additional).length === 0;

  return (
    <div>
      <ul {...classes('list')}>
        {resources.map((resource, index) => (
          <Resource
            key={resource.id}
            type={type}
            showAdditionalResources={showAdditionalResources}
            {...rest}
            resource={resource}
            messages={messages}
            id={`${resource.id}_${index}`}
          />
        ))}
        {renderAdditionalResourceTrigger && (
          <li>
            <NoContentBox
              onClick={onClick}
              buttonText={messages.noContentBoxButtonText}
              text={messages.noContentBoxLabel}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  type: PropTypes.string,
  showAdditionalResources: PropTypes.bool,
  onChange: PropTypes.func,
  resourceToLinkProps: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    noContentBoxLabel: PropTypes.string.isRequired,
    noContentBoxButtonText: PropTypes.string.isRequired,
    toggleFilterLabel: PropTypes.string.isRequired,
    coreTooltip: PropTypes.string.isRequired,
    additionalTooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResourceList;
