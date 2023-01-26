/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, useMemo, useState } from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import { ButtonV2 } from '@ndla/button';
import SafeLink from '@ndla/safelink';
import SectionHeading from '../SectionHeading';
import { HeadingLevel } from '../types';
import ContentTypeBadge from '../ContentTypeBadge';
import { contentTypes } from '../model/ContentType';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

interface RelatedArticleProps {
  title: string;
  introduction: string;
  to: string;
  linkInfo?: string;
  target?: string;
  type?: string;
}

export const RelatedArticleV2 = ({
  title,
  introduction,
  to,
  linkInfo = '',
  target = '',
  type = contentTypes.SUBJECT_MATERIAL,
}: RelatedArticleProps) => {
  return (
    <article {...classes('item', type)}>
      <h3 {...classes('title')}>
        <ContentTypeBadge type={type} background size="small" />
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
  children?: JSX.Element[];
  articleCount?: number;
  headingLevel?: HeadingLevel;
}
export const RelatedArticleListV2 = ({ children = [], articleCount, headingLevel = 'h3' }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const childCount = useMemo(() => articleCount ?? Children.count(children), [children, articleCount]);
  const childrenToShow = useMemo(
    () => (childCount > 2 && !expanded ? children?.slice(0, 2) : children),
    [childCount, children, expanded],
  );

  return (
    <section {...classes('')}>
      <SectionHeading headingLevel={headingLevel} className={classes('component-title').className}>
        {t('related.title')}
      </SectionHeading>
      <div {...classes('articles')}>{childrenToShow}</div>
      {childCount > 2 && (
        <ButtonV2 onClick={() => setExpanded((p) => !p)} variant="outline">
          {t(`related.show${expanded ? 'Less' : 'More'}`)}
        </ButtonV2>
      )}
    </section>
  );
};
