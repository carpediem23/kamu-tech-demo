import React, { ReactNode, FC } from "react";

type TButtonProps = {
  title: string;
  color?: "primary" | "default" | "outline";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: ReactNode;
};

/**
 * Button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the button.
 * @param {string} props.type - The type of the button.
 * @param {string} props.color - The color of the button.
 * @param {Function} props.onClick - The function to be called on button click.
 * @param {ReactNode} props.icon - The icon of the button.
 * @returns {ReactNode} The rendered button component.
 */
const Button: FC<TButtonProps> = ({
  title,
  color = "default",
  type = "button",
  icon,
  onClick,
}): ReactNode => {
  let classes = "";

  switch (color) {
    case "primary":
      classes = "bg-primary text-white font-bold";
      break;
    case "outline":
      classes = "text-primary border border-primary";
      break;
    default:
      classes = "text-neutral-900";
      break;
  }

  return (
    <button
      className={`flex flex-row items-center justify-between hover:cursor-pointer p-2 gap-2 border rounded ${classes}`}
      type={type}
      onClick={onClick}
    >
      {icon && icon}
      <p className="text-sm">{title}</p>
    </button>
  );
};

export default Button;
