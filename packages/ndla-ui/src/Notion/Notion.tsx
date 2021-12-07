import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import HTMLReactParser from 'html-react-parser';
import { MouseEventHandler, ReactNode } from 'react';

// @ts-ignore
import Button from '@ndla/button';
import { joinArrayWithConjunction } from '@ndla/util';
import { colors, fonts } from '@ndla/core';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { Locale } from '../types';

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

export type NotionProps = {
  authors?: { name: string }[];
  id: string;
  labels?: string[];
  license?: string;
  locale?: Locale;
  media?: ReactNode;
  onReferenceClick?: MouseEventHandler<HTMLButtonElement>;
  renderMarkdown?: (text: string) => string;
  text: ReactNode;
  title: string;
};

const Notion = ({
  authors = [],
  id,
  labels = [],
  license,
  locale,
  media,
  onReferenceClick,
  renderMarkdown,
  text,
  title,
}: NotionProps) => {
  const { t } = useTranslation();
  return (
    <NotionContainer>
      <div>
        {HTMLReactParser(
          renderMarkdown ? renderMarkdown(`**${title}** \u2013 ${text}`) : `<b>${title}</b> \u2013 ${text}`,
        )}
      </div>
      {!!media && media}
      {!!authors.length && (
        <AuthorsContainer>
          <p>
            {t('article.writtenBy', {
              authors: joinArrayWithConjunction(
                authors.map((author) => author.name),
                {
                  conjunction: ` ${t('article.conjunction')} `,
                },
              ),
            })}
            {license && ` (${getLicenseByAbbreviation(license, locale).abbreviation})`}
          </p>
          {onReferenceClick && (
            <Button link onClick={onReferenceClick}>
              {t('article.citeNotion')}
            </Button>
          )}
        </AuthorsContainer>
      )}
      {!!labels.length && (
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

export default Notion;
