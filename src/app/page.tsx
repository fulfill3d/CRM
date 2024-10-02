'use client';

import React from "react";
import BusinessLogo from "@/svg/business-logo";
import ClientLogo from "@/svg/client-logo";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="h-full w-full">
            {/* Main container for the logos */}
            <div className="flex flex-col md:flex-row w-full h-full">
                {/* Business Container - takes 50% height on mobile, 50% width on desktop */}
                <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
                    <BusinessLogo onClick={() => router.push(`/business`)} />
                </div>

                {/* Client Container - takes 50% height on mobile, 50% width on desktop */}
                <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
                    <ClientLogo onClick={() => router.push(`/client`)} />
                </div>
            </div>
        </div>
    );
}
