/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ElementType, Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { fonts, mq, spacing, breakpoints, colors, spacingUnit } from "@ndla/core";
import { Spinner } from "@ndla/icons";
import { ChevronRight } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { Tooltip } from "@ndla/tooltip";
import { uuid } from "@ndla/util";

interface ItemType {
  id: string | number;
  title?: string;
  url?: string | { href: string };
  breadcrumb?: string[];
  subjects?: {
    title: string;
    url?: string | { href: string };
    breadcrumb?: string[];
  }[];
  additional?: boolean;
  image?: ReactNode;
  ingress: string;
  contentTypeIcon?: string;
  contentTypeLabel?: string;
  children?: ReactNode;
  type?: string;
}

interface SearchResultItemProps {
  children?: ReactNode;
  subjectsLabel: string;
  additionalContentTooltip: string;
  item: ItemType;
}

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > * {
    margin: 0 ${spacing.small} ${spacing.small} 0;
  }

  ${mq.range({ until: breakpoints.tablet })} {
    h1 {
      width: 100%;
    }
  }
`;

const ContentTypeWrapper = styled.div`
  margin: 0 ${spacing.small} ${spacing.small} 0;
  display: flex;
  align-items: center;
`;

const PillsWrapper = styled.div`
  background: ${colors.brand.greyLightest};
  margin-right: ${spacing.small};
  padding: 0 ${spacingUnit / 3}px;
  border-radius: 50%;
  ${fonts.sizes("12px", "20px")};
  font-weight: ${fonts.weight.semibold};
`;

const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & > img,
  & > picture > img {
    width: 75px;
    height: auto;
    flex-shrink: 0;
    margin: 0 0 ${spacing.small} ${spacing.small};

    ${mq.range({ from: breakpoints.tabletWide })} {
      width: 80px;
      margin-left: ${spacing.normal};
      margin-right: ${spacing.small};
    }
  }
`;

const StyledIngress = styled.p`
  margin: 0 0 ${spacing.normal} 0;
  width: 100%;
  flex-grow: 1;
  ${fonts.sizes("14px", "22px")};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes("16px", "24px")};
    max-width: 550px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes("18px", "26px")};
    max-width: 600px;
  }
`;

const StyledSubjects = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${spacing.normal};
  ${fonts.sizes("14px", "16px")};

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes("16px", "18px")};
  }

  & > span {
    text-transform: uppercase;
    color: ${colors.text.light};
    padding-right: ${spacing.small};
    ${fonts.sizes("14px", "16px")};
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
    position: relative;
    line-height: 1rem;

    padding: 0 ${spacing.xsmall} 0 0;
    margin-right: ${spacing.xsmall};

    ${mq.range({ from: breakpoints.desktop })} {
      padding: 0 ${spacing.small} 0 0;
      margin-right: ${spacing.small};
    }

    &::after {
      content: "";
      width: 1px;
      height: 15px;
      background: ${colors.brand.greyLight};
      display: block;
      position: absolute;
      right: 0;
      top: 3px;
    }
    &:first-child {
      font-weight: 600;
    }

    &:last-child {
      &:after {
        display: none;
      }

      margin-right: 0;
    }
  }
`;

const StyledSearchResultItem = styled.li`
  border-bottom: 1px solid ${colors.brand.greyLight};
  padding: 0 ${spacing.normal} 0 ${spacing.normal};

  ${mq.range({ from: breakpoints.desktop })} {
    padding: 0;
  }

  margin: 0 0 ${spacing.normal};

  &:first-child {
    margin-top: ${spacing.normal};
  }

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }

  h1 {
    font-weight: 600;
    ${fonts.sizes("16px", "20px")};

    ${mq.range({ from: breakpoints.desktop })} {
      ${fonts.sizes("22px", "28px")};
    }

    a {
      color: ${colors.brand.dark};

      &:hover,
      &:focus,
      &:active {
        color: ${colors.brand.dark};
      }
    }
  }
`;

const StyledBreadcrumb = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${colors.text.light};
  margin-bottom: ${spacing.normal};
  ${fonts.sizes("14px", "18px")};
  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes("16px", "24px")};
  }
  [data-icon] {
    width: ${spacing.small};
    height: ${spacing.small};
    margin: 0 ${spacingUnit / 3}px;

    ${mq.range({ from: breakpoints.desktop })} {
      margin: 0 ${spacing.xsmall};
    }
  }
`;

