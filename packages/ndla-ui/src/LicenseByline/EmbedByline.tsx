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
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';
import { getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { ICopyright as ImageCopyright } from '@ndla/types-backend/image-api';
import { ICopyright as AudioCopyright } from '@ndla/types-backend/audio-api';
import { ICopyright as ConceptCopyright } from '@ndla/types-backend/concept-api';
import { BrightcoveCopyright } from '@ndla/types-embed';
import LicenseLink from './LicenseLink';
import LicenseDescription from './LicenseDescription';

interface BaseProps {
  topRounded?: boolean;
  description?: string;
  children?: ReactNode;
  visibleAlt?: string;
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

type Props = ImageProps | BrightcoveProps | AudioProps | PodcastProps | ConceptProps;

export type LicenseType = ReturnType<typeof getLicenseByAbbreviation>;

const BylineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  background-color: ${colors.brand.lightest};
  padding: ${spacing.small} ${spacing.normal};
  border: 1px solid ${colors.brand.tertiary};
  border-bottom-right-radius: ${misc.borderRadius};
  border-bottom-left-radius: ${misc.borderRadius};

  &[data-top-rounded='true'] {
    border-radius: ${misc.borderRadius};
  }
`;

const RightsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.nsmall};

  ${mq.range({ until: breakpoints.tablet })} {
    align-items: flex-start;
    gap: ${spacing.xsmall};
    flex-direction: column;
  }
`;

const StyledSpan = styled.span`
  font-style: italic;
  color: grey;
`;

const LicenseInformationWrapper = styled.div`
  flex: 1;
`;

const EmbedByline = ({ type, topRounded, description, copyright, children, visibleAlt }: Props) => {
  const { t, i18n } = useTranslation();
  const license = getLicenseByAbbreviation(copyright.license?.license ?? '', i18n.language);
  const authors = getLicenseCredits(copyright);
  const captionAuthors = Object.values(authors).find((i) => i.length > 0) ?? [];

  return (
    <BylineWrapper data-top-rounded={topRounded}>
      {!!description && <LicenseDescription description={description} />}
      {visibleAlt ? <StyledSpan>{`Alt: ${visibleAlt}`}</StyledSpan> : null}
      <RightsWrapper>
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
