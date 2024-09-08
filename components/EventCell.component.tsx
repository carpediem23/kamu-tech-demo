"use client";

import React, { ReactNode, FC, DragEvent, TouchEvent } from "react";
import TInitializeDay from "@/types/DaysOfWeek.type";

type TEventCellProps = {
  day: TInitializeDay;
  children: ReactNode;
};

/**
 * Renders a cell for displaying events with drag and touch support.
 *
 * @component
 * @param {TEventCellProps} props - The component props.
 * @param {Day} props.day - The day object for the cell.
 * @param {ReactNode} props.children - The content to be rendered inside the cell.
 * @returns {ReactNode} The rendered cell component.
 */
const EventCell: FC<TEventCellProps> = ({
  day,
  children,
}): ReactNode => {
  return (
    <div
      id={`event-day-${day.day}`}
      className="min-w-32 max-w-32 p-1 border-t border-b border-r border-slate-300"
      data-day={day.day}
    >
      {children}
    </div>
  );
};

export default EventCell;
