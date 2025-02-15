"use client";

import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "@/lib/features/active-menu-item/active-menu-slice";
import {
  CounterClockwiseClockIcon,
  DashboardIcon,
  GearIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

function Footer() {
  const dispatch = useDispatch();
  const activeComponent = useSelector((state) => state.activeMenu.activeMenu);

  const menuItems = [
    { id: "dashboard", icon: DashboardIcon },
    { id: "transactions", icon: CounterClockwiseClockIcon },
    { id: "add-group", icon: PlusCircledIcon },
    { id: "settings", icon: GearIcon },
  ];

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg h-20
      bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-lg flex justify-around items-center px-4"
    >
      {menuItems.map(({ id, icon }) => (
        <FooterIcon
          key={id}
          icon={icon}
          onClick={() => dispatch(setActiveMenu(id))}
          large={activeComponent === id}
        />
      ))}
    </div>
  );
}

const FooterIcon = ({ icon: Icon, onClick, large }) => (
  <button
    onClick={onClick}
    className={`p-4 transition-all flex items-center justify-center rounded-full
      ${
        large
          ? "bg-blue-500 w-14 h-14 shadow-lg scale-110"
          : "hover:bg-slate-700 w-14 h-14"
      } `}
  >
    <Icon width={28} height={28} color="#ffffff" />
  </button>
);

export default Footer;
