import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { colors } from '@ndla/core';
import { MenuPropsType } from './types';

const StyledBaseMenu = styled.div`
  position: absolute;
  top: 100%;
  width: auto;
  min-width: 100%;
  overflow: hidden;
  background-color: ${colors.white};
  border: 1px solid ${colors.brand.greyLighter};
  border-radius: 4px;
  margin-top: 4px;
`;

const BaseMenu = <T extends boolean>({ ...props }: MenuPropsType<T>) => {
  return (
    <StyledBaseMenu ref={props.innerRef} {...props.innerProps}>
      {props.children}
    </StyledBaseMenu>
  );
};

export default BaseMenu;
