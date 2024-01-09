/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing, spacingUnit, breakpoints, mq, colors } from "@ndla/core";
import { getLicenseByAbbreviation } from "@ndla/licenses";
import { LicenseByline } from "@ndla/notion";
import { Heading } from "@ndla/typography";

type StyledWrapperProps = {
  invertedStyle?: boolean;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  background: transparent;
  max-width: 720px;
  margin: ${spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
  ul {
    padding-left: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin: ${spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
    padding: ${spacing.normal} ${spacing.large} ${spacing.large} ${spacing.xxlarge};
    ul {
      margin-left: ${spacing.normal};
    }
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    margin: 0;
    padding: ${spacing.small} ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${(props) =>
      props.invertedStyle &&
      `
      color: #fff;
    `}
  }
`;

const LicenseWrapper = styled.div`
  ul {
    padding-left: 0;
  }
`;

const StyledHeader = styled(Heading)`
  margin-bottom: ${spacing.small};
`;

interface Props {
  description?: string;
  title: string;
  invertedStyle?: boolean;
  id?: string;
  license?: {
    license: string;
  };
}

export const LearningPathInformation = ({ description, title, license, invertedStyle, id }: Props) => {
  const { rights } = getLicenseByAbbreviation(license?.license || "", "nb");
  return (
    <section className="o-wrapper">
      <StyledWrapper invertedStyle={invertedStyle} className="c-article">
        <LicenseWrapper>
          <StyledHeader element="h1" headingStyle="h1" tabIndex={-1} id={id}>
            {title}
          </StyledHeader>
          <LicenseByline licenseRights={rights} color={colors.brand.tertiary} />
        </LicenseWrapper>
        {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      </StyledWrapper>
    </section>
  );
};
