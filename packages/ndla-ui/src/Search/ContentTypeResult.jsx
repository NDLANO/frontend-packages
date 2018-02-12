import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import SafeLink from '../common/SafeLink';
import { ContentTypeResultShape } from '../shapes';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'content-type-result',
});

const ContentTypeResult = ({ contentTypeResult, messages }) => (
  <section {...classes()}>
    <header>
      <h1>
        {contentTypeResult.title}{' '}
        <span {...classes('total-count')}>
          ({contentTypeResult.totalCount})
        </span>
      </h1>
    </header>

    {contentTypeResult.totalCount > 0 ? (
      <ul>
        {contentTypeResult.resources.map(item => (
          <li key={item.path}>
            <SafeLink to={item.path}>{item.name}</SafeLink>
          </li>
        ))}
        {contentTypeResult.showAllLinkUrl && (
          <li key="showAll" {...classes('show-all')}>
            <SafeLink to={contentTypeResult.showAllLinkUrl}>
              {messages.allResultLabel}
            </SafeLink>
          </li>
        )}
      </ul>
    ) : (
      <p {...classes('no-hit')}>{messages.noHit}</p>
    )}
  </section>
);

ContentTypeResult.propTypes = {
  contentTypeResult: ContentTypeResultShape.isRequired,
  messages: PropTypes.shape({
    allResultLabel: PropTypes.string.isRequired,
    noHit: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentTypeResult;
