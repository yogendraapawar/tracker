"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveMenu,
  setActiveMenuHeading,
} from "@/lib/slices/active-menu-slice";
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
    { id: "dashboard", icon: DashboardIcon, heading: "Dashboard" },
    {
      id: "transactions",
      icon: CounterClockwiseClockIcon,
      heading: "Transactions",
    },
    { id: "addTransaction", icon: PlusCircledIcon, heading: "Add Transaction" },
    { id: "settings", icon: GearIcon, heading: "Settings" },
  ];

  const handleMenuItemCLick = (id, heading) => {
    dispatch(setActiveMenu(id));
    dispatch(setActiveMenuHeading(heading));
  };

  return (
    <div
      className=" bottom-4  transform w-full max-w-lg h-20
      bg-slate-800/80 backdrop-blur-lg shadow-lg flex justify-around items-center px-4"
    >
      {menuItems.map(({ id, icon, heading }) => (
        <FooterIcon
          key={id}
          icon={icon}
          onClick={()=>handleMenuItemCLick(id, heading)}
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
