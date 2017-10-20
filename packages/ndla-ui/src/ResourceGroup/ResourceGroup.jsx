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
import { ResourceShape } from '../shapes';
import ResourceList from '../ResourceList';

const classes = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

const ResourceGroup = ({
  title,
  icon,
  resources,
  className,
  resourceToLinkProps,
}) => {
  // const metaData = getResourceTypeMetaData([type]);
  console.log(icon);
  return (
    <div {...classes('', '', className)}>
      <h1 className="c-resources__title">{title}</h1>
      <ResourceList
        icon={icon}
        resourceToLinkProps={resourceToLinkProps}
        resources={resources}
      />
    </div>
  );
};

ResourceGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
};

export default ResourceGroup;
