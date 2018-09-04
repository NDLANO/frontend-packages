import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from 'ndla-i18n';

import { ContentTypeBadge, SafeLink, Tooltip } from 'ndla-ui';
import { Additional } from 'ndla-icons/common';
import { ContentTypeResultShape } from '../shapes';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'content-type-result',
});

const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip
        tooltip={label}
        align="top"
        tooltipContainerClass={classes('additional-icon').className}>
        <Additional className="c-icon--20" />
      </Tooltip>
    );
  }
  if (isAdditional) {
    return <Additional className="c-icon--20" />;
  }
  return null;
};

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
      onNavigate,
      defaultCount,
      resourceToLinkProps,
      showAdditionalResources,
      messages,
    } = this.props;
    let view = null;

    const results =
      showAdditionalResources || !contentTypeResult.resources
        ? contentTypeResult.resources
        : contentTypeResult.resources.filter(items => !items.additional);

    const totalCount = results ? results.length : 0;

    if (totalCount > 0) {
      const resources = this.state.showAll
        ? results
        : results.slice(0, defaultCount);

      view = (
        <ul {...classes('', contentTypeResult.contentType)}>
          {resources.map(item => {
            const linkProps = resourceToLinkProps(item);
            if (linkProps && linkProps.href) {
              return (
                <li key={item.path}>
                  <a {...linkProps}>{item.name}</a>
                </li>
              );
            }

            const safeLinkProps =
              linkProps && linkProps.to ? { ...linkProps } : { to: item.path };

            return (
              <li key={item.path}>
                <SafeLink
                  {...safeLinkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {item.name}
                  {renderAdditionalIcon(
                    item.additional,
                    this.props.t('resource.additionalTooltip'),
                  )}
                </SafeLink>
              </li>
            );
          })}
          {totalCount > defaultCount && (
            <li key="showAll" {...classes('show-all')}>
              <button
                type="button"
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
          {contentTypeResult.contentType && (
            <ContentTypeBadge
              type={contentTypeResult.contentType}
              size="x-small"
              background
              outline
            />
          )}
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
  showAdditionalResources: PropTypes.bool,
  t: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    allResultLabel: PropTypes.string.isRequired,
    showLessResultLabel: PropTypes.string.isRequired,
    noHit: PropTypes.string.isRequired,
    filterAdditionalLabel: PropTypes.string,
  }).isRequired,
};

ContentTypeResult.defaultProps = {
  defaultCount: 3,
  showAdditionalResources: false,
};

export default injectT(ContentTypeResult);
