import React from 'react';
import styled from '@emotion/styled';
import { MenuProps } from 'react-select';
import { Option } from './types';
import { css, SerializedStyles } from '@emotion/react';

const StyledBaseMenu = styled.div<{ base: SerializedStyles }>`
  ${(props) => props.base};
  width: auto;
  min-width: 100%;
  overflow: hidden;
`;

const BaseMenu = <T extends boolean>({ ...props }: MenuProps<Option, T>) => {
  const baseStyling = css`
    ${props.getStyles('menu', props)}
  `;
  return (
    <StyledBaseMenu ref={props.innerRef} base={baseStyling} {...props.innerProps}>
      {props.children}
    </StyledBaseMenu>
  );
};

export default BaseMenu;
