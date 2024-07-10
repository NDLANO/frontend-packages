/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { ElementType, ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import { stepNumbers } from "./pagerHelpers";

const createQueryString = (obj: Query) =>
  Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

type ColorTheme = "primary" | "lighter";

const pageItemActiveStyle = css`
  border-top: 3px solid ${colors.brand.primary};
  background-color: "rgba(222,235,246,0.5)";
`;

const pageItemStyle = (small = false, color: ColorTheme) => css`
  display: inline;
  background: transparent;
  border: 0;
  border-top: 3px solid ${color === "primary" ? colors.background.dark : colors.white};
  padding: ${small ? "0.2em 0.6em" : "1em 1.45em"};
  margin: 1em 0.3em 0;
  text-decoration: none;
  box-shadow: none;
  color: ${colors.brand.primary};
  cursor: pointer;
  &:hover {
    ${pageItemActiveStyle};
  }
`;

const StyledSafeLink = styled(SafeLink)`
  background: transparent;
  border: 0;
  border-top: 3px solid ${colors.white};
  padding: 1em 1.45em;
  margin: 1em 0.3em 0;
  text-decoration: none;
  box-shadow: none;
  color: ${colors.brand.primary};
  cursor: pointer;
  &[data-color="primary"] {
    border-top: 3px solid ${colors.background.dark};
  }
  &[data-small="true"] {
    padding: 0.2em 0.6em;
  }
  &:hover {
    ${pageItemActiveStyle};
  }
`;

type Query = Record<string, any>;

interface PageItemProps<T extends Query> {
  pageItemComponentClass: ElementType;
  children: ReactNode;
  page: number;
  query: T;
  pathname: string;
  onClick: (query: T & { page: number }) => void;
  type?: string;
  small: boolean;
  colorTheme: ColorTheme;
}

export const PageItem = <T extends Query>({
  children,
  page,
  query: currentQuery,
  pathname,
  onClick,
  pageItemComponentClass: Component,
  type,
  small,
  colorTheme,
}: PageItemProps<T>) => {
  const query = { ...currentQuery, page };
  const linkToPage = {
    pathname,
    search: createQueryString(query),
  };

  const handleClick = () => onClick(query);

  if (Component === SafeLink) {
    return (
      <StyledSafeLink data-color={colorTheme} data-small={small} onClick={handleClick} to={linkToPage}>
        {children}
      </StyledSafeLink>
    );
  }
  return (
    <Component css={pageItemStyle(small, colorTheme)} onClick={handleClick} type={type}>
      {children}
    </Component>
  );
};

const StyledPager = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

interface Props<T extends Query> {
  page: number;
  lastPage: number;
  pathname?: string;
  query: T;
  onClick?: (query: T & { page: number }) => void;
  pageItemComponentClass?: ElementType;
  small?: boolean;
  colorTheme?: ColorTheme;
}

const Pager = <T extends Query>({
  page,
  lastPage,
  onClick = (_) => {},
  pageItemComponentClass = SafeLink,
  query,
  pathname = "",
  small = false,
  colorTheme = "primary",
}: Props<T>) => {
  const steps = stepNumbers(page, lastPage);

  const rest = {
    onClick,
    pageItemComponentClass,
    query,
    pathname,
    small,
    colorTheme,
  };
  const PageItems = steps.map((n) => {
    if (n === page) {
      return (
        <span key={n} aria-current="step" css={[pageItemStyle(small, colorTheme), pageItemActiveStyle]}>
          {n}
        </span>
      );
    }
    return (
      <PageItem key={n} page={n} {...rest}>
        {n}
      </PageItem>
    );
  });

  const prevPageItem =
    steps[0] < page ? (
      <PageItem page={page - 1} {...rest}>
        {"<"}
      </PageItem>
    ) : null;
  const nextPageItem =
    page < lastPage ? (
      <PageItem page={page + 1} {...rest}>
        {">"}
      </PageItem>
    ) : null;

  return (
    <StyledPager data-testid="pager">
      {prevPageItem}
      {PageItems}
      {nextPageItem}
    </StyledPager>
  );
};

export default Pager;
