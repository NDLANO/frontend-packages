import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
  z-index: 1000;
`;

type Props = {
  status: string;
};

const Footer: React.FC<Props> = ({
  status,
}) => (
  <StyledFooter>
    {status}?
  </StyledFooter>
);

export default Footer;
