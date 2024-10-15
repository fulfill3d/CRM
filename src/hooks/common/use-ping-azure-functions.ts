import { useEffect } from "react";

export const usePingAzureFunctions = () => {
    useEffect(() => {
        (async () => {
            try {
                const endpoints = [
                    process.env.NEXT_PUBLIC_BUSINESS_IDENTITY_BASE_URL || '',
                    process.env.NEXT_PUBLIC_BUSINESS_APPOINTMENT_BASE_URL || '',
                    process.env.NEXT_PUBLIC_BUSINESS_EMPLOYEE_BASE_URL || '',
                    process.env.NEXT_PUBLIC_BUSINESS_STORE_BASE_URL || '',
                    process.env.NEXT_PUBLIC_BUSINESS_SERVICE_BASE_URL || '',
                    process.env.NEXT_PUBLIC_CLIENT_APPOINTMENT_BASE_URL || '',
                    process.env.NEXT_PUBLIC_CLIENT_IDENTITY_BASE_URL || '',
                    process.env.NEXT_PUBLIC_CLIENT_SERVICE_BASE_URL || ''
                ];

                // Use Promise.all to send all requests at once
                await Promise.all(endpoints.map(endpoint => fetch(endpoint)));

            } catch (error) {
                console.error('Error pinging Azure Functions:', error);
            }
        })();
    }, []);
};
