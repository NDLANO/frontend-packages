/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CodeMetaData } from '@ndla/types-embed';
import { Codeblock } from './Codeblock';

interface Props {
  embed: CodeMetaData;
}
const CodeEmbed = ({ embed }: Props) => {
  return (
    <figure className="c-figure">
      <Codeblock
        title={embed.embedData.title}
        code={embed.status === 'success' ? embed.data.decodedContent : ''}
        highlightedCode={embed.status === 'success' ? embed.data.highlightedCode : ''}
        format={embed.embedData.codeFormat}
        showCopy
      />
    </figure>
  );
};

export default CodeEmbed;
