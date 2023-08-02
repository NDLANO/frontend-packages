/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ReactElement, createElement, useMemo, useState } from 'react';
import { copyTextToClipboard } from '@ndla/util';
import { Copy } from '@ndla/icons/action';
import { ButtonV2 } from '@ndla/button';
import Icon from '@ndla/icons';

interface IconItemProps {
  icon: () => ReactElement<ComponentProps<typeof Icon>>;
  folder: string;
  name: string;
}

const IconItem = ({ icon, folder, name }: IconItemProps) => {
  const [hover, setHover] = useState(false);

  const iconProps = useMemo(() => icon().props as Record<string, any>, [icon]);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        listStyle: 'none',
        backgroundColor: '#EFF0F2',
        width: '210px',
        padding: '13px',
        margin: '13px',
        wordBreak: 'break-all',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', lineHeight: 1.5 }}>
        {createElement(icon, { className: 'c-icon--large' })}
        <strong style={{ marginLeft: '13px' }}>{name}</strong>
      </div>
      <div style={{ marginTop: '6.5px' }} title={`Kilde: ${iconProps['data-source']}`}>
        {iconProps['data-license']}
        {hover && (
          <ButtonV2
            variant="stripped"
            onClick={() => copyTextToClipboard(`import { ${name} } from '@ndla/icons/${folder}';`)}
            style={{ float: 'right' }}
            title="Kopier import kode"
          >
            <Copy />
          </ButtonV2>
        )}
      </div>
    </li>
  );
};

interface Props {
  icons: Record<string, () => ReactElement<ComponentProps<typeof Icon>>>;
  folder: string;
}

const IconList = ({ icons, folder }: Props) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(icons).map((key) => (
      <IconItem key={key} name={key} icon={icons[key]} folder={folder} />
    ))}
  </ul>
);

export default IconList;
