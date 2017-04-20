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

const mclasses = new BEMHelper({
  name: 'resources-menu',
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

  handleScroll() {
    const containerTop = document.getElementsByClassName('c-resources')[0].offsetTop;
    const element = document.getElementsByClassName('c-resources-menu')[0];
    const elemTop = element.offsetTop;
    const scrollTop = this.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // Cover all browsers

    if (elemTop < scrollTop && scrollTop > containerTop) {
      element.classList.add('c-resources-menu--fixed');
    } else {
      element.classList.remove('c-resources-menu--fixed');
    }
  }

  render() {
    const { resourceGroups, toResourceTab, resourceToLinkProps } = this.props;

    return (
      <div>
        <ul {...mclasses()}>
          {resourceGroups.map(group => (
            <li key={uuid()} {...mclasses('item', [group.color])}>
              <a onClick={() => this.setState({ focusTitle: group.title })} href={`#${group.title}`}>{group.title}</a>
            </li>))}
        </ul>

        <div {...classes('')} >
          {resourceGroups.map((group, i) => (
            <div id={group.title} key={uuid()} {...classes('', [group.color, this.state.focusTitle === group.title ? 'focus' : ''])}>
              <h1 {...classes('heading')}>{group.title}</h1>
              <p {...classes('lead')}>{group.description}</p>
              { group.tags ? group.tags.map(tags => (
                <SafeLink key={uuid()} {...classes('tag')} to={toResourceTab(i)}>{tags}</SafeLink>
              )) : null }
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
