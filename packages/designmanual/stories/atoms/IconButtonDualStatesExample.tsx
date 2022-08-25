import React, { useState, ReactElement } from 'react';
import { IconButtonDualStates } from '@ndla/button';
import { Cross, Plus, Heart, HeartOutline } from '@ndla/icons/action';
// @ts-ignore
import { InlineContainer } from '../helpers';
// @ts-ignore
import { StoryIntro, StoryBody } from '../wrappers';

interface Props {
  activeIcon: ReactElement;
  inactiveIcon: ReactElement;
  size: IconSize;
  ghostPill?: boolean;
  greyLightest?: boolean;
}

type IconSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';

const sizes: IconSize[] = ['xsmall', 'small', 'normal', 'medium', 'large'];
const WrapperForExample = ({ activeIcon, inactiveIcon, ...rest }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <IconButtonDualStates
      ariaLabelActive="Active"
      ariaLabelInActive="Inactive"
      onClick={() => setActive(!active)}
      activeIcon={activeIcon}
      inactiveIcon={inactiveIcon}
      active={active}
      {...rest}
    />
  );
};

const IconButtonDualStatesExample = () => (
  <div>
    <StoryIntro title="Ikon knapp med 2 states">
      <p>
        Knapp med 2 ikoner, eller states. Baserer seg på samme button props som IconButton for størrelser og utseende.
      </p>
    </StoryIntro>
    <StoryBody>
      <h2 className="u-heading">Eksempel</h2>
      <InlineContainer>
        {sizes.map((size) => {
          return (
            <WrapperForExample
              size={size}
              colorTheme="greyLightest"
              activeIcon={<Heart />}
              inactiveIcon={<HeartOutline />}
            />
          );
        })}
      </InlineContainer>
      <InlineContainer>
        {sizes.map((size) => {
          return (
            <WrapperForExample size={size} colorTheme="greyLightest" activeIcon={<Cross />} inactiveIcon={<Plus />} />
          );
        })}
      </InlineContainer>
    </StoryBody>
  </div>
);

export default IconButtonDualStatesExample;
