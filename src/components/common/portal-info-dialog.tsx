import React, { useState } from 'react';

const PortalInfoDialog: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    if (!isVisible) return null; // If not visible, return nothing

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-full flex flex-col">
                {/* Header */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 p-6">
                    Business & Client Portals in One App
                </h1>

                {/* Scrollable Paragraphs */}
                <div className="p-6 overflow-y-auto flex-grow">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        In a real-world scenario, the <span className="text-blue-600 font-semibold">Business</span> and <span className="text-green-600 font-semibold">Client</span> portals would typically be two separate applications, each using different Azure B2C tenants.
                        <br /><br />
                        However, for the purpose of this demo, both portals are integrated into one app and use the same Azure B2C tenant for simplicity.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        If you sign up, you will have both <span className="text-blue-600 font-semibold">Business</span> and <span className="text-green-600 font-semibold">Client</span> accounts, allowing you to access both sides of the system.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                        If you remain anonymous without signing in, mock data will be used for demonstration purposes. Once logged in, you can fully experience both the <span className="text-blue-600 font-semibold">Business</span> and <span className="text-green-600 font-semibold">Client</span> sides of the platform.
                    </p>
                </div>

                {/* OK Button */}
                <div className="p-4 bg-gray-100 flex justify-end rounded-lg">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-all"
                        onClick={() => setIsVisible(false)} // Set visibility to false on click
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortalInfoDialog;
