/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import {
  ModalHeader,
  ModalAnimation,
  ModalCloseButton,
  ModalPosition,
  ModalSize,
  ModalSizeType,
  Modal,
} from '@ndla/modal';
import { FilterList } from '@ndla/ui';
import { ButtonV2 } from '@ndla/button';
//@ts-ignore
import { StoryBody, StoryIntro } from '../wrappers';

interface Option<T> {
  title: string;
  value: T;
}

const sizeOptions: Record<ModalSize, Option<ModalSize>> = {
  xsmall: { title: 'Ekstra Liten', value: 'xsmall' },
  small: { title: 'Liten', value: 'small' },
  normal: { title: 'Vanlig', value: 'normal' },
  large: { title: 'Stor', value: 'large' },
  full: { title: 'Fullskjerm', value: 'full' },
};

const positionOptions: Record<ModalPosition, Option<ModalPosition>> = {
  top: { title: 'Topp', value: 'top' },
  bottom: { title: 'Bunn', value: 'bottom' },
  center: { title: 'Sentrert', value: 'center' },
  left: { title: 'Venstre', value: 'left' },
  right: { title: 'Høyre', value: 'right' },
};

const animationOptions: Record<ModalAnimation, Option<ModalAnimation>> = {
  zoom: { title: 'Zoom', value: 'zoom' },
  subtle: { title: 'Subtil', value: 'subtle' },
  slideIn: { title: 'Skli inn', value: 'slideIn' },
  fade: { title: 'Fade', value: 'fade' },
};

const ModalExample = () => {
  const [size, _setSize] = useState<ModalSizeType>(sizeOptions['normal'].value);
  const [position, setPosition] = useState<ModalPosition>('center');
  const [animation, setAnimation] = useState<ModalAnimation>('zoom');

  const setSize = (value: ModalSize, type: 'height' | 'width' | 'size') => {
    if (type === 'size') {
      _setSize(value);
    } else {
      if (typeof size === 'string') {
        _setSize({ width: value, height: value });
      } else {
        _setSize({ ...size, [type]: value });
      }
    }
  };

  return (
    <>
      <StoryIntro title="Modaler" />
      <StoryBody>
        <h4>Velg størrelse</h4>
        <FilterList
          preid="modalSize"
          labelNotVisible
          options={Object.values(sizeOptions)}
          values={typeof size === 'string' ? [size] : []}
          onChange={(e: ModalSize[]) => setSize(e.pop()!, 'size')}
        />
        <h4>Velg bredde</h4>
        <FilterList
          preid="width"
          labelNotVisible
          options={Object.values(sizeOptions)}
          values={size && typeof size === 'object' ? [size.width] : []}
          onChange={(e: ModalSize[]) => setSize(e.pop()!, 'width')}
        />
        <h4>Velg høyde</h4>
        <FilterList
          preid="height"
          labelNotVisible
          options={Object.values(sizeOptions)}
          values={size && typeof size === 'object' ? [size.height] : []}
          onChange={(e: ModalSize[]) => setSize(e.pop()!, 'height')}
        />
        <h4>Velg posisjon</h4>
        <FilterList
          preid="modalPosition"
          labelNotVisible
          options={Object.values(positionOptions)}
          values={position ? [position] : []}
          onChange={(e: ModalPosition[]) => setPosition(e.pop()!)}
        />
        <h4>Velg animasjon</h4>
        <FilterList
          preid="modalAnimation"
          labelNotVisible
          options={Object.values(animationOptions)}
          values={animation ? [animation] : []}
          onChange={(e: ModalAnimation[]) => setAnimation(e.pop()!)}
        />
        <Modal label="Modal" activateButton={<ButtonV2>Open</ButtonV2>} size={size} position={position}>
          {(close) => (
            <ModalHeader>
              <h1>Tittel</h1>
              <ModalCloseButton onClick={close} />
            </ModalHeader>
          )}
        </Modal>
      </StoryBody>
    </>
  );
};

export default ModalExample;
