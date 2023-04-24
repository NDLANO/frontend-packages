import React, { Children, cloneElement, ReactElement } from 'react';
import BEMHelper from 'react-bem-helper';
import { ButtonV2 } from '@ndla/button';
import SafeLink from '@ndla/safelink';
import SectionHeading from '../SectionHeading';
import { HeadingLevel } from '../types';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

interface RelatedArticleProps {
  icon: ReactElement;
  title: string;
  modifier?: string;
  introduction: string;
  to: string;
  linkInfo?: string;
  target?: string;
}

export const RelatedArticle = ({
  title,
  introduction,
  icon,
  modifier,
  to,
  linkInfo = '',
  target = '',
}: RelatedArticleProps) => {
  const iconWithClass = cloneElement(icon, { className: 'c-icon--medium' });
  return (
    <article {...classes('item', modifier)}>
      <h3 {...classes('title')}>
        {iconWithClass}
        <span {...classes('link-wrapper')}>
          <SafeLink to={to} {...classes('link')} target={target} rel={linkInfo ? 'noopener noreferrer' : undefined}>
            {title}
          </SafeLink>
        </span>
      </h3>
      <p {...classes('description')} dangerouslySetInnerHTML={{ __html: introduction }} />
      {linkInfo && <p {...classes('link-info')}>{linkInfo}</p>}
    </article>
  );
};

interface Props {
  messages: {
    title: string;
    showMore: string;
    showLess: string;
  };
  headingLevel: HeadingLevel;
  children?: ReactElement;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  articleCount?: number;
}
const RelatedArticleList = ({ messages, children, articleCount, dangerouslySetInnerHTML, headingLevel }: Props) => {
  const clonedChildren =
    !dangerouslySetInnerHTML && children
      ? Children.map(children, (article, i) =>
          cloneElement(article, {
            modifier: i >= 2 ? `${article.props.modifier} hidden` : article.props.modifier,
          }),
        )
      : null;
  const childrenCount = articleCount || Children.count(children);

  return (
    <section {...classes('')}>
      <SectionHeading headingLevel={headingLevel} className={classes('component-title').className}>
        {messages.title}
      </SectionHeading>
      <div {...classes('articles')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {clonedChildren}
      </div>
      {childrenCount > 2 && (
        <ButtonV2
          data-type="related-article-button"
          data-showmore={messages.showMore}
          data-showless={messages.showLess}
          variant="outline"
        >
          {messages.showMore}
        </ButtonV2>
      )}
    </section>
  );
};

export default RelatedArticleList;
