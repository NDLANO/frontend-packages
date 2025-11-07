/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { AlertLine } from "@ndla/icons";
import { getLicenseByAbbreviation } from "@ndla/licenses";
import { Button, Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { CopyrightDTO as ArticleCopyright } from "@ndla/types-backend/article-api";
import type { CopyrightDTO as AudioCopyright } from "@ndla/types-backend/audio-api";
import type { DraftCopyrightDTO as ConceptCopyright } from "@ndla/types-backend/concept-api";
import type { CopyrightDTO as ImageCopyright } from "@ndla/types-backend/image-api";
import type { BrightcoveCopyright } from "@ndla/types-embed";
import { LicenseLink } from "./LicenseLink";

interface BaseProps {
  description?: ReactNode;
  children?: ReactNode;
  visibleAlt?: string;
  error?: true | false;
  hideDescription?: boolean;
  hideCopyright?: boolean;
}

export interface EmbedBylineErrorProps extends BaseProps {
  type: EmbedBylineTypeProps["type"] | "h5p" | "external" | "code";
  error: true;
}

interface ImageProps extends BaseProps {
  type: "image";
  copyright: ImageCopyright | undefined;
}

interface BrightcoveProps extends BaseProps {
  type: "video";
  copyright: BrightcoveCopyright | undefined;
}

interface AudioProps extends BaseProps {
  type: "audio";
  copyright: AudioCopyright | undefined;
}

interface PodcastProps extends BaseProps {
  type: "podcast";
  copyright: AudioCopyright | undefined;
}

interface ConceptProps extends BaseProps {
  type: "concept" | "gloss";
  copyright: ConceptCopyright | undefined;
}

interface CopyrightProps extends BaseProps {
  type: "copyright";
  copyright: ArticleCopyright | undefined;
}

export type EmbedBylineTypeProps =
  | ImageProps
  | BrightcoveProps
  | AudioProps
  | PodcastProps
  | ConceptProps
  | CopyrightProps;

type Props = EmbedBylineTypeProps | EmbedBylineErrorProps;

const BylineWrapper = styled("figcaption", {
  base: {
    display: "flex",
    flexDirection: "column",
    paddingBlock: "xsmall",
    textStyle: "label.medium",
    color: "text.subtle",
  },
});

const ErrorBylineWrapper = styled(BylineWrapper, {
  base: {
    border: "1px solid",
    borderColor: "stroke.error",
    borderRadius: "xsmall",
    background: "surface.dangerSubtle",
    paddingInline: "medium",
    paddingBlock: "medium",
  },
});

const StyledText = styled(Text, {
  base: {
    fontStyle: "italic",
  },
});

const ContentWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
    alignItems: "center",
    textStyle: "label.medium",
  },
});

const BaseDescription = styled("div", {
  base: {
    display: "inline-flex",
    whiteSpace: "pre-wrap",
  },
});

export const EmbedByline = ({ type, description, children, visibleAlt, hideCopyright, ...props }: Props) => {
  const { t } = useTranslation();

  if (props.error) {
    const typeString = type === "h5p" ? "H5P" : t(`embed.type.${type}`).toLowerCase();
    return (
      <ErrorBylineWrapper>
        <ContentWrapper>
          <AlertLine />
          <BaseDescription>
            <span>{t("embed.embedError", { type: typeString })}</span>
          </BaseDescription>
        </ContentWrapper>
      </ErrorBylineWrapper>
    );
  }

  const { copyright } = props;
  const hideByline = hideCopyright && !description;

  return (
    <>
      {!hideByline && (
        <BylineWrapper>
          <div>
            {!!hideCopyright && description}
            {!hideCopyright && (
              <LicenseContainerContent type={type} copyright={copyright}>
                {description}
              </LicenseContainerContent>
            )}
            {children}
          </div>
        </BylineWrapper>
      )}
      {visibleAlt ? (
        <StyledText color="text.subtle" textStyle="label.medium" asChild consumeCss>
          <span>{`Alt: ${visibleAlt}`}</span>
        </StyledText>
      ) : null}
    </>
  );
};

interface LicenseContainerProps {
  children?: ReactNode;
  copyright: EmbedBylineTypeProps["copyright"];
  type: Props["type"];
}

const StyledDescription = styled(BaseDescription, {
  base: {
    mobileWideDown: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      overflow: "hidden",
      _open: {
        display: "inline",
      },
    },
  },
});

const TextContent = styled("span", {
  base: {
    mobileWideDown: {
      whiteSpace: "nowrap",
      maxHeight: "large",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transitionProperty: "max-height",
      transitionDuration: "slow",
      transitionTimingFunction: "ease-in",
      marginInlineEnd: "4xsmall",
      _open: {
        whiteSpace: "pre-wrap",
        maxHeight: "none",
      },
    },
  },
});

const StyledButton = styled(Button, {
  base: {
    mobileWide: {
      display: "none",
    },
  },
});

interface LicenseDescriptionProps {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LicenseDescription = ({ children, isOpen, setIsOpen }: LicenseDescriptionProps) => {
  const open = isOpen ? { "data-open": "" } : {};
  const { t } = useTranslation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContentWrapper>
      <StyledDescription {...open}>
        <TextContent {...open}>{children}</TextContent>
        <StyledButton variant="link" size="small" onClick={handleToggle}>
          {isOpen ? `${t("audio.readLessDescriptionLabel")}` : `${t("audio.readMoreDescriptionLabel")}`}
        </StyledButton>
      </StyledDescription>
    </ContentWrapper>
  );
};

export const LicenseContainerContent = ({ children, copyright, type }: LicenseContainerProps) => {
  const { t, i18n } = useTranslation();
  const license = copyright ? getLicenseByAbbreviation(copyright.license?.license ?? "", i18n.language) : undefined;
  const captionAuthors =
    [copyright?.creators, copyright?.rightsholders, copyright?.processors].find((authors) => authors?.length) ?? [];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const content = (
    <>
      {children}
      {` ${t(`embed.type.${type}`)}${captionAuthors.length ? ": " : ""}`}
      <span>{captionAuthors.map((author) => author.name).join(", ")}</span>
      {license ? (
        <>
          {" / "}
          {<LicenseLink license={license} hideLink={!isOpen && !!children} />}
        </>
      ) : null}
    </>
  );

  if (children) {
    return (
      <LicenseDescription isOpen={isOpen} setIsOpen={setIsOpen}>
        {content}
      </LicenseDescription>
    );
  }

  return (
    <Text textStyle="label.medium" asChild consumeCss>
      <span>{content}</span>
    </Text>
  );
};
