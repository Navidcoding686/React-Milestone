import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { Stack } from "./type";

interface SingleCardProps {
    item: Stack;
    isSelected: boolean;
    setSelectedStack: Dispatch<SetStateAction<Stack[]>>;
    onRemove: (id: string) => void;
}

const SingleCard = ({
    item,
    isSelected,
    setSelectedStack
}: SingleCardProps) => {

    return (
        <div className="w-full h-71.75 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] p-5">

            <div className="h-10 flex items-center justify-between">

                <div className="w-10 h-10 flex items-center justify-center">
                    <img
                        src={item.icon}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                    />
                </div>

                {
                    item.badge &&
                    <p className="bg-[#f0f9ff] border border-[#e0f2fe] text-[#0ea5e9] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {item.badge}
                    </p>
                }

            </div>

            <div className="h-8.5 mt-1 flex items-center">

                <h2 className="text-[18px] leading-7 font-bold text-[#0f172a]">
                    {item.name}
                </h2>

            </div>

            <div className="h-14.75">

                <p className="text-[12px] leading-[1.625] font-normal text-[#64748b]">
                    {item.description}
                </p>

            </div>

            <div className="h-7.5 mt-4 border-b border-[#f8fafc] flex items-center justify-between">

                <p className="text-[11px] text-[#64748b]">
                    {item.category}
                </p>

                <p className="text-[11px] text-[#64748b]">
                    {item.difficulty}
                </p>

                <p className="text-[11px] text-[#64748b] flex items-center gap-1">
                    <FaStar className="text-[#f59e0b] text-[11px]" />
                    {item.rating}
                </p>

            </div>

            <div className="mt-4">

                <button
                    onClick={() => {

                        if (isSelected) {

                            toast.warning(
                                `${item.name} is already in your stack`,
                                {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: "light"
                                }
                            );

                        } else {

                            setSelectedStack((previous) => [
                                ...previous,
                                item
                            ]);

                            toast.success(
                                `${item.name} added to your stack`,
                                {
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: "light"
                                }
                            );
                        }

                    }}
                    className="w-full h-9 bg-[#0a0f1d] rounded-lg text-white text-xs font-medium"
                >
                    {
                        isSelected
                            ? "Added to stack"
                            : "Add to Stack"
                    }
                </button>

            </div>

        </div>
    );
};

export default SingleCard;