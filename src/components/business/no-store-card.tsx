import React from "react";

interface NoStoreCardProps {}

const NoStoreCard: React.FC<NoStoreCardProps> = () => {
    return (
        <div
            className="bg-gray-100 shadow-lg rounded-lg p-6"
        >
            <div className="flex flex-row items-center justify-between pb-2">
                <h3 className="text-lg font-medium">No Stores Available</h3>
            </div>
            <div>
                <p className="text-md text-gray-500">There are currently no stores available. Click here to add your first store.</p>
            </div>
        </div>
    );
};

export default NoStoreCard;
