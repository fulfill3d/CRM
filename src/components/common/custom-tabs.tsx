import React, { useState } from "react";

interface CustomTabsProp {
    tabs: { value: string; label: string; tab_content: any }[];
}

const CustomTabs: React.FC<CustomTabsProp> = ({ tabs }) => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    return (
        <div>
            {/* Tab Labels */}
            <div className="flex justify-center items-center">
                <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-lg font-bold transition-all focus:outline-none ${
                                activeTab === tab.value
                                    ? "bg-gray-200 text-black shadow-md"
                                    : "bg-white text-gray-500"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {tabs.map((tab) => (
                    activeTab === tab.value && (
                        <div key={tab.value} className="p-4 bg-white rounded-md shadow">
                            {tab.tab_content}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default CustomTabs;