export const SearchResultItem = ({
  item,
  subjectsLabel,
  additionalContentTooltip,
  children,
}: SearchResultItemProps) => {
  const itemBreadcrumb = (breadcrumbs: string[] = [], itemBreadcrumb?: boolean) => {
    const Breadcrumb: ElementType = itemBreadcrumb ? StyledBreadcrumb : "div";
    if (breadcrumbs.length > 0) {
      return (
        <Breadcrumb>
          {breadcrumbs.map((breadcrumbItem, index) => {
            let icon = null;
            if (index !== (item.breadcrumb?.length || 0) - 1) {
              icon = <ChevronRight />;
            }
            return (
              <Fragment key={uuid()}>
                <span>{breadcrumbItem}</span>
                {icon}
              </Fragment>
            );
          })}
        </Breadcrumb>
      );
    }
  };
  return (
    <StyledSearchResultItem key={item.id}>
      <article>
        <StyledHeader>
          <h1>
            {item.url && typeof item.url !== "string" ? (
              <a {...item.url}>{item.title}</a>
            ) : (
              <SafeLink to={item.url ?? ""}>{item.title}</SafeLink>
            )}
          </h1>
          <ContentTypeWrapper>{item.contentTypeIcon}</ContentTypeWrapper>
          {item.contentTypeLabel && <PillsWrapper>{item.contentTypeLabel}</PillsWrapper>}
          {item.type && <PillsWrapper>{item.type}</PillsWrapper>}
          {item.additional && <PillsWrapper>{additionalContentTooltip}</PillsWrapper>}
          {children}
        </StyledHeader>
        <StyledContent>
          <StyledIngress dangerouslySetInnerHTML={{ __html: item.ingress }} />
          {item.image}
        </StyledContent>
        {(!item.subjects || item.subjects.length === 0) && itemBreadcrumb(item.breadcrumb, true)}
        {item.subjects && item.subjects.length !== 0 && (
          <StyledSubjects>
            <span>{subjectsLabel}</span>
            <ul>
              {item.subjects.map((subject) => (
                <li key={uuid()}>
                  <Tooltip tooltip={itemBreadcrumb(subject.breadcrumb)}>
                    {subject.url && typeof subject.url !== "string" ? (
                      <a {...subject.url}>{subject.title}</a>
                    ) : (
                      <SafeLink to={subject.url ?? ""}>{subject.title}</SafeLink>
                    )}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </StyledSubjects>
        )}
      </article>
    </StyledSearchResultItem>
  );
};

interface SearchResultListProps {
  loading?: boolean;
  results?: ItemType[];
}

const EmptyResultList = styled.article`
  margin-top: ${spacing.large};
  h1 {
    ${fonts.sizes("22px", "32px")};
    font-weight: ${fonts.weight.bold};
    margin: 0 0 ${spacing.small};
  }

  p {
    ${fonts.sizes("16px", "22px")};
    margin: 0;
    font-family: ${fonts.serif};

    ${mq.range({ from: breakpoints.desktop })} {
      ${fonts.sizes("18px", "32px")};
    }
  }
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.medium} 0 0 0;
  }
`;

export const SearchResultList = ({ results, loading }: SearchResultListProps) => {
  const { t } = useTranslation();
  if (loading) {
    return <Spinner />;
  }
  if (!results) {
    return <EmptyResultList />;
  }
  return results.length === 0 ? (
    <EmptyResultList>
      <h1>{t("searchPage.searchResultListMessages.noResultHeading")}</h1>
      <p>{t("searchPage.searchResultListMessages.noResultDescription")}</p>
    </EmptyResultList>
  ) : (
    <ResultList>
      {results.map((item) => (
        <SearchResultItem
          key={`search_result_item_${typeof item.url === "object" ? item.url.href : item.url}`}
          item={item}
          additionalContentTooltip={t("resource.tooltipAdditionalTopic")}
          subjectsLabel={t("searchPage.searchResultListMessages.subjectsLabel")}
        >
          {item.children}
        </SearchResultItem>
      ))}
    </ResultList>
  );
};
