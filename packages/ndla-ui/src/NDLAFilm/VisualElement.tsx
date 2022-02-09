/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Image from '../Image';
import styled from '@emotion/styled';

const StylediFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
`;

interface Props {
  visualElement: {
    alt?: string;
    url: string;
    type: string;
  };
}
const VisualElement = ({ visualElement }: Props) => {
  const { type, url, alt } = visualElement;
  if (type === 'image') {
    return <Image src={url} alt={alt ?? ''} />;
  } else if (type === 'brightcove') {
    //@ts-ignore react does not recognize fullscreen properties.
    return <StylediFrame allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src={url} />;
  } else {
    return null;
  }
};

export default VisualElement;
