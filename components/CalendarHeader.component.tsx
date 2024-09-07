"use client";

import React, { ReactNode, FC } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import TInitializeDay from "@/types/DaysOfWeek.type";
import SelectBox from "./common/SelectBox.component";

type TCalendarHeaderProps = {
  initializeDays: TInitializeDay[];
};

/**
 * CalendarHeader component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.initializeDays - The function to initialize the days.
 * @returns {ReactNode} The rendered component.
 */
const CalendarHeader: FC<TCalendarHeaderProps> = ({
  initializeDays,
}): ReactNode => {
  return (
    <header id="calendar-header" className="flex">
      <div className="min-w-48 max-w-48 min-h-32 p-2 border-t border-b border-r border-l border-slate-300">
        <div className="flex justify-end">
          <AiOutlineSortAscending className="text-neutral-500" size={24} />
        </div>
        <div className="flex flex-row items-center justify-between">
          <SelectBox title="Employee view" arrowShow />
          <AiOutlineSearch className="text-neutral-500" />
        </div>
      </div>
      {initializeDays.map((data: TInitializeDay) => (
        <div
          key={data.day}
          className="min-w-32 max-w-32 min-h-32 p-2 border-t border-b border-r border-slate-300"
        >
          <h5 className="font-light text-neutral-600">{data.name}</h5>
          <p className="text-4xl text-neutral-600">{data.day}</p>
        </div>
      ))}
    </header>
  );
};

export default CalendarHeader;
