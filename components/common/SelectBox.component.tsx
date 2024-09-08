import React, { ReactNode } from "react";
import { AiOutlineDown } from "react-icons/ai";

type TSelectBoxProps = {
  title: string;
  arrowShow?: boolean;
  icon?: ReactNode;
};

/**
 * SelectBox component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the SelectBox.
 * @param {boolean} props.arrowShow - Determines whether to show the arrow or not.
 * @param {ReactNode} props.icon - The icon to display in the SelectBox.
 * @returns {ReactNode} The rendered SelectBox component.
 */
const SelectBox: React.FC<TSelectBoxProps> = ({ title, arrowShow, icon }) => {
  return (
    <div className="flex flex-row items-center justify-between hover:cursor-pointer">
      <div className="flex flex-row items-center p-2 gap-2 border rounded">
        {icon && icon}
        <p className="text-sm text-neutral-900">{title}</p>
        {arrowShow && <AiOutlineDown size={10} />}
      </div>
    </div>
  );
};

export default SelectBox;
