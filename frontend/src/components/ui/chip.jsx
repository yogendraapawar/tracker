import { cn } from "@/lib/utils";
import { TypographySmall } from "./typography";

function Chip({ className, name, selected, onClick, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white rounded-md min-w-28 h-8",
        selected ? "bg-blue-500" : "bg-gray-500",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <TypographySmall>{name}</TypographySmall>
    </div>
  );
}

function ChipGroup({
  items = [],
  multiSelect = false,
  selectedItems = [],
  onSelectionChange,
}) {
  const handleChipClick = (chipName) => {
    if (multiSelect) {
      if (selectedItems.includes(chipName)) {
        onSelectionChange(selectedItems.filter((item) => item !== chipName));
      } else {
        onSelectionChange([...selectedItems, chipName]);
      }
    } else {
      if (selectedItems[0] === chipName) {
        onSelectionChange([]);
      } else {
        onSelectionChange([chipName]);
      }
    }
  };

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar mt-2">
      {items.map((item, index) => (
        <Chip
          key={index}
          name={item}
          selected={selectedItems.includes(item)}
          onClick={() => handleChipClick(item)}
        />
      ))}
    </div>
  );
}

export { Chip, ChipGroup };
