"use client";

import { useDispatch, useSelector } from "react-redux";
import Dashboard from "@/components/pages/Dashboard";
import Transactions from "@/components/pages/Transactions";
import AddTransaction from "@/components/pages/AddTransaction";
import Settings from "@/components/pages/Settings";
import AddCategory from "@/components/AddCategory";

export default function Home() {
  const activeComponent = useSelector((state) => state.activeMenu.activeMenu);
  const dispatch = useDispatch()
  const menuComponents = {
    dashboard: <Dashboard />,
    transactions: <Transactions />,
    addTransaction: <AddTransaction />,
    settings: <Settings />,
    addCategory:<AddCategory/>,
  };

  return (
    <div className="flex flex-col">
      {menuComponents[activeComponent]}
    </div>
  );
}
