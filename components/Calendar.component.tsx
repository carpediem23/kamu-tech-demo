"use client";

import React, { ReactNode, FC } from "react";
import CalendarHeader from "@/components/CalendarHeader.component";
import CalendarEvents from "./CalendarEvents.component";
import CalendarTeamMembers from "./CalendarTeamMembers.component";
import { DAYS_OF_WEEK, EVENTS, TEAM_MEMBER_TASKS } from "@/constants/index";

const Calendar: FC = (): ReactNode => {
  return (
    <section id="calendar">
      <CalendarHeader initializeDays={DAYS_OF_WEEK} />
      <CalendarEvents initializeDays={DAYS_OF_WEEK} events={EVENTS} />
      <h5 className="my-2 text-sm text-neutral-900">Team Members (1)</h5>
      <CalendarTeamMembers
        initializeDays={DAYS_OF_WEEK}
        tasks={TEAM_MEMBER_TASKS}
      />
    </section>
  );
};

export default Calendar;
