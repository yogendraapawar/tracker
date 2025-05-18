import React, { useEffect } from 'react';
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { CardWrapper } from './card-wrapper';
import { SelectWrapper } from './select-wrapper';
import { DialogWrapper } from './dialog-wrapper';
import { CalendarWrapper } from './calender-wrapper';
import { Button } from "@/components/ui/button"
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { ToggleGroupDemo } from './togglegroup-wrapper';
import CategoryCreationForm from './category-creation-form';
import { useSelector } from 'react-redux';
import { Plus, SquarePlus } from "lucide-react"; // import your icons
import { useDispatch } from 'react-redux';
import { toggleSelectCategoryModal, toggleTransactionForm } from '../redux/triggerFlagsSlice';
import { DrawerDialogWrapper } from './drawer-dialog-wrapper';

const TransactionForm = () => {
    const [date, setDate] = useState(new Date())
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();


    const isSelectCategoryOpen = useSelector((state) => state.triggerFlag.isSelectCategoryOpen);
    const isTransactionFormOpen = useSelector((state) => state.triggerFlag.isTransactionFormOpen);

    const handleCategorySelection = (category) => {
        console.log("Selected category:", category);
        setCategory(category);
        dispatch(toggleSelectCategoryModal());
    }
    const handleDateChange = (selectedDate) => {
        console.log("Selected date:", selectedDate)
        if (selectedDate) setDate(selectedDate);
    }

    useEffect(() => {
        console.log("Date changed:", date);
    }, [date]);
    const items = [
        { value: "income", label: "Income" },
        { value: "expense", label: "Expense" }
    ]


    return (
        <DrawerDialogWrapper open={isTransactionFormOpen} onChange={() => dispatch(toggleTransactionForm())} trigger={<Button><Plus className="mr-2 h-4 w-4" />Add Transaction</Button>} title="Add Transaction" description="Fill in the details of the transaction">
                <div className='flex h-full w-full gap-4 mb-4'>
                    <div className='flex flex-col gap-4 flex-1'>
                        <ToggleGroupDemo toggleItems={items} />
                        <Input type="text" placeholder="Amount" />
                        <DrawerDialogWrapper
                            open={isSelectCategoryOpen}
                            onChange={handleCategorySelection}
                            trigger={
                                category ? (
                                    <Button>
                                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}>
                                            <span>{category.emoji}</span>
                                            <span>{category.categoryName}</span>
                                        </span>
                                    </Button>
                                ) :<Button>Choose category</Button>
                            }
                            title="Select Category"
                            description="Select a category for the transaction"
                        >
                            <CategoryCreationForm handleCategorySelection={handleCategorySelection} />
                        </DrawerDialogWrapper>
                        <Input type="text" placeholder="Description" />
                        <DialogWrapper className={"w-fit"} triggerLabel={date.toDateString()} title="Select Date" description="Choose a date for the transaction">
                            <CalendarWrapper value={date} onChange={handleDateChange} />
                        </DialogWrapper>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <Button className={"w-full"} variant="destructive">Cancel</Button>
                    <Button className={"w-full"}>Add Transaction</Button>
                </div>
        </DrawerDialogWrapper>
    );
};

export default TransactionForm;