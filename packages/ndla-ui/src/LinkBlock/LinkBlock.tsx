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
import styled from "@emotion/styled";
import { breakpoints, colors, spacing, mq } from "@ndla/core";
import { Forward, CalendarEd } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { LinkBlockEmbedData } from "@ndla/types-embed";
import { Heading } from "@ndla/typography";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

const StyledForward = styled(Forward)`
  margin: 0 ${spacing.nsmall};
  min-width: ${spacing.normal};
  min-height: ${spacing.normal};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const StyledSafeLink = styled(SafeLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
  color: inherit;
  background-color: ${colors.white};
  border: 1px solid ${colors.brand.lighter};
  padding: ${spacing.normal};
  ${mq.range({ from: breakpoints.tabletWide })} {
    &:hover {
      & ${InfoWrapper} :first-child {
        text-decoration: underline;
      }
      & ${StyledForward} {
        width: 32px;
        height: 32px;
      }
    }
    &:focus-visible {
      border: 2px solid ${colors.brand.dark};
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    & ${InfoWrapper} :first-child {
      text-decoration: underline;
    }
    :active :first-child {
      text-decoration: none;
    }
  }
`;

const StyledDateContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${spacing.xsmall};
  gap: ${spacing.small};
`;

const StyledCalenderEd = styled(CalendarEd)`
  color: ${colors.icon.iconBlue};
`;

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
    <StyledSafeLink to={href}>
      <InfoWrapper>
        <Heading element="h3" margin="none" headingStyle="h3">
          {parse(title)}
        </Heading>
        {date && (
          <StyledDateContainer>
            <StyledCalenderEd />
            {formattedDate}
          </StyledDateContainer>
        )}
      </InfoWrapper>
      <StyledForward />
    </StyledSafeLink>
  );
};

export default LinkBlock;
