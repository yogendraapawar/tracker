import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { DatePickerDemo, DatePickerWithPresets } from "../export-components";
import { TypographyH1 } from "../ui/typography";
function AddTransaction() {
  return (
    <div className="flex flex-col">
      <TypographyH1 className="my-3 px-4">Add Transaction</TypographyH1>
      <Input
        type="number"
        placeholder="0"
        className="h-32 text-[50px] font-bold text-right bg-white rounded-none 
    !border-0 !outline-none !ring-0 !ring-offset-0
    focus:!border-0 focus:!outline-none focus:!ring-0 focus:!ring-offset-0"
      />
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full h-10 rounded-none px-0">
          <TabsTrigger className="w-full h-10 rounded-none" value="account">
            <TriangleUpIcon color="red" />
            Expense
          </TabsTrigger>
          <TabsTrigger className="w-full h-10 rounded-none" value="password">
            <TriangleDownIcon color="green" />
            Income
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <DatePickerDemo className="" />
    </div>
  );
}

export default AddTransaction;
