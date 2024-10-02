import React from 'react';

interface AddCardProps {
    onAdd?: () => void; // Function to handle adding a new item
}

const AddCard: React.FC<AddCardProps> = ({ onAdd }) => {
    return (
        <div
            className="max-w-sm w-full h-full bg-gray-100 shadow-lg rounded-lg overflow-hidden flex justify-center items-center cursor-pointer hover:bg-gray-200"
            onClick={onAdd}
        >
            {/* Add Icon (SVG) */}
            <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </div>
    );
};

export default AddCard;
