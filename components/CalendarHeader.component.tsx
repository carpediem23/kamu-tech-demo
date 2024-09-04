"use client";

import React, { ReactNode, FC } from "react";
import { TInitializeDay } from "@/types/DaysOfWeek.type";

type TCalendarHeaderProps = {
  initializeDays: TInitializeDay[];
};

const CalendarHeader: FC<TCalendarHeaderProps> = ({
  initializeDays,
}): ReactNode => {
  return (
    <header id="calendar-header" className="flex">
      {initializeDays.map((data: TInitializeDay) => (
        <div
          key={data.day}
          className="min-w-32 min-h-32 border-t border-b border-r"
        >
          <h5 className="text-neutral-600">{data.name}</h5>
          <p className="text-4xl text-neutral-600">{data.day}</p>
        </div>
      ))}
    </header>
  );
};

export default CalendarHeader;
