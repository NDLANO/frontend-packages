/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { RichUtils } from 'draft-js';

export default () => ({
  handleKeyCommand: (command, { getEditorState, setEditorState }) => {
    const editorState = getEditorState();

    const newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      // setEditorState(newEditorState);
      setTimeout(() => setEditorState(newEditorState), 0);
      return true;
    }
    return false;
  },
});
