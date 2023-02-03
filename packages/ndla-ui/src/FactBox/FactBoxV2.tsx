/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useState } from 'react';
import BEMHelper from 'react-bem-helper';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { IconButtonV2 } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';

const classes = new BEMHelper({
  name: 'factbox',
  prefix: 'c-',
});

interface Props {
  children?: ReactNode;
}

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledIconButton = styled(IconButtonV2)`
  margin-top: -20px;
  z-index: 1;
`;

const FactBox = ({ children }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const additional = isOpen ? 'expanded' : '';

  return (
    <StyledAside {...classes(undefined, undefined, additional)}>
      <StyledDiv {...classes('content')}>{children}</StyledDiv>
      <StyledIconButton onClick={() => setIsOpen((p) => !p)} aria-label={t(`factbox.${isOpen ? 'close' : 'open'}`)}>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </StyledIconButton>
    </StyledAside>
  );
};

export default FactBox;
