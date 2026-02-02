/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal, createListCollection } from "@ark-ui/react";
import { CloseLine, ArrowDownShortLine, CheckLine } from "@ndla/icons";
import { css } from "@ndla/styled-system/css";
import { HStack } from "@ndla/styled-system/jsx";
import { useState } from "react";
import { Button, IconButton } from "./Button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import {
  SelectClearTrigger,
  SelectContent,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./Select";
import { europeanCountries, measurements } from "./storybookHelpers/data";

const measurementsCollection = createListCollection({ items: measurements });

export default {
  title: "Primitives/Select",
  component: SelectRoot,
  tags: ["autodocs"],
  args: {
    positioning: { sameWidth: true },
  },
} satisfies Meta<typeof SelectRoot>;

export const Default: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <SelectRoot {...args} collection={measurementsCollection}>
      <SelectLabel>Measurement</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Select measurement" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent>
          {measurements.map((measurement) => (
            <SelectItem key={measurement.value} item={measurement}>
              <SelectItemText>{measurement.label}</SelectItemText>
              <SelectItemIndicator asChild>
                <CheckLine />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

export const Disabled: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <SelectRoot {...args} disabled collection={measurementsCollection}>
      <SelectLabel>Measurement</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Select measurement" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent>
          {measurements.map((measurement) => (
            <SelectItem key={measurement.value} item={measurement}>
              <SelectItemText>{measurement.label}</SelectItemText>
              <SelectItemIndicator asChild>
                <CheckLine />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

export const DisabledItems: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  const withDisabled = measurements.map((measurement, index) => ({ ...measurement, disabled: index % 2 === 1 }));
  const collection = createListCollection({ items: withDisabled });

  return (
    <SelectRoot {...args} collection={collection}>
      <SelectLabel>Measurement</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Select measurement" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent>
          {withDisabled.map((measurement) => (
            <SelectItem key={measurement.value} item={measurement}>
              <SelectItemText>{measurement.label}</SelectItemText>
              <SelectItemIndicator asChild>
                <CheckLine />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

const groupedCountries = europeanCountries.reduce<Record<string, (typeof europeanCountries)[0][]>>((acc, country) => {
  const firstLetter = country.label[0].toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(country);
  return acc;
}, {});

const europeanCountriesCollection = createListCollection({ items: europeanCountries });

export const Grouped: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <SelectRoot {...args} collection={europeanCountriesCollection}>
      <SelectLabel>Country</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Choose country" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent>
          {Object.entries(groupedCountries).map(([letter, countries]) => (
            <SelectItemGroup key={letter}>
              <SelectItemGroupLabel>{letter}</SelectItemGroupLabel>
              {countries.map((country) => (
                <SelectItem key={country.value} item={country}>
                  <SelectItemText>{country.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

export const Multiple: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <SelectRoot {...args} collection={europeanCountriesCollection} multiple>
      <SelectLabel>Countries you've been to</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Choose country" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent className={css({ maxHeight: "surface.small" })}>
          {Object.entries(groupedCountries).map(([letter, countries]) => (
            <SelectItemGroup key={letter}>
              <SelectItemGroupLabel>{letter}</SelectItemGroupLabel>
              {countries.map((country) => (
                <SelectItem key={country.value} item={country}>
                  <SelectItemText>{country.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

export const MultipleTruncated: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  const [value, setValue] = useState<{ label: string; value: string }[]>([]);
  return (
    <SelectRoot
      {...args}
      value={value.map((val) => val.value)}
      onValueChange={(vals) => setValue(vals.items)}
      collection={europeanCountriesCollection}
      multiple
    >
      <SelectLabel>Countries you've been to</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Choose country">
              {value.length > 3
                ? `${value
                    .slice(0, 3)
                    .map((val) => val.label)
                    .join(", ")}, ${value.length - 3} more`
                : value.map((val) => val.label).join(", ")}
            </SelectValueText>
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectContent className={css({ maxHeight: "surface.small" })}>
          {Object.entries(groupedCountries).map(([letter, countries]) => (
            <SelectItemGroup key={letter}>
              <SelectItemGroupLabel>{letter}</SelectItemGroupLabel>
              {countries.map((country) => (
                <SelectItem key={country.value} item={country}>
                  <SelectItemText>{country.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

export const WithClearButton: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <SelectRoot {...args} collection={europeanCountriesCollection} multiple>
      <SelectLabel>Countries you've been to</SelectLabel>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="secondary">
            <SelectValueText placeholder="Choose country" />
            <SelectIndicator asChild>
              <ArrowDownShortLine />
            </SelectIndicator>
          </Button>
        </SelectTrigger>
        <SelectClearTrigger asChild>
          <IconButton variant="secondary">
            <CloseLine />
          </IconButton>
        </SelectClearTrigger>
      </SelectControl>
      <Portal>
        <SelectContent className={css({ maxHeight: "surface.small" })}>
          {Object.entries(groupedCountries).map(([letter, countries]) => (
            <SelectItemGroup key={letter}>
              <SelectItemGroupLabel>{letter}</SelectItemGroupLabel>
              {countries.map((country) => (
                <SelectItem key={country.value} item={country}>
                  <SelectItemText>{country.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          ))}
        </SelectContent>
      </Portal>
    </SelectRoot>
  );
};

/**
 * This example is not portalled, and does not work properly on the docs page.
 */
export const InDialog: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose your measurement</DialogTitle>
          <DialogCloseTrigger>
            <IconButton variant="clear">
              <CloseLine />
            </IconButton>
          </DialogCloseTrigger>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            We need to know your favorite measurement to correctly assert what sort of person you are.
          </DialogDescription>
          <SelectRoot
            {...args}
            collection={measurementsCollection}
            positioning={{ strategy: "fixed", placement: "bottom", sameWidth: true }}
          >
            <SelectLabel>Measurement</SelectLabel>
            <SelectControl>
              <SelectTrigger asChild>
                <Button variant="secondary">
                  <SelectValueText placeholder="Select measurement" />
                  <SelectIndicator asChild>
                    <ArrowDownShortLine />
                  </SelectIndicator>
                </Button>
              </SelectTrigger>
            </SelectControl>
            <SelectContent>
              {measurements.map((measurement) => (
                <SelectItem key={measurement.value} item={measurement}>
                  <SelectItemText>{measurement.label}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <HStack gap="xsmall" className={css({ alignSelf: "flex-end" })}>
            <DialogCloseTrigger asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogCloseTrigger>
            <Button>Save</Button>
          </HStack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export const WithField: StoryFn<typeof SelectRoot> = ({ ...args }) => {
  const [value, setValue] = useState<string[]>([]);
  const invalid = value.some((val) => val === "cm");

  return (
    <FieldRoot invalid={invalid}>
      <SelectRoot
        value={value}
        onValueChange={(val) => setValue(val.value)}
        {...args}
        collection={measurementsCollection}
      >
        <SelectLabel>Measurement</SelectLabel>
        <FieldHelper>You cannot choose centimeter.</FieldHelper>
        <FieldErrorMessage>I told you to choose anything but centimeter...</FieldErrorMessage>
        <SelectControl>
          <SelectTrigger asChild>
            <Button variant="secondary">
              <SelectValueText placeholder="Select measurement" />
              <SelectIndicator asChild>
                <ArrowDownShortLine />
              </SelectIndicator>
            </Button>
          </SelectTrigger>
          <SelectClearTrigger asChild>
            <IconButton variant="secondary">
              <CloseLine />
            </IconButton>
          </SelectClearTrigger>
        </SelectControl>
        <Portal>
          <SelectContent>
            {measurements.map((measurement) => (
              <SelectItem key={measurement.value} item={measurement}>
                <SelectItemText>{measurement.label}</SelectItemText>
                <SelectItemIndicator asChild>
                  <CheckLine />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectContent>
        </Portal>
        <SelectHiddenSelect />
      </SelectRoot>
    </FieldRoot>
  );
};
