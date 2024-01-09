/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";

import ContentTypeBadge from "../../ContentTypeBadge";
import { SearchItemType } from "../SearchItem";
import { ContentType } from "../SearchTypeResult";

const Wrapper = styled.header`
  padding: ${spacing.small} ${spacing.normal} 0;
`;

const Label = styled.div`
  ${fonts.sizes("12px", "16px")};
  font-weight: ${fonts.weight.semibold};
  height: 26px;
  display: flex;
  align-items: center;
  margin: ${spacing.small} 0;

  [data-badge] {
    width: 26px;
    height: 26px;
    margin-right: ${spacing.xsmall};
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${colors.text.primary} !important;
  }
`;

const TopicHeaderVisualElementWrapper = styled.div`
  float: right;
  margin-left: ${spacing.small};
  width: 110px;
  height: 110px;
  display: flex;
  overflow: hidden;
  border-radius: 50%;
`;

const TopicHeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: unset;
`;

interface Props {
  children: ReactNode;
  image?: SearchItemType["item"]["img"] | null;
  type?: ContentType;
}

const ItemTopicHeader = ({ children, image, type }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {image && (
        <TopicHeaderVisualElementWrapper>
          <TopicHeaderImage className="topic-header-image" src={image.url} alt="" />
        </TopicHeaderVisualElementWrapper>
      )}
      <Label className="topic-label">
        {type && (
          <>
            <ContentTypeBadge type={type} border={false} />
            {t(`contentTypes.${type}`)}
          </>
        )}
      </Label>
      {children}
    </Wrapper>
  );
};

export default ItemTopicHeader;
