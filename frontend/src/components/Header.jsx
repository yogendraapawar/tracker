import React from "react";
import { LayoutDashboard, Settings } from "lucide-react"; // import your icons
import { Plus, SquarePlus } from "lucide-react"; // import your icons
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
import { toggleTransactionForm } from "../redux/triggerFlagsSlice";
import TransactionForm from "./TransactionForm";

export function Header() {
  const dispatch = useDispatch();
  return (
    <div className="w-screen">
      <div className="hidden sm:flex py-2 px-4 gap-4 justify-between items-center bg-white shadow-md">
        <div className="text-lg font-bold">TrackerX</div>
        <div className="w-full flex justify-start gap-4">
          <div style={{ cursor: "pointer" }} onClick={() => console.log("Dashboard clicked")}>Dashboard</div>
          <div style={{ cursor: "pointer" }} onClick={() => console.log("Settings clicked")}>Settings</div>
        </div>
        <TransactionForm/>
      </div>

      {/* Mobile Footer */}
      <div className="flex sm:hidden py-2 px-4 justify-around fixed bottom-0 left-0 bg-white w-full shadow-md">
        <LayoutDashboard className="w-6 h-6" />
        <SquarePlus onClick={()=> dispatch(toggleTransactionForm())}/>
        <Settings />
        {/* Add more icons as needed */}
      </div>
    </div>
  );
}
