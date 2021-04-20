import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Button from '@ndla/button';
import SafeLink from '@ndla/safelink';
import SectionHeading from '../SectionHeading';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

export const RelatedArticle = ({ title, introduction, icon, modifier, to, linkInfo, inOembed }) => {
  const iconWithClass = cloneElement(icon, { className: 'c-icon--medium' });
  return (
    <article {...classes('item', modifier)}>
      <h1 {...classes('title')}>
        {iconWithClass}
        <span {...classes('link-wrapper')}>
          <SafeLink
            to={to}
            {...classes('link')}
            target={linkInfo || inOembed ? '_blank' : null}
            rel={linkInfo ? 'noopener noreferrer' : null}>
            {title}
          </SafeLink>
        </span>
      </h1>
      <p {...classes('description')} dangerouslySetInnerHTML={{ __html: introduction }} />
      {linkInfo && <p {...classes('link-info')}>{linkInfo}</p>}
    </article>
  );
};

RelatedArticle.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  introduction: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  linkInfo: PropTypes.string,
};

RelatedArticle.defaultProps = {
  linkInfo: null,
};

const RelatedArticleList = ({ messages, children, articleCount, dangerouslySetInnerHTML }) => {
  const clonedChildren = !dangerouslySetInnerHTML
    ? React.Children.map(children, (article, i) =>
        React.cloneElement(article, {
          modifier: i >= 2 ? `${article.props.modifier} hidden` : article.props.modifier,
        }),
      )
    : null;
  const childrenCount = articleCount || React.Children.count(children);

  return (
    <section {...classes('')}>
      <SectionHeading className={classes('component-title').className}>
        {messages.title}
      </SectionHeading>
      <div {...classes('articles')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {clonedChildren}
      </div>
      {childrenCount > 2 && (
        <Button
          data-type="related-article-button"
          data-showmore={messages.showMore}
          data-showless={messages.showLess}
          outline>
          {messages.showMore}
        </Button>
      )}
    </section>
  );
};

RelatedArticleList.propTypes = {
  children: PropTypes.node,
  messages: PropTypes.shape({ title: PropTypes.string.isRequired }),
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  articleCount: PropTypes.number,
};
export default RelatedArticleList;
