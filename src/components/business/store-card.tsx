import React from "react";

interface StoreCardProps {
    title: string;
    icon?: React.ReactNode;
    content: string;
    onClick: () => void;
    created_at: string;
}

const StoreCard = (props: StoreCardProps) => {
    return (
        <div
            role="button" // Adds button role for accessibility
            tabIndex={0} // Makes the div focusable
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral hover:bg-gray-50 active:bg-gray-200 transition-all"
            onClick={props.onClick}
        >
            <div className="flex flex-row items-center justify-between pb-2">
                {/* Title and Icon */}
                <h3 className="text-lg font-medium">{props.title}</h3>
                {props.icon && <div>{props.icon}</div>}
            </div>
            <div>
                <p className="text-md text-gray-500">{props.content}</p>
            </div>
            <div className="mt-4">
                <p className="text-xs text-gray-500 text-right">
                    Created At: {new Date(props.created_at).toLocaleDateString('en-US')}
                </p>
            </div>
        </div>
    );
};

export default StoreCard;
