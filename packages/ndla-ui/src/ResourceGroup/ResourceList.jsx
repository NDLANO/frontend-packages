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
import { injectT } from '@ndla/i18n';
import Tooltip from '@ndla/tooltip';
import { Additional, Core } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import NoContentBox from '../NoContentBox';
import ContentTypeBadge from '../ContentTypeBadge';
import { ResourceShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-resource',
  prefix: 'c-',
});

const ResourceLink = ({ t, icon, children, active, component: Component, ...rest }) => (
  <Component
    {...classes('link o-flag o-flag--top', '', {
      active,
    })}
    {...rest}>
    <div {...classes('icon o-flag__img')}>{icon}</div>
    <h2 {...classes('title')}>
      <span>
        {children}
        {active && <small>{t('resource.youAreHere')}</small>}
      </span>
    </h2>
  </Component>
);

ResourceLink.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  active: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
};

ResourceLink.defaultProps = {
  component: SafeLink,
};

const Resource = ({ t, resource, icon, resourceToLinkProps, showAdditionalResources, id, contentTypeDescription }) => {
  const hidden = resource.additional ? !showAdditionalResources : false;
  if (icon === undefined) {
    icon = <ContentTypeBadge type={resource.contentType} background border={false} />;
  }

  return (
    <li
      {...classes(
        'item',
        {
          hidden,
          additional: resource.additional,
          active: resource.active,
          spacer: resource.extraBottomMargin,
        },
        resource.contentType,
      )}>
      <div {...classes('body o-flag__body')}>
        <ResourceLink
          component={resource.active ? 'div' : SafeLink}
          icon={icon}
          t={t}
          aria-describedby={id}
          active={resource.active}
          {...resourceToLinkProps(resource)}>
          {resource.name}
        </ResourceLink>
        <div {...classes('item__icon')}>
          <span id={id} hidden={resource.type === undefined} {...classes('item__type')}>
            {resource.type}
          </span>
          {resource.additional && (
            <Tooltip tooltip={contentTypeDescription} align="left">
              <Additional className="c-icon--20 u-margin-left-tiny c-topic-resource__list__additional-icons" />
            </Tooltip>
          )}
          {!resource.additional && showAdditionalResources && (
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
  resource: ResourceShape.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  contentTypeDescription: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

injectT(Resource);

const ResourceList = ({ resources, onClick, type, title, showAdditionalResources, t, ...rest }) => {
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
            active={resource.active}
            type={type}
            showAdditionalResources={showAdditionalResources}
            {...rest}
            resource={resource}
            t={t}
            contentTypeDescription={
              resource.additional ? t('resource.tooltipAdditionalTopic') : t('resource.tooltipCoreTopic')
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
  icon: PropTypes.node,
};

export default injectT(ResourceList);
