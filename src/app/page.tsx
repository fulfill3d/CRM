'use client';

import React from "react";
import PortalInfoDialog from "@/components/common/portal-info-dialog";
import {usePingAzureFunctions} from "@/hooks/common/use-ping-azure-functions";
import {usePortalInfoDialog} from "@/hooks/common/use-portal-info-dialog";
import {useAcquireBusinessAccessToken} from "@/hooks/common/use-acquire-access-token";

const Home = () => {

    useAcquireBusinessAccessToken();

    usePingAzureFunctions();

    const { showPortalInfo, handleClosePortalInfo } = usePortalInfoDialog();

    return (
        <div className="h-full w-full flex items-center justify-center px-6 py-10 bg-gray-100">
            <div className="max-w-4xl text-center space-y-8">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Welcome to CRM Demo
                </h1>

                {/* Explanation */}
                <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
                    CRM app is designed to serve both <span className="text-blue-600 font-semibold">businesses</span> and <span className="text-green-600 font-semibold">clients</span>.
                    <br /><br />
                    As a <span className="text-blue-600 font-semibold">business</span>, you can efficiently manage your stores, employees, services, and employments.
                    Take control of your operations and streamline your workflows.
                    <br /><br />
                    As a <span className="text-green-600 font-semibold">client</span>, you can easily find nearby stores, book appointments, and manage your bookings effortlessly.
                    Stay connected with your favorite businesses and schedule services at your convenience.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Business Button */}
                    <a
                        href="/business"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                        Business Portal
                    </a>

                    {/* Client Button */}
                    <a
                        href="/client"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
                    >
                        Client Portal
                    </a>
                </div>
            </div>

            {/* Portal Info Dialog - Only show if not seen */}
            {showPortalInfo && <PortalInfoDialog onClose={handleClosePortalInfo} />}
        </div>
    );
}

export default Home;
