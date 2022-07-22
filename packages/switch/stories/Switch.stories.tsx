import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SwitchComponent from '../src/Switch';

export default {
  title: 'Switch',
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const SwitchTemplate: ComponentStory<typeof SwitchComponent> = ({ checked: checkedProp, label, id, disabled }) => {
  const [checked, setChecked] = useState(checkedProp);

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  return (
    <SwitchComponent
      checked={checked}
      onChange={() => setChecked((p) => !p)}
      label={label}
      id={id}
      disabled={disabled}
    />
  );
};

export const Switch = SwitchTemplate.bind({});

Switch.args = {
  label: 'Tilleggsstoff',
  checked: true,
  disabled: false,
};
