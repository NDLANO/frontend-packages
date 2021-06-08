import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import HTMLReactParser from 'html-react-parser';
import React from 'react';

// @ts-ignore
import Button from '@ndla/button';

import { colors, fonts } from '@ndla/core';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { joinNamesAsList } from '../Article/utils/joinNamesAsList';

const NotionContainer = styled.div`
  border-bottom: 1px solid ${colors.brand.greyLighter};
  margin-bottom: 3.5rem;
`;

const AuthorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 1.5rem;
  font-size: 0.875rem;

  p {
    margin: 0;

    &:not(:only-child) {
      margin-right: 1rem;
    }
  }
`;

const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }

  > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Label = styled.span`
  ${fonts.sizes('14px', '24px')};
  font-weight: 600;
  padding: 0 0.25rem;
  background-color: ${colors.brand.greyLightest};
  vertical-align: center;
`;

type NotionProps = {
  authors?: { name: string }[];
  id: string;
  labels?: string[];
  license?: string;
  locale?: string;
  media?: React.ReactNode;
  onReferenceClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMediaClick?: React.MouseEventHandler;
  renderMarkdown: (text: string) => string;
  text: React.ReactNode;
  title: string;
};

const Notion: React.FC<NotionProps & tType> = ({
  authors,
  id,
  labels,
  license,
  locale,
  media,
  onReferenceClick,
  renderMarkdown,
  text,
  title,
  t,
}) => {
  return (
    <NotionContainer>
      <div>
        {HTMLReactParser(
          renderMarkdown
            ? renderMarkdown(`**${title}** &ndash; ${text}`)
            : `<b>${title}</b> \u2013 ${text}`,
        )}
      </div>
      {!!media && media}
      {Array.isArray(authors) && !!authors.length && (
        <AuthorsContainer>
          <p>
            {t('article.writtenBy', {
              authors: joinNamesAsList(
                authors.map(author => author.name),
                {
                  conjunction: t('article.conjunction'),
                },
              ),
            })}
            {license && ` (${getLicenseByAbbreviation(license, locale).abbreviation})`}
          </p>
          <Button link onClick={onReferenceClick}>
            {t('article.citeNotion')}
          </Button>
        </AuthorsContainer>
      )}
      {Array.isArray(labels) && !!labels.length && (
        <LabelsContainer>
          <p>{t('searchPage.resultType.notionLabels')}</p>
          {labels.map((label, i) => (
            <Label key={`notion-${id}-label-${i + 1}`}>{label}</Label>
          ))}
        </LabelsContainer>
      )}
    </NotionContainer>
  );
};

export default injectT(Notion);
