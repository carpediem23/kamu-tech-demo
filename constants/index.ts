import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoUmbrellaOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { PiContactlessPayment } from "react-icons/pi";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { TNavigationItem } from "@/types/Navigation.type";

export const NAVIGATION_ITEMS: TNavigationItem[] = [
  { title: "Dashboard", icon: MdOutlineDashboard, url: "dashboard" },
  { title: "Schedule", icon: AiOutlineSchedule, url: "schedule" },
  { title: "Time Off", icon: IoUmbrellaOutline, url: "time-off" },
  { title: "Attendance", icon: IoIosTimer, url: "attendance" },
  { title: "Payroll", icon: PiContactlessPayment, url: "payroll" },
  { title: "Requests", icon: IoGitPullRequestOutline, url: "requests" },
  { title: "Team", icon: AiOutlineTeam, url: "team" },
  { title: "Settings", icon: AiOutlineSetting, url: "settings" },
];
