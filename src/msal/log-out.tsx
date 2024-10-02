import React from "react";
import { useMsal } from "@azure/msal-react";

// Add isMobile prop to conditionally style the button
export const LogOut = ({ isMobile }: { isMobile?: boolean }) => {
    const { instance } = useMsal();

    const handleLogout = () => {
        const logoutRequest = {
            account: instance.getActiveAccount(),
        };
        instance.logout(logoutRequest);
    };

    return (
        <div>
            <button
                onClick={handleLogout}
                className={
                    isMobile
                        ? "block text-gray-800 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-extrabold"
                }
            >
                Log Out
            </button>
        </div>
    );
};
