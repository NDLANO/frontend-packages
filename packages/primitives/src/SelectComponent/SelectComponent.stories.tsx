/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../designmanual/stories/defaults';
import SelectComponent from './SelectComponent';

export default {
  title: 'Enkle komponenter/SelectComponent',
  component: SelectComponent,
  parameters: {
    ...defaultParameters,
  },
  args: {
    label: 'Farger',
    selectElements: [
      { value: 'Gul', label: 'Gul' },
      { value: 'Blå', label: 'Blå' },
      { value: 'Grønn', label: 'Grønn' },
    ],
    placeholder: 'Velg en farge',
    prefix: 'Farge',
  },
} as ComponentMeta<typeof SelectComponent>;

const StyledOption = styled.div`
  font-size: 50px;
  font-weight: bold;
  width: 200px;
  background-color: red;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: blue;
  }
`;

const TestComponent = (props) => {
  return (
    <StyledOption ref={props.innerRef} {...props.innerProps}>
      {props.children}
    </StyledOption>
  );
};

const TestControl = (props) => {
  return (
    <StyledOption ref={props.innerRef} {...props.innerProps}>
      {props.children}
    </StyledOption>
  );
};

export const SelectStory: ComponentStory<typeof SelectComponent> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <SelectComponent
        {...args}
        label="Farger"
        selectElements={[
          { value: 'Gul', label: 'Gul' },
          { value: 'Blå', label: 'Blå' },
          { value: 'Grønn', label: 'Grønn' },
        ]}
        placeholder="Velg en farge"
        prefix="Farge"
        // OptionComponent={TestComponent}
        // ControlComponent={TestControl}
        isMultiSelect={true}
      />
    </div>
  );
};

SelectStory.storyName = 'SelectComponent';
