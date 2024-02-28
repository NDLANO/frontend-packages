/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import { animations, colors, fonts, spacing } from "@ndla/core";
import SafeLink from "@ndla/safelink";

import ItemContexts from "./components/ItemContexts";
import { SearchItemType } from "./SearchItem";
import ContentTypeBadge from "../ContentTypeBadge";
import constants from "../model";
const { contentTypes } = constants;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 192px;
  height: 100%;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 5px;

  img {
    transition: all ${animations.durations.fast} ease-in-out;
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const ItemLink = styled(SafeLink)`
  box-shadow: none;
  color: unset;
  text-decoration: none;
  display: flex;
  position: relative;
  min-height: 0;
  flex: 1;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${spacing.small} ${spacing.small} ${spacing.small} ${spacing.normal};
  max-width: 800px;
`;
const ContentTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  ${fonts.sizes("12px", "16px")};
  font-weight: ${fonts.weight.semibold};
`;
const ContentTypeIconWrapper = styled.div`
  margin-right: ${spacing.small};
`;

const ItemTitleWrapper = styled.div`
  margin: ${spacing.small} 0 ${spacing.xsmall};
`;

const ItemTitle = styled.h3`
  ${fonts.sizes("24px", "28px")};
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  display: inline;
  transition: all ${animations.durations.fast} ease-in-out;
  ${Container}:hover & {
    box-shadow: inset 0 -1px;
    background-color: transparent;
  }
`;

const ItemText = styled.div`
  ${fonts.sizes("16px", "24px")};
  flex: 1 auto;
`;

const ImageWrapper = styled.div<{ isTopic: boolean }>`
  float: right;
  position: relative;
  width: ${(props) => (props.isTopic ? `164px` : `224px`)};
  height: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacing.small};
  overflow: hidden;
  ${(props) => props.isTopic && `border-radius: 50%;`};
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`;

const ImageElement = styled.img`
  border-radius: 2px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: unset;
`;

const ContextWrapper = styled.div`
  transition: all ${animations.durations.fast} ease-in-out;
`;

const SearchItemList = ({ item, type }: SearchItemType) => {
  const { t } = useTranslation();
  const { id, title, url, ingress, contexts, img = null, labels = [] } = item;
  const isTopic = type === contentTypes.TOPIC || type === contentTypes.MULTIDISCIPLINARY_TOPIC;
  return (
    <Container>
      <ItemLink to={url}>
        <TextWrapper>
          {type && (
            <ContentTypeWrapper>
              <ContentTypeIconWrapper>
                <ContentTypeBadge type={type} background border={false} />
              </ContentTypeIconWrapper>
              {t(`contentTypes.${type}`)}
              {labels.length > 0 && (
                <>
                  {labels.map((label) => (
                    <Fragment key={label}>
                      {" "}
                      <>&#8226;</> {label}
                    </Fragment>
                  ))}
                </>
              )}
            </ContentTypeWrapper>
          )}
          <ItemTitleWrapper>
            <ItemTitle>{title}</ItemTitle>
          </ItemTitleWrapper>
          <ItemText>{parse(ingress)}</ItemText>
          <ContextWrapper>
            {contexts && contexts.length > 0 && <ItemContexts contexts={contexts} id={id} title={title} />}
          </ContextWrapper>
        </TextWrapper>
        {img && (
          <ImageWrapper isTopic={isTopic}>
            <ImageElement src={img.url} alt={img.alt} />
          </ImageWrapper>
        )}
      </ItemLink>
    </Container>
  );
};

export default SearchItemList;
