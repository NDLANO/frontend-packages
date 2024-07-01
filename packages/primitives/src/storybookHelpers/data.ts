/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const europeanCountries = [
  { label: "Albania", value: "AL" },
  { label: "Andorra", value: "AD" },
  { label: "Armenia", value: "AM" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
  { label: "Belarus", value: "BY" },
  { label: "Belgium", value: "BE" },
  { label: "Bosnia and Herzegovina", value: "BA" },
  { label: "Bulgaria", value: "BG" },
  { label: "Croatia", value: "HR" },
  { label: "Cyprus", value: "CY" },
  { label: "Czech Republic", value: "CZ" },
  { label: "Denmark", value: "DK" },
  { label: "Estonia", value: "EE" },
  { label: "Finland", value: "FI" },
  { label: "France", value: "FR" },
  { label: "Georgia", value: "GE" },
  { label: "Germany", value: "DE" },
  { label: "Greece", value: "GR" },
  { label: "Hungary", value: "HU" },
  { label: "Iceland", value: "IS" },
  { label: "Ireland", value: "IE" },
  { label: "Italy", value: "IT" },
  { label: "Kazakhstan", value: "KZ" },
  { label: "Kosovo", value: "XK" },
  { label: "Latvia", value: "LV" },
  { label: "Liechtenstein", value: "LI" },
  { label: "Lithuania", value: "LT" },
  { label: "Luxembourg", value: "LU" },
  { label: "Malta", value: "MT" },
  { label: "Moldova", value: "MD" },
  { label: "Monaco", value: "MC" },
  { label: "Montenegro", value: "ME" },
  { label: "Netherlands", value: "NL" },
  { label: "North Macedonia", value: "MK" },
  { label: "Norway", value: "NO" },
  { label: "Poland", value: "PL" },
  { label: "Portugal", value: "PT" },
  { label: "Romania", value: "RO" },
  { label: "Russia", value: "RU" },
  { label: "San Marino", value: "SM" },
  { label: "Serbia", value: "RS" },
  { label: "Slovakia", value: "SK" },
  { label: "Slovenia", value: "SI" },
  { label: "Spain", value: "ES" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "Turkey", value: "TR" },
  { label: "Ukraine", value: "UA" },
  { label: "United Kingdom", value: "GB" },
  { label: "Vatican City", value: "VA" },
];

export const measurements = [
  { label: "Kilometer", value: "km" },
  { label: "Meter", value: "m" },
  { label: "Centimeter", value: "cm" },
  { label: "Millimeter", value: "mm" },
  { label: "Mile", value: "mi" },
  { label: "Yard", value: "yd" },
  { label: "Foot", value: "ft" },
  { label: "Inch", value: "in" },
  { label: "Nautical mile", value: "nmi" },
];

export interface AdvancedItem {
  label: string;
  value: string;
  description: string;
  disabled?: boolean;
  img: string;
}

export const advancedItems: AdvancedItem[] = [
  {
    label: "React",
    value: "react",
    description: "A JavaScript library for building user interfaces",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Solid",
    value: "solid",
    description: "React, but with signals",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Svelte",
    value: "svelte",
    disabled: true,
    description: "No more JS than required",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
  {
    label: "Vue",
    value: "vue",
    description: "The Progressive JavaScript Framework",
    img: "https://api.test.ndla.no/image-api/raw/YQyWgMkg.png",
  },
];
