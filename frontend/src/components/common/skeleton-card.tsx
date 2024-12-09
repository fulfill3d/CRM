import React from "react";

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            {/* Skeleton for image or large content */}
            <div className="h-[125px] w-[250px] rounded-xl bg-gray-300 animate-pulse"></div>

            {/* Skeleton for text or smaller content */}
            <div className="space-y-2">
                <div className="h-4 w-[250px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="h-4 w-[200px] bg-gray-300 rounded-md animate-pulse"></div>
            </div>
        </div>
    );
}
