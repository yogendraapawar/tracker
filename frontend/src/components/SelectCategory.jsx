import { Button } from "../components/ui/button";
import { TypographyH4 } from "./ui/typography";
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
} from "../components/ui/drawer";
import AddCategory from "./AddCategory";
import { useCategory } from "../lib/hooks/useCategory";

import { predefinedCategories } from "@/mock-store/categories";
import CategoryItem from "./CategoryItem";
import { useUiToggle } from "@/lib/hooks/useUiToggle";

export default function SelectCategory() {
  const { categories, selectedCategory, isLoading, handleSelectCategory } =
    useCategory();
  const { isSelectCategoryOpen, handleSelectCategoryOpen } = useUiToggle();
  return (
    <>
      <Drawer open={isSelectCategoryOpen} onOpenChange={handleSelectCategoryOpen}>
        <DrawerTrigger asChild>
          <Button className="py-2 mt-4 w-full">
            <TypographyH4>Select Category</TypographyH4>
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />
          <DrawerContent className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 lg:h-fit max-h-[96%] fixed bottom-0 left-0 right-0">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categories.map((category) => (
                <CategoryItem
                  key={category.emoji}
                  emoji={category.emoji}
                  bgColor={category.backgroundColor}
                  categoryName={category.name}
                  onClick={() => {
                    console.log(`Category selected: ${category.name}`);
                    handleSelectCategory(category);
                    handleSelectCategoryOpen(false);
                  }}
                />
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose
                asChild
                onClick={() => handleSelectCategoryOpen(false)}
              >
                <Button variant={"destructive"} className="py-2 mt-4 w-full">
                  <TypographyH4>Cancel</TypographyH4>
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </>
  );
}
