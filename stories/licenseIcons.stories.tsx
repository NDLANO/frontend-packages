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
import { licenseRights } from "@ndla/licenses";
import { LicenseDescription } from "@ndla/notion";
import { Text } from "@ndla/typography";
import { defaultParameters } from "./defaults";

/**
 * Liste over lisenser som brukes på NDLA.
 */
export default {
  title: "Licenses/License icons",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
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
