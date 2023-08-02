/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import { initArticleScripts } from '@ndla/article-scripts';
import { Figure } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import FigureCaptionExample from './FigureCaptionExample';
import { useRunOnlyOnce } from './useRunOnlyOnce';

function FigureWithLicense({ children, hasHiddenCaption, messages, resizeIframe, caption, type }) {
  const { t } = useTranslation();
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });

  const figureId = `figure-${id}`;

  return (
    <Figure id={figureId} resizeIframe={resizeIframe} type={type}>
      {children}
      {!hasHiddenCaption && (
        <FigureCaptionExample
          id={id}
          figureId={figureId}
          caption={caption}
          messages={messages || { reuse: t('video.reuse'), modelPermission: null }}
          hasHiddenCaption={hasHiddenCaption}
        />
      )}
    </Figure>
  );
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string,
  resizeIframe: PropTypes.bool,
  hasHiddenCaption: PropTypes.bool,
  messages: PropTypes.object,
  type: PropTypes.oneOf([
    'full',
    'full-column',
    'left',
    'small-left',
    'right',
    'small-right',
    'xsmall-right',
    'xsmall-left',
  ]),
};

FigureWithLicense.defaultProps = {
  caption: '',
  noFigcaption: false,
  hasHiddenCaption: false,
};

export default FigureWithLicense;
