import { Button } from "../ui/button";
import { ChipGroup } from "../ui/chip";
import { DatePickerDemo } from "../export-components";
import { Input } from "../ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { TypographyH4 } from "../ui/typography";
import { useCategory } from "../../lib/hooks/useCategory";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CategoryItem from "../CategoryItem";
import SelectCategory from "../SelectCategory";
import { useUiToggle } from "@/lib/hooks/useUiToggle";
import * as lodash from "lodash";
function AddTransaction() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [file, setFile] = useState(null);
  const { isSelectCategoryOpen, handleSelectCategoryOpen } = useUiToggle();
  const dispatch = useDispatch();
  const {
    categories,
    selectedCategory,
    isLoading,
    error,
    handleSelectCategory,
    handleAddCategory,
  } = useCategory();

  const handleChipSelectionChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const focusOnAmountInput = () => {
    document.getElementById("amount-input").focus();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      amount,
      title,
      description,
      date,
      paymentMethod: selectedItems[0],
      category: selectedCategory,
      file,
    };
    console.log("Form Data: ", JSON.stringify(formData));
  };

  return (
    <div className="flex flex-col">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full h-10 rounded-none px-0">
          <TabsTrigger className="w-full h-10 rounded-none" value="account">
            <TriangleUpIcon color="red" className="w-4 h-4 " />
            <TypographyH4>Expense</TypographyH4>
          </TabsTrigger>
          <TabsTrigger className="w-full h-10 rounded-none" value="password">
            <TriangleDownIcon color="green" className="w-4 h-4 " />
            <TypographyH4>Income</TypographyH4>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center pl-2">
        {selectedCategory && (
          <CategoryItem
            emoji={selectedCategory.emoji}
            bgColor={selectedCategory.backgroundColor}
            onClick={() => {
              handleSelectCategoryOpen(true);
            }}
          />
        )}

        <Input
          type="number"
          placeholder="0"
          id="amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input h-28 text-[50px] font-bold text-right bg-white rounded-none 
    !border-0 !outline-none !ring-0 !ring-offset-0
    focus:!border-0 focus:!outline-none focus:!ring-0 focus:!ring-offset-0"
        />
      </div>
      
<div className="mt-4">
      <DatePickerDemo
        defaultDate={date}
        selected={date}
        onChange={setDate}
      />
      </div>
      <div className="px-4 mt-2">
        <div className="flex w-full gap-2 overflow-x-auto overflow-hidden no-scrollbar ">
          <div className="flex gap-2">
            <ChipGroup
              items={["Cash", "UPI", "Card", "Cheque"]}
              multiSelect={false}
              selectedItems={selectedItems}
              onSelectionChange={handleChipSelectionChange}
            />
          </div>
        </div>
        <Input
          placeholder={"Title"}
          value={title}
          icon={<TriangleDownIcon />}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-8"
        />
        <Textarea
          placeholder="Description"
          cols="40"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2"
        />
        <Input
          id="picture"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-2"
        />
        {(!selectedCategory || isSelectCategoryOpen) && (
          <SelectCategory className={"mt-8"} />
        )}
        {selectedCategory && !lodash.isEmpty(amount) && amount !== "0" && (
          <Button className={"w-full mt-4"} onClick={handleFormSubmit}>
            <TypographyH4>Add Transaction</TypographyH4>
          </Button>
        )}
        {selectedCategory && (lodash.isEmpty(amount) || amount == "0") && (
          <Button className={"w-full mt-4"} onClick={focusOnAmountInput}>
            <TypographyH4>Enter amount</TypographyH4>
          </Button>
        )}
      </div>
    </div>
  );
}

export default AddTransaction;
