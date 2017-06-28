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
import SafeLink from '../common/SafeLink';
import { ResourceShape } from '../shapes';
import Button from '../button/Button';
import { Icon } from '../';

const classes = new BEMHelper({
  name: 'topic-resource',
  prefix: 'c-',
});

const Resource = ({ resource, resourceToLinkProps }) => {
  const linkProps = resourceToLinkProps(resource);
  // const secondary = resource.primary ? 'secondary' : null;
  // Comment out when PRIMARY (kjernestoff) prop is not available
  const secondary = !resource.primary ? 'secondary' : null;

  return (
    <li {...classes('item', { secondary }, 'o-flag o-flag--top')}>
      <div {...classes('icon o-flag__img')}>
        { resource.type === 'Lærestoff' ? <Icon.Document /> : null }
        { resource.type === 'Læringsstier' ? <Icon.Path /> : null }
        { resource.type === 'Oppgaver og aktiviteter' ? <Icon.Pencil /> : null }
      </div>
      <div {...classes('body o-flag__body')}>
        <h1 {...classes('title')}>
          {linkProps.href ?
            <a {...linkProps}>{resource.name}{ secondary ? <Icon.Additional className="c-icon--20 u-margin-left-tiny" /> : null }</a> :
            <SafeLink {...resourceToLinkProps(resource)}>{resource.icon} {resource.name}{ secondary ? <Icon.Additional /> : null }</SafeLink> }
        </h1>
      </div>
    </li>
  );
};

Resource.propTypes = {
  resource: ResourceShape.isRequired,
  type: PropTypes.string,
  primary: PropTypes.bool,
  resourceToLinkProps: PropTypes.func.isRequired,
};


class ResourceList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAll: false, secondary: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    const { resources, type, ...rest } = this.props;
    const limit = 8;
    const { showAll } = this.state;
    // Comment out when PRIMARY (kjernestoff) prop is not available
    const secondaryFilter = this.props.secondary;

    // Works in general, but should be separating resource groups (by index) so
    // toggle functionality is also separated
    return (
      <div>
        <ul {...classes('list')} >
          { showAll ?
            resources
            // Comment out when PRIMARY (kjernestoff) prop is not available
            .filter(resource => (secondaryFilter ? resource : resource.primary))
            .map(resource =>
              <Resource
                key={resource.id}
                type={type} {...rest}
                resource={resource}
              />)
            :
            resources
              // Comment out when PRIMARY (kjernestoff) prop is not available
              .filter(resource => (secondaryFilter ? resource : resource.primary))
              .filter((resource, index) => (index < limit))
              .map(resource =>
                <Resource
                  key={resource.id}
                  type={type} {...rest}
                  resource={resource}
                />)
          }
        </ul>
        { resources.length > (limit) ?
          <div {...classes('button-wrapper')}>
            <Button
              {...classes('button', '', 'c-btn c-button--outline')}
              onClick={this.handleClick}
            >
              { showAll ? 'Vis mindre' : 'Vis mer' }
            </Button>
          </div>
          :
          null
        }
      </div>
    );
  }
}

ResourceList.propTypes = {
  resources: PropTypes.arrayOf(ResourceShape).isRequired,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  onChange: PropTypes.func,
  resourceToLinkProps: PropTypes.func.isRequired,
};

export default ResourceList;
