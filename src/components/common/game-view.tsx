import React, { useState } from 'react';

const BusinessLogo = () => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="black" fill="none" strokeWidth="5" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="black" strokeWidth="5" />
        <circle cx="50" cy="50" r="15" fill="black" />
    </svg>
);

const ClientLogo = () => (
    <svg className="w-full h-full object-contain" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" fill="none" strokeWidth="5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="5" />
        <circle cx="30" cy="50" r="10" fill="black" />
        <circle cx="70" cy="50" r="10" fill="black" />
    </svg>
);

const GameView = () => {
    const [selectedTab, setSelectedTab] = useState('business');

    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-min p-4 overflow-hidden">
            {/* Desktop View */}
            <div className="hidden md:flex w-full h-full space-x-4 overflow-hidden">
                <div className="w-1/2 h-full flex items-center justify-center bg-gray-200">
                    <div className="w-3/4 h-full">
                        <BusinessLogo />
                    </div>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center bg-gray-200">
                    <div className="w-3/4 h-full">
                        <ClientLogo />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden w-full h-full overflow-hidden">
                <div className="flex w-full mb-4">
                    <button
                        className={`flex-1 p-2 ${selectedTab === 'business' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedTab('business')}
                    >
                        Business
                    </button>
                    <button
                        className={`flex-1 p-2 ${selectedTab === 'client' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setSelectedTab('client')}
                    >
                        Client
                    </button>
                </div>
                <div className="w-full h-full flex items-center justify-center bg-gray-200 overflow-hidden">
                    {selectedTab === 'business' && (
                        <div className="w-3/4 h-3/4 overflow-hidden">
                            <BusinessLogo />
                        </div>
                    )}
                    {selectedTab === 'client' && (
                        <div className="w-3/4 h-3/4 overflow-hidden">
                            <ClientLogo />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameView;
