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
  size: 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
  ghostPill?: boolean;
  greyLightest?: boolean;
}

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
        <WrapperForExample size="xsmall" greyLightest activeIcon={<Heart />} inactiveIcon={<HeartOutline />} />
        <WrapperForExample size="small" greyLightest activeIcon={<Heart />} inactiveIcon={<HeartOutline />} />
        <WrapperForExample size="normal" greyLightest activeIcon={<Heart />} inactiveIcon={<HeartOutline />} />
        <WrapperForExample size="medium" greyLightest activeIcon={<Heart />} inactiveIcon={<HeartOutline />} />
        <WrapperForExample size="large" greyLightest activeIcon={<Heart />} inactiveIcon={<HeartOutline />} />
      </InlineContainer>
      <InlineContainer>
        <WrapperForExample size="xsmall" ghostPill activeIcon={<Cross />} inactiveIcon={<Plus />} />
        <WrapperForExample size="small" ghostPill activeIcon={<Cross />} inactiveIcon={<Plus />} />
        <WrapperForExample size="normal" ghostPill activeIcon={<Cross />} inactiveIcon={<Plus />} />
        <WrapperForExample size="medium" ghostPill activeIcon={<Cross />} inactiveIcon={<Plus />} />
        <WrapperForExample size="large" ghostPill activeIcon={<Cross />} inactiveIcon={<Plus />} />
      </InlineContainer>
    </StoryBody>
  </div>
);

export default IconButtonDualStatesExample;
