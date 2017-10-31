import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

export const RelatedArticle = ({ title, introduction, icon, modifier, to }) => {
  const iconWithClass = cloneElement(icon, { className: 'c-icon--medium' });
  return (
    <div {...classes('item', modifier)}>
      <h3 {...classes('title')}>
        {iconWithClass}
        <SafeLink to={to} {...classes('link')}>
          {title}
        </SafeLink>
      </h3>
      <p {...classes('description')}>{introduction}</p>
    </div>
  );
};

RelatedArticle.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.oneOf(['subject-material', 'tasks-and-activities']),
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
