/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { FilterList } from '@ndla/ui';
import { Drawer, DrawerPosition, ModalSize, ModalCloseButton, ModalHeader } from '@ndla/modal';
import { ButtonV2 } from '@ndla/button';
//@ts-ignore
import { StoryBody, StoryIntro } from '../wrappers';

interface Option<T> {
  title: string;
  value: T;
}

const positionOptions: Record<DrawerPosition, Option<DrawerPosition>> = {
  top: { title: 'Topp', value: 'top' },
  bottom: { title: 'Bunn', value: 'bottom' },
  left: { title: 'Venstre', value: 'left' },
  right: { title: 'Høyre', value: 'right' },
};

const sizeOptions: Record<ModalSize, Option<ModalSize>> = {
  xsmall: { title: 'Ekstra Liten', value: 'xsmall' },
  small: { title: 'Liten', value: 'small' },
  normal: { title: 'Vanlig', value: 'normal' },
  large: { title: 'Stor', value: 'large' },
  full: { title: 'Fullskjerm', value: 'full' },
};

const DrawerExample = () => {
  const [size, setSize] = useState<ModalSize>('xsmall');
  const [position, setPosition] = useState<DrawerPosition>('bottom');

  return (
    <>
      <StoryIntro title="Skuffer" />
      <StoryBody>
        <h4>Velg størrelse</h4>
        <FilterList
          preid="size"
          labelNotVisible
          options={Object.values(sizeOptions)}
          values={size ? [size] : []}
          onChange={(e: ModalSize[]) => setSize(e.pop()!)}
        />
        <h4>Velg posisjon</h4>
        <FilterList
          preid="position"
          labelNotVisible
          options={Object.values(positionOptions)}
          values={position ? [position] : []}
          onChange={(e: DrawerPosition[]) => setPosition(e.pop()!)}
        />
        <Drawer label="Skuff" position={position} size={size} activateButton={<ButtonV2>Open</ButtonV2>}>
          {(close) => (
            <ModalHeader>
              <h1>Tittel</h1>
              <ModalCloseButton onClick={close} />
            </ModalHeader>
          )}
        </Drawer>
      </StoryBody>
    </>
  );
};

export default DrawerExample;
