/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CodeMetaData } from "@ndla/types-embed";
import { CodeBlock } from "../CodeBlock";
import { Figure } from "../Figure";

interface Props {
  embed: CodeMetaData;
}
const CodeEmbed = ({ embed }: Props) => {
  return (
    <Figure>
      <CodeBlock
        title={embed.embedData.title}
        code={embed.status === "success" ? embed.data.decodedContent : ""}
        highlightedCode={embed.status === "success" ? embed.data.highlightedCode : ""}
        format={embed.embedData.codeFormat}
        showCopy
      />
    </Figure>
  );
};

export default CodeEmbed;
