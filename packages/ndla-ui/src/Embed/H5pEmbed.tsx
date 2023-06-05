/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { H5pMetaData } from '@ndla/types-embed';
import React from 'react';
import EmbedErrorPlaceholder from './EmbedErrorPlaceholder';

interface Props {
  embed: H5pMetaData;
  isConcept?: boolean;
}

const StyledFigure = styled.figure`
  iframe {
    height: auto;
  }
`;

const H5pEmbed = ({ embed, isConcept }: Props) => {
  if (embed.status === 'error') {
    return <EmbedErrorPlaceholder type="h5p" />;
  }
  const fullColumnClass = isConcept ? 'c-figure--full-column' : '';
  const classes = `c-figure ${fullColumnClass} c-figure--resize`;

  if (embed.data.oembed) {
    return <figure className={classes} dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? '' }} />;
  }

  return (
    <StyledFigure className={classes}>
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
};

export default H5pEmbed;
