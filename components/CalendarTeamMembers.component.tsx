"use client";

import React, { ReactNode, FC, useState } from "react";
import Image from "next/image";
import { DndContext } from "@dnd-kit/core";
import TTeamMemberTask from "@/types/TeamMemberTask.type";
import TInitializeDay from "@/types/DaysOfWeek.type";
import TeamMemberItem from "./TeamMemberItem.component";
import TeamMemberCell from "./TeamMemberCell.component";

type TCalendarTeamMembersProps = {
  initializeDays: TInitializeDay[];
  tasks: TTeamMemberTask[];
};

const CalendarTeamMembers: FC<TCalendarTeamMembersProps> = ({
  initializeDays = [],
  tasks = [],
}): ReactNode => {
  const [taskList, setTaskList] = useState<TTeamMemberTask[]>(tasks);
  const [draggingTask, setDraggingTask] = useState<TTeamMemberTask | null>(
    null
  );
  const handleDragEnd = ({ over }: { over: any }) => {
    if (over === null) return;
    
    const updatedEvent = { ...draggingTask, day: over?.id };
    const updatedList = taskList.map((task) =>
      task.id === draggingTask?.id ? updatedEvent : task
    );

    setTaskList(updatedList as TTeamMemberTask[]);
  };
  const handleDragStart = (e: any) => {
    const current = taskList.find(
      (event) => event.id === parseInt(e.active.id)
    );

    if (current) {
      setDraggingTask(current);
    }
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <section id="calendar-events" className="flex">
        <div className="flex flex-row items-center min-w-48 max-w-48 p-2 gap-2 border-t border-b border-r border-l border-slate-300">
          <Image
            className="rounded-xl"
            src="https://picsum.photos/id/64/200"
            width={25}
            height={25}
            alt="Team member image"
          />
          <div>
            <h5 className="text-sm text-neutral-900">Jessica Black</h5>
            <p className="text-sm text-neutral-500">40h00/39h46</p>
          </div>
        </div>
        {initializeDays.map((day, index) => (
          <TeamMemberCell key={index} day={day}>
            {taskList.map(
              (task) =>
                day.day === task.day && (
                  <TeamMemberItem key={task.id} task={task} />
                )
            )}
          </TeamMemberCell>
        ))}
      </section>
    </DndContext>
  );
};

export default CalendarTeamMembers;
