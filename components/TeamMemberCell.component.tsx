"use client";

import React, { ReactNode, FC } from "react";
import { useDroppable } from "@dnd-kit/core";
import TInitializeDay from "@/types/DaysOfWeek.type";

type TTeamMemberCellProps = {
  day: TInitializeDay;
  children: ReactNode;
};

/**
 * Represents a team member cell component.
 *
 * @component
 * @param {TTeamMemberCellProps} props - The props for the component.
 * @param {Day} props.day - The day object.
 * @param {ReactNode} props.children - The children of the component.
 * @returns {ReactNode} The rendered component.
 */
const TeamMemberCell: FC<TTeamMemberCellProps> = ({
  day,
  children,
}): ReactNode => {
  const { setNodeRef } = useDroppable({
    id: day.day,
    data: { type: "task" },
  });

  return (
    <div
      id={`team-member-cell-${day.day}`}
      ref={setNodeRef}
      className="flex flex-col min-w-32 max-w-32 p-1 gap-2 border-b border-r border-t border-slate-300"
    >
      {children}
    </div>
  );
};

export default TeamMemberCell;
