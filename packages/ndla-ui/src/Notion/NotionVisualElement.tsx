/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
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
  type?: 'video' | 'image' | 'h5p';
  resource?: string;
  title?: string;
  url?: string;
  copyright?: Partial<Copyright>;
  image?: {
    src: string;
    alt?: string;
  };
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
  if (resource === 'image') {
    return 'image';
  }
  return 'h5p';
};

const NotionVisualElement = ({ visualElement, id, figureId }: Props) => {
  const [h5pReady, setH5pReady] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (visualElement.resource === 'h5p') {
      const resizeObserver = new ResizeObserver((e: ResizeObserverEntry[]) => {
        setH5pReady(e[0].contentRect.height > 0);
      });
      const iframeRefTemp = iframeRef.current;
      if (visualElement.resource === 'h5p' && iframeRefTemp) {
        resizeObserver.observe(iframeRefTemp);
      }
      return () => {
        if (iframeRefTemp) {
          resizeObserver.unobserve(iframeRefTemp);
        }
      };
    }
  }, [iframeRef, visualElement.resource]);

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
      type={type}>
      {visualElement.image?.src ? (
        <img src={visualElement.image?.src} alt={visualElement.image.alt} />
      ) : (
        <StyledIframe
          ref={iframeRef}
          src={type !== 'h5p' || h5pReady ? visualElement.url : undefined}
          type={type}
          title={visualElement.title}
        />
      )}
    </FigureNotion>
  );
};

export default NotionVisualElement;
