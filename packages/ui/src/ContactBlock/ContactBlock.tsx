/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { SystemStyleObject } from "@ndla/styled-system/types";
import type { ImageMetaInformationV3DTO } from "@ndla/types-backend/image-api";
import { Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useTranslation } from "react-i18next";
import { LicenseContainerContent } from "../LicenseByline/EmbedByline";

export type ContactBlockBackground = "strong" | "moderate" | "subtle";

const BackgroundVariant: Record<ContactBlockBackground, SystemStyleObject> = {
  strong: { _before: { backgroundColor: "surface.brand.3" } },
  moderate: { _before: { backgroundColor: "surface.brand.3.moderate" } },
  subtle: { _before: { backgroundColor: "surface.brand.3.subtle" } },
};

export const contactBlockBackgrounds = Object.keys(BackgroundVariant) as ContactBlockBackground[];

const StyledWrapper = styled("div", {
  base: {
    display: "flex",
    minWidth: "surface.xxsmall",
    padding: "medium",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "full",
    border: "1px solid",
    gap: "medium",
    position: "relative",
    borderColor: "stroke.default",
    borderRadius: "xsmall",
    overflow: "hidden",
    background: "surface.default",
    flexDirection: "column-reverse",
    tablet: {
      alignItems: "unset",
      flexDirection: "row",
    },
  },
});

const EmailLink = styled("a", {
  base: {
    color: "text.default",
    textDecoration: "underline",
    _hover: { textDecoration: "none" },
    _focusVisible: { textDecoration: "none" },
  },
});

const HeaderWrapper = styled("div", {
  base: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "3xsmall",
    zIndex: "base",
    _before: {
      content: '""',
      position: "absolute",
      top: "-60px",
      left: "-50px",
      right: "0",
      bottom: "0",
      height: "calc(100% + 50px)",
      width: "surface.3xlarge",
      transform: "rotate(-4deg)",
      zIndex: "hide",
    },
  },
  variants: {
    variant: BackgroundVariant,
    imageExists: {
      true: {
        tabletDown: {
          _before: {
            display: "none",
          },
        },
      },
    },
  },
});

const ImageWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xxsmall",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    zIndex: "base",
    tabletDown: {
      _before: {
        content: '""',
        position: "absolute",
        top: "-50px",
        left: "-50px",
        right: "0",
        bottom: "0",
        height: "surface.xxsmall",
        width: "surface.3xlarge",
        transform: "rotate(-4deg)",
        zIndex: "hide",
      },
    },
  },
  variants: {
    variant: BackgroundVariant,
  },
});

const StyledImage = styled("img", {
  base: {
    borderRadius: "xsmall",
    width: "surface.xsmall",
    height: "surface.xsmall",
    objectFit: "cover",
  },
});

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    flex: "1",
    width: "100%",
  },
});

const StyledDescription = styled(Text, {
  base: {
    fontFamily: "serif",
  },
});

interface Props {
  image?: ImageMetaInformationV3DTO;
  jobTitle: string;
  description: string;
  backgroundColor?: ContactBlockBackground;
  imageWidth?: number;
  name: string;
  email: string;
  embedAlt?: string;
  lang?: string;
}

export const ContactBlock = ({
  image,
  jobTitle,
  description,
  name,
  email,
  embedAlt,
  lang,
  backgroundColor = "strong",
}: Props) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper data-embed-type="contact-block">
      <ContentWrapper>
        <HeaderWrapper variant={backgroundColor} imageExists={!!image}>
          <Text lang={lang} fontWeight="bold" textStyle="heading.small">
            {name}
          </Text>
          <Text lang={lang}>{jobTitle}</Text>
          <Text>
            {`${t("email")}: `}
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          </Text>
        </HeaderWrapper>
        <StyledDescription textStyle="body.large">{description}</StyledDescription>
      </ContentWrapper>
      {!!image && (
        <ImageWrapper variant={backgroundColor}>
          <StyledImage
            alt={embedAlt !== undefined ? embedAlt : image.alttext.alttext}
            src={image.image.imageUrl}
            width={300}
            height={300}
          />
          <LicenseContainerContent type="image" copyright={image.copyright} />
        </ImageWrapper>
      )}
    </StyledWrapper>
  );
};
