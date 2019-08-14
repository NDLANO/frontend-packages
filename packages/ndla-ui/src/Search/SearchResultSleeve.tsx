import React from 'react';
import BEMHelper from 'react-bem-helper';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { css } from '@emotion/core';
// @ts-ignore
import { Wrench } from '@ndla/icons/common';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import ContentTypeResult from './ContentTypeResult';
import { ContentTypeResultType, Resource } from '../types';
const AnchorButton = StyledButton.withComponent(SafeLink);
const classes = new BEMHelper('c-search-field');

interface Props {
  result: Array<ContentTypeResultType>;
  allResultUrl: string;
  resourceToLinkProps: (resource: Resource) => string;
  onNavigate: VoidFunction;
  hideSleeveHeader: boolean;
  infoText: string;
  ignoreContentTypeBadge: boolean;
  t: (v: string) => {};
}
const SearchResultSleeve: React.FC<Props> = ({
  result,
  allResultUrl,
  resourceToLinkProps,
  onNavigate,
  hideSleeveHeader,
  infoText,
  ignoreContentTypeBadge,
  t,
}) => (
  <section {...classes('search-result')}>
    {!hideSleeveHeader && (
      <h1 {...classes('search-result-heading')}>
        {t('searchPage.searchField.searchResultHeading')}
      </h1>
    )}
    {infoText && (
      <aside {...classes('search-result-infotext')}>
        <Wrench className="c-icon--22" />
        <span>{infoText}</span>
      </aside>
    )}
    <div>
      {result.map((contentTypeResult: ContentTypeResultType) => (
        <ContentTypeResult
          ignoreContentTypeBadge={ignoreContentTypeBadge}
          onNavigate={onNavigate}
          contentTypeResult={contentTypeResult}
          resourceToLinkProps={resourceToLinkProps}
          defaultCount={window.innerWidth > 980 ? 7 : 3}
          key={contentTypeResult.title}
          messages={{
            allResultLabel: t(
              'searchPage.searchField.contentTypeResultShowMoreLabel',
            ),
            showLessResultLabel: t(
              'searchPage.searchField.contentTypeResultShowLessLabel',
            ),
            noHit: t('searchPage.searchField.contentTypeResultNoHit'),
          }}
        />
      ))}
      {result.length === 0 &&
        t('searchPage.searchField.contentTypeResultNoHit')}
    </div>
    <div {...classes('go-to-search')}>
      <AnchorButton
        to={allResultUrl}
        css={css`
          box-shadow: none;
        `}>
        {t('searchPage.searchField.allResultButtonText')}
      </AnchorButton>
    </div>
  </section>
);

export default injectT(SearchResultSleeve);
