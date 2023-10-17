/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentProps, ReactElement, createElement, useMemo } from 'react';
import { copyTextToClipboard } from '@ndla/util';
import { spacing } from '@ndla/core';
import { Copy } from '@ndla/icons/action';
import { IconButtonV2 } from '@ndla/button';
import Icon from '@ndla/icons';
import styled from '@emotion/styled';

interface IconItemProps {
  icon: (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>;
  folder: string;
  name: string;
}

const IconItem = ({ icon, folder, name }: IconItemProps) => {
  const iconProps = useMemo(() => icon({}).props as Record<string, any>, [icon]);

  return (
    <li>
      <div>
        {createElement(icon, { className: 'c-icon--large' })}
        <strong>{name}</strong>
      </div>
      <div title={`Kilde: ${iconProps['data-source']}`}>
        {iconProps['data-license']}
        <IconButtonV2
          variant="ghost"
          onClick={() => copyTextToClipboard(`import { ${name} } from '@ndla/icons/${folder}';`)}
          title="Kopier import-kode"
          aria-label="Kopier import-kode"
        >
          <Copy />
        </IconButtonV2>
      </div>
    </li>
  );
};

interface Props {
  icons: Record<string, (props: ComponentProps<typeof Icon>) => ReactElement<ComponentProps<typeof Icon>>>;
  folder: string;
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    background-color: #eff0f2;
    width: 210px;
    padding: ${spacing.small};
    margin: ${spacing.small};
    word-break: break-all;
    display: flex;
    flex-direction: column;
    gap: ${spacing.small};
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const IconList = ({ icons, folder }: Props) => (
  <StyledList>
    {Object.keys(icons).map((key) => (
      <IconItem key={key} name={key} icon={icons[key]} folder={folder} />
    ))}
  </StyledList>
);

export default IconList;
