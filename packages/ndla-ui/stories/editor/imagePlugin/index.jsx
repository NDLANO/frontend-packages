/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Entity, EditorState, Modifier, AtomicBlockUtils, SelectionState } from 'draft-js';
import ImageBlock from './ImageBlock';

export default (config = {}) => {
  const component = config.decorator ? config.decorator(ImageBlock) : ImageBlock;
  return {
    blockRendererFn: (block, { getEditorState, setEditorState, setReadOnly }) => {
      if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        if (type === 'image') {
          return {
            component,
            editable: false,
            props: {
              setReadOnly,
              updateData: (data) => {
                const editorState = getEditorState();
                const content = editorState.getCurrentContent();
                const selection = new SelectionState({
                  anchorKey: block.key,
                  anchorOffset: 0,
                  focusKey: block.key,
                  focusOffset: block.getLength(),
                });
                  // Merge caption changes in contentState until: https://github.com/facebook/draft-js/issues/839
                const newContentState = Modifier.mergeBlockData(content, selection, data);

                const newEditorState = EditorState.push(editorState, newContentState);
                setEditorState(newEditorState);

                  // Test storing and updating caption in Entity, when the entity module is moved to contentState: https://github.com/facebook/draft-js/issues/839
                  // const key = block.getEntityAt(0);
                  // Entity.mergeData(key, data);
                  // const newEditorState = EditorState.forceSelection(editorState, getEditorState().getCurrentContent().getSelectionAfter());// getCurrentContent().getSelectionAfter());
                  // setEditorState(newEditorState);
              },
            },
          };
        }
      }
      return null;
    },

    addImage: (editorState, url) => {
      const entityKey = Entity.create('image', 'IMMUTABLE', { src: url });
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
      return EditorState.forceSelection(newEditorState, editorState.getCurrentContent().getSelectionAfter());
    },

  };
};
