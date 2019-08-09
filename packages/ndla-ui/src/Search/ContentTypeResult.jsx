import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import Tooltip from '@ndla/tooltip';
import { Additional } from '@ndla/icons/common';

import SafeLink from '../common/SafeLink';
import ContentTypeBadge from '../ContentTypeBadge';
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
      ignoreContentTypeBadge,
      t,
    } = this.props;
    let view = null;

    const results =
      showAdditionalResources || !contentTypeResult.resources
        ? contentTypeResult.resources
        : contentTypeResult.resources.filter(items => !items.additional);

    const totalCount = contentTypeResult.totalCount || results.length;

    if (totalCount > 0) {
      const resources = this.state.showAll
        ? results
        : results.slice(0, defaultCount);

      view = (
        <ul {...classes('', contentTypeResult.contentType)}>
          {resources.map(resource => {
            const { path, resourceTypes, name, subject, additional } = resource;
            const linkProps = resourceToLinkProps(resource);
            const linkContent = (
              <>
                {' '}
                <span>
                  {subject && <strong>{subject}</strong>}
                  {name}
                </span>
                {resourceTypes && (
                  <small>
                    {' '}
                    {resourceTypes.map(type => type.name).join(', ') || ''}
                  </small>
                )}
              </>
            );
            if (linkProps && linkProps.href) {
              return (
                <li key={path}>
                  <a {...linkProps}>{linkContent}</a>
                </li>
              );
            }

            const safeLinkProps =
              linkProps && linkProps.to
                ? { ...linkProps }
                : { to: resource.path };

            return (
              <li key={path}>
                <SafeLink
                  {...safeLinkProps}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate();
                    }
                  }}>
                  {linkContent}
                  {renderAdditionalIcon(
                    additional,
                    t('resource.additionalTooltip'),
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
          {!ignoreContentTypeBadge && contentTypeResult.contentType && (
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
  ignoreContentTypeBadge: PropTypes.bool,
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
