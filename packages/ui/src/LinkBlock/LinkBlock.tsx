/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LinkBlockEmbedData } from "@ndla/types-embed";
import { ArrowRightLine, CalendarLine } from "@ndla/icons";
import { Heading } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import parse from "html-react-parser";
import { useMemo } from "react";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

const InfoWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
  },
});

const StyledSafeLink = styled(SafeLink, {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "surface.default",
    padding: "medium",
    border: "1px solid",
    borderColor: "stroke.subtle",
    borderRadius: "xsmall",
    "& h3": {
      textDecoration: "underline",
    },
    "& [data-forward]": {
      transitionProperty: "width, height",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "fast",
    },
    _hover: {
      "& h3": {
        textDecoration: "none",
      },
      "& [data-forward]": {
        width: "large",
        height: "large",
      },
    },
  },
});

const StyledDateContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "xxsmall",
  },
});

const StyledCalendarEd = styled(CalendarLine, {
  base: {
    color: "icon.strong",
  },
});

interface Props extends Omit<LinkBlockEmbedData, "resource"> {
  path?: string;
  articleLanguage?: string;
}

export const LinkBlock = ({ title, articleLanguage, date, url, path }: Props) => {
  const href = getPossiblyRelativeUrl(url, path);
  const formattedDate = useMemo(() => {
    if (!date) return null;
    return new Intl.DateTimeFormat(articleLanguage, {
      timeZone: "CET",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  }, [date, articleLanguage]);
  return (
    <StyledSafeLink to={href} data-embed-type="link-block">
      <InfoWrapper>
        <Heading asChild consumeCss textStyle="title.medium">
          <h3 data-heading>{parse(title)}</h3>
        </Heading>
        {!!date && (
          <StyledDateContainer>
            <StyledCalendarEd />
            {formattedDate}
          </StyledDateContainer>
        )}
      </InfoWrapper>
      <ArrowRightLine data-forward />
    </StyledSafeLink>
  );
};
