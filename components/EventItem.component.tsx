import React, { FC } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
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
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: event.id.toString(),
    data: { type: "event" },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      id={`event-${event.id}`}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex flex-row items-center h-full p-1 gap-2 cursor-pointer"
      style={{ backgroundColor: event.color, ...style }}
    >
      <MdEventAvailable className="text-base text-primary" />
      <p className="text-xs truncate">{event.title}</p>
    </div>
  );
};

export default EventItem;
