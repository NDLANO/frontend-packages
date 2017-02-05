/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Entity } from 'draft-js';
import ResourcePlaceholderBlock from './ResourcePlaceholderBlock';

export default () => ({
  blockRendererFn: (block) => {
    if (block.getType() === 'atomic') {
      const entity = Entity.get(block.getEntityAt(0));
      const type = entity.getType();
      if (type === 'resource-placeholder') {
        return {
          component: ResourcePlaceholderBlock,
          editable: false,
          props: {
            data: entity.getData(),
          },
        };
      }
    }
    return null;
  },

});
