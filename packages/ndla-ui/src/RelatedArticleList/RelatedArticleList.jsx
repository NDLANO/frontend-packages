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
    <article {...classes('item', modifier)}>
      <h1 {...classes('title')}>
        {iconWithClass}
        <SafeLink to={to} {...classes('link')}>
          {title}
        </SafeLink>
      </h1>
      <p {...classes('description')}>{introduction}</p>
    </article>
  );
};

RelatedArticle.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.oneOf(['subject-material', 'tasks-and-activities']),
  introduction: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const RelatedArticleList = ({ messages, children, button }) => (
  <section {...classes('')}>
    <h1 {...classes('component-title')}>{messages.title}</h1>
    <div {...classes('articles')}>{children}</div>
    {button}
  </section>
);

RelatedArticleList.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.shape({ title: PropTypes.string.isRequired }),
  button: PropTypes.node,
};

RelatedArticleList.defaultProps = {
  actions: null,
};

export default RelatedArticleList;
