import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import { Document } from '../icons';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

export const RelatedArticle = ({ title, introduction, to }) => (
  <div {...classes('item')}>
    <h3 {...classes('title')}>
      <Document className="c-icon--medium" />
      <SafeLink to={to} {...classes('link')}>
        {title}
      </SafeLink>
    </h3>
    <p {...classes('description')}>{introduction}</p>
  </div>
);

RelatedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const RelatedArticleList = ({ messages, children }) => (
  <div>
    <h2 {...classes('component-title')}>{messages.title}</h2>
    <div {...classes('')}>{children}</div>
  </div>
);

RelatedArticleList.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.shape({ title: PropTypes.string.isRequired }),
};

export default RelatedArticleList;
