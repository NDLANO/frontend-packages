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

  const { embedData, data } = embed;

  const disclaimer = embedData.disclaimer ? (
    <MessageBox
      type="info"
      links={data.disclaimerHref ? [{ href: data.disclaimerHref, text: data.disclaimerLink }] : []}
    >
      <InformationOutline />
      {embedData.disclaimer}
    </MessageBox>
  ) : undefined;

  if (embed.data.oembed) {
    return (
      <>
        {disclaimer}
        <figure className={classes} dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? '' }} />;
      </>
    );
  }

  return (
    <StyledFigure className={classes}>
      {disclaimer}
      <iframe title={embed.embedData.url} aria-label={embed.embedData.url} src={embed.embedData.url} />
    </StyledFigure>
  );
};

export default H5pEmbed;
