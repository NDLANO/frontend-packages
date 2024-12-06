/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { DatePicker, datePickerAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import type { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import type { TextProps } from "./Text";

const datePickerRecipe = sva({
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      // TODO: Check out
      gap: "xsmall",
    },
    content: {
      background: "surface.default",
      borderRadius: "xsmall",
      boxShadow: "large",
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
      padding: "xsmall",
      zIndex: "dropdown",
      _open: {
        animation: "fade-shift-in 0.25s ease-in-out",
      },
      _closed: {
        animation: "fade-shift-out 0.25s ease-in-out",
      },
    },
    control: {
      display: "flex",
      width: "fit-content",
      gap: "xsmall",
    },
    label: {},
    tableHeader: {},
    viewControl: {
      display: "flex",
      gap: "5xsmall",
      justifyContent: "space-between",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "5xsmall",
      margin: "-5xsmall",
    },
    tableCell: {
      textAlign: "center",
    },
    tableCellTrigger: {
      width: "100%",
      "&[data-today]": {
        _before: {
          content: "'-'",
          color: "stroke.default",
          position: "absolute",
          marginBlockStart: "xsmall",
        },
      },
      _selected: {
        _before: {
          background: "surface.action.selected",
        },
      },
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
    },
  },
});
const { withProvider, withContext } = createStyleContext(datePickerRecipe);

export interface DatePickerRootProps extends DatePicker.RootProps, JsxStyleProps {}

export const DatePickerRoot = withProvider<HTMLDivElement, DatePickerRootProps>(DatePicker.Root, "root", {
  baseComponent: true,
});

interface ClearTriggerProps extends DatePicker.ClearTriggerProps, JsxStyleProps {}

export const DatePickerClearTrigger = withContext<HTMLButtonElement, ClearTriggerProps>(
  DatePicker.ClearTrigger,
  "clearTrigger",
  {
    baseComponent: true,
  },
);

export const DatePickerContent = forwardRef<HTMLDivElement, DatePicker.ContentProps & JsxStyleProps>((props, ref) => (
  <DatePickerPositioner>
    <DatePickerStandaloneContent {...props} ref={ref} />
  </DatePickerPositioner>
));

interface DatePickerContentProps extends DatePicker.ContentProps, JsxStyleProps {}

export const DatePickerStandaloneContent = withContext<HTMLDivElement, DatePickerContentProps>(
  DatePicker.Content,
  "content",
  {
    baseComponent: true,
  },
);

interface DatePickerControlProps extends DatePicker.ControlProps, JsxStyleProps {}

export const DatePickerControl = withContext<HTMLDivElement, DatePickerControlProps>(DatePicker.Control, "control", {
  baseComponent: true,
});

interface DatePickerInputProps extends DatePicker.InputProps, JsxStyleProps {}

export const DatePickerInput = withContext<HTMLInputElement, DatePickerInputProps>(DatePicker.Input, "input", {
  baseComponent: true,
});

interface DatePickerLabelProps extends DatePicker.LabelProps, JsxStyleProps {}

const InternalDatePickerLabel = withContext<HTMLLabelElement, DatePickerLabelProps>(DatePicker.Label, "label");

export const DatePickerLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: DatePickerLabelProps & TextProps) => (
  <InternalDatePickerLabel asChild>
    <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalDatePickerLabel>
);

interface DatePickerMonthSelectProps extends DatePicker.MonthSelectProps, JsxStyleProps {}

export const DatePickerMonthSelect = withContext<HTMLSelectElement, DatePickerMonthSelectProps>(
  DatePicker.MonthSelect,
  "monthSelect",
  { baseComponent: true },
);

interface DatePickerNextTrigger extends DatePicker.NextTriggerProps, JsxStyleProps {}

export const DatePickerNextTrigger = withContext<HTMLButtonElement, DatePickerNextTrigger>(
  DatePicker.NextTrigger,
  "nextTrigger",
  { baseComponent: true },
);

interface DatePickerPositionerProps extends DatePicker.PositionerProps, JsxStyleProps {}

export const DatePickerPositioner = withContext<HTMLDivElement, DatePickerPositionerProps>(
  DatePicker.Positioner,
  "positioner",
  {
    baseComponent: true,
  },
);

interface DatePickerPresetTriggerProps extends DatePicker.PresetTriggerProps, JsxStyleProps {}

