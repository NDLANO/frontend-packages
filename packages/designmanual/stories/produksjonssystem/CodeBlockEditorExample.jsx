/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { CodeBlockEditor } from '@ndla/code';

export const CodeBlockEditorExample = () => {
  const handleSave = codeContent => {
    console.log('save codeContent: ', codeContent);
  };
  const handleAbort = () => {
    console.log('aborted');
  };

  const demoContent = {
    code: 'const foo = "bar";',
    title: 'Javascript',
    format: 'js',
  };

  return (
    <>
      <CodeBlockEditor
        onSave={handleSave}
        onAbort={handleAbort}
        content={demoContent}
      />
    </>
  );
};
export default CodeBlockEditorExample;
