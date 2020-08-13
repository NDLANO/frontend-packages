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
import { ResourceShape, ContentTypeShape } from '../shapes';
import ResourceList from './ResourceList';
import ResourcesTitle from '../ResourcesWrapper/ResourcesTitle';

const classes = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

const ResourceGroup = ({
  title,
  icon,
  resources,
  toggleAdditionalResources,
  showAdditionalResources,
  resourceToLinkProps,
  contentType,
  invertedStyle,
}) => (
  <section
    {...classes('', [contentType, showAdditionalResources ? 'showall' : ''])}>
    <header {...classes('header', { invertedStyle })}>
      <ResourcesTitle>{title}</ResourcesTitle>
    </header>
    {resources.length > 0 ? (
      <ResourceList
        title={title}
        resourceToLinkProps={resourceToLinkProps}
        onClick={toggleAdditionalResources}
        showAdditionalResources={showAdditionalResources}
        icon={icon}
        resources={resources}
      />
    ) : null}
  </section>
);

ResourceGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  contentType: ContentTypeShape.isRequired,
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  toggleAdditionalResources: PropTypes.func.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  hideResourceToggleFilter: PropTypes.bool,
  empty: PropTypes.bool,
  showAdditionalResources: PropTypes.bool,
};

ResourceGroup.defaultProps = {
  hideResourceToggleFilter: false,
  showAdditionalResources: false,
};

export default ResourceGroup;
