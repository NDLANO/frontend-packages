/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ResourceShape } from '../shapes';
import ResourceList from '../ResourceList';
import ResourceToggleFilter from './ResourceToggleFilter';

const classes = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

class ResourceGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdditionalResources: false,
    };
  }

  render() {
    const {
      title,
      icon,
      resources,
      className,
      resourceToLinkProps,
    } = this.props;
    const { showAdditionalResources } = this.state;
    return (
      <div {...classes('', '', className)}>
        <ResourceToggleFilter
          checked={showAdditionalResources}
          label="Tilleggstoff"
          onClick={() =>
            this.setState({
              showAdditionalResources: !showAdditionalResources,
            })}
        />
        <h1 className="c-resources__title">{title}</h1>
        <ResourceList
          showAdditionalResources={showAdditionalResources}
          icon={icon}
          resourceToLinkProps={resourceToLinkProps}
          resources={resources}
        />
      </div>
    );
  }
}

ResourceGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
};

export default ResourceGroup;
