/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { ArrowLeftLine, ArrowLeftShortLine, ArrowRightShortLine } from "@ndla/icons";
import { useDatePickerTranslations } from "@ndla/ui";
import { Button, IconButton } from "./Button";
import {
  DatePickerContent,
  DatePickerContext,
  DatePickerControl,
  DatePickerNextTrigger,
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
    outsideDaySelectable: true,
    isDateUnavailable: () => false,
    locale: "nb-NO",
  },
} satisfies Meta<typeof DatePickerRoot>;

export const Default: StoryFn<typeof DatePickerRoot> = (args) => {
  const translations = useDatePickerTranslations();
  return (
    <DatePickerRoot {...args} translations={translations}>
      <DatePickerControl>
        <DatePickerContext>
          {(api) => (
            <DatePickerTrigger asChild>
              <Button variant="secondary">{translations.trigger(api.open)}</Button>
            </DatePickerTrigger>
          )}
        </DatePickerContext>
      </DatePickerControl>
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
                  <Button
                    size="small"
                    onClick={() => {
                      api.selectToday();
                      api.setValue([today(getLocalTimeZone())]);
                    }}
                  >
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
                        {week.map((day, id) => {
                          return (
                            <DatePickerTableCell key={id} value={day}>
                              <DatePickerTableCellTrigger
                                asChild
                                data-state={api.value[0]?.compare(day) === 0 ? "on" : "off"}
                              >
                                <IconButton variant="tertiary">{day.day}</IconButton>
                              </DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          );
                        })}
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
                            <DatePickerTableCellTrigger
                              asChild
                              data-state={api.value?.[0]?.month === month.value ? "on" : "off"}
                            >
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
                            <DatePickerTableCellTrigger
                              asChild
                              data-state={api.value?.[0]?.year === year.value ? "on" : "off"}
                            >
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
    </DatePickerRoot>
  );
};
