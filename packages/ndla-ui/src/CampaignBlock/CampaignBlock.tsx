/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, spacing, mq, misc } from "@ndla/core";
import { Forward } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { HeadingLevel } from "@ndla/typography";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  title: string;
  description: string;
  headingLevel?: HeadingLevel;
  url: {
    url?: string;
    text?: string;
  };
  image?: Image;
  imageSide?: "left" | "right";
  className?: string;
  path?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.normal};
  border: 1px ${colors.brand.lighter} solid;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal};
  background-color: ${colors.white};
  &[data-image-side="right"] {
    flex-direction: column-reverse;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 1100px;
    flex-direction: row;
    &[data-image-side="right"] {
      flex-direction: row-reverse;
    }
  }
`;

const headingStyle = css`
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${fonts.serif};
  margin: ${spacing.normal} 0 ${spacing.medium};
`;

const StyledImg = styled.img`
  align-self: center;
  object-fit: cover;
  max-width: 200px;
  /*   This is unset globally on images */
  max-height: 200px !important;
  min-width: 200px;
  min-height: 200px;
`;

const StyledLink = styled(SafeLink)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  color: ${colors.brand.primary};
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const CampaignBlock = ({
  title,
  image,
  imageSide = "left",
  description,
  headingLevel: Heading = "h2",
  url,
  path,
  className,
}: Props) => {
  return (
    <Container className={className} data-type="campaign-block" data-image-side={imageSide}>
      {image && <StyledImg src={image.src} height={200} width={200} alt={image.alt} />}
      <TextWrapper>
        <Heading css={headingStyle}>{parse(title)}</Heading>
        <StyledDescription>{parse(description)}</StyledDescription>
        {!!url?.url && (
          <StyledLink to={getPossiblyRelativeUrl(url.url, path)}>
            {parse(url.text ?? "")}
            <Forward />
          </StyledLink>
        )}
      </TextWrapper>
    </Container>
  );
};

export default CampaignBlock;
