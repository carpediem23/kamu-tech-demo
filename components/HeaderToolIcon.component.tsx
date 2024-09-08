"use client";

import React, { FC, ReactNode } from "react";

type THeaderToolIconProps = {
  children: ReactNode;
  notification?: boolean;
};

/**
 * Represents a header tool icon component.
 *
 * @component
 * @param {React.ReactNode} children - The content of the component.
 * @param {boolean} notification - Indicates whether the component has a notification.
 * @returns {JSX.Element} The rendered header tool icon component.
 */
const HeaderToolIcon: FC<THeaderToolIconProps> = ({
  children,
  notification,
}): ReactNode => {
  return (
    <div className="relative hover:cursor-pointer">
      {notification && (
        <div className="absolute top-0 right-1 bg-secondary-light w-2 h-2 rounded"></div>
      )}
      {children}
    </div>
  );
};

export default HeaderToolIcon;
