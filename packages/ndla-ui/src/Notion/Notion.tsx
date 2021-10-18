import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import HTMLReactParser from 'html-react-parser';
import React, { Fragment } from 'react';
import { keyframes } from '@emotion/core';
// @ts-ignore
import Button from '@ndla/button';
import { joinArrayWithConjunction } from '@ndla/util';
import { fonts, spacing } from '@ndla/core';
import { getLicenseByAbbreviation, LicenseByline } from '@ndla/licenses';
import { Locale } from '../types';

const NotionContainer = styled.div``;

const AuthorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing.small} 0;
  border-bottom: 1px solid #d1d6db;
  ${fonts.sizes('14px', '24px')};
  justify-content: space-between;
`;

const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  ${fonts.sizes('14px', '24px')};
  margin: ${spacing.normal} 0;
`;

const fadeInMediaKeyframe = keyframes`
  0% {
    opacity: 0;
    height: auto;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOutMediaKeyframe = keyframes`
  0% {
    opacity: 1;
    height: auto;
  }
  100% {
    opacity: 0;
    height:0;
    overflow: hidden;
  }
`;

const MediaContainer = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;
  &.expanded {
    animation-name: ${fadeInMediaKeyframe};
    animation-duration: 2.8s;
    opacity: 1;
    height: auto;
  }
  &.fadeOut {
    animation-name: ${fadeOutMediaKeyframe};
    animation-duration: 2.8s;
  }
`;

const ContentWrapper = styled.div`
  .c-figure {
    margin: 0;
    position: relative !important;
    left: 0 !important;
    width: 25% !important;
    padding: 0 0 0 20px;
    float: right;
    &.expanded {
      width: 100% !important;
      padding: 0;
      margin-bottom: ${spacing.normal};
    }
  }
`;
const TextWrapper = styled.div`
  width: 75%;
  ${ContentWrapper} .c-figure.expanded + & {
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  float: right;
  width: 25%;
`;
const ClearWrapper = styled.div`
  clear: both;
`;

export type NotionProps = {
  authors?: { name: string }[];
  id: string | number;
  labels?: string[];
  license?: string;
  locale?: Locale;
  media?: React.ReactNode;
  onReferenceClick?: React.MouseEventHandler<HTMLButtonElement>;
  renderMarkdown?: (text: string) => string;
  text: React.ReactNode;
  title: string;
  visualElement?: React.ReactNode;
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
  visualElement,
}: NotionProps) => {
  const { t } = useTranslation();

  return (
    <NotionContainer>
      <ContentWrapper>
        {visualElement}
        <TextWrapper>
          {HTMLReactParser(
            renderMarkdown ? renderMarkdown(`**${title}** \u2013 ${text}`) : `<b>${title}</b> \u2013 ${text}`,
          )}
          {!!labels.length && (
            <LabelsContainer>
              {t('searchPage.resultType.notionLabels')}
              {labels.map((label, i) => (
                <Fragment key={`notion-${id}-label-${i + 1}`}>
                  {' '}
                  {label}
                  {i < labels?.length - 1 && <> &#8226;</>}
                </Fragment>
              ))}
            </LabelsContainer>
          )}
        </TextWrapper>
        <ClearWrapper />
      </ContentWrapper>
      {!!media && <MediaContainer id={`notion-media-${id}`}>{media}</MediaContainer>}
      {!!authors.length && (
        <AuthorsContainer>
          {license && (
            <LicenseByline licenseRights={getLicenseByAbbreviation(license, locale).rights} marginRight>
              {t('article.writtenBy', {
                authors: joinArrayWithConjunction(
                  authors.map((author) => author.name),
                  {
                    conjunction: ` ${t('article.conjunction')} `,
                  },
                ),
              })}
            </LicenseByline>
          )}
          {onReferenceClick && (
            <Button size="small" borderShape="rounded" outline onClick={onReferenceClick}>
              {t('article.citeNotion')}
            </Button>
          )}
        </AuthorsContainer>
      )}
    </NotionContainer>
  );
};

export default Notion;
