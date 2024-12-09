import { useEffect, useState } from "react";

export const usePortalInfoDialog = () => {
    const [showPortalInfo, setShowPortalInfo] = useState(false);

    useEffect(() => {
        const hasSeenPortalInfo = sessionStorage.getItem('hasSeenPortalInfo');
        if (!hasSeenPortalInfo) {
            setShowPortalInfo(true);
        }
    }, []);

    const handleClosePortalInfo = () => {
        sessionStorage.setItem('hasSeenPortalInfo', 'true');
        setShowPortalInfo(false);
    };

    return { showPortalInfo, handleClosePortalInfo };
};
