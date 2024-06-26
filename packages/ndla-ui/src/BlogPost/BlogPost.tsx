/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, misc, mq, spacing } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import { HeadingLevel } from "@ndla/typography";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

export interface Props {
  title: string;
  author?: string;
  url: string;
  headingLevel?: HeadingLevel;
  size?: "normal" | "large";
  metaImage: {
    url: string;
    alt: string;
  };
  path?: string;
}

const Container = styled(SafeLink)`
  margin: 0 0 ${spacing.normal} 0;
  display: flex;
  flex-direction: column;
  color: ${colors.text.primary};
  background-color: ${colors.white};
  gap: ${spacing.nsmall};
  box-shadow: none;
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal} ${spacing.medium};
  height: 100%;
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 350px;
    &[data-size="large"] {
      max-width: 532px;
    }
  }
  &:hover,
  &:focus-within {
    .blog-title {
      text-decoration: underline;
    }
  }
`;

const headingCss = css`
  display: inline-block;
  width: fit-content;
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes("26px", "36px")};
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  svg {
    color: rgba(78, 81, 242, 1);
  }
  text-transform: uppercase;
`;

const StyledImg = styled.img`
  border-radius: ${misc.borderRadius};
  flex: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 0;
`;

const BlogPost = ({ title, author, url, metaImage, headingLevel: Heading = "h3", size = "normal", path }: Props) => {
  const { t } = useTranslation();
  const href = getPossiblyRelativeUrl(url, path);
  const imageWidth = size === "large" ? 532 : 350;
  return (
    <Container data-size={size} to={href}>
      <Heading className="blog-title" css={headingCss}>
        {parse(title)}
      </Heading>
      <StyledImg src={`${metaImage.url}?width=${imageWidth}`} alt={metaImage.alt} />
      {!!author && <AuthorContainer aria-label={t("article.writtenBy", { authors: author })}>{author}</AuthorContainer>}
    </Container>
  );
};

export default BlogPost;
