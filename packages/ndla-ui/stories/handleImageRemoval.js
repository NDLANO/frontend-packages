/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  EditorState,
  Entity,
  Modifier,
  SelectionState,
} from 'draft-js';

const removeImage = (editorState, blockKey) => {
  const content = editorState.getCurrentContent();

  // get range of image block
  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
  });

  // convert the image block to a unstyled block to make text editing work
  const withoutImage = Modifier.setBlockType(
    content,
    targetRange,
    'unstyled',
  );
  const newState = EditorState.push(editorState, withoutImage, 'change-block-type');
  return EditorState.forceSelection(newState, withoutImage.getSelectionAfter());
};

// Fixes backspace support
export default (editorState) => {
  let newEditorState = editorState;

  // If there is an atomic image block with text we remove it.
  // This can happen if a user hits the backspace button and texts moves to
  // same block as image.
  editorState.getCurrentContent().get('blockMap').forEach((block) => {
    if (block.get('type') === 'atomic' && block.get('text') !== ' ' && Entity.get(block.getEntityAt(0)).getType() === 'image') {
      newEditorState = removeImage(editorState, block.get('key'));
    }
  });
  return newEditorState;
};
