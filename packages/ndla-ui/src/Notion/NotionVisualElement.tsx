/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Copyright } from '../types';
import FigureNotion from './FigureNotion';

const StyledIframe = styled.iframe<{ type: string }>`
  ${(props) =>
    props.type === 'video'
      ? css`
          min-height: 400px;
        `
      : ''}
`;

export type NotionVisualElementType = {
  element?: ReactNode;
  type?: 'video' | 'image' | 'h5p' | 'iframe';
  resource?: string;
  title?: string;
  url?: string;
  copyright?: Partial<Copyright>;
  image?: {
    src: string;
    alt?: string;
  };
  licenseButtons?: ReactNode;
};

interface Props {
  visualElement: NotionVisualElementType;
  id: string;
  figureId: string;
}
const supportedEmbedTypes = ['brightcove', 'h5p', 'iframe', 'external', 'image'];

const getType = (resource: string) => {
  if (resource === 'brightcove') {
    return 'video';
  }
  if (resource === 'image' || resource === 'h5p') {
    return resource;
  }
  return 'other';
};

const NotionVisualElement = ({ visualElement, id, figureId }: Props) => {
  if (!visualElement.resource || !supportedEmbedTypes.includes(visualElement.resource)) {
    return <p>Embed type is not supported!</p>;
  }

  const type = getType(visualElement.resource);

  return (
    <FigureNotion
      resizeIframe
      id={id}
      figureId={figureId}
      title={visualElement.title ?? ''}
      copyright={visualElement.copyright}
      licenseString={visualElement.copyright?.license?.license ?? ''}
      licenseButtons={visualElement.licenseButtons}
      type={type}
    >
      {visualElement.image?.src ? (
        <img src={visualElement.image?.src} alt={visualElement.image.alt} />
      ) : (
        <StyledIframe allowFullScreen type={type} src={visualElement.url} title={visualElement.title} />
      )}
    </FigureNotion>
  );
};

export default NotionVisualElement;
