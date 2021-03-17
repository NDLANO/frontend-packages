/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import { getLicenseByAbbreviation } from '@ndla/licenses';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { Play } from '@ndla/icons/common';
// @ts-ignore
import { ArrowExpand } from '@ndla/icons/editor';
// @ts-ignore
import Modal, { ModalCloseButton, ModalHeader, ModalBody } from '@ndla/modal';
import { joinNamesAsList } from '../Article/utils/joinNamesAsList';

type ItemWrapperProps = {
  hasMedia?: boolean;
};
const ItemWrapper = styled.div<ItemWrapperProps>`
  border-top: 2px solid ${colors.brand.light};
  padding: ${spacing.medium} 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${props =>
    props.hasMedia &&
    `${mq.range({ from: breakpoints.tabletWide })} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: ${spacing.medium};
    align-items: start;
  }`}
`;

const TextWrapper = styled.div``;
const DescriptionWrapper = styled.div`
  ${fonts.sizes('18px', '26px')};
  font-family: ${fonts.serif};
`;

const MediaWrapper = styled.div`
  margin-bottom: ${spacing.normal};
  position: relative;
`;
const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${spacing.normal};
`;
const LabelsLabel = styled.span`
  display: inline-block;
  ${fonts.sizes('16px', '20px')};
  margin-right: 4px;
`;
const Label = styled.span`
  display: inline-block;
  background: ${colors.brand.greyLightest};
  padding: 2px 4px;
  border-radius: 2px;
  ${fonts.sizes('12px', '20px')};
  font-weight: ${fonts.weight.semibold};
  margin: 0 4px 4px 0;
`;

const Image = styled.img`
  border-radius: 5px;
`;

const ShowMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:after {
    background: #000;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
  }
`;
const ShowMediaButtonWrapper = styled.div`
  z-index: 1;
`;
const ShowMediaButtonText = styled.span`
  margin-left: 4px;
`;

const AuthorsWrapper = styled.div`
  margin: 1rem 0;

  p {
    margin: 0;
    font-size: 0.875rem;
  }

  button {
    margin-left: 1rem;
  }
`

type MediaProps = {
  type: 'video' | 'other';
  element: React.ReactNode;
};

export type SearchNotionItemProps = {
  id: string;
  title: string;
  text: React.ReactNode;
  image?: { url: string; alt: string };
  media?: MediaProps;
  labels?: string[];
  authors?: { name: string }[];
  license?: string;
  onReferenceClick?: React.MouseEventHandler<HTMLButtonElement>;
  renderMarkdown: (text: React.ReactNode) => string;
};

const SearchNotionItem = ({
  title,
  text,
  image,
  media,
  labels = [],
  authors = [],
  license,
  onReferenceClick,
  renderMarkdown,
  t,
}: SearchNotionItemProps & tType) => {
  const hasMedia = !!(image || media);
  const ShowMediaButton = ({ type, element }: MediaProps) => {
    return (
      <ShowMediaButtonWrapper>
        <Modal
          activateButton={
            <Button lighter size="xsmall" borderShape="rounded">
              {type === 'video' && (
                <>
                  <Play />
                  <ShowMediaButtonText>{t('searchPage.resultType.showVideo')}</ShowMediaButtonText>
                </>
              )}
              {type === 'other' && (
                <>
                  <ArrowExpand />
                  <ShowMediaButtonText>{t('searchPage.resultType.showNotion')}</ShowMediaButtonText>
                </>
              )}
            </Button>
          }
          animation="subtle"
          animationDuration={50}
          backgroundColor="white"
          size="medium">
          {(onClose: () => void) => (
            <>
              <ModalHeader>
                <ModalCloseButton onClick={onClose} title={t('searchPage.close')} />
              </ModalHeader>
              <ModalBody modifier="no-side-padding-mobile">{element}</ModalBody>
            </>
          )}
        </Modal>
      </ShowMediaButtonWrapper>
    );
  };

  return (
    <ItemWrapper hasMedia={hasMedia}>
      <TextWrapper>
        <DescriptionWrapper>
          {parse(
            renderMarkdown
              ? renderMarkdown(`**${title}** &ndash; ${text}`)
              : `<b>${title}</b> \u2013 ${text}`,
          )}
        </DescriptionWrapper>
        {(authors || license) && (
          <AuthorsWrapper>
            {
              <p>
                {authors.length > 0 && t('article.writtenBy', { authors: joinNamesAsList(authors.map((author) => author.name), { conjunction: 'og' }) || '' })}
                {(authors.length > 0 && license) && ' '}
                {license && `(${getLicenseByAbbreviation(license).abbreviation})`}
                {onReferenceClick && (
                  <Button link onClick={onReferenceClick}>
                    {t('article.cite')}
                  </Button>
                )}
              </p>
            }
          </AuthorsWrapper>
        )}
        {labels.length > 0 && (
          <LabelsWrapper>
            <LabelsLabel>{t('searchPage.resultType.notionLabels')}:</LabelsLabel>
            {labels.map(label => (
              <Label key={label}>{label}</Label>
            ))}
          </LabelsWrapper>
        )}
      </TextWrapper>
      {hasMedia && (
        <MediaWrapper>
          {image && <Image src={image.url} alt={image.alt} />}
          {media && (
            <ShowMediaWrapper>
              <ShowMediaButton type={media.type} element={media.element} />
            </ShowMediaWrapper>
          )}
        </MediaWrapper>
      )}
    </ItemWrapper>
  );
};

export default injectT(SearchNotionItem);
