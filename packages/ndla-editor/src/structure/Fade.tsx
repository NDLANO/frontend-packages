import React, { useEffect, useState } from 'react';
import { animations } from '@ndla/core';
import css from '@emotion/css';

type Props = {
  show?: boolean;
  children: React.ReactNode;
  fadeType: FadeType;
};

type FadeType = 'fadeIn' | 'fadeInTop' | 'fadeInBottom' | 'fadeInScaled';

const fadeOut = (fadeIn: FadeType): 'fadeOutTop' | 'fadeOutBottom' | 'fadeOutScaled' | 'fadeOut' => {
  if (fadeIn === 'fadeInTop') return 'fadeOutTop';
  if (fadeIn === 'fadeInBottom') return 'fadeOutBottom';
  if (fadeIn === 'fadeInScaled') return 'fadeOutScaled';
  return 'fadeOut';
};

const Fade: React.FC<Props> = ({ show = true, fadeType, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div
      css={
        show
          ? css`
              ${animations[fadeType](animations.durations.fast)}
            `
          : css`
              ${animations[fadeOut(fadeType)](animations.durations.fast)}
            `
      }
      onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  );
};

export default Fade;
