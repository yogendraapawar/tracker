import React from "react";
import { AppLogo } from "./icons/export-icons";

function Header() {
  return (
    <div className="flex flex-row items-center w-full h-20 bg-slate-600 p-2">
      <AppLogo />
    </div>
  );
}

export default Header;
