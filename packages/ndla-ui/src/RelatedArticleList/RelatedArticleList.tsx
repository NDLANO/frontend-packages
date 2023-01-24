import React, { Children, cloneElement, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import Button from '@ndla/button';
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
  messages?: {
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
  const { t } = useTranslation();
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
        {t('related.title')}
      </SectionHeading>
      <div {...classes('articles')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {clonedChildren}
      </div>
      {childrenCount > 2 && (
        <Button
          data-type="related-article-button"
          data-showmore={t('related.showMore')}
          data-showless={t('related.showLess')}
          outline>
          {t('related.showMore')}
        </Button>
      )}
    </section>
  );
};

export default RelatedArticleList;
