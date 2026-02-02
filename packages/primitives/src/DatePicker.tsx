/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DatePicker, datePickerAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext, type StyledProps } from "@ndla/styled-system/jsx";
import { forwardRef, type RefAttributes } from "react";
import type { TextProps } from "./Text";
import { Label } from "./Label";

const datePickerRecipe = sva({
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
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
          marginBlockStart: "medium",
        },
      },
      "&[data-outside-range]": {
        color: "text.subtle",
        fontWeight: "normal",
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

export interface DatePickerRootProps extends DatePicker.RootProps, StyledProps {
  translations: DatePicker.RootProps["translations"];
  locale: DatePicker.RootProps["locale"];
}

export const DatePickerRoot = withProvider(DatePicker.Root, "root", { baseComponent: true });

export const DatePickerClearTrigger = withContext(DatePicker.ClearTrigger, "clearTrigger", {
  baseComponent: true,
});

interface DatePickerContentProps extends DatePicker.ContentProps, StyledProps {}

export const DatePickerContent = forwardRef<HTMLDivElement, DatePickerContentProps>((props, ref) => (
  <DatePickerPositioner>
    <DatePickerStandaloneContent {...props} ref={ref} />
  </DatePickerPositioner>
));

export const DatePickerStandaloneContent = withContext(DatePicker.Content, "content", { baseComponent: true });

export const DatePickerControl = withContext(DatePicker.Control, "control", { baseComponent: true });

export const DatePickerInput = withContext(DatePicker.Input, "input", { baseComponent: true });

interface DatePickerLabelProps
  extends Omit<DatePicker.LabelProps, "color">, StyledProps, TextProps, RefAttributes<HTMLLabelElement> {}

const InternalDatePickerLabel = withContext(DatePicker.Label, "label");

export const DatePickerLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: DatePickerLabelProps) => (
  <InternalDatePickerLabel asChild>
    <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalDatePickerLabel>
);

export const DatePickerMonthSelect = withContext(DatePicker.MonthSelect, "monthSelect", { baseComponent: true });

interface DatePickerNextTrigger extends DatePicker.NextTriggerProps, StyledProps {}

export const DatePickerNextTrigger = withContext(DatePicker.NextTrigger, "nextTrigger", { baseComponent: true });

export const DatePickerPositioner = withContext(DatePicker.Positioner, "positioner", { baseComponent: true });

export const DatePickerPresetTrigger = withContext(DatePicker.PresetTrigger, "presetTrigger", { baseComponent: true });

export const DatePickerPrevTrigger = withContext(DatePicker.PrevTrigger, "prevTrigger", { baseComponent: true });

export const DatePickerRangeText = withContext(DatePicker.RangeText, "rangeText", { baseComponent: true });

export const DatePickerTableBody = withContext(DatePicker.TableBody, "tableBody", { baseComponent: true });

export const DatePickerTableCell = withContext(DatePicker.TableCell, "tableCell", { baseComponent: true });

export const DatePickerTableCellTrigger = withContext(DatePicker.TableCellTrigger, "tableCellTrigger", {
  baseComponent: true,
});

export const DatePickerTableHead = withContext(DatePicker.TableHead, "tableHead", { baseComponent: true });

export const DatePickerTableHeader = withContext(DatePicker.TableHeader, "tableHeader", { baseComponent: true });

export const DatePickerTable = withContext(DatePicker.Table, "table", { baseComponent: true });

export const DatePickerTableRow = withContext(DatePicker.TableRow, "tableRow", { baseComponent: true });

export const DatePickerTrigger = withContext(DatePicker.Trigger, "trigger", { baseComponent: true });

export const DatePickerViewControl = withContext(DatePicker.ViewControl, "viewControl", { baseComponent: true });

export const DatePickerView = withContext(DatePicker.View, "view", { baseComponent: true });

export const DatePickerViewTrigger = withContext(DatePicker.ViewTrigger, "viewTrigger", { baseComponent: true });

export const DatePickerYearSelect = withContext(DatePicker.YearSelect, "yearSelect", { baseComponent: true });

export { DatePickerContext } from "@ark-ui/react";
