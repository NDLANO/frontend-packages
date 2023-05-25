/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { MouseEventHandler, ReactNode } from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { ButtonV2 } from '@ndla/button';
import { Play } from '@ndla/icons/common';
import { ArrowExpand } from '@ndla/icons/editor';
import { ModalCloseButton, ModalHeader, ModalBody, Modal } from '@ndla/modal';
import { useTranslation } from 'react-i18next';
import { joinArrayWithConjunction } from '@ndla/util';
import { NotionMedia } from '../types';

type ItemWrapperProps = {
  hasMedia?: boolean;
};
const ItemWrapper = styled.div<ItemWrapperProps>`
  border-top: 2px solid ${colors.brand.light};
  padding: ${spacing.medium} 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${(props) =>
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
`;

export type SearchNotionItemProps = {
  id: string | number;
  title: string;
  text: ReactNode;
  image?: { url: string; alt: string };
  media?: NotionMedia;
  labels?: string[];
  authors?: { name: string }[];
  license?: string;
  locale?: string;
  onReferenceClick?: MouseEventHandler<HTMLButtonElement>;
  renderMarkdown: (text: ReactNode) => string;
};

const SearchNotionItem = ({
  title,
  text,
  image,
  media,
  labels = [],
  authors = [],
  license,
  locale,
  onReferenceClick,
  renderMarkdown,
}: SearchNotionItemProps) => {
  const { t } = useTranslation();
  const hasMedia = !!(image || media);
  const ShowMediaButton = ({ type, element }: NotionMedia) => {
    return (
      <ShowMediaButtonWrapper>
        <Modal
          activateButton={
            <ButtonV2 colorTheme="lighter" size="xsmall" shape="pill">
              <>
                {type === 'video' && <Play />}
                {type === 'other' && <ArrowExpand />}
                <ShowMediaButtonText>{t('searchPage.resultType.showVideo')}</ShowMediaButtonText>
              </>
            </ButtonV2>
          }
          animation="subtle"
          animationDuration={50}
          size="normal"
        >
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
          {parse(renderMarkdown ? renderMarkdown(`**${title}** \u2013 ${text}`) : `<b>${title}</b> \u2013 ${text}`)}
        </DescriptionWrapper>
        {(authors || license) && (
          <AuthorsWrapper>
            {
              <p>
                {authors.length > 0 &&
                  t('article.writtenBy', {
                    authors:
                      joinArrayWithConjunction(
                        authors.map((author) => author.name),
                        { conjunction: ` ${t('article.conjunction')} ` },
                      ) || '',
                  })}
                {authors.length > 0 && license && ' '}
                {license && `(${getLicenseByAbbreviation(license, locale).abbreviation})`}
                {onReferenceClick && (
                  <ButtonV2 variant="link" onClick={onReferenceClick}>
                    {t('article.cite')}
                  </ButtonV2>
                )}
              </p>
            }
          </AuthorsWrapper>
        )}
        {labels.length > 0 && (
          <LabelsWrapper>
            <LabelsLabel>{t('searchPage.resultType.notionLabels')}:</LabelsLabel>
            {labels.map((label) => (
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

export default SearchNotionItem;
