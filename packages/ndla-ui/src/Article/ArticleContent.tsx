/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect } from 'react';
import {
  initArticleScripts,
  removeEventListenerForResize,
  // @ts-ignore
} from '@ndla/article-scripts';
import { initAudioPlayers } from '../AudioPlayer';

type Props = {
  content: string;
};
const ArticleContent = ({ content, ...rest }: Props) => {
  useEffect(() => {
    removeEventListenerForResize();
    initArticleScripts();
    initAudioPlayers();
    return () => {
      removeEventListenerForResize();
    };
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
};

export default ArticleContent;
