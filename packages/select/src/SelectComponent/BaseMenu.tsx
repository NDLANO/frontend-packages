import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { MenuPropsType } from './types';

const StyledBaseMenu = styled.div<{ base: SerializedStyles }>`
  ${(props) => props.base};
  width: auto;
  min-width: 100%;
  overflow: hidden;
`;

const BaseMenu = <T extends boolean>({ ...props }: MenuPropsType<T>) => {
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
