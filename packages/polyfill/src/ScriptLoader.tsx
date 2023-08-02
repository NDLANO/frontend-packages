/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { featureDetect } from './featureDetect';

interface Props {
  polyfill?: { src: string };
  scripts: { src: string }[];
}

const ScriptLoader = ({ polyfill, scripts }: Props) => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: featureDetect(JSON.stringify(polyfill), JSON.stringify(scripts)),
      }}
    />
  );
};

export default ScriptLoader;
