"use client";

import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import { NAVIGATION_ITEMS } from "@/constants";
import BuildingImage from "@/public/material-apartment.svg";

const Navigation: FC = (): ReactNode => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav id="app-navigation" className={`flex flex-col p-4 gap-4`}>
      <div
        className={
          collapsed
            ? "hidden"
            : "flex flex-row items-center justify-between mb-8 p-2 bg-white rounded-xl"
        }
      >
        <Image
          src={BuildingImage}
          width={24}
          height={24}
          alt="Building Image"
        />
        <div className="flex flex-col gap-2">
          <h5 className="text-xs font-bold">Location</h5>
          <p className="text-sm text-neutral-600">Sky Cafe Bar</p>
        </div>
        <AiOutlineDown className="self-start" />
      </div>
      {NAVIGATION_ITEMS.map((item, index) => {
        const active = index === 0;

        return (
          <Link
            key={index}
            href={`/${item.url}`}
            className={`transition-all duration-1000 flex flex-row items-center px-4 py-2 gap-2 text-base rounded-xl ${
              active ? "text-white font-bold" : "text-neutral-600"
            } ${active ? "bg-primary" : ""} ${collapsed ? "" : "min-w-48"}`}
          >
            {item.icon && (
              <span className="text-2xl">
                <item.icon />
              </span>
            )}
            {collapsed ? null : item.title}
          </Link>
        );
      })}
      <hr />
      <button
        type="button"
        role="switch"
        className="flex flex-row items-center px-4 py-2 gap-2 text-neutral-600"
        onClick={() => setCollapsed(!collapsed)}
      >
        <TbLayoutSidebarLeftCollapse className="text-2xl" />
        {collapsed ? null : <p>Collapse Menu</p>}
      </button>
    </nav>
  );
};

export default Navigation;
