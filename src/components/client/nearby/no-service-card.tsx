import React from "react";

interface NoStoreCardProps {
}

const NoServiceCard: React.FC<NoStoreCardProps> = () => {
    return (
        <div className="">
            <div
                className="bg-gray-100 shadow-lg rounded-lg p-6"
            >
                <div className="flex flex-row items-center justify-between pb-2">
                    <h3 className="text-lg font-medium">No Services Available</h3>
                </div>
                <div>
                    <p className="text-md text-gray-500">There are currently no services available nearby. Change
                        filters</p>
                </div>
            </div>
        </div>
    );
};

export default NoServiceCard;
