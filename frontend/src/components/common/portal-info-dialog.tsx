import React from 'react';

interface PortalInfoDialogProps {
    onClose: () => void; // Use a prop to control closing the dialog
}

const PortalInfoDialog: React.FC<PortalInfoDialogProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-6">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto md:max-h-[90%] lg:max-h-[75%] flex flex-col">
                {/* Header */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 p-6">
                    Business & Client Portals in One App
                </h1>

                {/* Scrollable Paragraphs */}
                <div className="p-6 overflow-y-auto flex-grow max-h-[60vh] md:max-h-none">
                    {/* Mobile: Use max-h-[60vh] to limit height on mobile devices */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        In a real-world scenario, the <span className="text-blue-600 font-semibold">Business</span> and <span className="text-green-600 font-semibold">Client</span> portals would typically be two separate applications, each using its own Azure B2C tenant.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        For simplicity in this demo, both portals are combined into a single app using the same Azure B2C tenant.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        If you remain anonymous without signing in, mock data will be used for demonstration purposes.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        By signing up or logging in, you gain full access to the CRM system and can interact with the real backend services.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        In the <span className="text-blue-600 font-semibold">Business Portal</span>, you can manage stores, employees, and appointments in real time. In the <span className="text-green-600 font-semibold">Client Portal</span>, you can find nearby services, book appointments, and manage your bookings.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                        Once logged in, the app connects to the <span className="text-blue-600 font-semibold">microservices</span> hosted on <span className="text-green-600 font-semibold">Microsoft Azure</span>, ensuring that all data changes are persistent and saved in the database.
                    </p>
                </div>

                {/* OK Button */}
                <div className="p-4 bg-gray-100 flex justify-end rounded-lg">
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
                        onClick={onClose} // Close dialog via prop
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortalInfoDialog;
