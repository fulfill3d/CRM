import React from "react";

const ServiceFilter = () => {

    return (
        <div className="flex items-center justify-center bg-white p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ZipCode Input */}
                <div className="flex flex-col">
                    <label htmlFor="zipcode" className="text-gray-700 font-semibold">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        id="zipcode"
                        className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                        placeholder="Enter Zip Code"
                    />
                </div>

                {/* Range Slider */}
                <div className="flex flex-col">
                    <label htmlFor="range" className="text-gray-700 font-semibold">
                        Range (Miles)
                    </label>
                    <input
                        type="range"
                        id="range"
                        min="1"
                        max="50"
                        className="mt-2 w-full focus:outline-none focus:ring-2 focus:ring-coral"
                    />
                    <span className="mt-2 text-gray-500">Select range: 0-50 miles</span>
                </div>
            </div>
        </div>
    );
}

export default ServiceFilter;
