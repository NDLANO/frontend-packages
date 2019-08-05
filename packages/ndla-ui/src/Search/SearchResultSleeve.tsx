import React from 'react';
import BEMHelper from 'react-bem-helper';
// @ts-ignore
import { StyledButton } from '@ndla/button';
import { injectT } from '@ndla/i18n';
import { css } from '@emotion/core';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import ContentTypeResult from './ContentTypeResult';

const AnchorButton = StyledButton.withComponent(SafeLink);
const classes = new BEMHelper('c-search-field');

interface Props {
  result: any;
  allResultUrl: any;
  resourceToLinkProps: any;
  onNavigate: any;
  hideSleeveHeader: any;
  singleColumn: any;
  infoText: any;
  ignoreContentTypeBadge: any;
  t: any;
}

interface ContentTypeResultType {
  title: string;
  resources: Array<{
    path: string;
    name: string;
  }>;
}

const SearchResultSleeve: React.FC<Props> = ({
  result,
  allResultUrl,
  resourceToLinkProps,
  onNavigate,
  hideSleeveHeader,
  singleColumn,
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
      <aside {...classes('search-result-infotext')}>{infoText}</aside>
    )}
    <div
      {...classes(
        'search-result-content',
        singleColumn ? '' : 'multiple-columned',
      )}>
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
      {!result.length && t('searchPage.searchField.contentTypeResultNoHit')}
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
