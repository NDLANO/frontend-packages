import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import HTMLReactParser from 'html-react-parser';
import React, { Fragment } from 'react';
import { keyframes } from '@emotion/core';
// @ts-ignore
import Button from '@ndla/button';
import { joinArrayWithConjunction } from '@ndla/util';
import { animations, breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { getLicenseByAbbreviation, LicenseByline } from '@ndla/licenses';
import { CursorClick } from '@ndla/icons/action';
import { Play, ArrowCollapse } from '@ndla/icons/common';
import { Locale } from '../types';
// @ts-ignore
import { makeSrcQueryString } from '../Image';

const NotionContainer = styled.div``;

const ContentWrapper = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: flex;
    flex-direction: column-reverse;
  }
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
    ${mq.range({ until: breakpoints.tabletWide })} {
      width: 100% !important;
      padding: 0;
    }
  }
`;
const TextWrapper = styled.div`
  width: 75%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
  }
  font-family: ${fonts.serif};
  ${fonts.sizes('18px', '28px')};
  ${ContentWrapper} .c-figure.expanded + & {
    width: 100%;
  }
`;

const ImageElement = styled.img``;

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

const ImageWrapper = styled.div`
  float: right;
  width: 25%;
  padding-left: ${spacing.normal};
  position: relative;

  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    padding-left: 0;
  }
`;

const ExpandVisualElementButton = styled(Button)`
  position: absolute;
  right: 8px;
  bottom: 8px;
  transition: all ${animations.durations.normal};
  &,
  &:focus,
  &:active {
    background-color: rgba(255, 255, 255, 0.65);
  }

  color: ${colors.brand.primary};
  border-radius: 50%;
  border: 0;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: transform ${animations.durations.normal} ease-out;
  }
  ${ContentWrapper}:hover & {
    background-color: #fff;
    svg {
      transform: scale(1.2);
    }
  }
`;

const ExpandIcon = styled.span`
  ${ExpandVisualElementButton}.expanded & {
    display: none;
  }
`;
const CollapseIcon = styled.span`
  display: none;
  ${ExpandVisualElementButton}.expanded & {
    display: inline-block;
  }
`;

const ClearWrapper = styled.div`
  clear: both;
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
  font-family: ${fonts.sans};
  margin: ${spacing.normal} 0;
`;

type VisualElementProps = {
  type: 'video' | 'other';
  element: React.ReactNode;
  metaImage: {
    url: string;
    alt: string;
    crop?: object;
    focalPoint?: object;
  };
};

export type NotionProps = {
  authors?: { name: string }[];
  id: string | number;
  labels?: string[];
  license?: string;
  locale?: Locale;
  onReferenceClick?: React.MouseEventHandler<HTMLButtonElement>;
  renderMarkdown?: (text: string) => string;
  text: React.ReactNode;
  title: string;
  visualElement?: VisualElementProps;
  imageElement?: React.ReactNode;
};

const Notion = ({
  authors = [],
  id,
  labels = [],
  license,
  locale,
  onReferenceClick,
  renderMarkdown,
  text,
  title,
  visualElement,
  imageElement,
}: NotionProps) => {
  const { t } = useTranslation();

  return (
    <NotionContainer>
      <ContentWrapper>
        {imageElement}
        {visualElement && (
          <ImageWrapper>
            <ImageElement
              src={`${visualElement.metaImage.url}?${makeSrcQueryString(
                400,
                visualElement.metaImage.crop,
                visualElement.metaImage.focalPoint,
              )}`}
              alt={visualElement.metaImage.alt}
            />
            <ExpandVisualElementButton
              stripped
              data-notion-expand-media={true}
              data-notion-media-id={`notion-media-${id}`}>
              <ExpandIcon>
                {visualElement.type === 'video' && <Play style={{ width: '24px', height: '24px' }} />}
                {visualElement.type === 'other' && <CursorClick style={{ width: '24px', height: '24px' }} />}
              </ExpandIcon>
              <CollapseIcon>
                <ArrowCollapse style={{ width: '24px', height: '24px' }}></ArrowCollapse>
              </CollapseIcon>
            </ExpandVisualElementButton>
          </ImageWrapper>
        )}
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
      {visualElement && <MediaContainer id={`notion-media-${id}`}>{visualElement.element}</MediaContainer>}
    </NotionContainer>
  );
};

export default Notion;
