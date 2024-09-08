import React, { FC, ReactNode } from "react";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineDelete, AiOutlineFilter } from "react-icons/ai";
import { CiExport } from "react-icons/ci";
import SelectBox from "./common/SelectBox.component";
import Button from "./common/Button.component";

/**
 * Toolbox component.
 *
 * @component
 * @returns {ReactNode} The rendered Toolbox component.
 */
const Toolbox: FC = (): ReactNode => {
  return (
    <section
      id="toolbox"
      className="min-w-fit flex flex-row justify-between flex-wrap mb-8 p-4 gap-2 bg-neutral-100 overflow-x-auto"
    >
      <div className="flex flex-row gap-2">
        <Button title="Today" color="outline" />
        <SelectBox title="Mar 18, 2024 - Mar 24, 2024" icon={<CiCalendar />} />
      </div>
      <div className="flex flex-row gap-2">
        <SelectBox title="Weekly View" arrowShow />
        <SelectBox
          title="Copy to Another Week"
          icon={<CiCalendar />}
          arrowShow
        />
        <Button title="Delete" icon={<AiOutlineDelete />} />
      </div>
      <div className="flex flex-row gap-2">
        <SelectBox title="Filter" icon={<AiOutlineFilter />} arrowShow />
        <Button title="Export" icon={<CiExport />} />
        <Button title="Publish" color="primary" />
      </div>
    </section>
  );
};

export default Toolbox;
