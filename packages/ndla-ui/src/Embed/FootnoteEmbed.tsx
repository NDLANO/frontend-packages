/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { FootnoteMetaData } from '@ndla/types-embed';
import { colors, spacing } from '@ndla/core';

interface Props {
  embed: FootnoteMetaData;
}

const FootnoteRef = styled.span`
  &:target {
    background-color: ${colors.brand.greyLighter};
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    box-shadow:
      ${spacing.xsmall} 0 0 ${colors.brand.greyLighter},
      -${spacing.xsmall} 0 0 ${colors.brand.greyLighter};
  }
  sup {
    a {
      margin-left: -2px;
      padding: ${spacing.small} ${spacing.xsmall};
      box-shadow: none;
      text-decoration: underline;
    }
    a:hover,
    a:focus-within {
      background-color: ${colors.brand.greyLighter};
      text-decoration: underline;
    }
  }
`;

const FootnoteEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  if (embed.status === 'error') {
    return <div>{t('error')}</div>;
  }

  return (
    <FootnoteRef id={`ref${embed.data.entryNum}`}>
      <sup>
        <a href={`#note${embed.data.entryNum}`} target="_self">{`[${embed.data.entryNum}]`}</a>
      </sup>
    </FootnoteRef>
  );
};

export default FootnoteEmbed;
