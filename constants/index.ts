import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoUmbrellaOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { PiContactlessPayment } from "react-icons/pi";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { TNavigationItem } from "@/types/Navigation.type";
import TInitializeDay from "@/types/DaysOfWeek.type";
import TCalendarEvent from "@/types/CalendarEvent.type";

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

export const DAYS_OF_WEEK: TInitializeDay[] = [
  { day: "01", name: "Mon" },
  { day: "02", name: "Tue" },
  { day: "03", name: "Wed" },
  { day: "04", name: "Thu" },
  { day: "05", name: "Fri" },
  { day: "06", name: "Sat" },
  { day: "07", name: "Sun" },
];

export const EVENTS: TCalendarEvent[] = [
  { id: 0, title: "Event title lorem ipsum", day: "03", color: "#A6F5FFFF" },
];
