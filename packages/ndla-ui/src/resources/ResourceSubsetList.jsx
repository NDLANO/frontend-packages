/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes, Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { uuid } from 'ndla-util';
import ResourceList from './ResourceList';
import SafeLink from '../common/SafeLink';

import { ResourceShape } from '../shapes';

const classes = new BEMHelper({
  name: 'topic-resource-subset',
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
      <div>

        <div {...classes('')} >
          {resourceGroups.map((group, i) => (
            <div id={group.title} key={uuid()} {...classes('', [group.color, this.state.focusTitle === group.title ? 'focus' : ''])}>
              <h1 {...classes('heading')}>{group.title}</h1>
              <p {...classes('lead')}>{group.description}</p>
              <ResourceList resourceToLinkProps={resourceToLinkProps} resources={group.resources} />
              <SafeLink {...classes('readmore')} to={toResourceTab(i)}>{group.viewAllLinkTitle}</SafeLink>
            </div>
      ))}
        </div>
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
