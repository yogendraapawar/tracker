"use client";
import React from "react";
import { AppLogo } from "./icons/export-icons";
import { useSelector } from "react-redux";
import { TypographyH2 } from "./ui/typography";

function Header() {
  const selectedMenuHeading = useSelector(
    (state) => state.activeMenu.activeMenuHeading
  );
  return (
    <div className="flex flex-row items-center w-full h-20 p-2">
      <TypographyH2>{selectedMenuHeading}</TypographyH2>
    </div>
  );
}

export default Header;
