"use client";

import React, { ReactNode, FC } from "react";
import { MdEventAvailable } from "react-icons/md";
import TCalendarEvent from "@/types/CalendarEvent.type";
import TInitializeDay from "@/types/DaysOfWeek.type";

type TCalendarEventsProps = {
  initializeDays: TInitializeDay[];
  events: TCalendarEvent[];
};

/**
 * CalendarEvents component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.initializeDays - The function to initialize the days.
 * @returns {ReactNode} The rendered component.
 */
const CalendarEvents: FC<TCalendarEventsProps> = ({
  initializeDays = [],
  events = [],
}): ReactNode => {
  return (
    <section id="calendar-events" className="flex">
      <div className="min-w-48 max-w-48 p-2 border-t border-b border-r border-l border-slate-300">
        <p className="text-sm text-neutral-900">Events (1)</p>
      </div>
      {initializeDays.map((day, index) => (
        <div
          key={index}
          className="min-w-32 max-w-32 p-1 border-t border-b border-r border-slate-300"
          data-day={day.day}
        >
          {events.map(
            (event) =>
              day.day === event.day && (
                <div
                  key={event.id}
                  className="flex flex-row items-center h-full p-1 gap-2 cursor-pointer"
                  style={{ backgroundColor: event.color }}
                >
                  <MdEventAvailable className="text-base text-primary" />
                  <p className="text-xs truncate">{event.title}</p>
                </div>
              )
          )}
        </div>
      ))}
    </section>
  );
};

export default CalendarEvents;
