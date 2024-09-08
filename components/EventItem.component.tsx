import React, { FC, useRef } from "react";
import type { DragEvent, TouchEvent } from "react";
import { MdEventAvailable } from "react-icons/md";
import TCalendarEvent from "@/types/CalendarEvent.type";

type TEventItemProps = {
  event: TCalendarEvent;
};

/**
 * Renders an event item component with drag and touch support.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Event} props.event - The event object to be rendered.
 * @returns {ReactNode} The rendered event item component.
 */
const EventItem: FC<TEventItemProps> = ({ event }) => {

  return (
    <div
      id={`event-${event.id}`}
      data-event-id={event.id}
      className="flex flex-row items-center h-full p-1 gap-2 cursor-pointer"
      style={{ backgroundColor: event.color }}
    >
      <MdEventAvailable className="text-base text-primary" />
      <p className="text-xs truncate">{event.title}</p>
    </div>
  );
};

export default EventItem;
