/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { format } from "date-fns";
import { enGB, nb, nn } from "date-fns/locale";
import parse from "html-react-parser";
import { useMemo } from "react";
import { Forward } from "@ndla/icons/common";
import { CalendarLine } from "@ndla/icons/editor";
import { Heading } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { LinkBlockEmbedData } from "@ndla/types-embed";
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
    // TODO: Check if this is correct. Not part of design. Also check if this should have border-radius.
    borderColor: "stroke.default",
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

const LinkBlock = ({ title, articleLanguage, date, url, path }: Props) => {
  const href = getPossiblyRelativeUrl(url, path);
  const formattedDate = useMemo(() => {
    if (!date) return null;
    const locale = articleLanguage === "nb" ? nb : articleLanguage === "nn" ? nn : enGB;
    return format(new Date(date), "dd. LLLL yyyy", { locale });
  }, [date, articleLanguage]);
  return (
    <StyledSafeLink to={href} data-embed-type="link-block">
      <InfoWrapper>
        <Heading asChild consumeCss textStyle="title.medium">
          <h3 data-heading>{parse(title)}</h3>
        </Heading>
        {date && (
          <StyledDateContainer>
            <StyledCalendarEd />
            {formattedDate}
          </StyledDateContainer>
        )}
      </InfoWrapper>
      <Forward data-forward />
    </StyledSafeLink>
  );
};

export default LinkBlock;
