/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArrowRightShortLine, Home } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import Breadcrumb from "./Breadcrumb";
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from "./BreadcrumbItem";

const StyledSafeLink = styled(SafeLink, {
  base: {
    color: "inherit",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
    _focusVisible: {
      textDecoration: "none",
    },
  },
});

const StyledArrowRight = styled(ArrowRightShortLine, {
  base: {
    tabletDown: {
      display: "none",
    },
  },
});

const IconSafeLink = styled(SafeLink, {
  base: {
    color: "inherit",
  },
});

interface Props {
  items: SimpleBreadcrumbItem[];
}

const HomeBreadcrumb = ({ items }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <span>{item.name}</span>;
    }
    if (item.index === 0 && typeof item.name === "string") {
      return (
        <IconSafeLink aria-label={item.name} to={item.to}>
          <Home title={item.name} />
        </IconSafeLink>
      );
    }
    return <StyledSafeLink to={item.to}>{item.name}</StyledSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    if (item.index === 0) {
      return <StyledArrowRight />;
    }
    return <ArrowRightShortLine />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default HomeBreadcrumb;
