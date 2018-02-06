import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ndla-ui';
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

const RelatedArticleList = ({ messages, children }) => (
  <section {...classes('')}>
    <h1 {...classes('component-title')}>{messages.title}</h1>
    <div {...classes('articles')}>
      {React.Children.map(children, (art, i) => (i < 2 ? art : null))}
    </div>
    <div {...classes('hidden-articles')}>
      {React.Children.map(children, (art, i) => (i >= 2 ? art : null))}
    </div>
    {React.Children.count(children) > 2 && (
      <Button
        {...classes('button')}
        data-showmore={messages.showMore}
        data-showless={messages.showLess}
        outline>
        {messages.showMore}
      </Button>
    )}
  </section>
);

RelatedArticleList.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.shape({ title: PropTypes.string.isRequired }),
};

RelatedArticleList.defaultProps = {
  actions: null,
};

export default RelatedArticleList;
