import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Button from '../Button';
import SafeLink from '../common/SafeLink';
import SectionHeading from '../SectionHeading';

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
        <span {...classes('link-wrapper')}>
          <SafeLink to={to} {...classes('link')}>
            {title}
          </SafeLink>
        </span>
      </h1>
      <p {...classes('description')}>{introduction}</p>
    </article>
  );
};

RelatedArticle.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  introduction: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const RelatedArticleList = ({ messages, children }) => (
  <section {...classes('')}>
    <SectionHeading className={classes('component-title').className}>
      {messages.title}
    </SectionHeading>
    <div {...classes('articles')}>
      {React.Children.map(children, (article, i) =>
        React.cloneElement(article, {
          modifier:
            i >= 2
              ? `${article.props.modifier} hidden`
              : article.props.modifier,
        }),
      )}
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
