/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import { ALL_ABBREVIATIONS, getLicenseByAbbreviation } from '@ndla/licenses';
import { RadioButtonGroup, Table } from '@ndla/ui';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from './defaults';

/**
 * Liste over lisenser som brukes på NDLA.
 */
export default {
  title: 'Licenses/License descriptions',
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
      {ALL_ABBREVIATIONS.map((abb) => {
        const license = getLicenseByAbbreviation(abb, locale);
        return (
          <Table key={abb}>
            <caption>{license.title}</caption>
            <thead>
              <tr>
                <th>Felt</th>
                <th>Verdi</th>
              </tr>
            </thead>
            <tbody style={{ width: '100%' }}>
              <tr>
                <td>Kode</td>
                <td>{abb.toUpperCase()}</td>
              </tr>
              <tr>
                <td>Kort tittel</td>
                <td>{license.short}</td>
              </tr>
              <tr>
                <td>Url</td>
                <td>{license.url}</td>
              </tr>
              <tr>
                <td>Linktekst</td>
                <td>{license.linkText}</td>
              </tr>
              <tr>
                <td>Beskrivelse</td>
                <td>{license.description}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
};
