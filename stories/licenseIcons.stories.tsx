/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LicenseDescription } from '@ndla/notion';
import { licenseRights } from '@ndla/licenses';
import { RadioButtonGroup } from '@ndla/ui';
import { defaultParameters } from './defaults';

/**
 * Liste over lisenser som brukes på NDLA.
 */
export default {
  title: 'Licenses/License icons',
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta;

const languageOptions = [
  { title: 'Norsk bokmål', value: 'nb' },
  { title: 'Nynorsk', value: 'nn' },
  { title: 'English', value: 'en' },
];

export const Default: StoryFn = () => {
  const [locale, setLocale] = useState('nb');

  return (
    <div>
      <RadioButtonGroup options={languageOptions} onChange={setLocale} label="Description language" />
      {licenseRights.map((abb) => {
        return (
          <div key={abb}>
            <h4>{abb.toUpperCase()}</h4>
            <LicenseDescription locale={locale} licenseRights={[abb]} />
          </div>
        );
      })}
    </div>
  );
};
