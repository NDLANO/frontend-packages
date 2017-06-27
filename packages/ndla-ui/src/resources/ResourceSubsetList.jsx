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
import SafeLink from '../common/SafeLink';
import { FilterList } from '../';
// import LayoutItem from './../../src';

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
    this.state = { focusTitle: '' };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { resourceGroups, toResourceTab, resourceToLinkProps } = this.props;

    return (
      <div {...classes('')} >
        {resourceGroups.map((group, i) => (
          <div id={group.title} key={uuid()} {...classesG('', [group.id.replace(/:/g, '-') : ''])}>
            <FilterList
              modifiers="float-right"
              label=""
              filterContent={[
              { title: 'Fordypningsstoff', active: false },
              ]}
            />
            <h1 {...classes('title')}>{group.title}</h1>
            { group.tags ? group.tags.map(tags => (
              <SafeLink key={uuid()} {...classes('tag')} to={toResourceTab(i)}>{tags}</SafeLink>
            )) : null }
            <ResourceList resourceToLinkProps={resourceToLinkProps} type={group.title} resources={group.resources} />
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
