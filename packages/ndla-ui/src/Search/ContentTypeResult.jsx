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
  <div {...classes()}>
    <div {...classes('icon-wrapper')}>{contentTypeResult.icon}</div>
    <div>
      <h2>
        {contentTypeResult.title}{' '}
        <span {...classes('total-count')}>
          ({contentTypeResult.totalCount})
        </span>
      </h2>
      <ul>
        {contentTypeResult.items.map(item => (
          <li key={item.url}>
            <SafeLink to={item.url}>{item.display}</SafeLink>
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
    </div>
  </div>
);

ContentTypeResult.propTypes = {
  contentTypeResult: ContentTypeResultShape.isRequired,
  messages: PropTypes.shape({
    allResultLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentTypeResult;
