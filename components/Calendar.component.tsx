"use client";

import React, { ReactNode, FC } from "react";
import CalendarHeader from "@/components/CalendarHeader.component";

const daysOfWeek = [
  { day: "01", name: "Mon" },
  { day: "02", name: "Tue" },
  { day: "03", name: "Wed" },
  { day: "04", name: "Thu" },
  { day: "05", name: "Fri" },
  { day: "06", name: "Sat" },
  { day: "07", name: "Sun" },
];

const Calendar: FC = (): ReactNode => {
  return (
    <section id="calendar" className="overflow-x-auto">
      <CalendarHeader initializeDays={daysOfWeek} />
    </section>
  );
};

export default Calendar;
