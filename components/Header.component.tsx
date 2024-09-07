"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import UserAvatar from "./common/UserAvatar.component";
import HeaderToolIcon from "./HeaderToolIcon.component";
import logo from "@/public/logo.png";

const Header: FC = (): ReactNode => {
  return (
    <header
      id="app-header"
      className="flex flex-row justify-between p-4 bg-primary"
    >
      <Link href="/">
        <Image
          src={logo}
          alt="KamuTech Demo Logo"
          width={100}
          height={100}
          priority={false}
          placeholder="blur"
        />
      </Link>
      <section id="app-header-tools" className="flex flex-row gap-4">
        <HeaderToolIcon notification>
          <AiOutlineFolderAdd color="white" size={24} />
        </HeaderToolIcon>
        <HeaderToolIcon notification>
          <IoIosNotificationsOutline color="white" size={24} />
        </HeaderToolIcon>
        <HeaderToolIcon notification>
          <AiOutlineFieldTime color="white" size={24} />
        </HeaderToolIcon>
        <UserAvatar
          size={24}
          src="https://picsum.photos/id/64/200"
          alt="User Avatar"
        />
      </section>
    </header>
  );
};

export default Header;
