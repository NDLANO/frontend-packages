/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, ReactNode, RefAttributes } from 'react';
import { ConceptData, ConceptVisualElementMeta } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { parseMarkdown } from '@ndla/util';
import styled from '@emotion/styled';
import { COPYRIGHTED } from '@ndla/licenses';
import { Copyright } from '../types';
import ImageEmbed from './ImageEmbed';
import BrightcoveEmbed from './BrightcoveEmbed';
import H5pEmbed from './H5pEmbed';
import { ExternalEmbed, HeartButtonType, IframeEmbed } from '.';
import { EmbedByline } from '../LicenseByline';
import { Gloss } from '../Gloss';

export type ConceptType = 'concept' | 'gloss';

export interface ConceptNotionData {
  title: ConceptData['concept']['title'];
  content?: string;
  metaImage?: {
    url?: string;
    alt?: string;
  };
  copyright?: Copyright;
  source?: string;
  visualElement?: ConceptVisualElementMeta;
  conceptType: ConceptData['concept']['conceptType'];
  glossData?: ConceptData['concept']['glossData'];
}

interface ConceptNotionProps extends RefAttributes<HTMLDivElement>, ConceptNotionData {
  className?: string;
  closeButton?: ReactNode;
  previewAlt?: boolean;
  inPopover?: boolean;
  tags?: string[];
  subjects?: string[];
  headerButtons?: ReactNode;
  heartButton?: HeartButtonType;
  conceptHeartButton?: ReactNode;
}

const NotionDialogText = styled.div`
  font-weight: ${fonts.weight.normal};
  ${fonts.sizes('18px', 1.3)};
  color: ${colors.text.primary};
  font-family: ${fonts.sans};
`;

const NotionDialogContent = styled.div`
  padding-bottom: ${spacing.normal};
  display: flex;
  flex-direction: column;
`;

const ContentPadding = styled.div`
  padding: ${spacing.normal};
`;

const notionContentCss = css`
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translate3d(0, -13px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  animation-name: animateIn;
  animation-duration: 300ms;
  background-color: white;
  z-index: 1;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  ${mq.range({ from: breakpoints.tablet })} {
    width: 500px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 720px;
  }

  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.small};
    z-index: 100;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
`;

const NotionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid ${colors.brand.tertiary};
  padding-bottom: ${spacing.small};
  h1 {
    flex-grow: 1;
    margin: 0;
    font-weight: ${fonts.weight.bold};
    ${fonts.sizes('22px', 1.2)};
  }
  small {
    padding-left: ${spacing.small};
    margin-left: ${spacing.xsmall};
    border-left: 1px solid ${colors.brand.greyLight};
    ${fonts.sizes('20px', 1.2)};
    font-weight: ${fonts.weight.normal};
  }
`;

const ListWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
`;

const StyledNotionDialogContent = styled(NotionDialogContent)`
  padding-top: ${spacing.small};
  .c-figure {
    left: unset !important;
    width: 100% !important;
    padding: 0;
    margin: 0;
    padding-bottom: ${spacing.normal};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  list-style: none;
  > li {
    margin: 0;
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.semibold};
    border-radius: ${misc.borderRadius};
    background-color: ${colors.brand.greyLightest};
    ${fonts.sizes('12px', 1.2)};
    padding: ${spacing.xxsmall};
  }
`;

export const ConceptNotionV2 = forwardRef<HTMLDivElement, ConceptNotionProps>(
  (
    {
      visualElement,
      title,
      content,
      source,
      copyright,
      closeButton,
      inPopover,
      previewAlt,
      tags,
      subjects,
      heartButton,
      conceptHeartButton,
      conceptType,
      glossData,
      headerButtons,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();

    return (
      <div css={inPopover ? notionContentCss : undefined} {...rest} ref={ref}>
        <ContentPadding>
          <NotionHeader>
            <h1>
              {title.title} {<small>{t(`searchPage.resultType.${conceptType}`)}</small>}
            </h1>
            <ButtonWrapper>
              {headerButtons}
              {closeButton}
            </ButtonWrapper>
          </NotionHeader>
          {conceptType !== 'gloss' ? (
            <>
              <StyledNotionDialogContent>
                {visualElement?.resource === 'image' ? (
                  <ImageEmbed embed={visualElement} heartButton={heartButton} />
                ) : visualElement?.resource === 'brightcove' ? (
                  <BrightcoveEmbed embed={visualElement} heartButton={heartButton} />
                ) : visualElement?.resource === 'h5p' ? (
                  <H5pEmbed embed={visualElement} />
                ) : visualElement?.resource === 'iframe' ? (
                  <IframeEmbed embed={visualElement} />
                ) : visualElement?.resource === 'external' ? (
                  <ExternalEmbed embed={visualElement} />
                ) : null}
                <NotionDialogText>{parseMarkdown(content ?? '', 'body')}</NotionDialogText>
              </StyledNotionDialogContent>
              {tags && (
                <ListWrapper>
                  {`${t('notions.tags')}:`}
                  <StyledList>
                    {tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </StyledList>
                </ListWrapper>
              )}
              {subjects && (
                <ListWrapper>
                  {`${t('notions.usedIn')}:`}
                  <StyledList>
                    {subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </StyledList>
                </ListWrapper>
              )}
            </>
          ) : (
            <Gloss
              title={title}
              glossData={glossData!}
              audio={
                visualElement?.status === 'success' && visualElement.resource === 'audio'
                  ? { src: visualElement.data.audioFile.url, title: visualElement.data.title.title }
                  : undefined
              }
            />
          )}
        </ContentPadding>
        {copyright && (
          <EmbedByline copyright={copyright} type={conceptType as ConceptType}>
            {copyright.license?.license.toLowerCase() !== COPYRIGHTED && conceptHeartButton}
          </EmbedByline>
        )}
      </div>
    );
  },
);
