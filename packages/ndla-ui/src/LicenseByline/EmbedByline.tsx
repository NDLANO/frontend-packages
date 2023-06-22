/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { ICopyright as ImageCopyright } from '@ndla/types-backend/image-api';
import { ICopyright as AudioCopyright } from '@ndla/types-backend/audio-api';
import { ICopyright as ConceptCopyright } from '@ndla/types-backend/concept-api';
import { BrightcoveCopyright } from '@ndla/types-embed';
import { WarningOutline } from '@ndla/icons/common';
import LicenseLink from './LicenseLink';
import LicenseDescription from './LicenseDescription';

interface BaseProps {
  topRounded?: boolean;
  bottomRounded?: boolean;
  description?: string;
  children?: ReactNode;
  visibleAlt?: string;
  error?: true | false;
  first?: boolean;
  inGrid?: boolean;
}

export interface EmbedBylineErrorProps extends BaseProps {
  type: EmbedBylineTypeProps['type'] | 'h5p' | 'external';
  error: true;
}

interface ImageProps extends BaseProps {
  type: 'image';
  copyright: ImageCopyright;
}

interface BrightcoveProps extends BaseProps {
  type: 'video';
  copyright: BrightcoveCopyright;
}

interface AudioProps extends BaseProps {
  type: 'audio';
  copyright: AudioCopyright;
}

interface PodcastProps extends BaseProps {
  type: 'podcast';
  copyright: AudioCopyright;
}

interface ConceptProps extends BaseProps {
  type: 'concept';
  copyright: ConceptCopyright;
}

export type EmbedBylineTypeProps = ImageProps | BrightcoveProps | AudioProps | PodcastProps | ConceptProps;

type Props = EmbedBylineTypeProps | EmbedBylineErrorProps;

export type LicenseType = ReturnType<typeof getLicenseByAbbreviation>;

const BylineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes('18px', '24px')};
  background-color: ${colors.brand.lightest};
  padding: ${spacing.nsmall} ${spacing.normal};
  border: 1px solid ${colors.brand.tertiary};
  border-top: none;

  &[data-top-rounded='true'] {
    border-top-right-radius: ${misc.borderRadius};
    border-top-left-radius: ${misc.borderRadius};
  }

  &[data-bottom-rounded='true'] {
    border-bottom-right-radius: ${misc.borderRadius};
    border-bottom-left-radius: ${misc.borderRadius};
  }

  &[data-error='true'] {
    border: none;
    background-color: ${colors.support.redLightest};
  }
  &[data-first='true'] {
    border-top: 1px solid ${colors.brand.tertiary};
  }
`;

const MobileStyling = css`
  align-items: flex-start;
  gap: ${spacing.xsmall};
  flex-direction: column;
`;

const RightsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.nsmall};

  &[data-grid='true'] {
    ${MobileStyling}
  }

  ${mq.range({ until: breakpoints.tablet })} {
    ${MobileStyling}
  }
`;

const StyledSpan = styled.span`
  font-style: italic;
  color: grey;
`;

const LicenseInformationWrapper = styled.div`
  flex: 1;
`;

const EmbedByline = ({
  type,
  topRounded,
  bottomRounded,
  description,
  children,
  visibleAlt,
  first = true,
  inGrid = false,
  ...props
}: Props) => {
  const { t, i18n } = useTranslation();
  const strippedDescription = description?.trim();

  if (props.error) {
    const typeString = type === 'h5p' ? 'H5P' : t(`embed.type.${type}`).toLowerCase();
    return (
      <BylineWrapper data-top-rounded={topRounded} data-bottom-rounded={bottomRounded} data-error={true}>
        <LicenseDescription description={t('embed.embedError', { type: typeString })} icon={<WarningOutline />} />
      </BylineWrapper>
    );
  }

  const { copyright } = props;

  const license = getLicenseByAbbreviation(copyright.license?.license ?? '', i18n.language);
  const authors = getLicenseCredits(copyright);
  const captionAuthors = Object.values(authors).find((i) => i.length > 0) ?? [];

  return (
    <BylineWrapper data-top-rounded={topRounded} data-bottom-rounded={bottomRounded} data-first={first}>
      {!!strippedDescription?.length && description && <LicenseDescription description={description} />}
      {visibleAlt ? <StyledSpan>{`Alt: ${visibleAlt}`}</StyledSpan> : null}
      <RightsWrapper data-grid={inGrid}>
        <LicenseLink license={license} asLink={!!license.url.length} />
        <LicenseInformationWrapper>
          <span>
            <b>{t(`embed.type.${type}`)}: </b>
            {captionAuthors.map((author) => author.name).join(', ')}
          </span>
        </LicenseInformationWrapper>
        {children}
      </RightsWrapper>
    </BylineWrapper>
  );
};

export default EmbedByline;
