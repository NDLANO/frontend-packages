/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect } from 'react';
import {
  initArticleScripts,
  removeEventListenerForResize,
  // @ts-ignore
} from '@ndla/article-scripts';
import { initPopovers, initTooltips } from '@ndla/tooltip';
import { initAudioPlayers } from '../AudioPlayer';
import { initCopyParagraphButtons } from '../CopyParagraphButton';
import { Locale } from '../types';

type Props = {
  content: string;
  locale: Locale;
};
const ArticleContent = ({ content, locale, ...rest }: Props) => {
  useEffect(() => {
    removeEventListenerForResize();
    initArticleScripts();
    initAudioPlayers(locale);
    initTooltips();
    initPopovers();
    initCopyParagraphButtons();
    return () => {
      removeEventListenerForResize();
    };
  }, [content, locale]);

  return <div dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
};

export default ArticleContent;
