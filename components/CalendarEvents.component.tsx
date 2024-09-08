"use client";

import React, { ReactNode, FC, useState } from "react";
import { DndContext } from "@dnd-kit/core";
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
  const [eventList, setEventList] = useState<TCalendarEvent[]>(events);
  const [draggingEvent, setDraggingEvent] = useState<TCalendarEvent | null>(
    null
  );
  const handleDragEnd = ({ over }: { over: any }) => {
    if (over === null) return;

    const updatedEvent = { ...draggingEvent, day: over?.id };
    const updatedList = eventList.map((event) =>
      event.id === draggingEvent?.id ? updatedEvent : event
    );

    setEventList(updatedList as TCalendarEvent[]);
  };
  const handleDragStart = (e: any) => {
    const current = eventList.find(
      (event) => event.id === parseInt(e.active.id)
    );

    if (current) {
      setDraggingEvent(current);
    }
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <section id="calendar-events" className="flex">
        <div className="min-w-48 max-w-48 p-2 border-t border-b border-r border-l border-slate-300">
          <p className="text-sm text-neutral-900">
            Events ({eventList.length})
          </p>
        </div>
        {initializeDays.map((day, index) => (
          <EventCell key={index} day={day}>
            {eventList.map(
              (event) =>
                day.day === event.day && (
                  <EventItem key={event.id} event={event} />
                )
            )}
          </EventCell>
        ))}
      </section>
    </DndContext>
  );
};

export default CalendarEvents;
