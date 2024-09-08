"use client";

import React, { ReactNode, FC, useState } from "react";
import TCalendarEvent from "@/types/CalendarEvent.type";
import TInitializeDay from "@/types/DaysOfWeek.type";
import EventItem from "./EventItem.component";
import EventCell from "./EventCell.component";

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
  const [calendarEvents, setCalendarEvents] =
    useState<TCalendarEvent[]>(events);

  return (
    <section id="calendar-events" className="flex">
      <div className="min-w-48 max-w-48 p-2 border-t border-b border-r border-l border-slate-300">
        <p className="text-sm text-neutral-900">
          Events ({calendarEvents.length})
        </p>
      </div>
      {initializeDays.map((day, index) => (
        <EventCell key={index} day={day} >
          {calendarEvents.map(
            (event) =>
              day.day === event.day && (
                <EventItem key={event.id} event={event} />
              )
          )}
        </EventCell>
      ))}
    </section>
  );
};

export default CalendarEvents;
