/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";

import { HeadingLevel } from "@ndla/typography";
import ResourceList, { ResourceListProps } from "./ResourceList";

const Wrapper = styled.section`
  margin-bottom: ${spacing.large};
`;

const headingStyle = css`
  ${fonts.sizes("16px", "18px")};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: ${spacing.small} 0 ${spacing.xsmall};
`;

const invertedStyle = css`
  color: ${colors.white};
`;

type Props = {
  invertedStyle?: boolean;
  toggleAdditionalResources: () => void;
  heartButton?: (path: string) => ReactNode;
  headingLevel?: HeadingLevel;
};

const ResourceGroup = ({
  title,
  resources,
  showAdditionalResources,
  toggleAdditionalResources,
  contentType,
  invertedStyle: invertedStyleProp,
  headingLevel: Heading = "h1",
  heartButton,
}: Props & ResourceListProps) => (
  <Wrapper>
    {title && <Heading css={[headingStyle, invertedStyleProp ? invertedStyle : undefined]}>{title}</Heading>}
    {resources.length > 0 ? (
      <ResourceList
        title={title}
        onClick={toggleAdditionalResources}
        showAdditionalResources={showAdditionalResources}
        contentType={contentType}
        resources={resources}
        heartButton={heartButton}
      />
    ) : null}
  </Wrapper>
);

export default ResourceGroup;
