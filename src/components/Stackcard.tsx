import { useState } from 'react';
import type { Stack } from './type';
import SingleCard from './singlecard';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

interface StackcardProps {
    stack: Stack[];
}

const Stackcard = ({ stack }: StackcardProps) => {

    const [selectedStack, setSelectedStack] = useState<Stack[]>([]);

    const handleRemove = (id: string) => {

        const removedItem = selectedStack.find(
            (item) => item.id === id
        );

        setSelectedStack(
            selectedStack.filter((item) => item.id !== id)
        );

        toast.error(`${removedItem?.name} removed from your stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const handleRemoveAll = () => {

        setSelectedStack([]);

        toast.error("All technologies removed from your stack", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-8'>

            <div className='col-span-1 md:col-span-3 text-[#475569] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>

                {
                    stack.map((item) => {

                        const isSelected = selectedStack.some(
                            (selected) => selected.id === item.id
                        );

                        return (
                            <SingleCard
                                key={item.id}
                                item={item}
                                isSelected={isSelected}
                                setSelectedStack={setSelectedStack}
                                onRemove={handleRemove}
                            />
                        );
                    })
                }

            </div>

            <div className='border border-[#f1f5f9] rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] w-full self-start bg-white p-5'>

                <h2 className='text-[#0f172a] font-bold text-xl'>
                    Your Stack
                </h2>

                <p className='text-[#64748b] text-xs mt-1'>

                    {
                        selectedStack.length === 0
                            ? "No technologies selected yet."
                            : `${selectedStack.length} ${
                                selectedStack.length === 1
                                    ? "technology"
                                    : "technologies"
                            } selected`
                    }

                </p>

                <div className='border border-dashed border-[#e2e8f0] rounded-xl mt-4 p-3'>

                    {
                        selectedStack.length === 0
                            ?
                            <p className='text-[#94a3b8] text-xs text-center py-5'>
                                Your stack is empty.
                            </p>
                            :
                            selectedStack.map((item) => {

                                return (
                                    <div
                                        key={item.id}
                                        className='border border-[#f1f5f9] rounded-lg flex justify-between items-center p-2 mb-2'
                                    >

                                        <div className='flex items-center gap-2'>

                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className='w-7 h-7 object-contain'
                                            />

                                            <div>

                                                <p className='text-[#0f172a] text-xs font-semibold'>
                                                    {item.name}
                                                </p>

                                                <p className='text-[#0ea5e9] text-[10px]'>
                                                    {item.badge}
                                                </p>

                                            </div>

                                        </div>

                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-[#94a3b8] hover:text-red-500 text-lg"
                                        >
                                            <IoClose />
                                        </button>

                                    </div>
                                );
                            })
                    }

                </div>

                {
                    selectedStack.length > 0 &&
                    <button
                        onClick={handleRemoveAll}
                        className='w-full h-9 mt-3 bg-[#0a0f1d] rounded-lg text-white text-xs font-medium'
                    >
                        Remove All
                    </button>
                }

            </div>

        </div>
    );
};

export default Stackcard;