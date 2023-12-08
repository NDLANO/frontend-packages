/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { CloseButton } from '@ndla/button';
import { colors, spacing } from '@ndla/core';

interface WrapperProps {
  small?: boolean;
}

const MessageBannerWrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-areas: '. content closebutton';
  grid-template-columns: minmax(30px, 1fr) minmax(0, auto) minmax(30px, 1fr);
  padding: ${({ small }) => (small ? spacing.xxsmall : spacing.small)};
  background: ${colors.support.yellowLight};
  color: ${colors.brand.greyDark};
  border-bottom: solid 1px ${colors.white};
`;

const TextWrapper = styled.div`
  display: flex;
  grid-area: content;
  align-items: center;
  & p {
    margin: 0;
  }
`;

const StyledClosebutton = styled(CloseButton)`
  grid-area: closebutton;
  padding: 0;
  justify-self: flex-end;
  align-self: flex-start;
`;

interface Props {
  small?: boolean;
  children?: ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const MessageBanner = ({ children, onClose, showCloseButton, small }: Props) => {
  return (
    <MessageBannerWrapper small={small}>
      <TextWrapper>{children}</TextWrapper>
      {showCloseButton && <StyledClosebutton onClick={onClose} />}
    </MessageBannerWrapper>
  );
};

export default MessageBanner;
