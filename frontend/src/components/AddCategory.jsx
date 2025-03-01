import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  DrawerPortal,
  DrawerOverlay,
} from "@/components/ui/drawer";
import AddSquareIcon from "./icons/AddSquareIcon";
import CategoryItem from "./CategoryItem";
import { useUiToggle } from "@/lib/hooks/useUiToggle";
import { useCategory } from "@/lib/hooks/useCategory";

const expenseTrackerEmojis = [
  "💰",
  "🤑",
  "🏦",
  "💸",
  "💳",
  "🧾",
  "🏠",
  "💡",
  "🚰",
  "🍔",
  "🍣",
  "🥗",
  "🥩",
  "🍽️",
  "🚗",
  "🚊",
  "🚕",
  "✈️",
  "🚂",
  "🛒",
  "👗",
  "👚",
  "💍",
  "🍿",
  "🎥",
  "🎮",
  "🎧",
  "🎪",
  "🏋️‍♂️",
  "🏃‍♀️",
  "🚴‍♀️",
  "🧘‍♀️",
  "🍎",
  "🥦",
  "💵",
  "🏦",
  "🏠",
  "💼",
  "📊",
  "📉",
  "💻",
  "🛏️",
  "🎟️",
  "🤝",
  "🎁",
  "❤️",
  "🙏",
  "🧾",
  "📜",
  "🧳",
  "🎉",
  "🎂",
  "🧸",
];

const backgroundColors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#FF8C33",
  "#33FFF5",
  "#8C33FF",
  "#FF3333",
];

export default function AddCategory() {
  
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedBgColor, setSelectedBgColor] = useState(backgroundColors[0]);
  const [categoryName, setCategoryName] = useState("");
  const { isAddCategoryOpen, handleAddCategoryOpen } = useUiToggle();
  const { handleAddCategory } = useCategory();
  const handleSubmit = () => {
    const categoryData = {
      name: categoryName,
      emoji: selectedEmoji,
      backgroundColor: selectedBgColor,
    };
    console.info("New Category Data:", categoryData);

    handleAddCategory(categoryData);
    handleAddCategoryOpen(false);
  };
 
  return (
    <>
      <Drawer dismissible={true} open={isAddCategoryOpen}>
        <DrawerTrigger asChild onClick={() => handleAddCategoryOpen(true)}>
          <button>
            <AddSquareIcon width="50" height="50" fill="blue" />
          </button>
        </DrawerTrigger>

        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />

          <DrawerContent className="w-full bg-gray-100 flex flex-col rounded-t-[10px] lg:h-[327px] h-full mt-24 max-h-[94%] fixed bottom-0 left-0 right-0">
            <DrawerHeader>
              <DrawerTitle>Add Category</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex justify-center items-center gap-4 px-4 max-w-2xl mx-auto">
              {selectedEmoji && (
                <CategoryItem emoji={selectedEmoji} bgColor={selectedBgColor} />
              )}
              <div className="flex-1 min-w-0">
                <Input
                  type="text"
                  placeholder="Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="h-28 text-[36px] font-bold text-left rounded-none 
                !border-0 !outline-none !ring-0 !ring-offset-0
                focus:!border-0 focus:!outline-none focus:!ring-0 focus:!ring-offset-0"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-full  justify-center gap-4 p-4 overflow-y-auto flex-grow flex-1">
              {expenseTrackerEmojis.map((emoji, index) => (
                <div
                  key={index}
                  className="text-3xl cursor-pointer"
                  onClick={() => setSelectedEmoji(emoji)}
                >
                  {emoji}
                </div>
              ))}
            </div>

            <div className="flex overflow-x-auto space-x-4 p-4">
              {backgroundColors.map((color, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedBgColor(color)}
                />
              ))}
            </div>

            <DrawerFooter>
              <Button onClick={handleSubmit}>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </>
  );
}
