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
import { injectT } from 'ndla-i18n';
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
  id,
  contentTypeDescription,
}) => {
  const hidden = resource.additional ? !showAdditionalResources : false;

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
            <Tooltip tooltip={contentTypeDescription} align="left">
              <Additional className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons" />
            </Tooltip>
          )}
          {!resource.additional &&
            showAdditionalResources && (
              <Tooltip tooltip={contentTypeDescription} align="left">
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
  contentTypeDescription: PropTypes.string.isRequired,
};

injectT(Resource);

const ResourceList = ({
  resources,
  onClick,
  type,
  title,
  showAdditionalResources,
  t,
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
            contentTypeDescription={
              resource.additional
                ? t('resource.tooltipAdditionalTopic')
                : t('resource.tooltipCoreTopic')
            }
            id={`${resource.id}_${index}`}
          />
        ))}
        {renderAdditionalResourceTrigger && (
          <li>
            <NoContentBox
              onClick={onClick}
              buttonText={t('resource.toggleFilterLabel')}
              text={t('resource.noCoreResourcesAvailable', {
                name: title.toLowerCase(),
              })}
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
  title: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default injectT(ResourceList);
