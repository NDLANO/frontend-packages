/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FootnoteMetaData } from '@ndla/types-embed';
import { useTranslation } from 'react-i18next';

interface Props {
  embed: FootnoteMetaData;
}
const FootnoteEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  if (embed.status === 'error') {
    return <div>{t('error')}</div>;
  }

  return (
    <span id={`ref${embed.data.entryNum}`} className="c-footnotes__ref">
      <sup>
        <a href={`#note${embed.data.entryNum}`} target="_self">{`[${embed.data.entryNum}]`}</a>
      </sup>
    </span>
  );
};

export default FootnoteEmbed;
