/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, fonts, misc, spacing } from "@ndla/core";
import { WarningOutline } from "@ndla/icons/common";
import { getLicenseByAbbreviation, getLicenseCredits } from "@ndla/licenses";
import { ICopyright as ArticleCopyright } from "@ndla/types-backend/article-api";
import { ICopyright as AudioCopyright } from "@ndla/types-backend/audio-api";
import { IDraftCopyright as ConceptCopyright } from "@ndla/types-backend/concept-api";
import { ICopyright as ImageCopyright } from "@ndla/types-backend/image-api";
import { BrightcoveCopyright } from "@ndla/types-embed";
import LicenseDescription from "./LicenseDescription";
import LicenseLink from "./LicenseLink";

interface BaseProps {
  topRounded?: boolean;
  bottomRounded?: boolean;
  description?: ReactNode;
  children?: ReactNode;
  visibleAlt?: string;
  error?: true | false;
}

export interface EmbedBylineErrorProps extends BaseProps {
  type: EmbedBylineTypeProps["type"] | "h5p" | "external";
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

const BylineWrapper = styled.figcaption`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.sans};
  ${fonts.sizes("16px", "26px")};
  padding: ${spacing.small} 0;
  background-color: ${colors.white};
  &[data-top-rounded="true"] {
    border-top-right-radius: ${misc.borderRadius};
    border-top-left-radius: ${misc.borderRadius};
  }

  &[data-bottom-rounded="true"] {
    border-bottom-right-radius: ${misc.borderRadius};
    border-bottom-left-radius: ${misc.borderRadius};
  }

  &[data-error="true"] {
    border: none;
    background-color: ${colors.support.redLightest};
    padding: ${spacing.nsmall} ${spacing.normal};
    ${fonts.sizes("18px", "24px")};
  }
`;

const StyledSpan = styled.span`
  font-style: italic;
  color: grey;
  font-family: ${fonts.sans};
  ${fonts.sizes("16px", "26px")};
`;

const EmbedByline = ({ type, topRounded, bottomRounded, description, children, visibleAlt, ...props }: Props) => {
  const { t } = useTranslation();

  if (props.error) {
    const typeString = type === "h5p" ? "H5P" : t(`embed.type.${type}`).toLowerCase();
    return (
      <BylineWrapper data-top-rounded={topRounded} data-bottom-rounded={bottomRounded} data-error={true}>
        <LicenseDescription warningByline={props.error} icon={<WarningOutline />}>
          {t("embed.embedError", { type: typeString })}
        </LicenseDescription>
      </BylineWrapper>
    );
  }

  const { copyright } = props;

  return (
    <>
      <BylineWrapper>
        <div>
          <LicenseContainerContent type={type} copyright={copyright}>
            {description}
          </LicenseContainerContent>
          {children}
        </div>
      </BylineWrapper>
      {visibleAlt ? <StyledSpan>{`Alt: ${visibleAlt}`}</StyledSpan> : null}
    </>
  );
};

interface LicenseContainerProps {
  children?: ReactNode;
  copyright: EmbedBylineTypeProps["copyright"];
  type: Props["type"];
}

export const LicenseContainerContent = ({ children, copyright, type }: LicenseContainerProps) => {
  const { t, i18n } = useTranslation();
  const license = copyright ? getLicenseByAbbreviation(copyright.license?.license ?? "", i18n.language) : undefined;
  const authors = getLicenseCredits(copyright);
  const captionAuthors = Object.values(authors).find((i) => i.length > 0) ?? [];

  const Component = children ? LicenseDescription : "span";

  return (
    <Component>
      {children}
      {` ${t(`embed.type.${type}`)}${captionAuthors.length ? ": " : ""}`}
      {captionAuthors.map((author) => author.name).join(", ")}
      {license ? (
        <>
          {" / "}
          <LicenseLink license={license} />
        </>
      ) : null}
    </Component>
  );
};

export default EmbedByline;
