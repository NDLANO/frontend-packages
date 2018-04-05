import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../common/SafeLink';
import { ContentTypeResultShape } from '../shapes';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'content-type-result',
});

class ContentTypeResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }
  render() {
    const {
      contentTypeResult,
      messages,
      onNavigate,
      defaultCount,
      resourceToLinkProps,
    } = this.props;
    let view = null;

    const totalCount = contentTypeResult.resources
      ? contentTypeResult.resources.length
      : 0;

    if (totalCount > 0) {
      const resources = this.state.showAll
        ? contentTypeResult.resources
        : contentTypeResult.resources.slice(0, defaultCount);

      view = (
        <ul>
          {resources.map(item => {
            const linkProps = resourceToLinkProps(item);
            if (linkProps && linkProps.href) {
              return (
                <li key={item.path}>
                  <a {...linkProps}>{item.name}</a>
                </li>
              );
            }

            return (
              <li key={item.path}>
                <SafeLink
                  to={item.path}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {item.name}
                </SafeLink>
              </li>
            );
          })}
          {totalCount > defaultCount && (
            <li key="showAll" {...classes('show-all')}>
              <button
                onClick={() => {
                  this.setState(prevState => ({
                    showAll: !prevState.showAll,
                  }));
                }}>
                {this.state.showAll
                  ? messages.showLessResultLabel
                  : messages.allResultLabel}
              </button>
            </li>
          )}
        </ul>
      );
    } else {
      view = <p {...classes('no-hit')}>{messages.noHit}</p>;
    }

    return (
      <section {...classes()}>
        <header>
          <h1>
            {contentTypeResult.title}{' '}
            <span {...classes('total-count')}>({totalCount})</span>
          </h1>
        </header>
        {view}
      </section>
    );
  }
}

ContentTypeResult.propTypes = {
  defaultCount: PropTypes.number,
  onNavigate: PropTypes.func,
  contentTypeResult: ContentTypeResultShape.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    allResultLabel: PropTypes.string.isRequired,
    showLessResultLabel: PropTypes.string.isRequired,
    noHit: PropTypes.string.isRequired,
  }).isRequired,
};

ContentTypeResult.defaultProps = {
  defaultCount: 5,
};

export default ContentTypeResult;
