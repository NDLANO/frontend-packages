/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { TagSelector, TagSelectorProp } from '@ndla/ui';

const TagSelectorExample = () => {
  const [exampleTags, setExampleTags] = useState<TagSelectorProp[]>([{ id: '1', name: 'cat' }, { id: '2', name: 'dog' }, { id: '3', name: 'fish' }]);
  const [exampleTagsSelected, setExampleTagsSelected] = useState(['2']);
  return (
    <TagSelector
      tags={exampleTags}
      tagsSelected={exampleTagsSelected}
      onToggleTag={(id: string) => {
        setExampleTagsSelected((prevSelected) => {
          if (prevSelected.find(existingId => existingId === id)) {
            // Already part of tags. Remove it.
            return prevSelected.filter(existingId => existingId !== id);
          }
          // Not selected, add.
          return [id, ...prevSelected];
        });
      }}
      onCreateTag={(newTagName) => {
        const newId = Math.random();
        setExampleTags(prevTags => [{ id: newId, name: newTagName }, ...prevTags]);
        setExampleTagsSelected(prevSelectedTags => [newId, ...prevSelectedTags]);
      }}
    />
  );
};

export default TagSelectorExample;