export const DatePickerPresetTrigger = withContext<HTMLButtonElement, DatePickerPresetTriggerProps>(
  DatePicker.PresetTrigger,
  "presetTrigger",
  { baseComponent: true },
);

interface DatePickerPrevTriggerProps extends DatePicker.PrevTriggerProps, JsxStyleProps {}

export const DatePickerPrevTrigger = withContext<HTMLButtonElement, DatePickerPrevTriggerProps>(
  DatePicker.PrevTrigger,
  "prevTrigger",
  { baseComponent: true },
);

interface DatePickerRangeTextProps extends DatePicker.RangeTextProps, JsxStyleProps {}

export const DatePickerRangeText = withContext<HTMLDivElement, DatePickerRangeTextProps>(
  DatePicker.RangeText,
  "rangeText",
  { baseComponent: true },
);

interface DatePickerTableBodyProps extends DatePicker.TableBodyProps, JsxStyleProps {}

export const DatePickerTableBody = withContext<HTMLTableSectionElement, DatePickerTableBodyProps>(
  DatePicker.TableBody,
  "tableBody",
  { baseComponent: true },
);

interface DatePickerTableCellProps extends DatePicker.TableCellProps, JsxStyleProps {}

export const DatePickerTableCell = withContext<HTMLTableCellElement, DatePickerTableCellProps>(
  DatePicker.TableCell,
  "tableCell",
  { baseComponent: true },
);

interface DatePickerTableCellTriggerProps extends DatePicker.TableCellTriggerProps, JsxStyleProps {}

export const DatePickerTableCellTrigger = withContext<HTMLDivElement, DatePickerTableCellTriggerProps>(
  DatePicker.TableCellTrigger,
  "tableCellTrigger",
  { baseComponent: true },
);

interface DatePickerTableHeadProps extends DatePicker.TableHeadProps, JsxStyleProps {}

export const DatePickerTableHead = withContext<HTMLTableSectionElement, DatePickerTableHeadProps>(
  DatePicker.TableHead,
  "tableHead",
  { baseComponent: true },
);

interface DatePickerTableHeaderProps extends DatePicker.TableHeaderProps, JsxStyleProps {}

export const DatePickerTableHeader = withContext<HTMLTableCellElement, DatePickerTableHeaderProps>(
  DatePicker.TableHeader,
  "tableHeader",
  { baseComponent: true },
);

interface DatePickerTableProps extends DatePicker.TableProps, JsxStyleProps {}

export const DatePickerTable = withContext<HTMLTableElement, DatePickerTableProps>(DatePicker.Table, "table", {
  baseComponent: true,
});

interface DatePickerTableRowProps extends DatePicker.TableRowProps, JsxStyleProps {}

export const DatePickerTableRow = withContext<HTMLTableRowElement, DatePickerTableRowProps>(
  DatePicker.TableRow,
  "tableRow",
  { baseComponent: true },
);

interface DatePickerTriggerProps extends DatePicker.TriggerProps, JsxStyleProps {}

export const DatePickerTrigger = withContext<HTMLButtonElement, DatePickerTriggerProps>(DatePicker.Trigger, "trigger", {
  baseComponent: true,
});

interface DatePickerViewControlProps extends DatePicker.ViewControlProps, JsxStyleProps {}

export const DatePickerViewControl = withContext<HTMLDivElement, DatePickerViewControlProps>(
  DatePicker.ViewControl,
  "viewControl",
  { baseComponent: true },
);

interface DatePickerViewProps extends DatePicker.ViewProps, JsxStyleProps {}

export const DatePickerView = withContext<HTMLDivElement, DatePickerViewProps>(DatePicker.View, "view", {
  baseComponent: true,
});

interface DatePickerViewTriggerProps extends DatePicker.ViewTriggerProps, JsxStyleProps {}

export const DatePickerViewTrigger = withContext<HTMLButtonElement, DatePickerViewTriggerProps>(
  DatePicker.ViewTrigger,
  "viewTrigger",
  { baseComponent: true },
);

interface DatePickerYearSelectProps extends DatePicker.YearSelectProps, JsxStyleProps {}

export const DatePickerYearSelect = withContext<HTMLSelectElement, DatePickerYearSelectProps>(
  DatePicker.YearSelect,
  "yearSelect",
  { baseComponent: true },
);

export { DatePickerContext } from "@ark-ui/react";
