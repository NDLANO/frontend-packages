/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { spacing, colors, misc, breakpoints, mq } from '@ndla/core';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProgrammeV2 = ({}) => {
    return (
        <div>
            <HeaderContainer>
                <span>Se våre utdanningsprogram</span>
                <span>Vi ønsker å tilby dei beste læringsressursene innen tradisjonelle og nye medier.</span>
            </HeaderContainer>
        </div>
    );
};

export default ProgrammeV2;