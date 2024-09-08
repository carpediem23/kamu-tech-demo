import React, { FC } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { BiMessageRoundedDots } from "react-icons/bi";
import TTeamMemberTask from "@/types/TeamMemberTask.type";

type TTeamMemberItemProps = {
  task: TTeamMemberTask;
};

/**
 * Renders a team member item component.
 *
 * @component
 * @param {TTeamMemberItemProps} props - The props for the component.
 * @param {Task} props.task - The task object for the team member.
 * @returns {JSX.Element} The rendered component.
 */
const TeamMemberItem: FC<TTeamMemberItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
    data: { accept: "task" },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      id={`team-member-item-${task.id}`}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex flex-row items-center h-full p-1 gap-2 cursor-pointer"
      style={{ backgroundColor: task.color, ...style }}
    >
      <div>
        <h5 className="text-xs truncate text-white">{task.title}</h5>
        <p className="text-xs truncate text-white">{task.subtitle}</p>
      </div>
      <BiMessageRoundedDots className="self-end text-white" />
    </div>
  );
};

export default TeamMemberItem;
