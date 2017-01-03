/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import { Entity, EditorState, AtomicBlockUtils } from 'draft-js';

const Image = ({ block, className }) => {
  const { src } = Entity.get(block.getEntityAt(0)).getData();
  return (
    <img
      src={src}
      role="presentation"
      className={className}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  block: PropTypes.object.isRequired,
};


export default () => ({
  blockRendererFn: (block) => {
    if (block.getType() === 'atomic') {
      const entity = Entity.get(block.getEntityAt(0));
      const type = entity.getType();
      if (type === 'image') {
        return {
          component: Image,
          editable: false,
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
});
