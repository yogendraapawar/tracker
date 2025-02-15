"use client";

import { useSelector } from "react-redux";
import Dashboard from "@/components/pages/Dashboard";
import Transactions from "@/components/pages/Transactions";
import AddTransaction from "@/components/pages/AddTransaction";
import Settings from "@/components/pages/Settings";

export default function Home() {
  const activeComponent = useSelector((state) => state.activeMenu.activeMenu);

  const menuComponents = {
    dashboard: <Dashboard />,
    transactions: <Transactions />,
    "add-group": <AddTransaction />,
    settings: <Settings />,
  };

  return (
    <div className=" bg-slate-400 flex flex-col">
      {menuComponents[activeComponent]}
    </div>
  );
}
