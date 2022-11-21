import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageSelectorV2 } from '@ndla/ui';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { defaultParameters } from '../../../designmanual/stories/defaults';
export default {
  title: 'Enkle komponenter/LanguageSelector',
  component: LanguageSelectorV2,
  parameters: {
    ...defaultParameters,
  },
  args: {
    locales: ['en', 'nb', 'nn'],
    inverted: false,
    // eslint-disable-next-line no-console
    onSelect: (locale) => console.log(`selected ${locale}`),
  },
} as ComponentMeta<typeof LanguageSelectorV2>;

interface ButtonWrapperProps {
  inverted?: boolean;
}

const shouldForwardProp = (p: string) => p !== 'inverted';

const ButtonWrapper = styled('div', { shouldForwardProp })<ButtonWrapperProps>`
  background-color: ${(p) => p.inverted && colors.brand.primary};
  padding: ${spacing.normal};
`;

export const LanguageSelectorStory: ComponentStory<typeof LanguageSelectorV2> = (args) => {
  return (
    <ButtonWrapper inverted={args.inverted}>
      <LanguageSelectorV2 {...args} />
    </ButtonWrapper>
  );
};

LanguageSelectorStory.storyName = 'LanguageSelector';
