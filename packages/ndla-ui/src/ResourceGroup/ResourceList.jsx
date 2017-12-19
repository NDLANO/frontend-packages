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
  isHidden,
  showAdditionalResources,
}) => {
  const linkProps = resourceToLinkProps(resource);
  const hidden = resource.additional ? !showAdditionalResources : isHidden;

  return (
    <li
      {...classes('item', {
        'o-flag  o-flag--top': true,
        hidden,
        additional: resource.additional,
      })}>
      <div {...classes('icon o-flag__img')}>{icon}</div>
      <div {...classes('body o-flag__body')}>
        <h1 {...classes('title')}>
          {linkProps.href ? (
            <a {...linkProps}>{resource.name}</a>
          ) : (
            <Link {...resourceToLinkProps(resource)}>{resource.name}</Link>
          )}
          {resource.additional ? (
            <Additional className="c-icon--20 u-margin-left-tiny" />
          ) : null}
        </h1>
      </div>
    </li>
  );
};

Resource.propTypes = {
  showAdditionalResources: PropTypes.bool,
  isHidden: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  resource: ResourceShape.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
};

class ResourceList extends Component {
  constructor(props) {
    super(props);
    this.state = { showAll: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    // NB! Always have hidden resources in the DOM so that they can be indexed by search enignes.
    const {
      additionalResources,
      normalResources,
      onClick,
      messages,
      type,
      empty,
      showAdditionalResources,
      ...rest
    } = this.props;
    const limit = 8;
    const { showAll } = this.state;

    return (
      <div>
        <ul {...classes('list')}>
          {additionalResources.map(resource => (
            <Resource
              key={resource.id}
              type={type}
              showAdditionalResources={showAdditionalResources}
              {...rest}
              resource={resource}
              isHidden={false}
            />
          ))}
          {normalResources.length === 0 ? (
            <div {...classes('additional-resources-trigger')}>
              {additionalResources.length ? (
                <span>
                  {
                    showAdditionalResources ?
                      null
                      :
                      <div>
                        <p>
                          {messages.noCoreResourcesAvailable}{' '}
                          {messages.activateSuggestion}{' '}
                        </p>
                        <Button outline onClick={onClick}>
                          {messages.activateAdditionalResources}
                        </Button>
                      </div>
                  }
                </span>
              ) : null}
            </div>
          ) : (
            normalResources.map((resource, index) => (
              <Resource
                key={resource.id}
                type={type}
                showAdditionalResources={showAdditionalResources}
                {...rest}
                resource={resource}
                isHidden={!(showAll || index < limit)}
              />
            ))
          )}
        </ul>
        {normalResources.length > limit && !empty ? (
          <div {...classes('button-wrapper')}>
            <Button
              {...classes('button', '', 'c-btn c-button--outline')}
              onClick={this.handleClick}>
              {showAll ? messages.showLess : messages.showMore}
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

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
    activateSuggestion: PropTypes.string.isRequired,
    activateAdditionalResources: PropTypes.string.isRequired,
    toggleFilterLabel: PropTypes.string.isRequired,
    showMore: PropTypes.string.isRequired,
    showLess: PropTypes.string.isRequired,
  }),
};

export default ResourceList;
