/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Link from 'react-router-dom/Link';
import { Button } from 'ndla-ui';
import { Additional } from 'ndla-icons/common';
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
}) => {
  const linkProps = resourceToLinkProps(resource);
  const hidden = resource.additional ? !showAdditionalResources : false;

  const linkContent = (
    <Fragment>
      <div {...classes('icon o-flag__img')}>{icon}</div>
      <h1 {...classes('title')}>{resource.name}</h1>
      {resource.additional ? (
        <Additional className="c-icon--20 u-margin-left-tiny" />
      ) : null}
    </Fragment>
  );

  const link = linkProps.href ? (
    <a {...linkProps} {...classes('link o-flag o-flag--top')}>
      {linkContent}
    </a>
  ) : (
    <Link
      {...resourceToLinkProps(resource)}
      {...classes('link o-flag o-flag--top')}>
      {linkContent}
    </Link>
  );

  return (
    <li
      {...classes('item', {
        hidden,
        additional: resource.additional,
      })}>
        <div {...classes('body o-flag__body')}>
          {link}
        </div>
    </li>
  );
};

Resource.propTypes = {
  showAdditionalResources: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  resource: ResourceShape.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
};

const ResourceList = ({
  additionalResources,
  normalResources,
  onClick,
  messages,
  type,
  empty,
  showAdditionalResources,
  ...rest
}) => (
  <div>
    <ul {...classes('list')}>
      {additionalResources.map(resource => (
        <Resource
          key={resource.id}
          type={type}
          showAdditionalResources={showAdditionalResources}
          {...rest}
          resource={resource}
        />
      ))}
      {normalResources.length === 0 && !showAdditionalResources ? (
        <div {...classes('additional-resources-trigger')}>
          <span>
            <div>
              <p>{messages.noCoreResourcesAvailable}</p>
              <Button outline onClick={onClick}>
                {messages.activateAdditionalResources}
              </Button>
            </div>
          </span>
        </div>
      ) : (
        normalResources.map(resource => (
          <Resource
            key={resource.id}
            type={type}
            showAdditionalResources={showAdditionalResources}
            {...rest}
            resource={resource}
          />
        ))
      )}
    </ul>
  </div>
);

ResourceList.propTypes = {
  additionalResources: PropTypes.arrayOf(ResourceShape).isRequired,
  normalResources: PropTypes.arrayOf(ResourceShape).isRequired,
  type: PropTypes.string,
  showAdditionalResources: PropTypes.bool,
  onChange: PropTypes.func,
  resourceToLinkProps: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  empty: PropTypes.bool,
  messages: PropTypes.shape({
    noCoreResourcesAvailable: PropTypes.string.isRequired,
    activateAdditionalResources: PropTypes.string.isRequired,
    toggleFilterLabel: PropTypes.string.isRequired,
  }),
};

export default ResourceList;
