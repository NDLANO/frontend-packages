/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgrammeV2 from './ProgrammeV2';
import { defaultParameters } from '../../../../stories/defaults';

export default {
    title: 'Sammensatte moduler/ProgrammeV2',
    component: ProgrammeV2,
    tags: ['autodocs'],
    parameters: {
        ...defaultParameters,
    },
    args: {},
} as Meta<typeof ProgrammeV2>;

export const ProgrammeV2Story: StoryFn<typeof ProgrammeV2> = ({ ...args }) => {
    return <ProgrammeV2 {...args} />;
};

ProgrammeV2Story.storyName = 'ProgrammeV2';