/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, misc, mq, spacing } from "@ndla/core";
import { WarningOutline } from "@ndla/icons/common";
import { getLicenseByAbbreviation, getLicenseCredits } from "@ndla/licenses";
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
  hideOnLargeScreens?: boolean;
  first?: boolean;
  inGrid?: boolean;
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

export type EmbedBylineTypeProps = ImageProps | BrightcoveProps | AudioProps | PodcastProps | ConceptProps;

type Props = EmbedBylineTypeProps | EmbedBylineErrorProps;

export type LicenseType = ReturnType<typeof getLicenseByAbbreviation>;

const BylineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes("18px", "24px")};
  background-color: ${colors.brand.lightest};
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.light};
  border-top: none;

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
  }
  &[data-first="true"] {
    border-top: 1px solid ${colors.brand.light};
  }
  &[data-hide-on-large-screen="true"] {
    ${mq.range({ from: breakpoints.tablet })} {
      display: none;
    }
  }
`;

const mobileStyling = css`
  align-items: flex-start;
  gap: ${spacing.xsmall};
  flex-direction: column;
`;

const RightsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.nsmall};

  &[data-grid="true"] {
    ${mobileStyling}
  }

  ${mq.range({ until: breakpoints.tabletWide })} {
    ${mobileStyling}
  }
`;

const StyledSpan = styled.span`
  font-style: italic;
  color: grey;
`;

const LicenseInformationWrapper = styled.div`
  flex: 1;
  padding-right: ${spacing.xsmall};
`;

const EmbedByline = ({
  type,
  topRounded,
  bottomRounded,
  description,
  children,
  visibleAlt,
  hideOnLargeScreens,
  first = true,
  inGrid = false,
  ...props
}: Props) => {
  const { t, i18n } = useTranslation();

  if (props.error) {
    const typeString = type === "h5p" ? "H5P" : t(`embed.type.${type}`).toLowerCase();
    return (
      <BylineWrapper data-top-rounded={topRounded} data-bottom-rounded={bottomRounded} data-error={true}>
        <LicenseDescription description={t("embed.embedError", { type: typeString })} icon={<WarningOutline />} />
      </BylineWrapper>
    );
  }

  const { copyright } = props;

  const license = copyright ? getLicenseByAbbreviation(copyright.license?.license ?? "", i18n.language) : undefined;
  const authors = getLicenseCredits(copyright);
  const captionAuthors = Object.values(authors).find((i) => i.length > 0) ?? [];

  return (
    <BylineWrapper
      data-top-rounded={topRounded}
      data-hide-on-large-screens={hideOnLargeScreens}
      data-bottom-rounded={bottomRounded}
      data-first={first}
    >
      {description && <LicenseDescription description={description} />}
      {visibleAlt ? <StyledSpan>{`Alt: ${visibleAlt}`}</StyledSpan> : null}
      <RightsWrapper data-grid={inGrid}>
        {license ? <LicenseLink license={license} asLink={!!license.url.length} /> : null}
        <LicenseInformationWrapper>
          <span>
            <b>{`${t(`embed.type.${type}`)}${captionAuthors.length ? ":" : ""}`} </b>
            {captionAuthors.map((author) => author.name).join(", ")}
          </span>
        </LicenseInformationWrapper>
        {children}
      </RightsWrapper>
    </BylineWrapper>
  );
};

export default EmbedByline;
