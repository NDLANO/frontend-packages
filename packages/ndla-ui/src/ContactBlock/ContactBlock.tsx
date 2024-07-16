/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing, fonts, colors, mq, breakpoints, misc } from "@ndla/core";
import { BlobPointy as UnstyledBlobPointy, BlobRound as UnstyledBlobRound } from "@ndla/icons/common";
import { COPYRIGHTED, getLicenseByAbbreviation } from "@ndla/licenses";
import { Image } from "@ndla/primitives";
import { IAuthor, IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { CanonicalUrlFuncs } from "../Embed";
import { errorSvgSrc } from "../Embed/ImageEmbed";
import LicenseLink from "../LicenseByline/LicenseLink";

const BLOB_WIDTH = 90;

interface Props {
  image?: IImageMetaInformationV3;
  jobTitle: string;
  description: string;
  blobColor?: "pink" | "green";
  blob?: "pointy" | "round";
  imageWidth?: number;
  name: string;
  email: string;
  embedAlt?: string;
  lang?: string;
  imageCanonicalUrl?: CanonicalUrlFuncs["image"];
}
const BlockWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 0 ${spacing.medium} ${spacing.medium};
  font-family: ${fonts.sans};
  border-radius: ${misc.borderRadius};
  border: 1px solid ${colors.brand.lighter};
  background-color: ${colors.white};
  & ~ & {
    margin-top: ${spacing.medium};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    max-width: 773px;
    flex-direction: row;
    padding: 0 0 ${spacing.medium} ${spacing.medium};
    gap: ${spacing.nsmall};
  }
`;

const StyledHeader = styled.div`
  ${fonts.sizes("22px", "30px")};
  font-weight: ${fonts.weight.bold};
  margin: 0 0 ${spacing.xsmall} 0;
  padding-top: ${spacing.medium};
`;

const StyledText = styled.div`
  display: flex;
  ${fonts.sizes("16px", "26px")};
  overflow-wrap: anywhere;
  color: ${colors.text.light};
  gap: ${spacing.xxsmall};
`;

const EmailLink = styled.a`
  color: ${colors.text.light};
  text-decoration-color: ${colors.text.light};
  text-decoration-style: solid;
  text-decoration: underline;
  box-shadow: unset;
`;

const SummaryBlock = styled.p`
  font-family: ${fonts.sans};
  padding: 0;
  max-width: calc(100% - (${BLOB_WIDTH}px / 2));
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-top: 0;
  }
`;

const InfoWrapper = styled.div`
  max-width: calc(100% - ${BLOB_WIDTH}px);
`;

const TextWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`;

const BlobWrapper = styled.div`
  height: 180px;
  width: ${BLOB_WIDTH}px;
  position: absolute;
  overflow: hidden;
  right: 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  ${fonts.sizes("16px", "26px")};
  padding: ${spacing.medium} ${spacing.medium} 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding-right: 0;
  }
`;

const blobStyling = css`
  width: 165px;
  height: 180px;
  transform: translate(10%, 0);
  color: ${colors.support.redLight};
  &[data-green="true"] {
    color: ${colors.support.greenLight};
  }
`;

const BlobPointy = styled(UnstyledBlobPointy)`
  ${blobStyling}
`;

const BlobRound = styled(UnstyledBlobRound)`
  ${blobStyling}
`;
const Email = styled.div`
  white-space: nowrap;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

interface LinkWrapperProps {
  src?: string;
  children: ReactNode;
}

const StyledLink = styled.a`
  text-decoration: none;
`;

const LinkWrapper = ({ src, children }: LinkWrapperProps) => {
  if (src) {
    return (
      <StyledLink target="_blank" href={src} rel="noopener noreferrer">
        {children}
      </StyledLink>
    );
  }
  return children;
};

const ContactBlock = ({
  image,
  jobTitle,
  description,
  name,
  email,
  embedAlt,
  blobColor = "green",
  blob = "pointy",
  imageCanonicalUrl,
  lang,
}: Props) => {
  const { t, i18n } = useTranslation();
  const isGreenBlob = blobColor === "green";
  const Blob = blob === "pointy" ? BlobPointy : BlobRound;
  const authors = [image?.copyright.processors, image?.copyright.creators, image?.copyright.rightsholders]
    .filter((authors) => !!authors?.length)
    .reduce<IAuthor[]>((acc, val) => acc.concat(val!), []);
  const license = image?.copyright
    ? getLicenseByAbbreviation(image.copyright.license.license, i18n.language)
    : undefined;

  const isCopyrighted = image?.copyright.license.license.toLowerCase() === COPYRIGHTED;

  return (
    <BlockWrapper>
      <ImageWrapper>
        {image ? (
          <>
            <LinkWrapper src={!isCopyrighted && image ? imageCanonicalUrl?.(image) : undefined}>
              <StyledImage
                alt={embedAlt !== undefined ? embedAlt : image.alttext.alttext}
                src={image.image.imageUrl}
                sizes={`(min-width: ${breakpoints.tablet}) 240px, (max-width: ${breakpoints.tablet}) 500px`}
              />
            </LinkWrapper>
            <span>
              {`${t("embed.type.image")}: ${authors.map((author) => `${author?.name}`).join(", ")} `}
              {!!license && <LicenseLink license={license} />}
            </span>
          </>
        ) : (
          <img alt={t("image.error.url")} src={errorSvgSrc} />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <InfoWrapper>
            <StyledHeader lang={lang}>{name}</StyledHeader>
            <StyledText lang={lang}>{jobTitle}</StyledText>
            <StyledText>
              <Email>{`${t("email")}:`}</Email>
              <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </StyledText>
          </InfoWrapper>
          <BlobWrapper>
            <Blob data-green={isGreenBlob} />
          </BlobWrapper>
        </TextWrapper>
        <SummaryBlock>{description}</SummaryBlock>
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default ContactBlock;
