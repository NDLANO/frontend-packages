/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { ArrowLeftLine, ArrowLeftShortLine, ArrowRightShortLine } from "@ndla/icons";
import { Button, IconButton } from "./Button";
import {
  DatePickerContent,
  DatePickerContext,
  DatePickerControl,
  DatePickerNextTrigger,
  DatePickerPositioner,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerRoot,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
} from "./DatePicker";

export default {
  title: "Primitives/DatePicker",
  component: DatePickerRoot,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    fixedWeeks: true,
    startOfWeek: 1,
    isDateUnavailable: () => false,
  },
} satisfies Meta<typeof DatePickerRoot>;

export const Default: StoryFn<typeof DatePickerRoot> = (args) => (
  <DatePickerRoot {...args}>
    <DatePickerControl>
      <DatePickerTrigger asChild>
        <Button variant="secondary">Open date picker</Button>
      </DatePickerTrigger>
    </DatePickerControl>
    <DatePickerPositioner>
      <DatePickerContent>
        <DatePickerView view="day">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowLeftShortLine />
                    </IconButton>
                  </DatePickerPrevTrigger>
                  <DatePickerViewTrigger asChild>
                    <Button variant="tertiary" size="small">
                      <DatePickerRangeText />
                    </Button>
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowRightShortLine />
                    </IconButton>
                  </DatePickerNextTrigger>
                  <Button size="small" onClick={() => api.selectToday()}>
                    Gå til dagens dato
                  </Button>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableHead>
                    <DatePickerTableRow>
                      {api.weekDays.map((weekDay, id) => (
                        <DatePickerTableHeader key={id}>{weekDay.narrow}</DatePickerTableHeader>
                      ))}
                    </DatePickerTableRow>
                  </DatePickerTableHead>
                  <DatePickerTableBody>
                    {api.weeks.map((week, id) => (
                      <DatePickerTableRow key={id}>
                        {week.map((day, id) => (
                          <DatePickerTableCell key={id} value={day}>
                            <DatePickerTableCellTrigger asChild>
                              <IconButton variant="tertiary">{day.day}</IconButton>
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="month">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowLeftLine />
                    </IconButton>
                  </DatePickerPrevTrigger>
                  <DatePickerViewTrigger asChild>
                    <Button variant="tertiary" size="small">
                      <DatePickerRangeText />
                    </Button>
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowRightShortLine />
                    </IconButton>
                  </DatePickerNextTrigger>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    {api.getMonthsGrid({ columns: 4, format: "short" }).map((months, id) => (
                      <DatePickerTableRow key={id}>
                        {months.map((month, id) => (
                          <DatePickerTableCell key={id} value={month.value}>
                            <DatePickerTableCellTrigger asChild>
                              <Button variant="tertiary">{month.label}</Button>
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="year">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowLeftShortLine />
                    </IconButton>
                  </DatePickerPrevTrigger>
                  <DatePickerViewTrigger asChild>
                    <Button variant="tertiary" size="small">
                      <DatePickerRangeText />
                    </Button>
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger asChild>
                    <IconButton variant="tertiary" size="small">
                      <ArrowRightShortLine />
                    </IconButton>
                  </DatePickerNextTrigger>
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <DatePickerTableRow key={id}>
                        {years.map((year, id) => (
                          <DatePickerTableCell key={id} value={year.value}>
                            <DatePickerTableCellTrigger asChild>
                              <Button variant="tertiary">{year.label}</Button>
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
      </DatePickerContent>
    </DatePickerPositioner>
  </DatePickerRoot>
);
