/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { InformationOutline } from '@ndla/icons/common';
import { H5pMetaData } from '@ndla/types-embed';
import EmbedErrorPlaceholder from './EmbedErrorPlaceholder';
import { MessageBox } from '../Messages';

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
    return (
      <>
        {embed.embedData.disclaimer && (
          <MessageBox type="info">
            <InformationOutline />
            {embed.embedData.disclaimer}
          </MessageBox>
        )}
        <figure className={classes} dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? '' }} />;
      </>
    );
  }

  return (
    <StyledFigure className={classes}>
      {embed.embedData.disclaimer && (
        <MessageBox type="info">
          <InformationOutline />
          {embed.embedData.disclaimer}
        </MessageBox>
      )}
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
};

export default H5pEmbed;
