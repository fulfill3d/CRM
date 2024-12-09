import React from 'react';

const NoEmployeeCard: React.FC = () => {
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
                {/* Static Message */}
                <h2 className="text-xl font-bold text-gray-800">
                    No Employees Available
                </h2>

                {/* Information Message */}
                <p className="text-gray-600 mt-2">
                    You currently have no employees listed. Once you add employees, they will appear here.
                </p>
            </div>
        </div>
    );
};

export default NoEmployeeCard;
