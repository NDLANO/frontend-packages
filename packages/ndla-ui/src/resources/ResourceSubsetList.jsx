/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { uuid } from 'ndla-util';
import ResourceList from './ResourceList';
import { FilterList } from '../';

import { ResourceShape } from '../shapes';

const classes = new BEMHelper({
  name: 'resources',
  prefix: 'c-',
});
const classesG = new BEMHelper({
  name: 'resource-group',
  prefix: 'c-',
});

class ResourceSubsetList extends Component {
  constructor(props) {
    super(props);
    this.state = { secondary: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { resourceGroups, resourceToLinkProps } = this.props;

    return (
      <div {...classes('')} >
        {resourceGroups.map(group => (
          <div key={uuid()} {...classesG('', [group.id.replace(/:/g, '-') : ''])}>
            <FilterList
              modifiers="float-right"
              label=""
              onClick={() => { this.setState({ secondary: !this.state.secondary }); }}
              filterContent={[
              { title: 'Tilleggstoff', icon: true, active: false },
              ]}
            />
            <h1 {...classes('title')}>{group.title}</h1>
            <ResourceList secondary={this.state.secondary} resourceToLinkProps={resourceToLinkProps} type={group.title} resources={group.resources} />
          </div>
    ))}
      </div>
    );
  }
}


ResourceSubsetList.propTypes = {
  resourceToLinkProps: PropTypes.func.isRequired,
  toResourceTab: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    viewAllLinkTitle: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(ResourceShape).isRequired,
  })),
};

export default ResourceSubsetList;
