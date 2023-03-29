/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ContactBlock } from '@ndla/ui';
import { attributesToProps } from 'html-react-parser';
import { ContactBlockMetaData } from '@ndla/types-embed/src/contactBlockTypes';
import { PluginType } from '../types';

export const contactBlockEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const embedData = JSON.parse(props['data-json']) as ContactBlockMetaData;
  const { title, name, email, color, summary } = embedData.embedData;
  return (
    <ContactBlock
      title={title}
      name={name}
      email={email}
      color={color}
      summary={summary}
      image={embedData.status === 'success' ? embedData.data.image : undefined}
    />
  );
};
