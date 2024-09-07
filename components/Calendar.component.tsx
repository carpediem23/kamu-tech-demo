"use client";

import React, { ReactNode, FC } from "react";
import CalendarHeader from "@/components/CalendarHeader.component";
import CalendarEvents from "./CalendarEvents.component";
import { DAYS_OF_WEEK, EVENTS } from "@/constants/index";

const Calendar: FC = (): ReactNode => {
  return (
    <section id="calendar" className="overflow-x-auto">
      <CalendarHeader initializeDays={DAYS_OF_WEEK} />
      <CalendarEvents initializeDays={DAYS_OF_WEEK} events={EVENTS} />
    </section>
  );
};

export default Calendar;
