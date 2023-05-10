/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FavoriteButton } from '@ndla/button';
import { EmbedMetaData } from '@ndla/types-embed';

interface Props {
  embed: Extract<EmbedMetaData, { status: 'success' }>;
}

const StoryFavoriteButton = ({ embed }: Props) => {
  return <FavoriteButton />;
};

export default StoryFavoriteButton;
