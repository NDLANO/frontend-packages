/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { spacing } from "@ndla/core";
import { Label, RadioButtonGroup, RadioButtonItem } from "@ndla/forms";
import { ALL_ABBREVIATIONS, getLicenseByAbbreviation } from "@ndla/licenses";
import { Text } from "@ndla/typography";
import { Table } from "@ndla/ui";

/**
 * Liste over lisenser som brukes på NDLA.
 */
export default {
  title: "Licenses/License descriptions",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
} as Meta;

const languageOptions = [
  { title: "Norsk bokmål", value: "nb" },
  { title: "Nynorsk", value: "nn" },
  { title: "English", value: "en" },
];

export const Default: StoryFn = () => {
  const [locale, setLocale] = useState("nb");
  return (
    <div>
      <fieldset style={{ border: 0, padding: 0, display: "flex", gap: spacing.medium, marginBottom: spacing.medium }}>
        <Text margin="none" textStyle="label-small" element="legend">
          Description language
        </Text>
        <RadioButtonGroup
          style={{ display: "flex", gap: spacing.small }}
          orientation="horizontal"
          value={locale}
          onValueChange={setLocale}
        >
          {languageOptions.map((option) => (
            <div style={{ display: "flex", alignItems: "center", gap: spacing.xsmall }} key={option.value}>
              <RadioButtonItem value={option.value} id={option.value} />
              <Label margin="none" textStyle="label-small" htmlFor={option.value}>
                {option.title}
              </Label>
            </div>
          ))}
        </RadioButtonGroup>
      </fieldset>
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
            <tbody style={{ width: "100%" }}>
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
