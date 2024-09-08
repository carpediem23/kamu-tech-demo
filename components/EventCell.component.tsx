"use client";

import React, { ReactNode, FC } from "react";
import { useDroppable } from "@dnd-kit/core";
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
const EventCell: FC<TEventCellProps> = ({ day, children }): ReactNode => {
  const { setNodeRef } = useDroppable({
    id: day.day,
    data: { accept: "event" },
  });

  return (
    <div
      id={`event-cell-${day.day}`}
      ref={setNodeRef}
      className="flex flex-col min-w-32 max-w-32 p-1 gap-2 border-b border-r border-slate-300"
    >
      {children}
    </div>
  );
};

export default EventCell;
